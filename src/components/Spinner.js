import React from 'react'
import spinner from '../img/spinner.gif'
const Spinner = () => {
    return (
        <img src={spinner} alt="Loading..." style = {SpinnerStyle}></img>
    )
}

const SpinnerStyle = {
    margin:'auto',
    display:'block',
    // width:'200px',
}

export default Spinner
