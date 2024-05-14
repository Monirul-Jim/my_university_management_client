import React, { useState, ChangeEvent } from "react";

const CreateAcademicFaculty: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  // Function to handle file input change
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedImage = event.target.files[0];
      // You can perform additional validation here if needed
      setImage(URL.createObjectURL(selectedImage));
    }
  };

  // Function to handle delete image
  const handleDeleteImage = () => {
    setImage(null);
  };

  return (
    <div>
      <h1>Hello, This is CreateAcademicFaculty component,</h1>
      <input type="file" name="" id="" onChange={handleFileChange} />
      {image && (
        <div>
          <img
            src={image}
            alt="Selected"
            style={{
              maxWidth: "100%",
              maxHeight: "300px",
            }}
          />
          <button onClick={handleDeleteImage}>Delete Image</button>
        </div>
      )}
    </div>
  );
};

export default CreateAcademicFaculty;
