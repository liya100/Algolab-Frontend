import React, { useState } from 'react';

function DropdownButton({ label, options }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (value) => {
    alert(`${label} selected: ${value}`);
    setOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={() => setOpen(!open)}>
        {label} ▼
      </button>
      {open && (
        <div className="dropdown-menu">
          {options.map((opt, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownButton;
