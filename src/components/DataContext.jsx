import React from "react"
import PropTypes from 'prop-types'

export const DataContext = React.createContext()

export const DataProvider = ({children}) => {
    const [data, setData] = React.useState(
        {
            status: 'ok',
            dayOfWeek: 'Twesday',
            hour: '15:35',          // definido por codigo
            dayOrNight: 'D',
            date: '21/10/2287',     // definido por codigo
            temp: '38',
            tempFeel: '39',
            tempMax: '42',
            tempMin: '37',
            cloudCover: '65',
            precipChance: '10',
            currentPrecip: '0',
            humidity: '50',
            description: 'Mostly Cloudy'
        }
    )

    const [forecastData, setForecastData] = React.useState([])

    const [city, setCity] = React.useState('Diamond City')


    return(
        <DataContext.Provider value={{data, setData, city, setCity}}>
            {children}
        </DataContext.Provider>
    )
}

DataProvider.propTypes = {
    children: PropTypes.object,
}