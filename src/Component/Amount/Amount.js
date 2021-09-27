import React from 'react';
import './Amount.css'

const Amount = (props) => {
    const {amount} = props;
    let total = 0;
    
    for(const information of amount){
        total = total + information.worth;
    }
    return (
        <div className= "amount">
          <div className="card amount-card">
          <h3>Amount Of Money</h3>
           <h5 >Number of person:{props.amount.length}</h5>
           <h5>Total Amount of Donate: {total.toFixed(2)}M $</h5>
           <h4>Name of the persons who donated:
               {
                   props.amount.map((information) => (
                       <Name key = {information.name} name = {information.name} />
                   ))
               }
           </h4>
          </div>
           
        </div>
    );
};

const Name = (props) => {
    return (
      <h4 className="h6">{props.name}</h4>
    );
  };

export default Amount;