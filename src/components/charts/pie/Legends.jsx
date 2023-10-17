import React from "react";

const Legend = (props) => {
  return (
    <div className="chart-info">
      <div className="legend-container">
        {/* Adicione legendas aqui */}
        {props.data.map((entry, index) => (
          <div key={`legend-${index}`} className="legend">
            <div className="color-box" style={{ backgroundColor: props.colors[index % props.colors.length] }}></div>
            <div className="legend-text">{entry.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;
