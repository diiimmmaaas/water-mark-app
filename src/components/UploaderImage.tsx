import React from 'react';

interface ImageUploadProps {
  setSelectedImage: (file: File | null) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ setSelectedImage }) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
      <div>
        <h2>Image Upload</h2>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
  );
};

export default ImageUpload;
