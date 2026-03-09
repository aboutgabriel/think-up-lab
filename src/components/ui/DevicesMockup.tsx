import devicesMockup from "@/assets/devices-mockup.jpg";

const DevicesMockup = () => {
  return (
    <div className="animate-float w-full max-w-xl mx-auto">
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
