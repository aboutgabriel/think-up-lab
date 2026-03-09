import dashboardTablet from "@/assets/dashboard-tablet.png";

const TabletMockup = () => {
  return (
    <div className="animate-float w-full max-w-lg mx-auto">
      {/* iPad-style frame */}
      <div
        className="relative rounded-[24px] p-3 drop-shadow-2xl"
        style={{
          background: "linear-gradient(135deg, hsl(215, 25%, 22%), hsl(215, 30%, 14%))",
        }}
      >
        {/* Camera */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[hsl(215,20%,35%)]" />

        {/* Screen bezel */}
        <div className="rounded-[14px] overflow-hidden bg-[hsl(215,30%,10%)] p-[3px]">
          {/* Screen */}
          <div className="rounded-[11px] overflow-hidden">
            <img
              src={dashboardTablet}
              alt="Dashboard em tablet — exemplo de sistema organizado"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        </div>

        {/* Home button (iPad style) */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-[hsl(215,20%,30%)]" />
      </div>
    </div>
  );
};

export default TabletMockup;
