import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import './Information.css'

const Information = (props) => {
    const { name, worth, country, year, rank, img } = props.information;
    return (
        <div className="col-md-4">
            <div className="card width-area" >
                <img src={img} className="card-img-top" alt="..." />
                <div className= "card-body">
                    <h5>Name : {name}</h5>
                   <h6> Net Worth: {worth}</h6>
                    <h6>Country : {country}</h6>
                    <h6>Year : {year}</h6>
                    <h6>Rank: {rank}</h6>
                    <button className="regular-btn" onClick = {() => props.handleAddToCart(props.information)}><FontAwesomeIcon icon={faDollarSign} /> Donate Money</button>
                </div>
            </div>
        </div>
    )
};

export default Information;