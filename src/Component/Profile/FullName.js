import React, { useState } from 'react'

export const FullName = () => {

    const [name, setName] = useState('khaled boudaya')

    const handleClick = () => {
        const newName = prompt(('enter my name'))
        setName(newName)
    }


    return (
        <div>
            <h1> {name}</h1>
            <button onClick={handleClick}> Change fullName </button>

        </div>
    )
}
