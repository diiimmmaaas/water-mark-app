import React, { useState } from 'react';
import './App.css';
import ImageUpload from "./components/UploaderImage";
import WatermarkEditor from "./components/WatermarkEditor/WatermarkEditor";
import PreviewImage from "./components/ImagePrev";
import ExportImage from "./components/ImageExport";

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [watermarkImage, setWatermarkImage] = useState<File | null>(null);
  const [combinedImage, setCombinedImage] = useState<string | null>(null);
  const [watermarkOpacity, setWatermarkOpacity] = useState<number>(1);
  const [watermarkX, setWatermarkX] = useState<number>(0);
  const [watermarkY, setWatermarkY] = useState<number>(0);
  const [watermarkWidth, setWatermarkWidth] = useState<number>(100);
  const [watermarkHeight, setWatermarkHeight] = useState<number>(50);

  const handleExportImage = () => {
    const downloadLink = document.createElement('a');
    if (typeof combinedImage === "string") {
      downloadLink.href = combinedImage;
    }
    downloadLink.download = 'watermarked_image.jpg';

    const clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: false,
    });
    downloadLink.dispatchEvent(clickEvent);
  };

  return (
      <>
        <h1>Watermark App</h1>
        <div className='container'>
          <ImageUpload setSelectedImage={setSelectedImage} />
          <WatermarkEditor
              setWatermark={setWatermarkImage}
              opacity={watermarkOpacity}
              setOpacity={setWatermarkOpacity}
              positionX={watermarkX}
              setPositionX={setWatermarkX}
              positionY={watermarkY}
              setPositionY={setWatermarkY}
              watermarkWidth={watermarkWidth}
              setWatermarkWidth={setWatermarkWidth}
              watermarkHeight={watermarkHeight}
              setWatermarkHeight={setWatermarkHeight}
          />
        </div>
        {selectedImage && watermarkImage && (
            <PreviewImage
                originalImage={URL.createObjectURL(selectedImage)}
                watermarkImage={URL.createObjectURL(watermarkImage)}
                combinedImage={combinedImage}
                setCombinedImage={setCombinedImage}
                watermarkOpacity={watermarkOpacity}
                watermarkX={watermarkX}
                watermarkY={watermarkY}
                watermarkWidth={watermarkWidth}
                watermarkHeight={watermarkHeight}
            />
        )}
        {watermarkImage && (
            <ExportImage onExport={handleExportImage} />
        )}
      </>
  );
};

export default App;
