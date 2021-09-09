import React from 'react'
import "./Weather.css"

type AcceptedProps = {
    temp: number,
    feelslike: number,
    humidity: number,
    weather: string,
    latitude: number,
    longitude: number

}

const WeatherDisplay: React.FunctionComponent<AcceptedProps> = (props)  => {
    return(
    <div className="main">
    <h1>Your current location is:</h1>
    <p><span>Latitude:</span> {props.latitude}</p>
    <p><span>Longitude:</span> {props.longitude}</p>
    <h1>The current weather for your location is:</h1>
    <p><span>Temperature:</span> {props.temp} Kelvin, {(((props.temp - 273.15) * 1.8) + 32).toFixed(2)} Fahrenheit </p>
    <p><span>Feels Like:</span> {props.feelslike} Kelvin, {(((props.feelslike - 273.15) * 1.8) +32).toFixed(2)} Fahrenheit</p>
    <p><span>Humidity:</span> {props.humidity}</p>
    <p><span>Conditions:</span> {props.weather}</p>
    </div>)
}

export default WeatherDisplay