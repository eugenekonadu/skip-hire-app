import React, { useEffect, useState } from 'react';
import SkipCard from '../components/SkipCard';
import '../styles/SelectSkipPage.css';

export default function SelectSkipPage({ onSkipSelected }) {
  const [skips, setSkips] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
      .then(res => res.json())
      .then(data => setSkips(data));
  }, []);

  const handleSelect = (skip) => {
    setSelectedId(skip.id);
    onSkipSelected(skip); // send to footer
  };

  return (
    <div className="skip-container">
      <div className="skip-grid">
        {skips.map(skip => (
          <SkipCard
            key={skip.id}
            skip={skip}
            selected={skip.id === selectedId}
            onSelect={() => handleSelect(skip)}
          />
        ))}
      </div>
    </div>
  );
}
