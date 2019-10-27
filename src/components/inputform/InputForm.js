import React from 'react';

const InputForm = ({ getWeather }) => {
    return (
        <form onSubmit={getWeather}>
            <input
                type="text"
                name="city"
                placeholder="Choose a city"
            />
            <input
                type="text"
                name="country"
                placeholder="Choose a country"
            />
            <button>Get Weather</button>
        </form>
    )
}

export default InputForm;