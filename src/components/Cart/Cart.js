import classes from './Cart.module.css'; 
import Modal from '../UI/Modal';
import MealItemForm from '../Meals/MealItem/MealItemForm';
import { useState } from 'react';


const Cart = (props) =>{

   




    const cartItems = <ul className={classes['cart-items']}>{
    [
        {
            id:'c1',
            name:'cases',
            amount:2,
            price:12,
         
        }
    ].map((item) => <li>{item.name}</li>)}</ul>

    const senit = ()=>{

        //console.log("Pressed");
            
    //  const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const newText= { text };
    //     fetch("/", {
    //       method: "POST",
    //       headers: {"Content-Type": "application/JSON"},
    //       body: JSON.stringify(newText) 
    //     })
    // }
    }


    return <Modal onClick={props.onClose}>
        {/* {cartItems} */}
        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>X</button>
            {/* <button className={classes['button']} onClick={senit}>+ Add</button> */}
        </div>
       
        <div className={classes.total}>
            <div>
                <MealItemForm/>
            </div> 

            {/* <span>Total Cases</span>
            <span>50</span>  */}
        </div>

    </Modal>
}

export default Cart;