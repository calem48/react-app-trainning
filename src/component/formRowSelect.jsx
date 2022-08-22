import React from 'react';

const FormRowSelect = ({ name, value, handleChange, textLabale, list }) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className='form-label'> {textLabale || name} </label>
            <select
                name={name}
                value={value}
                id={name}
                onChange={handleChange}
                className='form-select'
            >
                {
                    list.map(option => {
                        return <option key={option} value={option}> {option} </option>
                    })
                }
            </select>
        </div>
    );
}

export default FormRowSelect;
