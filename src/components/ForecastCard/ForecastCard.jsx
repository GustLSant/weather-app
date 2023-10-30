import PropTypes from 'prop-types';
import './ForecastCard.css'

import {
    WiThermometer,
    WiRaindrop
} from 'react-icons/wi'



function ForecastCard(props) {
    return (
        <div className="forecast-card">
            <p className='forecast-card__day'>{props.day}</p>
            <div>
                <WiThermometer size={'1.5em'} />
                <p>Max: {props.maxTemperature}°C</p>
            </div>
            <div>
                <WiThermometer size={'1.5em'} />
                <p>Min: {props.minTemperature}°C</p>
            </div>
            <div>
                <WiRaindrop size={'1.5em'} />
                <p>{props.precip}<small>mm</small></p>
            </div>
            <p className='forecast-card__description'>{props.description}</p>
        </div>
    )
}

ForecastCard.propTypes = {
    day: PropTypes.string.isRequired,
    maxTemperature: PropTypes.number.isRequired,
    minTemperature: PropTypes.number.isRequired,
    precip: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
};

export default ForecastCard;