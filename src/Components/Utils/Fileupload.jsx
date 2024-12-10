import React, { useState } from "react";

const Fileupload = () => {
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const [result, setResult] = useState("");

    const handleFrontImageChange = (event) => {
        setFrontImage(event.target.files[0]);
    };

    const handleBackImageChange = (event) => {
        setBackImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!frontImage || !backImage) {
            alert("Please upload both front and back images.");
            return;
        }

        const formData = new FormData();
        formData.append("front_image", frontImage);
        formData.append("back_image", backImage);

        try {
            const response = await fetch("http://172.16.66.201:5000/upload", {
                method: "POST",
                body: formData,
                // Include credentials for cross-origin requests
            });
            const data = await response.json();
            console.log(data)
            /* setResult(data); */
        } catch (error) {
            console.error("Error uploading files:", error);
            setResult({ error: "Failed to connect to the server." });
        }
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-6">Aadhaar Card Validator</h1>

            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                <div className="flex gap-2">
                    <label className="flex flex-col items-center">
                        <span className="mb-2 font-medium">Upload Aadhaar Front:</span>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFrontImageChange}
                            className="border rounded p-2"
                        />
                    </label>

                    <label className="flex flex-col items-center">
                        <span className="mb-2 font-medium">Upload Aadhaar Back:</span>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleBackImageChange}
                            className="border rounded p-2"
                        />
                    </label>
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    Validate Aadhaar
                </button>
            </form>

            {/* Display result */}
            {result && (
                <div className="mt-6 p-4 bg-white rounded shadow-md">
                    <h2 className="text-lg font-bold">Validation Result:</h2>
                    <pre className="text-sm bg-gray-100 p-2 rounded">
                        {JSON.stringify(result, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
};

export default Fileupload;
