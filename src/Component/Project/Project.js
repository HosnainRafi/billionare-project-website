import React, { useEffect } from 'react';
import { useState } from 'react';
import Amount from '../Amount/Amount';
import Information from '../Information/Information';


const Project = () => {
    const [informations, setInformation] = useState([]);
    const [amount,setAmount] = useState([])
    useEffect(() => {
        fetch('./billionaire.JSON')
            .then(res => res.json())
            .then(data => setInformation(data))
    }, [])

    const handleAddToCart = (information) => {
        const newAmount = [...amount,information];
         setAmount(newAmount);
     }
    return (
        <div>
            <div className="project-container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            {
                                informations.map(information => <Information
                                    information={information}
                                    key={information.name}
                                    handleAddToCart = {handleAddToCart}
                                ></Information>)
                            }
                        </div>
                    </div>
                    <div className="col-md-3">
                            <Amount
                            amount = {amount}
                            ></Amount>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;