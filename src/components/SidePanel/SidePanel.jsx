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
                    <ForecastCard day={'Twesday'} icon={weatherIcons.sunny} temperature={'35'} precip={'0'} />
                    <ForecastCard day={'Twesday'} icon={weatherIcons.partlyCloudy} temperature={'35'} precip={'0'} />
                    <ForecastCard day={'Twesday'} icon={weatherIcons.mostlyCloudy} temperature={'35'} precip={'0'} />
                    <ForecastCard day={'Twesday'} icon={weatherIcons.cloudy} temperature={'35'} precip={'0'} />
                    <ForecastCard day={'Twesday'} icon={weatherIcons.raining} temperature={'35'} precip={'0'} />
                </div>
            </div>
        </div>
    );
}

export default SidePanel;