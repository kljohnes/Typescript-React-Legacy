import React, { Component, Fragment } from 'react'
import WeatherDisplay from './WeatherDisplay'

type Props = {
}

type State = {
    latitude: number,
    longitude: number,
    weather: string,
    temp: number,
    feelslike: number,
    humidity: number}

class Weather extends Component<Props, State>{
    constructor(props:Props){
        super(props)
        this.state = {
            latitude: 0,
            longitude: 0,
            temp: 0,
            feelslike: 0,
            humidity: 0,
            weather: ""
        }
    }

componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    })
let baseURL = "https://api.openweathermap.org/data/2.5/weather?lat="
let key = "b8c41f3f97cee599863cf719e79ab754"
let url = baseURL + `${this.state.latitude}&lon=${this.state.longitude}&appid=${key}`
fetch(url)
.then(res => res.json())
.then((json) => {
    console.log(json)
    this.setState({
        weather: json.weather[0].description,
        temp: json.main.temp,
        feelslike: json.main.feels_like,
        humidity: json.main.humidity
    })
})
.catch(error => console.log(error))
}

render(){
    return(
        <>
            <WeatherDisplay temp={this.state.temp} feelslike={this.state.feelslike} humidity={this.state.humidity} weather={this.state.weather} latitude={this.state.latitude} longitude={this.state.longitude} />
        </>
    )
}

}

export default Weather