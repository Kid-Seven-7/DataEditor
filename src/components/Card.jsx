import React from 'react'
import Button from '../components/Button'
import style from '../Styles/styles'

let nameIsHidden = true
let phoneIsHidden = true

const Card = (props) => {
    return (
        <div style={style.CardStyle}>
            <h1 hid>ID: {props.id}</h1>
            <h1 hidden={!nameIsHidden}>Name: {props.name}</h1>
            <input type={'text'} hidden={nameIsHidden} />
            <h1 hidden={!phoneIsHidden}>Phone: {props.phone}</h1>
            <input type={'text'} hidden={phoneIsHidden} />
            <Button text={props.text} />
        </div>
    )
}

export default Card