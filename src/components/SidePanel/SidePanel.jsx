import React from 'react'
import { DataContext } from '../DataContext'
import ForecastCard from '../ForecastCard/ForecastCard'
import {
    WiThermometer,
    WiCloud,
    WiHumidity,
    WiRaindrop,
} from 'react-icons/wi'
import './SidePanel.css'

function SidePanel() {
    const { data, weatherIcons } = React.useContext(DataContext)

    const forecastComponents = []

    for(let i=0; i<5; i++){
        const day = data.forecastDaysOfWeek[i]
        const maxTemperature = data.forecastMaxTemperatures[i]
        const minTemperature = data.forecastMinTemperatures[i]
        const precip =  data.forecastPrecips[i]
        const description = data.forecastDescriptions[i].split('.')[0]

        forecastComponents.push(
            <ForecastCard  day={day} maxTemperature={maxTemperature} minTemperature={minTemperature} precip={precip} description={description} />
        )
    }

    return(
        <div className="side-panel">
            <div className="side-panel__container glass-panel">
                <div className='side-panel__info-div'>
                    <WiThermometer size={'1.5em'} />
                    <p>Max Temperature: {data.tempMax}°C</p>
                </div>

                <div className='side-panel__info-div'>
                    <WiThermometer size={'1.5em'} />
                    <p>Min Temperature: {data.tempMin}°C</p>
                </div>

                <div className="panel-spacer"></div>

                <div className='side-panel__info-div'>
                    <WiCloud size={'1.5em'} />
                    <p>Cloud Cover Percentage: {data.cloudCover}%</p>
                </div>
            </div>
            
            <div className="side-panel__container glass-panel">
                <div className='side-panel__info-div'>
                    <WiHumidity size={'1.5em'} />
                    <p>Relative Humidity: {data.humidity}</p>
                </div>

                <div className="panel-spacer"></div>

                <div className='side-panel__info-div'>
                    <WiRaindrop size={'1.5em'} />
                    <p>Precipitation Chance: {data.precipChance}%</p>
                </div>

                <div className='side-panel__info-div'>
                    <WiRaindrop size={'1.5em'} />
                    <p>Current Precipitation: {data.currentPrecip}mm</p>
                </div>
            </div>

            <div className="side-panel__container glass-panel">
                <p>5 Days Forecast</p>
                <div className="side-panel__forecast-container">
                    {forecastComponents}
                </div>
            </div>
        </div>
    );
}

export default SidePanel;