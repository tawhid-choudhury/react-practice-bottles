import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBottleWater } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faBottleWater} />



const Header = () => {
    return (
        <div className='header'>
            <h1>{element} Bottles React Practice  </h1>
        </div>
    );
};

export default Header;