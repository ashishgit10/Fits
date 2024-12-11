import React, { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline"; // Ensure Heroicons is installed

const Buildplan = () => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("Uploaded File:", file);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Building Plan Upload</h1>

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg flex flex-col gap-6">
        <div className="col-span-full">
          <label htmlFor="file-upload" className="block text-sm font-medium text-gray-900">
            Upload Layout Plan and Building Plan (PDF)
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
                    accept=".pdf"
                    className="sr-only"
                    onChange={handleFileUpload}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-600">PDF files up to 10MB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Buildplan