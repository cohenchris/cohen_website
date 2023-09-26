import React, { useState } from 'react';

export default function Dropdown(props) {
    const options = props.options;
    const [selectedOption, setSelectedOption] = useState(props.selectedOption);

    // Handle the change event when an option is selected
    const handleChange = (event) => {
          setSelectedOption(event.target.value);
          props.updateSelection(selectedOption);
        };

    return (
            <select id="dropdown" value={selectedOption} onChange={handleChange}>
              {options.map((option) => {
                return <option key={option}>{option}</option>
              })}
            </select>
        );
}
