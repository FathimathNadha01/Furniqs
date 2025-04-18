import React from 'react';

function Button({ label, classname = '', onClick }) {
  return (
    <div>
      <button 
        onClick={onClick} 
        className={`border-2 rounded-2xl px-3 py-2 ${classname}`}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
