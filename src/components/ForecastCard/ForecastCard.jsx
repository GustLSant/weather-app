import PropTypes from 'prop-types';
import './ForecastCard.css'

function ForecastCard(props) {
    console.log(props.icon)

    return (
        <div className="forecast-card">
            <p>{props.day}</p>
            {<props.icon size={'2.5em'} />}
            <p>{props.temperature}</p>
            <p>{props.precip}</p>
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