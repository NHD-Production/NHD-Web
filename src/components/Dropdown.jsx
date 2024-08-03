import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="container mx-auto">
      <h3 className="text-sm text-yellow-50/50 font-semibold mb-4">Select an option:</h3>
      <select
        className="block w-[60%] bg-white/10 py-2 px-4 border border-fuchsia-700 shadow-xl rounded-lg focus:outline-none focus:border-blue-500"
        value={selectedOption || ''}
        onChange={(e) => handleOptionSelect(e.target.value)}
      >
        <option value="">Choose Any</option>
        <option value="Nhd_Live">Nhd_Live</option>
        <option value="Nhd_Studio">Nhd_Studio</option>
        <option value="Nhd_Production">Nhd_Production</option>
        <option value="Nhd_Classes">Nhd_Classes</option>
      </select>
      {selectedOption && (
        <p className="mt-4 text-white">You selected: {selectedOption}</p>
      )}
    </div>
  );
};

export default Dropdown;
