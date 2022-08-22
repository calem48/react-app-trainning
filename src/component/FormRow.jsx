import React from 'react';

const FormRow = ({ type, name, value, handleChange, textLabale }) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">{textLabale || name}</label>
            <input
                id={name}
                type={type}
                name={name}
                onChange={handleChange}
                value={value}
                className="form-input"
            />
        </div>
    );
}

export default FormRow;
