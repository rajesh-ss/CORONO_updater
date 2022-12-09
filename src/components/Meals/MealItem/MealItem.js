import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';


const MealItem = props =>{

    // const number = `${props.number.toFixed(2)}`;

    return(

        <li className={classes.meal}>
            <div>
                <h3>State Name: {props.name}</h3>
                <div>
                <h3>Date of entry: {props.Date_of_Record}</h3>
                </div> 
                <div className={classes.description}>{props.description}</div>
                <div className={classes.positive}>
                Positive cases: {props.pos}</div>
                <div className={classes.negative}> Negative cases: {props.No_of_Negative}</div>        
 </div>

 {/* No_of_Negative */}

            <div>
            <h3>No of Samples: {props.No_of_Samples}</h3>
            </div> 

            <div>
            <h3>No of Discharge: {props.No_of_Discharge}</h3>
            </div> 


{/* 
            <div>
                <MealItemForm/>
            </div>  */}


        </li>
    
        )}

export default MealItem;