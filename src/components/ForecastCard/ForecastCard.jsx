import PropTypes from 'prop-types';
import './ForecastCard.css'

import {
    WiThermometer,
    WiRaindrop
} from 'react-icons/wi'



function ForecastCard(props) {
    console.log(props.icon)

    return (
        <div className="forecast-card">
            <p>{props.day}</p>
            {<props.icon size={'2.5em'} />}
            <div>
                <WiThermometer size={'1.5em'} />
                <p>{props.temperature}°C</p>
            </div>
            <div>
                <WiRaindrop size={'1.5em'} />
                <p>{props.precip}<small>mm</small></p>
            </div>
            
        </div>
    )
}

ForecastCard.propTypes = {
    day: PropTypes.string.isRequired,
    icon: PropTypes.func.isRequired,
    temperature: PropTypes.string.isRequired,
    precip: PropTypes.string.isRequired,
  };

export default ForecastCard;