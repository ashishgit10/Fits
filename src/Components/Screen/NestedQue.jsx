import React, { useState } from "react";
const data = {

  "Residential Buildings / Residential Complex (Logging, Rooming, Dormatories, Apartments, Hotels)": {
    "Dormitories & Apartments": {
      "Having height 15mtr & above (OR) Having ground plus four upper stories including mezzanine floor": {
        "Having height 15mtr & above but not exceeding 35mtr": [
          "1. fire extinguisher",
          "2. Fust Aid Hosreal System",
          "3. Down waist",
          "4. Automatic sprinkler system if basement area is more than 200 square meters",
          "5. Manually Operated Electronic Fire Alarm System and Public Adres System",
          "6. 25,000 liter taris tank, with pump having a discharge capacity of 900 liters per minute and which is 3.5 k.g./c.m.2 Work with pressure",
        ],
        "Having height 35mtr & above but not exceeding 45mtr": [
          "1. fire extinguisher",
          "2. Fust Aid Hosreal System",
          "3. Wetraiser and Lending Valve, Hosebox, Two Fire Hose Delivery, with Emergency Branch",
          "4. Automatic sprinkler system if basement area is more than 200 square meters",
          "5. Manually Operated Electronic Fire Alarm System and Public Adress System",
          "6. Underground water tank, waiterizer, yard hydrant and sprinkler system of 70,000 liters capacity",
          "7. 1 electric pump in underground tank, 1 diesel pump which is 3.5 k.g./c.m.2 Work with a pressure of 2280 liters per minute and 1 electric pump with a capacity of 180 liters per minute",
          "8. 5,000 liter taris tank",

        ],
        "Having height 45mtr & above but not exceeding 60mtr": [
          "1. fire extinguisher",
          "2. Fust Aid Hosreal System",
          "3. Wetraiser and Lending Valve, Hosebox, Two Fire Hose Delivery, with Emergency Branch",
          "4. Yard hydrant",
          "5. Automatic sprinkler system",
          "6. Manually Operated Electronic Fire Alarm System and Public Adres System",
          "7. Underground water tank, waiterizer, yard hydrant and sprinkler system of 150,000 liters capacity",
          "8. Underground tank has 2 electric pumps, 1 diesel pump which is 3.5 k.g./c.m.2 Work with a pressure of 2280 liters per minute and 2 electric pumps with a capacity of 180 liters per minute",
          "9. 10,000 liter taris tank",
        ],
        "Having height 60mtr & above": [
          "1. fire extinguisher",
          "2. Fust Aid Hosreal System",
          "3. Wetraiser and Lending Valve, Hosebox, Two Fire Hose Delivery, with Emergency Branch",
          "4. Yard hydrant",
          "5. Automatic sprinkler system",
          "6. Manually Operated Electronic Fire Alarm System and Public Adres System",
          "7. Automatic smoke detection and alarm system, except car parking area, this system will be installed in electrical room, cabin and other area",
          "8. Underground water tank, waiterizer, yard hydrant and sprinkler system of 2,00,000 liters capacity",
          "9. Underground tank has 2 electric pumps, 1 diesel pump which is 3.5 k.g./c.m.2 Works with a pressure of 2850 liters per minute and 2 electric pumps with a capacity of 180 liters per minute",
          "10. 10,000 liter taris tank"
        ],
      },
    },
    "Guest Houses, Lodging & Hotels": {
      "Having height less than 12mtr but having built-up area 500sqmtr & above": {
        "Floor area 500sqmtr & above but not exceeding 1000sqmtr": [
          "1	fire extinguisher",
          "2	Fust Aid Hosreal System",
          "3	Wetraiser and Lending Valve, Hosebox, Two Fire Hose Delivery, with Emergency Branch",
          "4	Automatic sprinkler system if basement area is more than 200 square meters",
          "5	Automatic sprinkler system",
          "6	Manually Operated Electronic Fire Alarm System and Public Adres System",
          "7	Automatic smoke detection and alarm system, except car parking area, this system will be installed in electrical room, cabin and other area",
          "8	Underground water tank, waiterizer, yard hydrant and sprinkler system of 50,000 liters capacity",
          "9	1 electric pump in underground tank, 1 diesel pump which is 3.5 k.g./c.m.2 Works with a pressure of 1620 liters per minute and 1 electric pump with a capacity of 180 liters per minute",
          "10	10,000 liter taris tank, with pump having a discharge capacity of 450 liters per minute and which is 3.5 k.g./c.m.2 Work with pressure",
        ],
        "Floor area 1000sqmtr & above": [
          "1	fire extinguisher",
          "2	Fust Aid Hosreal System",
          "3	Wetraiser and Lending Valve, Hosebox, Two Fire Hose Delivery, with Emergency Branch",
          "4	Automatic sprinkler system if basement area is more than 200 square meters",
          "5	Automatic sprinkler system",
          "6	Manually Operated Electronic Fire Alarm System and Public Adres System",
          "7	Automatic smoke detection and alarm system, except car parking area, this system will be installed in electrical room, cabin and other area",
          "8	Underground water tank, waiterizer, yard hydrant and sprinkler system of 1,00,000 liters capacity",
          "9	1 electric pump in underground tank, 1 diesel pump which is 3.5 k.g./c.m.2 Works with a pressure of 1620 liters per minute and 1 electric pump with a capacity of 180 liters per minute",
          "10	10,000 liter taris tank",
        ],
      },
      "	Having height 12mtr & above but not exceeding 30mtr": {
        "Having height 15mtr & above but not exceeding 35mtr": [
          "1	fire extinguisher",
          "2	Fust Aid Hosreal System",
          "3	Wetraiser and Lending Valve, Hosebox, Two Fire Hose Delivery, with Emergency Branch",
          "4	Automatic sprinkler system if basement area is more than 200 square meters",
          "5	Automatic sprinkler system",
          "6	Manually Operated Electronic Fire Alarm System and Public Adres System",
          "7	Automatic smoke detection and alarm system, except car parking area, this system will be installed in electrical room, cabin and other area",
          "8	Underground water tank, waiterizer, yard hydrant and sprinkler system of 1,50,000 liters capacity",
          "9	Underground tank has 2 electric pumps, 1 diesel pump which is 3.5 k.g./c.m.2 Work with a pressure of 2280 liters per minute and 2 electric pumps with a capacity of 180 liters per minute",
          "10	20,000 liter taris tank",
        ],
      },
      "Having height less than 12mtr but having built-up area 500sqmtr & above": {
        "Having height 15mtr & above but not exceeding 35mtr": [
          "1	fire extinguisher",
          "2	Fust Aid Hosreal System",
          "3	Wetraiser and Lending Valve, Hosebox, Two Fire Hose Delivery, with Emergency Branch",
          "4	Automatic sprinkler system if basement area is more than 200 square meters",
          "5	Automatic sprinkler system",
          "6	Manually Operated Electronic Fire Alarm System and Public Adres System",
          "7	Automatic smoke detection and alarm system, except car parking area, this system will be installed in electrical room, cabin and other area",
          "8	Underground water tank, waiterizer, yard hydrant and sprinkler system of 1,50,000 liters capacity",
          "9	Underground tank has 2 electric pumps, 1 diesel pump which is 3.5 k.g./c.m.2 Work with a pressure of 2280 liters per minute and 2 electric pumps with a capacity of 180 liters per minute",
          "10	20,000 liter taris tank",
        ],
      },
      "Having height 30mtr & above": {
        "Having height 15mtr & above but not exceeding 35mtr": [
          "1	fire extinguisher",
          "2	Fust Aid Hosreal System",
          "3	Wetraiser and Lending Valve, Hosebox, Two Fire Hose Delivery, with Emergency Branch",
          "4	Automatic sprinkler system if basement area is more than 200 square meters",
          "5	Automatic sprinkler system",
          "6	Manually Operated Electronic Fire Alarm System and Public Adres System",
          "7	Automatic smoke detection and alarm system, except car parking area, this system will be installed in electrical room, cabin and other area",
          "8	Underground water tank, waiterizer, yard hydrant and sprinkler system of 1,50,000 liters capacity",
          "9	Underground tank has 2 electric pumps, 1 diesel pump which is 3.5 k.g./c.m.2 Work with a pressure of 2280 liters per minute and 2 electric pumps with a capacity of 180 liters per minute",
          "10	20,000 liter taris tank",
        ],
      },
      "Hotels rated 3-starred & above": {
        "Having height 15mtr & above but not exceeding 35mtr": [
          "1	fire extinguisher",
          "2	Fust Aid Hosreal System",
          "3	Wetraiser and Lending Valve, Hosebox, Two Fire Hose Delivery, with Emergency Branch",
          "4	Automatic sprinkler system if basement area is more than 200 square meters",
          "5	Automatic sprinkler system",
          "6	Manually Operated Electronic Fire Alarm System and Public Adres System",
          "7	Automatic smoke detection and alarm system, except car parking area, this system will be installed in electrical room, cabin and other area",
          "8	Underground water tank, waiterizer, yard hydrant and sprinkler system of 2,50,000 liters capacity",
          "9	Underground tank has 2 electric pumps, 1 diesel pump which is 3.5 k.g./c.m.2 Works with a pressure of 2850 liters per minute and 2 electric pumps with a capacity of 180 liters per minute",
          "10	20,000 liter taris tank",
        ],
      },
    },
  },


  "Educational Buildings / Educational Campus (School, Senior Secondary School Other Training Institute)": {
    "Dormitories & Apartments": {
      "Having height 15mtr & above (OR) Having ground plus four upper stories including mezzanine floor": {
        "Having height 15mtr & above but not exceeding 35mtr": [
          "1. अग्निशामक यंत्र",
          "2. फस्ट एड होजरील प्रणाली",
          "3. डाऊन कमर",
          "4. बेसमेंट क्षेत्र 200 वर्ग मीटर से अधिक है तो आटोमेटिक स्प्रिंकलर सिस्टम",
          "5. मैनुअली ऑपरेटेड इलेक्ट्रॉनिक फायर अलार्म प्रणाली एवं पब्लिक एड्रैस सिस्टम",
          "6. 25,000 लीटर का टैरिस टैंक, पम्प के साथ जिसकी डिस्चार्ज क्षमता 900 लीटर प्रति मिनट हो और जो 3.5 k.g./c.m.2 के प्रेशर से कार्य करता हो",
        ],
      },
    },

  },
  "Assembly Buildings / Mass Site (Entertainment Site, Social, Religious, Theater, Cinema Home, Assembly Hall, Auditorium, Music, Gym, Restaurant, Place of Worship, Dance Hall, Club, Passenger Station, Air Terminal, Public Transport Site)": {
    "Dormitories & Apartments": {
      "Having height 15mtr & above (OR) Having ground plus four upper stories including mezzanine floor": {
        "Having height 15mtr & above but not exceeding 35mtr": [
          "1. अग्निशामक यंत्र",
          "2. फस्ट एड होजरील प्रणाली",
          "3. डाऊन कमर",
          "4. बेसमेंट क्षेत्र 200 वर्ग मीटर से अधिक है तो आटोमेटिक स्प्रिंकलर सिस्टम",
          "5. मैनुअली ऑपरेटेड इलेक्ट्रॉनिक फायर अलार्म प्रणाली एवं पब्लिक एड्रैस सिस्टम",
          "6. 25,000 लीटर का टैरिस टैंक, पम्प के साथ जिसकी डिस्चार्ज क्षमता 900 लीटर प्रति मिनट हो और जो 3.5 k.g./c.m.2 के प्रेशर से कार्य करता हो",
        ],
      },
    },

  },
  "Institutional Buildings / Institutions (Hospitals and Arogya Center, Patron (Custody) Institution, Penal and Mental Patient Institution)": {
    "Dormitories & Apartments": {
      "Having height 15mtr & above (OR) Having ground plus four upper stories including mezzanine floor": {
        "Having height 15mtr & above but not exceeding 35mtr": [
          "1. अग्निशामक यंत्र",
          "2. फस्ट एड होजरील प्रणाली",
          "3. डाऊन कमर",
          "4. बेसमेंट क्षेत्र 200 वर्ग मीटर से अधिक है तो आटोमेटिक स्प्रिंकलर सिस्टम",
          "5. मैनुअली ऑपरेटेड इलेक्ट्रॉनिक फायर अलार्म प्रणाली एवं पब्लिक एड्रैस सिस्टम",
          "6. 25,000 लीटर का टैरिस टैंक, पम्प के साथ जिसकी डिस्चार्ज क्षमता 900 लीटर प्रति मिनट हो और जो 3.5 k.g./c.m.2 के प्रेशर से कार्य करता हो",
        ],
      },
    },

  },
  "Business Buildings / Business Locations (Office Laboratory, Bank, Station, Telephone Office, T.V. Station, Architect, Doctor, Lawyer, Engineer, Post Office, Library, Outdoor Patient Hospital, Research Center, Laboratory, Tent House, E ⁇ i ⁇ , Computer Installation Center, Information Technical Park, Information Broadcasting Center, TV Station, Air Traffic Control)": {
    "Dormitories & Apartments": {
      "Having height 15mtr & above (OR) Having ground plus four upper stories including mezzanine floor": {
        "Having height 15mtr & above but not exceeding 35mtr": [
          "1. अग्निशामक यंत्र",
          "2. फस्ट एड होजरील प्रणाली",
          "3. डाऊन कमर",
          "4. बेसमेंट क्षेत्र 200 वर्ग मीटर से अधिक है तो आटोमेटिक स्प्रिंकलर सिस्टम",
          "5. मैनुअली ऑपरेटेड इलेक्ट्रॉनिक फायर अलार्म प्रणाली एवं पब्लिक एड्रैस सिस्टम",
          "6Institutional Buildings / Institutions (Hospitals and Arogya Center, Patron (Custody) Institution, Penal and Mental Patient Institution). 25,000 लीटर का टैरिस टैंक, पम्प के साथ जिसकी डिस्चार्ज क्षमता 900 लीटर प्रति मिनट हो और जो 3.5 k.g./c.m.2 के प्रेशर से कार्य करता हो",
        ],
      },
    },

  },
  "Merchantile Buildings / Business Complex (Shop, Store, Departmental Store, Underground Shopping Center etc.)": {
    "Dormitories & Apartments": {
      "Having height 15mtr & above (OR) Having ground plus four upper stories including mezzanine floor": {
        "Having height 15mtr & above but not exceeding 35mtr": [
          "1. अग्निशामक यंत्र",
          "2. फस्ट एड होजरील प्रणाली",
          "3. डाऊन कमर",
          "4. बेसमेंट क्षेत्र 200 वर्ग मीटर से अधिक है तो आटोमेटिक स्प्रिंकलर सिस्टम",
          "5. मैनुअली ऑपरेटेड इलेक्ट्रॉनिक फायर अलार्म प्रणाली एवं पब्लिक एड्रैस सिस्टम",
          "6. 25,000 लीटर का टैरिस टैंक, पम्प के साथ जिसकी डिस्चार्ज क्षमता 900 लीटर प्रति मिनट हो और जो 3.5 k.g./c.m.2 के प्रेशर से कार्य करता हो",
        ],
      },
    },

  },
  "Industrial Buildings / Industrial Complex (Assembly Plant, Industrial Laboratory, Power Plant, Generation Unit, Pumping Station, Ladry, Gas Plant, Refinery, Dairy, Rachil)": {
    "Dormitories & Apartments": {
      "Having height 15mtr & above (OR) Having ground plus four upper stories including mezzanine floor": {
        "Having height 15mtr & above but not exceeding 35mtr": [
          "1. अग्निशामक यंत्र",
          "2. फस्ट एड होजरील प्रणाली",
          "3. डाऊन कमर",
          "4. बेसमेंट क्षेत्र 200 वर्ग मीटर से अधिक है तो आटोमेटिक स्प्रिंकलर सिस्टम",
          "5. मैनुअली ऑपरेटेड इलेक्ट्रॉनिक फायर अलार्म प्रणाली एवं पब्लिक एड्रैस सिस्टम",
          "6. 25,000 लीटर का टैरिस टैंक, पम्प के साथ जिसकी डिस्चार्ज क्षमता 900 लीटर प्रति मिनट हो और जो 3.5 k.g./c.m.2 के प्रेशर से कार्य करता हो",
        ],
      },
    },

  },
  "Storage Buildings / Warehousing (Truck and Machine Terminals, Grain Store, Ware House, Cold Storage, Vehicle Storage, Garage, Hangar)": {
    "Dormitories & Apartments": {
      "Having height 15mtr & above (OR) Having ground plus four upper stories including mezzanine floor": {
        "Having height 15mtr & above but not exceeding 35mtr": [
          "1. अग्निशामक यंत्र",
          "2. फस्ट एड होजरील प्रणाली",
          "3. डाऊन कमर",
          "4. बेसमेंट क्षेत्र 200 वर्ग मीटर से अधिक है तो आटोमेटिक स्प्रिंकलर सिस्टम",
          "5. मैनुअली ऑपरेटेड इलेक्ट्रॉनिक फायर अलार्म प्रणाली एवं पब्लिक एड्रैस सिस्टम",
          "6. 25,000 लीटर का टैरिस टैंक, पम्प के साथ जिसकी डिस्चार्ज क्षमता 900 लीटर प्रति मिनट हो और जो 3.5 k.g./c.m.2 के प्रेशर से कार्य करता हो",
        ],
      },
    },

  },
  "Hazardous Buildings / Explosive Material Storage (Flammable and Explosive Substances, Elkali, Acid, Chemical Substances, Flammable, Gas and Chemicals, L ⁇ P ⁇ G ⁇ , Cracker Construction Site)": {
    "Dormitories & Apartments": {
      "Having height 15mtr & above (OR) Having ground plus four upper stories including mezzanine floor": {
        "Having height 15mtr & above but not exceeding 35mtr": [
          "1. अग्निशामक यंत्र",
          "2. फस्ट एड होजरील प्रणाली",
          "3. डाऊन कमर",
          "4. बेसमेंट क्षेत्र 200 वर्ग मीटर से अधिक है तो आटोमेटिक स्प्रिंकलर सिस्टम",
          "5. मैनुअली ऑपरेटेड इलेक्ट्रॉनिक फायर अलार्म प्रणाली एवं पब्लिक एड्रैस सिस्टम",
          "6Institutional Buildings / Institutions (Hospitals and Arogya Center, Patron (Custody) Institution, Penal and Mental Patient Institution). 25,000 लीटर का टैरिस टैंक, पम्प के साथ जिसकी डिस्चार्ज क्षमता 900 लीटर प्रति मिनट हो और जो 3.5 k.g./c.m.2 के प्रेशर से कार्य करता हो",
        ],
      },
    },

  },

};
const TIP_STATEMENT = [
  "1. Pump house when the number of hydrants in all types of buildings exceeds 100. It is necessary to have two pieces of electrical, two pieces of diesel and two pieces of jockey pumps. The capacity of water will be double.",
  "2. In all types of buildings whose height is more than 15 meters, two exit gates in those buildings are necessary, each 1 meter in width.",
  "3. In multi-storey buildings that have a height of 24 meters, a refuge area is required. And after this, it is necessary to have a refuge area every 15 meters in height.",
  "4. The width of the road in multi-storey buildings is required to be 1/3 of the height of the building.",
  "5. If the basement area is more than 200 square meters, then 2.5 percent of the total area is necessary to provide for ventilation.",
  "6. It is necessary to keep a fire check door of 4 hours rating between the basement to the main building entrance.",
  "7. Width of stairs 1 m in residential complex, 1.5 m in hotel, assembly site 2 m, It is necessary to keep 2 meters in 1.5 meters and hospitals in educational institutions.",
  "8. Provision of battery powered light if not electrified in emergency exit Necessary.",
  "9. L. in buildingsP.Yes. Any other flammable material in the shaft with gas lines and Do not install electrical wires.",
  "10. If there are 45 or more students in any class in educational institutions, two It is necessary to keep the provision of doors.",
  "11. It is necessary to have provision of hand rail in the stairs outside the building, whose height is 1 meter Do not fall short of.",
  "12. In any building or Godaun where the manufacture of explosives and hazardous materials takes place It is necessary to keep the distance of the exit gate at 22.5 meters.",
  "13. Every building where air conditioning duct is available, it is very important to have fire dampers.",
  "14. Gas suppression system installed for firefighting of the tanspharmers in the premises of the building Should be",
  "15. Madeuler (gas / powder) installed 1 feet above the panels above the electrified panels Go",
  "16. Coating of fire retardant paint on both sides of 1+ 1 meter near high tension cable joint Be done.",
  "17. All the above systems, and active state installed in your premises at the time of inspection Must be in.",
];

