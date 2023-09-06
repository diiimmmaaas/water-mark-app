import React from 'react';
import styles from './WatermarkEditor.module.css'

interface WatermarkEditorProps {
  setWatermark: (file: File | null) => void;
  opacity: number;
  setOpacity: (opacity: number) => void;
  positionX: number;
  setPositionX: (positionX: number) => void;
  positionY: number;
  setPositionY: (positionY: number) => void;
  watermarkWidth: number;
  setWatermarkWidth: (width: number) => void;
  watermarkHeight: number;
  setWatermarkHeight: (height: number) => void;
}

const WatermarkEditor: React.FC<WatermarkEditorProps> = ({

                                                           setWatermark,
                                                           opacity,
                                                           setOpacity,
                                                           positionX,
                                                           setPositionX,
                                                           positionY,
                                                           setPositionY,
                                                           watermarkWidth,
                                                           setWatermarkWidth,
                                                           watermarkHeight,
                                                           setWatermarkHeight,
                                                         }) => {
  const handleWatermarkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setWatermark(file);
    }
  };

  const handleOpacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpacity(parseFloat(e.target.value));
  };

  const handlePositionXChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPositionX(parseFloat(e.target.value));
  };

  const handlePositionYChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPositionY(parseFloat(e.target.value));
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWatermarkWidth(parseFloat(e.target.value));
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWatermarkHeight(parseFloat(e.target.value));
  };

  return (
      <div>
        <h2>Watermark Editor</h2>
        <input type="file" accept="image/*" onChange={handleWatermarkChange} />
        <div className={styles.editorPoint}>
          <span>Opacity:</span>
          <input type="range" min="0" max="1" step="0.01" value={opacity} onChange={handleOpacityChange} />
        </div>
        <div className={styles.editorPoint}>
          <span>Width:</span>
          <input type="number" value={watermarkWidth} onChange={handleWidthChange} />
        </div>
        <div className={styles.editorPoint}>
         <span>Height:</span>
          <input type="number" value={watermarkHeight} onChange={handleHeightChange} />
        </div>
        <div className={styles.editorPoint}>
          <span>Position X:</span>
          <input type="number" value={positionX} onChange={handlePositionXChange} />
        </div>
        <div className={styles.editorPoint}>
          <span>Position Y:</span>
          <input type="number" value={positionY} onChange={handlePositionYChange} />
        </div>
      </div>
  );
};

export default WatermarkEditor;
