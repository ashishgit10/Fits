import React, { useState } from "react";
import Fileupload from "../Utils/Fileupload";
import Pan from "../Utils/Pan";
import Buildplan from "../Utils/Buildplan";

const Preform = () => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [refNumber, setRefNumber] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsModalOpen(true);

    // Simulate form submission and reference number generation
    setTimeout(() => {
      const generatedRefNumber = `APP-${Math.floor(100000 + Math.random() * 900000)}`;
      setRefNumber(generatedRefNumber);
      setIsSubmitting(false);
    }, 3000); // 3 seconds
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {step === 1 ? (
            <p className="text-center text-3xl">Building Details Form</p>
          ) : (
            <p className="text-center text-3xl">File Upload and Declaration</p>
          )}
        </h2>

        {step === 1 ? (
          <div className="space-y-6">
            {/* Step 1: Building Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Add your other inputs here */}
              <div className="">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Typical Floor Area (In sq. m.)
                  </label>
                  <input
                    type="number"
                    name="typicalFloorArea"
                    onChange={handleChange}
                    className="w-full border bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter typical floor area"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Number of Basements
                  </label>
                  <input
                    type="number"
                    name="numBasements"
                    onChange={handleChange}
                    className="w-full border bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter number of basements"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Basement Floor Area (In sq. m.)
                  </label>
                  <input
                    type="number"
                    name="basementFloorArea"
                    onChange={handleChange}
                    className="w-full border bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter basement floor area"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Total Covered Area (In sq. m.)
                  </label>
                  <input
                    type="number"
                    name="totalCoveredArea"
                    onChange={handleChange}
                    className="w-full border bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter total covered area"
                  />
                </div>
              </div>
            </div>
            <div className="border-t pt-4">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                Access to Building
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Road Width (In meters)
                  </label>
                  <input
                    type="number"
                    name="roadWidth"
                    onChange={handleChange}
                    className="w-full border bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter road width"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Gate Width (In meters)
                  </label>
                  <input
                    type="number"
                    name="gateWidth"
                    onChange={handleChange}
                    className="w-full border bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter gate width"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Width of Internal Road (In meters)
                  </label>
                  <input
                    type="number"
                    name="internalRoadWidth"
                    onChange={handleChange}
                    className="w-full border bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter internal road width"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Distance from Building Line (In meters)
                  </label>
                  <input
                    type="number"
                    name="distanceFromBuildingLine"
                    onChange={handleChange}
                    className="w-full border bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter distance from building line"
                  />
                </div>
              </div>
            </div>

            {/* Other Details */}
            <div className="border-t pt-4">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                Number, width, type, and arrangement of exits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Travel distance (In meters)
                  </label>
                  <input
                    type="number"
                    name="travelDistance"
                    onChange={handleChange}
                    className="w-full border bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Travel distance"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Dead-end travel distance (In meters)
                  </label>
                  <input
                    type="number"
                    name="Dead-endTravelDistance"
                    onChange={handleChange}
                    className="w-full border bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Dead-end travel distance"
                  />
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                Width of staircase
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Upper floor (In meters):
                  </label>
                  <input
                    type="number"
                    name="upperFloor"
                    onChange={handleChange}
                    className="w-full border bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Upper floor "
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Basement (In meters)
                  </label>
                  <input
                    type="number"
                    name="Basement"
                    onChange={handleChange}
                    className="w-full border bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Basement"
                  />
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                Additional Safety and Design Questions
              </h3>
              {[
                "Is there pressurization of lift shaft?",
                "Is there pressurization of lift lobby?",
                "Is there standby power supply?",
                "Is there a refuge area?",
                "Are levels or floors specified?",
                "Is the area at each level (in sq. m.) specified?",
                "Is there direct access to the nearest staircase?",
                "Is the location near the main entrance at the ground floor specified?",
                "Is there provision of a fire safety officer?",
              ].map((question, index) => (
                <div key={index} className="flex items-center space-x-4 mb-4">
                  <label className="block text-gray-700 font-medium w-3/4">
                    {question}
                  </label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={`question${index + 1}`}
                        value="yes"
                        onChange={handleChange}
                        className="form-radio text-blue-500"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={`question${index + 1}`}
                        value="no"
                        onChange={handleChange}
                        className="form-radio text-blue-500"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
              ))}
            </div>

            {/* Pumping Arrangements */}
            <div className="border-t pt-4">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                Pumping Arrangements (As per clause 9.3.9 of UBBL 2016)
              </h3>
              <h4 className="text-lg font-medium mb-2">Ground Level</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Discharge of main pump (LPM)", name: "mainPumpDischarge" },
                  { label: "Head of main pump (meters)", name: "mainPumpHead" },
                  { label: "Number of main pumps", name: "numMainPumps" },
                  { label: "Jockey pump output (LPM)", name: "jockeyPumpOutput" },
                  { label: "Jockey pump head (meters)", name: "jockeyPumpHead" },
                  { label: "Number of jockey pumps", name: "numJockeyPumps" },
                  { label: "Standby pump output (LPM)", name: "standbyPumpOutput" },
                  { label: "Standby pump head (meters)", name: "standbyPumpHead" },
                ].map((field, index) => (
                  <div key={index}>
                    <label className="block text-gray-700 font-medium mb-2">
                      {field.label}
                    </label>
                    <input
                      type="number"
                      name={field.name}
                      onChange={handleChange}
                      className="w-full border bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={field.label}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Direct access to pump house from ground level
                  </label>
                  <select
                    name="accessPumpHouse"
                    onChange={handleChange}
                    className="w-full border bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
              <h4 className="text-lg font-medium mt-4 mb-2">Terrace Level</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Discharge of pump (LPM)", name: "terracePumpDischarge" },
                  { label: "Head of pump (meters)", name: "terracePumpHead" },
                ].map((field, index) => (
                  <div key={index}>
                    <label className="block text-gray-700 font-medium mb-2">
                      {field.label}
                    </label>
                    <input
                      type="number"
                      name={field.name}
                      onChange={handleChange}
                      className="w-full border bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={field.label}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Captive Water Storage */}
            <div className="border-t pt-4">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                Captive Water Storage for Firefighting
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Underground tank capacity (liters)", name: "undergroundTankCapacity" },
                  { label: "Draw-off connection", name: "drawOffConnection" },
                  { label: "Fire service inlet", name: "fireServiceInlet" },
                  { label: "Access to tank", name: "accessToTank" },
                  { label: "Overhead tank capacity (liters)", name: "overheadTankCapacity" },
                  { label: "Ladder for inspection", name: "ladderForInspection" },
                ].map((field, index) => (
                  <div key={index}>
                    <label className="block text-gray-700 font-medium mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.name.includes("capacity") ? "number" : "text"}
                      name={field.name}
                      onChange={handleChange}
                      className="w-full border bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={field.label}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Provision of Lifts */}
            <div className="border-t pt-4">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                Provision of Lifts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Number of passenger lifts", name: "numPassengerLifts" },
                  { label: "Number of car lifts", name: "numCarLifts" },
                  { label: "Number of fire lifts", name: "numFireLifts" },
                ].map((field, index) => (
                  <div key={index}>
                    <label className="block text-gray-700 font-medium mb-2">
                      {field.label}
                    </label>
                    <input
                      type="number"
                      name={field.name}
                      onChange={handleChange}
                      className="w-full border bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={field.label}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Step 2: File Uploads and Declaration */}
            <Fileupload />
            <Pan />
            <Buildplan />
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg max-w-md mx-auto p-6 relative">
            {isSubmitting ? (
              <div className="text-center">
                <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 mx-auto animate-spin"></div>
                <p className="text-xl font-semibold mt-4 text-gray-700">
                  Submitting your application...
                </p>
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-green-600 mb-4">
                  Application Submitted Successfully!
                </h2>
                <p className="text-lg text-gray-700">
                  Your application reference number is:
                </p>
                <p className="text-xl font-bold text-blue-600 mt-2">{refNumber}</p>
                <button
                  className="mt-6 bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Preform;