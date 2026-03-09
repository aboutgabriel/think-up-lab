import dashboardPhone from "@/assets/dashboard-phone.png";

const PhoneMockup = () => {
  return (
    <div className="animate-float w-full max-w-[180px]" style={{ animationDelay: "1.5s" }}>
      {/* iPhone-style frame */}
      <div
        className="relative rounded-[28px] p-2 drop-shadow-2xl"
        style={{
          background: "linear-gradient(135deg, hsl(215, 25%, 22%), hsl(215, 30%, 14%))",
        }}
      >
        {/* Dynamic Island */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-3.5 rounded-full bg-[hsl(215,30%,6%)] z-10" />

        {/* Screen bezel */}
        <div className="rounded-[22px] overflow-hidden bg-[hsl(215,30%,10%)] p-[2px]">
          {/* Screen */}
          <div className="rounded-[20px] overflow-hidden">
            <img
              src={dashboardPhone}
              alt="Dashboard mobile — exemplo de sistema no celular"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-[hsl(215,20%,30%)]" />
      </div>
    </div>
  );
};

export default PhoneMockup;
