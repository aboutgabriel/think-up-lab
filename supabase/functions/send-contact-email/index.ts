import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY não configurada');
    }

    const { name, company, contact, problem } = await req.json();

    // Validação
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return new Response(JSON.stringify({ error: 'Nome é obrigatório' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    if (!contact || typeof contact !== 'string' || contact.trim().length === 0) {
      return new Response(JSON.stringify({ error: 'Contato é obrigatório' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    if (!problem || typeof problem !== 'string' || problem.trim().length === 0) {
      return new Response(JSON.stringify({ error: 'Descrição do problema é obrigatória' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const htmlBody = `
      <h2>Novo contato pelo site GRPM</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Nome</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${name.trim()}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Empresa</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${(company || 'Não informado').trim()}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Contato</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${contact.trim()}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Problema</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${problem.trim()}</td>
        </tr>
      </table>
    `;

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'GRPM Site <onboarding@resend.dev>',
        to: ['contatogrpm@gmail.com'],
        subject: `Novo contato: ${name.trim()}`,
        html: htmlBody,
      }),
    });

    if (!resendRes.ok) {
      const errorData = await resendRes.text();
      console.error('Resend error:', errorData);
      throw new Error('Falha ao enviar e-mail');
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Erro ao enviar mensagem' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
