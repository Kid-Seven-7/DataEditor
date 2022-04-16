import PropTypes from 'prop-types'
import style from '../Styles/styles'

const Button = (props) => {
    return <button style={style.ButtonStyle
    }>{props.text}</button>
}

Button.defaultProps = {
    text: 'Edit',
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button
