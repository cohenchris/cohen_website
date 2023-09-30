import React, { useState } from 'react';

export default function Dropdown(props) {
    const options = Object.values(props.options);
    const [selectedOption, setSelectedOption] = useState(props.selectedOption);

    // Handle the change event when an option is selected
    const handleChange = (event) => {
          setSelectedOption(event.target.value);
          props.updateSelection(event.target.value);
        };

    return (
            <select id="dropdown" value={selectedOption} onChange={handleChange}>
              {options.map((option) => {
                return <option key={option}>{option}</option>
              })}
            </select>
        );
}