const NestedQue = () => {
  const [path, setPath] = useState([]); // Tracks the navigation path
  const [currentData, setCurrentData] = useState(data); // Tracks the current level of data
  const [showTip, setShowTip] = useState(false); // Controls tip visibility

  const handleItemClick = (item) => {
    const nextData = currentData[item];

    if (typeof nextData === "object" && !Array.isArray(nextData)) {
      setPath([...path, item]);
      setCurrentData(nextData);
      setShowTip(false); // Reset tip visibility
    } else if (Array.isArray(nextData)) {
      setPath([...path, item]);
      setCurrentData(nextData); // Set leaf node data
      setShowTip(true); // Show tip for leaf nodes
    }
  };

  const handleBack = () => {
    if (path.length > 0) {
      const newPath = path.slice(0, -1); // Remove the last path item
      let newData = data;

      for (const p of newPath) {
        newData = newData[p];
      }

      setPath(newPath);
      setCurrentData(newData);
      setShowTip(false); // Reset tip visibility
    }
  };

  return (
    <div className="w-[60%] m-auto" style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h1>NOC Essential Equipment Information</h1>
      <h4>Select the type of building to know the required equipment</h4>

      {/* Display navigation path */}
      <div>
        <strong>Path:</strong> {path.join(" > ") || "Home"}
      </div>

      {/* Render Back button if not at top level */}
      {path.length > 0 && (
        <button onClick={handleBack} style={{ margin: "10px 0", padding: "5px 10px" }}>
          Back
        </button>
      )}

      {/* Render current list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {Array.isArray(currentData)
          ? currentData.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "10px",
                backgroundColor: "#f0f0f0",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            >
              {item}
            </div>
          ))
          : Object.keys(currentData).map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
                backgroundColor: "#f0f0f0",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            >
              <span>{item}</span>
              <button
                onClick={() => handleItemClick(item)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                Choose
              </button>
            </div>
          ))}
      </div>

      {/* Render Tip Statement */}
      {showTip && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#fff8dc",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <strong>Tip:</strong>
          <ul style={{ paddingLeft: "20px" }}>
            {TIP_STATEMENT.map((line, index) => (
              <li key={index} style={{ marginBottom: "5px" }}>
                {line}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NestedQue;
