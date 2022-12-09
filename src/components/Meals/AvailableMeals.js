import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import React, {Fragment, useState} from 'react';
import { useEffect } from 'react';
import axios, {isCancel, AxiosError} from 'axios';


const AvailableMeals = () => {


  const [message, setMessage] = useState([]);

  useEffect(() => {
    //http://ec2-54-205-32-49.compute-1.amazonaws.com:3306/data
    fetch("http://ec2-44-211-225-43.compute-1.amazonaws.com:3306/data")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));



  }, []);


 
  
  // let tmp = message[0];
  // console.log(typeof(message))
  // console.log(tmp);
  
  // const listItems = message.map((number) =>
  //     console.log(number)
  // );

 const mealsList1 = message.map((itm) => (
      <MealItem key={itm.No_of_Deaths}
       name={itm.State_Name}
       pos={itm.No_of_Positive} 
       No_of_Samples = {itm.No_of_Samples}
       No_of_Discharge = {itm.No_of_Discharge}
       No_of_Negative = {itm.No_of_Negative}
       Date_of_Record = {itm.Date_of_Record}
       /> 
      ));
 


  // const mealsList = DUMMY_MEALS.map((meal) => (
  //   <MealItem key={meal.id} name={meal.name} number={meal.number} />
  // ));


  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList1}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
