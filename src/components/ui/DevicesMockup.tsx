import devicesMockup from "@/assets/devices-mockup.jpg";
import dashboardTablet from "@/assets/dashboard-tablet.png";
import dashboardPhone from "@/assets/dashboard-phone.png";

const DevicesMockup = () => {
  return (
    <div className="animate-float w-full max-w-xl mx-auto">
      <div className="relative">
        {/* Base mockup image (iPad + iPhone frame) */}
        <img
          src={devicesMockup}
          alt="Dispositivos mostrando dashboards"
          className="w-full h-auto block"
          loading="lazy"
        />

        {/* Dashboard overlay on iPad screen */}
        <div
          className="absolute overflow-hidden"
          style={{
            top: "10.5%",
            left: "5.5%",
            width: "60%",
            height: "72%",
            transform: "perspective(800px) rotateY(-2deg) rotateX(1deg)",
          }}
        >
          <img
            src={dashboardTablet}
            alt="Dashboard em tablet"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Dashboard overlay on iPhone screen */}
        <div
          className="absolute overflow-hidden"
          style={{
            top: "22%",
            left: "66%",
            width: "24%",
            height: "58%",
            transform: "perspective(800px) rotateY(-3deg) rotateX(1deg)",
          }}
        >
          <img
            src={dashboardPhone}
            alt="Dashboard mobile"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default DevicesMockup;
