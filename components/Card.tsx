import React from 'react'
import styles from './Card.module.css'
import Button from './Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShareFromSquare} from "@fortawesome/free-solid-svg-icons";
import Tags from './Tags'
import Tag from './Tag'

//title, text, path, tags, btnText
//for extracurriculars
//grade, location, skill level

type CardProps = {
    children: React.ReactNode
}

const Card = ({children}: CardProps) => {
  return (
    <div className={`${styles.card}`}>
        {children}
    </div>
  )
}

export default Card;