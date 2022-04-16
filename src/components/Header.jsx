import PropTypes from 'prop-types'
import style from '../Styles/styles'

const Header = (props) => {
    return (
        <div>
            <h1 style={style.headingStyle}>{props.headerText}</h1>
            <h2 style={style.subHeadingStyle}>{props.headerSubtext}</h2>
        </div>
    )
}

Header.defaultProps = {
    headerText: 'Data editor',
    headerSubtext: 'cda assessment'
}

Header.propTypes = {
    headerText: PropTypes.string.isRequired,
    headerSubtext: PropTypes.string
}


export default Header