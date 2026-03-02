const PhoneMockup = () => {
  return (
    <div className="animate-float w-full max-w-[160px]" style={{ animationDelay: "1.5s" }}>
      <svg
        viewBox="0 0 180 360"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl"
        aria-label="Dashboard mobile — exemplo de sistema no celular"
      >
        <defs>
          <linearGradient id="phoneFrame" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(215, 25%, 22%)" />
            <stop offset="100%" stopColor="hsl(215, 30%, 14%)" />
          </linearGradient>
          <clipPath id="phoneScreen">
            <rect x="12" y="38" width="156" height="284" rx="4" />
          </clipPath>
        </defs>

        {/* Phone frame */}
        <rect x="0" y="0" width="180" height="360" rx="28" fill="url(#phoneFrame)" />
        {/* Screen bezel */}
        <rect x="6" y="6" width="168" height="348" rx="24" fill="hsl(215, 30%, 10%)" />

        {/* Dynamic Island */}
        <rect x="62" y="12" width="56" height="18" rx="9" fill="hsl(215, 30%, 6%)" />
        <circle cx="82" cy="21" r="3" fill="hsl(215, 20%, 18%)" />

        {/* Screen bg */}
        <rect x="10" y="34" width="160" height="290" rx="6" fill="hsl(210, 20%, 97%)" clipPath="url(#phoneScreen)" />

        {/* Header */}
        <rect x="10" y="34" width="160" height="32" fill="hsl(215, 40%, 18%)" />
        {/* Hamburger */}
        <rect x="20" y="44" width="14" height="2" rx="1" fill="hsl(174, 72%, 50%)" />
        <rect x="20" y="49" width="10" height="2" rx="1" fill="hsl(174, 72%, 50%)" />
        <rect x="20" y="54" width="14" height="2" rx="1" fill="hsl(174, 72%, 50%)" />
        <text x="90" y="53" textAnchor="middle" fill="white" fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="700">Dashboard</text>

        {/* KPI Card 1 - Receita */}
        <rect x="18" y="74" width="144" height="40" rx="6" fill="white" />
        <rect x="20" y="74" width="3" height="40" rx="1.5" fill="hsl(174, 72%, 42%)" />
        <text x="30" y="89" fill="hsl(215, 20%, 50%)" fontSize="7" fontFamily="system-ui,sans-serif">Receita</text>
        <text x="30" y="103" fill="hsl(215, 35%, 12%)" fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">R$48k</text>
        <text x="148" y="89" textAnchor="end" fill="hsl(145, 60%, 42%)" fontSize="7" fontFamily="system-ui,sans-serif" fontWeight="600">+12%</text>

        {/* KPI Card 2 - Pedidos */}
        <rect x="18" y="120" width="144" height="40" rx="6" fill="white" />
        <rect x="20" y="120" width="3" height="40" rx="1.5" fill="hsl(210, 70%, 45%)" />
        <text x="30" y="135" fill="hsl(215, 20%, 50%)" fontSize="7" fontFamily="system-ui,sans-serif">Pedidos</text>
        <text x="30" y="149" fill="hsl(215, 35%, 12%)" fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">1.243</text>
        <text x="148" y="135" textAnchor="end" fill="hsl(145, 60%, 42%)" fontSize="7" fontFamily="system-ui,sans-serif" fontWeight="600">+8%</text>

        {/* Bar chart */}
        <rect x="18" y="168" width="144" height="80" rx="6" fill="white" />
        <text x="28" y="183" fill="hsl(215, 35%, 12%)" fontSize="7" fontFamily="system-ui,sans-serif" fontWeight="600">Vendas Semanais</text>
        {/* Bars */}
        {[
          { x: 30, h: 38, color: "hsl(174, 72%, 42%)" },
          { x: 48, h: 28, color: "hsl(174, 72%, 50%)" },
          { x: 66, h: 45, color: "hsl(174, 72%, 42%)" },
          { x: 84, h: 32, color: "hsl(174, 72%, 50%)" },
          { x: 102, h: 50, color: "hsl(174, 72%, 42%)" },
          { x: 120, h: 22, color: "hsl(210, 70%, 45%)" },
          { x: 138, h: 35, color: "hsl(174, 72%, 50%)" },
        ].map((bar) => (
          <rect
            key={bar.x}
            x={bar.x}
            y={238 - bar.h}
            width="12"
            height={bar.h}
            rx="3"
            fill={bar.color}
          />
        ))}
        {/* X labels */}
        {["S", "T", "Q", "Q", "S", "S", "D"].map((d, i) => (
          <text key={i} x={36 + i * 18} y={246} textAnchor="middle" fill="hsl(215,20%,60%)" fontSize="6" fontFamily="system-ui,sans-serif">{d}</text>
        ))}

        {/* Categories mini list */}
        <rect x="18" y="256" width="144" height="58" rx="6" fill="white" />
        <text x="28" y="270" fill="hsl(215, 35%, 12%)" fontSize="7" fontFamily="system-ui,sans-serif" fontWeight="600">Categorias</text>
        {[
          { label: "Software", pct: 0.82, color: "hsl(174, 72%, 42%)", y: 280 },
          { label: "Consultoria", pct: 0.65, color: "hsl(210, 70%, 45%)", y: 294 },
          { label: "Suporte", pct: 0.41, color: "hsl(30, 90%, 55%)", y: 308 },
        ].map((cat) => (
          <g key={cat.label}>
            <text x="28" y={cat.y} fill="hsl(215, 20%, 50%)" fontSize="6" fontFamily="system-ui,sans-serif">{cat.label}</text>
            <rect x="72" y={cat.y - 6} width="80" height="6" rx="3" fill="hsl(210, 15%, 93%)" />
            <rect x="72" y={cat.y - 6} width={80 * cat.pct} height="6" rx="3" fill={cat.color} />
          </g>
        ))}

        {/* Bottom bar */}
        <rect x="60" y="332" width="60" height="4" rx="2" fill="hsl(215, 20%, 35%)" />
      </svg>
    </div>
  );
};

export default PhoneMockup;
