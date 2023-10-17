import React, { useState } from "react";
import "./Fill.css";
import Card from "../card/Card";

const Fill = ({ onChange }) => {
  const [inputValues, setInputValues] = useState({
    groupA: 0,
    groupB: 0,
    groupC: 0,
    groupD: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Atualize o estado dos inputValues conforme os valores inseridos
    setInputValues({ ...inputValues, [name]: parseFloat(value) });

    // Chame a função de atualização passada como prop (onChange) com os novos valores
    onChange([
      { name: "Group A", value: inputValues.groupA },
      { name: "Group B", value: inputValues.groupB },
      { name: "Group C", value: inputValues.groupC },
      { name: "Group D", value: inputValues.groupD },
    ]);
  };

  return (
    <Card title="Fill in the fields" grey>
      <div className="Fill">
        <div className="input-group">
          <label>Group A:</label>
          <input
            type="number"
            name="groupA"
            value={inputValues.groupA}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="input-group">
          <label>Group B:</label>
          <input
            type="number"
            name="groupB"
            value={inputValues.groupB}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="input-group">
          <label>Group C:</label>
          <input
            type="number"
            name="groupC"
            value={inputValues.groupC}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="input-group">
          <label>Group D:</label>
          <input
            type="number"
            name="groupD"
            value={inputValues.groupD}
            onChange={handleInputChange}
          ></input>
        </div>
      </div>
    </Card>
  );
};

export default Fill;
