import React from 'react';
import './App.css';


// User Defined Components
import Header from './components/header/Header';
import InputForm from "./components/inputform/InputForm";
import Forecast from './components/forecast/Forecast';

const api_key = "79a8cfa0bfe2f572624a45b859b24485";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: "",
      city: "",
      country: "",
      humidity: "",
      pressure: "",
      icon: "",
      description: "",
      error: "",
    }
  }

  getWeather = async (e) => {
    
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    e.preventDefault();
    
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&APPID=${api_key}`
    );

    const response = await api_call.json();

    if (city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        pressure: response.main.pressure,
        icon: response.weather[0].icon,
        description: response.weather[0].description,
        error: "",
      })
    }
    else {
      this.setState({
        error: "Please fill out the input fields"
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <InputForm getWeather={this.getWeather} />
        <Forecast {...this.state}/>
      </div>
    )
  }
}

export default App;
