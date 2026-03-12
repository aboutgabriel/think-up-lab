import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "cookie-consent";

function loadGoogleAnalytics() {
  if (document.querySelector('script[src*="googletagmanager"]')) return;
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-4B0D37QXKP";
  script.async = true;
  document.head.appendChild(script);
  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) { window.dataLayer.push(args); }
    gtag("js", new Date());
    gtag("config", "G-4B0D37QXKP");
  };
}

declare global {
  interface Window { dataLayer: any[]; }
}

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consent === "accepted") {
      loadGoogleAnalytics();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    loadGoogleAnalytics();
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6">
      <div className="container max-w-4xl mx-auto bg-navy/95 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-xl border border-white/10">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1 text-sm text-white/80 leading-relaxed">
            Usamos cookies para melhorar sua experiência e analisar o tráfego do site.
            Ao aceitar, você concorda com o uso de cookies conforme nossa{" "}
            <Link to="/politica-de-privacidade" className="underline text-white hover:text-white/90 transition-colors">
              Política de Privacidade
            </Link>.
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={decline}
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-white/70 border border-white/20 hover:border-white/40 hover:text-white transition-colors"
            >
              Recusar
            </button>
            <button
              onClick={accept}
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-white gradient-primary hover:opacity-90 transition-opacity"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
