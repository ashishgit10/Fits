import React, { useState } from "react";

// Data structure for dynamic fields and their nested topics
const data = {
  
    "Residential Buildings / आवासीय परिसर (लॉजिंग, रूमिंग, डोरमेटरीज़, अपार्टमेंट, होटल)": {
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
          "Having height 35mtr & above but not exceeding 45mtr": [
            "1. अग्निशामक यंत्र",
            "2. फस्ट एड होजरील प्रणाली",
            "3. डाऊन कमर",
            "4. बेसमेंट क्षेत्र 200 वर्ग मीटर से अधिक है तो आटोमेटिक स्प्रिंकलर सिस्टम",
            "5. मैनुअली ऑपरेटेड इलेक्ट्रॉनिक फायर अलार्म प्रणाली एवं पब्लिक एड्रैस सिस्टम",
            "6. 25,000 लीटर का टैरिस टैंक, पम्प के साथ जिसकी डिस्चार्ज क्षमता 900 लीटर प्रति मिनट हो और जो 3.5 k.g./c.m.2 के प्रेशर से कार्य करता हो",
          ],
        },
      },
      "Guest Houses, Lodging & Hotels": {
        "Having height 15mtr & above (OR) Having ground plus four upper stories including mezzanine floor": {
          "Having height 15mtr & above but not exceeding 35mtr": [
            "1	fire extinguisher",
            "2. फस्ट एड होजरील प्रणाली",
            "3. डाऊन कमर",
            "4. बेसमेंट क्षेत्र 200 वर्ग मीटर से अधिक है तो आटोमेटिक स्प्रिंकलर सिस्टम",
            "5. मैनुअली ऑपरेटेड इलेक्ट्रॉनिक फायर अलार्म प्रणाली एवं पब्लिक एड्रैस सिस्टम",
            "6. 25,000 लीटर का टैरिस टैंक, पम्प के साथ जिसकी डिस्चार्ज क्षमता 900 लीटर प्रति मिनट हो और जो 3.5 k.g./c.m.2 के प्रेशर से कार्य करता हो",
          ],
        },
      },
  },


  "Educational Buildings / शैक्षणिक परिसर (स्कूल, सीनियर सेकंडरी स्कूल अन्य ट्रेनिंग संस्थान)": {
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
 
};

const TIP_STATEMENT = `
टीप : उपरोक्त प्रणालियां एवं उपकरणों के अतिरिक्त निम्न प्रणालियां भी आवश्यकतानुसार स्थापित करना आवश्यक है:-
सभी प्रकार के भवनों में हाइड्रेन्ट की संख्या 100 एवं 100 से अधिक होने पर पम्प हाऊस में दो नग इलेक्ट्रिकल, दो नग डीजल एवं दो नग जॉकी पम्प होना आवश्यक है एवं अंडरग्राउण्ड पानी की क्षमता दोगुनी होगी।
सभी प्रकार के भवनों में जिनकी ऊंचाई 15 मीटर से अधिक है, उन भवनों में दो निकास द्वार जिसकी चौड़ाई 1 मीटर होना आवश्यक है।
... (rest of the content)
`;

const NestedQue = () => {
  const [currentList, setCurrentList] = useState(Object.keys(data)); // Start with top-level fields
  const [path, setPath] = useState([]); // Track navigation path
  const [showTip, setShowTip] = useState(false); // To track whether to show the tip statement

  const handleItemClick = (item) => {
    let currentData = data;
    for (const p of path) {
      currentData = currentData[p];
    }
    const nextData = currentData[item];

    if (typeof nextData === "object" && !Array.isArray(nextData)) {
      setPath([...path, item]); // Add item to navigation path
      setCurrentList(Object.keys(nextData)); // Update current list
      setShowTip(false); // Reset the tip
    } else if (Array.isArray(nextData)) {
      setPath([...path, item]);
      setCurrentList(nextData); // Show leaf nodes
      setShowTip(true); // Show the tip when reaching the final list
    }
  };

  const handleBack = () => {
    if (path.length > 0) {
      const newPath = path.slice(0, -1); // Remove the last path item
      setPath(newPath);

      // Update the current list based on the new path
      let currentData = data;
      for (const p of newPath) {
        currentData = currentData[p];
      }
      setCurrentList(Array.isArray(currentData) ? currentData : Object.keys(currentData));
      setShowTip(false); // Reset the tip
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", border: "1px solid #ccc" }}>
      <h1>Dynamic List Navigation</h1>

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
        {currentList.map((item, index) => (
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
              Select
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
          <strong>टीप:</strong>
          <p>{TIP_STATEMENT}</p>
        </div>
      )}
    </div>
  );
};

export default NestedQue;
