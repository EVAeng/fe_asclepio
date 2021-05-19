import React from 'react'
import "components/Card/Card.css"


export interface CardProps {
    src: any, name: string, specialties: string[], price: number, rate: number, reviews: string[]
}

export default function Card(props:CardProps) {
    return (
        <div className='card'>
            <img src={props.src} alt="" />
            <div className="card_info">
                <div className="card_info_header">
                    <h2>{props.name}</h2>

                </div>
                <h3>{props.specialties}</h3>
                <h3>{props.price}</h3>
                <h3>{props.rate}</h3>
                <h3>{props.reviews}</h3>
            </div>
        </div>
    )
}
