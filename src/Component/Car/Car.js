import React from 'react';
import './Car.css'

const Car = (props) => {
    const {Name, Company,img, color,Price} = props.car;
    return (
        <div className='car'>
            <h3>{Name}</h3>
            <h4>Company:{Company}</h4>
            <p>Color:{color}</p>
            <p>price: {Price}</p>
            <img src={img} alt="" srcset="" />
            <button className="add-button" onClick={()=>props.handleClick(props.car)}>Add to Cart</button>
        </div>
    );
};

export default Car;