import React, { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { Circles } from "react-loader-spinner";

const Fileupload = ({ onFilesUploaded }) => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleDrop = (event, setImage) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!frontImage || !backImage) {
      alert("Please upload both front and back images.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("front_image", frontImage);
    formData.append("back_image", backImage);

    try {
      const response = await fetch("http://192.168.137.56:5002/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data);

      // Send the result and files to the parent component
      if (onFilesUploaded) {
        onFilesUploaded({ frontImage, backImage, result: data });
      }
    } catch (error) {
      console.error("Error uploading files:", error);
      setResult({ status: "Invalid" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Aadhaar Card Validator</h1>

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg flex flex-col gap-6">
        {/* Upload Front Image */}
        <div>
          <label htmlFor="front-image" className="block text-sm font-medium text-gray-900">
            Aadhaar Front Image
          </label>
          <div
            className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
            onDrop={(e) => handleDrop(e, setFrontImage)}
            onDragOver={handleDragOver}
          >
            <div className="text-center">
              <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
              <div className="mt-4 flex text-sm text-gray-600">
                <label
                  htmlFor="front-image"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="front-image"
                    name="front-image"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={(e) => handleFileUpload(e, setFrontImage)}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              {frontImage && <p className="text-sm mt-2 text-gray-500">{frontImage.name}</p>}
              <p className="text-xs text-gray-600">PNG, JPG up to 10MB</p>
            </div>
          </div>
        </div>

        {/* Upload Back Image */}
        <div>
          <label htmlFor="back-image" className="block text-sm font-medium text-gray-900">
            Aadhaar Back Image
          </label>
          <div
            className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
            onDrop={(e) => handleDrop(e, setBackImage)}
            onDragOver={handleDragOver}
          >
            <div className="text-center">
              <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
              <div className="mt-4 flex text-sm text-gray-600">
                <label
                  htmlFor="back-image"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="back-image"
                    name="back-image"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={(e) => handleFileUpload(e, setBackImage)}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              {backImage && <p className="text-sm mt-2 text-gray-500">{backImage.name}</p>}
              <p className="text-xs text-gray-600">PNG, JPG up to 10MB</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white text-center flex items-center justify-center font-medium py-2 rounded-lg hover:bg-blue-600 transition duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          disabled={loading} // Disable button while loading
        >
          {loading ? <Circles color="#fff" height={24} width={24} /> : "Validate Aadhaar Card"}
        </button>

        {result && (
          <h2
            className={`text-lg font-bold text-center ${result.status === "Valid" ? "text-green-600" : "text-red-600"
              }`}
          >
            {result.status}
          </h2>
        )}
      </div>
    </div>
  );
};

export default Fileupload;
