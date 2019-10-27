import React from 'react';
import './App.css';


// User Defined Components
import Header from './components/header/Header';
import InputForm from "./components/inputform/InputForm";

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
    e.preventDefault();
    const city = e.target.element.city.value;
    const country = e.target.element.country.value;

    const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&APPID=${api_key}`)
  }

  render() {
    return (
      <div className="app">
        <Header />
        <InputForm />
      </div>
    )
  }
}

export default App;
