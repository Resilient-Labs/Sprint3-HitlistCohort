import React from 'react'
import './Popup.css'

const PopUp = ({message}) => {

    if(!message){
        return null
    }
  
    return (
        <>
            <div className='popup'>
                {message}
            </div>
        </>
    )
}

export default PopUp