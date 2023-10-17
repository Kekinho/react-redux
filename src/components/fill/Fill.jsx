import React, { useState, useEffect } from "react";
import "./Fill.css";
import Card from "../card/Card";
import { changeData } from "../store/actions/groups";
import { connect } from "react-redux";

const Fill = ({ change }) => {
  const [formData, setFormData] = useState({
    groupA: 0,
    groupB: 0,
    groupC: 0,
    groupD: 0,
  });

  useEffect(() => {
    const dataArray = Object.entries(formData).map(([name, value]) => ({
      name,
      value,
    }));
    change(dataArray); // Altere formData para dataArray
  }, [formData, change]);
  


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: parseFloat(value), // Converte o valor para número
    });
  };
  

  const handleUpdateData = () => {
    const dataArray = Object.entries(formData).map(([name, value]) => ({
      name,
      value,
    }));
    change(dataArray);
  };

  return (
    <Card title="Fill in the fields" grey>
      <div className="Fill">
        <div className="input-group">
          <label>Group A:</label>
          <input
            type="number"
            name="groupA"
            value={formData.groupA}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="input-group">
          <label>Group B:</label>
          <input
            type="number"
            name="groupB"
            value={formData.groupB}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="input-group">
          <label>Group C:</label>
          <input
            type="number"
            name="groupC"
            value={formData.groupC}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="input-group">
          <label>Group D:</label>
          <input
            type="number"
            name="groupD"
            value={formData.groupD}
            onChange={handleInputChange}
          ></input>
        </div>
      </div>
      <button onClick={handleUpdateData}>Update Data</button>
    </Card>
  );
};

function mapDispatchtoProp(dispatch) {
  return {
    change(newData) {
      const action = changeData(newData);
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchtoProp)(Fill);
