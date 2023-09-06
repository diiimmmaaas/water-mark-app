import React from "react";

interface ExportImageProps {
  onExport: () => void;
}

const ExportImage: React.FC<ExportImageProps> = ({ onExport }) => {

  const handleExportClick = () => {
    onExport()
  }

  return (
      <div>
        <h2>Export Image</h2>
        <button onClick={handleExportClick}>Export Image with Watermark</button>
      </div>
  );
};

export default ExportImage;
