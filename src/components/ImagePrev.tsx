import React, { useEffect } from 'react';

interface PreviewImageProps {
  originalImage: string;
  watermarkImage: string;
  watermarkOpacity: number;
  watermarkX: number;
  watermarkY: number;
  watermarkWidth: number;
  watermarkHeight: number;
  combinedImage: string | null;
  setCombinedImage: (combinedImage: string | null) => void
}

const PreviewImage: React.FC<PreviewImageProps> = ({
                                                     originalImage,
                                                     watermarkImage,
                                                     watermarkOpacity,
                                                     watermarkX,
                                                     watermarkY,
                                                     watermarkWidth,
                                                     watermarkHeight,
                                                     combinedImage,
                                                     setCombinedImage
                                                   }) => {

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      if (ctx) {
        ctx.drawImage(img, 0, 0);
        const watermark = new Image();

        watermark.onload = () => {
          ctx.globalAlpha = watermarkOpacity;
          ctx.drawImage(watermark, watermarkX, watermarkY, watermarkWidth, watermarkHeight);
          setCombinedImage(canvas.toDataURL('image/jpeg'));
        };

        watermark.src = watermarkImage;
      }
    };

    img.src = originalImage;
  }, [originalImage, watermarkImage, watermarkOpacity, watermarkX, watermarkY, watermarkWidth, watermarkHeight]);

  return (
      <div>
        <h2>Preview Image</h2>
        {combinedImage && <img src={combinedImage} alt="Watermarked" />}
      </div>
  );
};

export default PreviewImage;
