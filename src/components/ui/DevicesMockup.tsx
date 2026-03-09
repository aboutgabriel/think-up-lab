import devicesMockup from "@/assets/devices-mockup.jpg";

const DevicesMockup = () => {
  return (
    <div className="w-full max-w-[880px] mx-auto">
      <img
        src={devicesMockup}
        alt="Dispositivos mostrando dashboards"
        className="w-full h-auto block"
        loading="lazy"
      />
    </div>
  );
};

export default DevicesMockup;
