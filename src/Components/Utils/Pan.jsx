import React, { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { Circles } from "react-loader-spinner"; // Import loader spinner from react-loader-spinner library

const Pan = () => {
  const [frontImage, setFrontImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false); // New loading state

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFrontImage(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!frontImage) {
      alert("Please upload the front image of your PAN card.");
      return;
    }

    setLoading(true); // Start loading

    const formData = new FormData();
    formData.append("image", frontImage);

    try {
      const response = await fetch("http://192.168.137.56:5001/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data); // Update the result state with server response
    } catch (error) {
      console.error("Error uploading file:", error);
      setResult({ status: "Error", message: error.message });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">PAN Card Validator</h1>

      {/* Form Section */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg flex flex-col gap-6">
        {/* Dropzone for Front Image */}
        <div className="col-span-full">
          <label htmlFor="file-upload" className="block text-sm font-medium text-gray-900">
            Upload PAN Card Front Image
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
              <div className="mt-4 flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={handleFileUpload}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              {frontImage && <p className="text-sm mt-2 text-gray-500">{frontImage.name}</p>}
              <p className="text-xs text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white text-center flex items-center justify-center font-medium py-2 rounded-lg hover:bg-blue-600 transition duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          disabled={loading} // Disable button while loading
        >
          {loading ? <Circles color="#fff" height={24} width={24} /> : "Validate PAN Card"}
        </button>
      </div>

      {/* Display Status */}
      {result && (
        <div className="mt-8 w-full max-w-lg bg-white p-6 rounded-lg shadow-md text-center">
          <h2
            className={`text-lg font-bold ${result.status === "Valid" ? "text-green-600" : "text-red-600"}`}
          >
            {result.status}
          </h2>
          {result.message && <p className="text-sm mt-2 text-gray-600">{result.message}</p>}
        </div>
      )}
    </div>
  );
};

export default Pan;
