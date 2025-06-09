import React from 'react';
import '../styles/Footer.css';

export default function Footer({ selectedSkip }) {
  return (
    <footer className="footer">
      <div className="footer-left">
        {selectedSkip ? (
          <div>
            <strong>{selectedSkip.size} Yard Skip</strong> – £
            {(selectedSkip.price_before_vat * 1.2).toFixed(2)} inc. VAT
          </div>
        ) : (
          <span>No skip selected</span>
        )}
      </div>
      <div className="footer-right">
        <button>Back</button>
        <button>Cancel</button>
        <button>Continue</button>
      </div>
    </footer>
  );
}
