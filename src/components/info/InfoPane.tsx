import React, { useState, useEffect } from "react";
import { CustomInput } from "../customInput";


import "./InfoPane.scss";

interface Data {
  parentKey?: string;
  position?: number;
  nestedKey: string;
  nestedValue: string;
  parentValue: string;
}

const InfoPane: React.FC = () => {
  const [jsonData, setJsonData] = useState<any>(null);
  const [resKey, setJResKey] = useState<string>('');
  const [resValue, setJResValue] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("assets/data.json");
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getJsonData = (data: Data) => {
    if (data.parentKey) {
      setJResKey(`res.${data.parentKey}.[${data.position}].${data.nestedKey}`);
      setJResValue(`${data.nestedValue}` || `${data.parentValue}`);
    } else {
      setJResKey(`res.${data.nestedKey}`);
      setJResValue(`${data.nestedValue}` || `${data.parentValue}`);
    }
  };

  return (
    <div className="info">
      <div className="info-top">
        <div className="info-top__content">
          <h3 className="info-top__content-header">Property</h3>
          <CustomInput properties={resKey} placeholder="Property" resValue={resValue} />
        </div>
        <div className="info-top__content">
          <h3 className="info-top__content-header">Block / Variable</h3>
          <CustomInput placeholder="Variable" />
        </div>
      </div>

      <div className="info-bottom">
        <h3 className="info-bottom__content-header">Response</h3>
        {/* DisplayJSON component goes here */}
      </div>
    </div>
  );
};

export default InfoPane;
