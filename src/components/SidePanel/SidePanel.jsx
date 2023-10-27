import React from 'react'
import { DataContext } from '../DataContext'
import './SidePanel.css'

function SidePanel() {
    const { data } = React.useContext(DataContext)

    return(
        <div className="side-panel">
            <div className="side-panel__container glass-panel">
                <p>Max Temperature: {data.tempMax}</p>
                <p>Min Temperature: {data.tempMin}</p>
                <div className="panel-spacer"></div>
                <p>Cloud Cover Percentage: {data.cloudCover}</p>
            </div>
            
            <div className="side-panel__container glass-panel">
                <p>Relative Humidity: {data.humidity}</p>
                <div className="panel-spacer"></div>
                <p>Precipitation Chance: {data.precipChance}</p>
                <p>Current Precipitation: {data.currentPrecip}</p>
            </div>

            <div className="side-panel__container glass-panel">
                <p>5 Days Forecast</p>
                <div className="side-panel__forecast-container">
                    
                </div>
            </div>
        </div>
    );
}

export default SidePanel;