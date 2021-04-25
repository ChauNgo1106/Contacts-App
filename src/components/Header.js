import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

//instead of props.title
const Header = ({title , onAdd , showAdd}) => {
    // const onClick = () => {
    //     console.log('Click')
    // }
    const location = useLocation()
    return (
        <header className="header">
            <h1>{title}</h1>
            {/* we will prevent the change color of add button in about */}
            {location.pathname === '/' &&<Button 
            color={showAdd ? 'pink' : 'green'}
            text ={showAdd ? 'Close' : 'Add'}
            textColor = {showAdd ? 'red' : 'white'}
            onClick = {onAdd}
            />}
        </header>
    )
}

// in case no title is specified
Header.defaultProps ={
    title: 'Contacts App'
}


//what is propTypes: check the validity of input (can be string, int, or bolean constraints)
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
