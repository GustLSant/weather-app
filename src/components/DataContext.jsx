import React from "react"
import PropTypes from 'prop-types'

export const DataContext = React.createContext()

export const DataProvider = ({children}) => {
    const [data, setData] = React.useState(
        {
            status: 'ok',
            dayOfWeek: 'Twesday',
            hour: '15:00',          // definido por codigo
            date: 'dd/MM/yyyy',     // definido por codigo
            temp: '34',
            tempFeel: '35',
            tempMax: '36',
            tempMin: '32',
            cloudCover: '25',
            precipChance: '10',
            currentPrecip: '0',
            humidity: '30',
            description: 'Partly Cloudy'
        }
    )

    const [city, setCity] = React.useState('Los Angeles')


    return(
        <DataContext.Provider value={{data, setData, city, setCity}}>
            {children}
        </DataContext.Provider>
    )
}

DataProvider.propTypes = {
    children: PropTypes.object,
}