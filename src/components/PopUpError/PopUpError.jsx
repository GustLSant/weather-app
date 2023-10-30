import PropTypes from 'prop-types'
import { VscError } from 'react-icons/vsc'
import './PopUpError.css'

function PopUpError(props){

    return(
        <div className="popup-error" onClick={props.handleClose}>
            <div>
                <VscError size={'2.0em'} color={'red'} />
                <div>
                    <p>Ops! Something went wrong. Please try to search the city again.</p>
                    <small>Click on anything to close this window.</small>
                </div>
            </div>
        </div>
    );
}

PopUpError.propTypes = {
    handleClose: PropTypes.func.isRequired,
};


export default PopUpError;