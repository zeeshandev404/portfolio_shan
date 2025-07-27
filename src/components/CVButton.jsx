import { Icon } from "@iconify/react";

const CVButton = ({ name, file, fileName, color = "#ffc506" }) => {
  const handleDownload = () => {
    if (file) {
      const link = document.createElement('a');
      link.href = file;
      link.download = fileName || 'Zeeshan-Rana-CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="group inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#212121] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffdd66] transition-all duration-300"
      style={{ backgroundColor: color }}
    >
      <span>{name}</span>
      <Icon 
        icon="mdi:download" 
        className="ml-2 group-hover:animate-bounce" 
        width={20} 
      />
    </button>
  );
};

export default CVButton;