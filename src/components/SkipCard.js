import React from "react";
import "../styles/SkipCard.css";

export default function SkipCard({ skip, selected, onSelect }) {
  const totalPrice = skip.price_before_vat + (skip.price_before_vat * skip.vat) / 100;

  return (
    <div
      className={`skip-card ${selected ? "selected" : ""}`}
      onClick={() => onSelect(skip)}
    >
      <div className="skip-header">
        <h3>{skip.size} Yard Skip</h3>
      </div>
      <div className="skip-body">
        <img
          src={`/images/skips/${skip.size}yard.jpg`}
          alt={`${skip.size} yard skip`}
          className="skip-image"
        />
        <div className="skip-body-text">
          <h4>£{totalPrice.toFixed(2)}</h4>
          <button className="select-button">
            {selected ? "Selected" : "Select"}
          </button>
        </div>
      </div>
      <div className="skip-footer">
        <span>Hire Period: {skip.hire_period_days} days</span>
        <span>On Road: {skip.allowed_on_road ? "✅" : "❌"}</span>
        <span>Heavy Waste: {skip.allows_heavy_waste ? "✅" : "❌"}</span>
      </div>
    </div>
  );
}
