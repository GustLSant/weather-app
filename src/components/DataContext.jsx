import React from "react"
import PropTypes from 'prop-types'

import {
    WiDaySunny,              // day-clear-sky
    WiDaySunnyOvercast,      // day-partly-cloudy
    WiDayCloudy,             // day-mostly-cloudy
    WiCloudy,                // day-cloudy
    WiDayShowers,            // day-raining

    WiNightClear,            // night-clear-sky
    WiNightAltPartlyCloudy,  // night-partly-cloudy
    WiNightAltCloudy,        // night-mostly-cloudy
    //WiCloudy,              // night-cloudy                (ta comentado pq ja foi declarado)
    WiNightAltShowers,       // night-raining
} from 'react-icons/wi'


export const DataContext = React.createContext()

export const DataProvider = ({children}) => {
    const [data, setData] = React.useState(
        {
            status: 'ok',
            dayOfWeek: 'Twesday',
            hour: '15:35',                   // definido por codigo
            dayOrNight: 'D',
            date: getCurrentDate(),              // definido por codigo
            temp: '38',
            tempFeel: '39',
            tempMax: '42',
            tempMin: '37',
            cloudCover: '65',
            precipChance: '10',
            currentPrecip: '0',
            humidity: '50',
            description: 'Mostly Cloudy',
            iconId: 9,                       // definido por codigo
            forecastDaysOfWeek: [
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            forecastMaxTemperatures: [
                38,
                38,
                38,
                36,
                35
            ],
            forecastMinTemperatures: [
                21,
                20,
                21,
                21,
                20
            ],
            forecastPrecips: [
                0,
                0,
                0,
                0,
                0
            ],
            forecastDescriptions: [
                "Mostly clear. Low 20C.",
                "Mostly sunny. Highs 37 to 39C and lows 20 to 22C.",
                "More sun than clouds. Highs 37 to 39C and lows 20 to 22C.",
                "Times of sun and clouds. Highs 35 to 37C and lows 19 to 21C.",
                "Times of sun and clouds. Highs 34 to 36C and lows 18 to 20C."
            ]
        }
    )


    function getIconId(_dayOrNight, _currentPrecip, _cloudCover){
        let result = 0
        console.log('parametros passados para getIconId: ', _dayOrNight, _currentPrecip, _cloudCover)

        if(_dayOrNight === 'D'){
            if(_currentPrecip == 0){
                if(_cloudCover <= 25){
                    result = 0
                }
                else if(_cloudCover <= 50){
                    result = 1
                }
                else if(_cloudCover <= 75){
                    result = 2
                }
                else{
                    result = 3
                }
            }
            else{
              result = 4
            }
        }
        else{
            if(_currentPrecip == 0){
                if(_cloudCover <= 25){
                    result = 5
                }
                else if(_cloudCover <= 50){
                    result = 6
                }
                else if(_cloudCover <= 75){
                    result = 7
                }
                else{
                    result = 8
                }
            }
            else{
                result = 9
            }
        }

        console.log('funcao getId() rodou e retornou: ', result)
        return result
    }
    

    const bgImagesSources = {
        dayClearSky: 'day-clear-sky-compressed.jpg',     // iconID: 0
        dayPartlyCloudy: 'day-partially-cloudy-compressed.jpg',     // iconID: 1
        dayMostlyCloudy: 'day-mostly-cloudy-compressed.jpg',        // iconID: 2
        dayCloudy: 'day-cloudy-compressed.jpg',                     // iconID: 3
        dayRaining: 'day-raining-compressed.jpg',                   // iconID: 4

        nightClearSky: 'night-clear-sky-compressed.jpg',       // iconID: 5
        nightPartlyCloudy: 'night-partly-cloudy-compressed.jpg',    // iconID: 6
        nightMostlyCloudy: 'night-mostly-cloudy-compressed.jpg',    // iconID: 7
        nightCloudy: 'night-mostly-cloudy-compressed.jpg',          // iconID: 8
        nightRaining: 'night-raining-compressed.jpg',             // iconID: 9
    }

    const weatherIcons = {
        dayClearSky: WiDaySunny,              // iconID: 0
        dayPartlyCloudy: WiDaySunnyOvercast,  // iconID: 1
        dayMostlyCloudy: WiDayCloudy,         // iconID: 2
        dayCloudy: WiCloudy,                  // iconID: 3
        dayRaining: WiDayShowers,             // iconID: 4

        nightClearSky: WiNightClear,                // iconID: 5
        nightPartlyCloudy: WiNightAltPartlyCloudy,  // iconID: 6
        nightMostlyCloudy: WiNightAltCloudy,        // iconID: 7
        nightCloudy: WiCloudy,                      // iconID: 8
        nightRaining: WiNightAltShowers,            // iconID: 9
    }

    const [city, setCity] = React.useState('Diamond City')


    function getCurrentDate(){ // retorna a data atual
        const dateObj = new Date()
        const year = dateObj.getFullYear()
        const month = String(dateObj.getMonth()+1).padStart(2, '0') // a contagem do mes comeca no 0
        const day = String(dateObj.getDate()).padStart(2, '0')

        return `${day}/${month}/${year}`
    }


    return(
        <DataContext.Provider value={{data, setData, getIconId, city, setCity, weatherIcons, bgImagesSources}}>
            {children}
        </DataContext.Provider>
    )
}

DataProvider.propTypes = {
    children: PropTypes.object,
}