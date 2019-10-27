import React from 'react';

const Forecast = ({ city, country, temperature, humidity, pressure, icon, description, error }) => {

    return (
        <div>
           { country && city && <p>Location: { city }, { country }</p> }
           { temperature && <p>Temperature: { temperature }F</p> }
           { humidity && <p>Humidity: { humidity }</p> }
           { pressure && <p>Pressure: { pressure }</p> }
           { icon && <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="weather image" /> }
           { description && <p>Conditions: { description }</p> }
           { error && <p>{ error }</p> }
        </div>
    )
}

export default Forecast;