import React from 'react' 
import  gale  from '/gale.jpg'

const Galeria = () => {
    return (
        <div className= 'container d-flex justify-content-center my-5 round'>
            <img className= 'w-50 rounded' src={gale} alt="" />
        </div>
    )
}

export default Galeria
