import React from 'react'
import './selectNumber.css'
import { useState } from 'react'

const SelectNumber = ({nSelected,  time=""}) => {


    const arrayOfElements = []

    for(let i = 0; i<= 60; i++){
        arrayOfElements.push(
            {
                id: i, 
                element: i,
                elementView: `${i} ${time}`
            }
        )
    }





    const [selectedElement, setSelectedElement] = useState(null);



    const handleElementClick = (elementSelected) => {
        setSelectedElement(elementSelected);

        nSelected(elementSelected)

    };


    return (

            <div className='container'>
                {
                    arrayOfElements.map(number => (
                        <div
                            key={number.id}
                            className={` element ${selectedElement === number.element ? 'selected' : ''}`}
                            onClick={() => handleElementClick(number.element)}
                        >
                            {number.elementView}
                        </div>
                    ))
                }
            </div>


    )
}

export default SelectNumber