import React from 'react'
import profil from '../../ima.jpg';
export const ProfilePhoto = () => {
    return (
        <div>
            <img src= {profil}  alt ="" style={{ width: "100px", height: "100px" }} />
        </div>
    )
}
