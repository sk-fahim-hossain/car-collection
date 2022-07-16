import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Dashboard.css';




const Dashboard = () => {
    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart.length)
    useEffect(() =>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setCars(data))
    },[])

    const handleClick = (car) => {
        const newCart = [...cart, car];
        setCart(newCart);
    }
    return (
        <div className="dashboard">

            <div>
          
            <h2>Classic Collection</h2>
            <hr className="hr"/>
            {
                cars.map(car => <Car 
                    handleClick={handleClick}
                    car={car}
                    ></Car>)
            }
            </div>
           
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Dashboard;