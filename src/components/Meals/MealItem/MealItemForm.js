
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useState } from 'react';
import axios, {isCancel, AxiosError} from 'axios';
import { useEffect } from 'react';


const MealItemForm = (props) =>{

    const [state, changeState] =  useState("");
    const [cases, changeCases] = useState(0);
    const [samples, changeSamples] = useState(0);
    const [posive, changePositive] = useState(0);
    const [negaive, changeNegative] = useState(0);
    const [death, changeDeath] = useState(0);
    const [discharge, changeDischarge] = useState(0);
    const [date, changeDate] = useState("");
        
    console.log(state+cases+samples+posive+negaive+death+discharge)


    


        // axios.post('/http://ec2-44-211-225-43.compute-1.amazonaws.com:3306/data', {
        //     firstName: 'Fred',
        //     lastName: 'Flintstone'
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
     


    const addItemsServer = ()=>{
       // console.log(state+cases+samples+posive+negaive+death+discharge)

        // fetch("http://ec2-3-92-202-234.compute-1.amazonaws.com:3306/insdt", {
        //     method: "POST",         
        //     body: JSON.stringify(state) 
        //   }).then(function(response) {
        //     console.log(response)
        //     return response.json();
        //   });

        try{

        fetch("http://ec2-44-211-225-43.compute-1.amazonaws.com:3306/insert", {
          method: "POST",
          headers: {"Content-Type": "application/JSON"},
          body: JSON.stringify({
            "State_Name":state,
            "Date_of_Record": date,
            "No_of_Samples": samples,
            "No_of_Deaths": death,
            "No_of_Positive": posive,
            "No_of_Negative":negaive,
            "No_of_Discharge":discharge,


        
        }
            
            )})
          .then(function(response) {
                console.log(response)
                //return response.json();
              })

        // axios.post('http://ec2-44-211-225-43.compute-1.amazonaws.com:3306/insert', {
        //     firstName: 'Fred',
        //     lastName: 'Flintstone'
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    }
    catch(e){
        console.log(e)
    }
}
const changerDate = (e)=>{
    changeDate(e.target.value);
    //console.log(e.target.value);
}

    const changerState = (e)=>{
        changeState(e.target.value);
        //console.log(e.target.value);
    }

    const  changerCases = (e) =>{
        changeCases(e.target.value);
        //console.log(e.target.value);
    }
    const  changerSamples= (e) =>{
        changeSamples(e.target.value);
        //console.log(e.target.value);
    }
    const  changerPositive= (e) =>{
        changePositive(e.target.value);
       // console.log(e.target.value);
    }
    const  changerNegative= (e) =>{
        changeNegative(e.target.value);
        //console.log(e.target.value);
    }
    const  changerDeath= (e) =>{
        changeDeath(e.target.value);
        //console.log(e.target.value);
    }
    const  changerDischarge= (e) =>{
        changeDischarge(e.target.value);
        //console.log(e.target.value);
    }

    return(

        <form className={classes.form} action="http://ec2-44-211-225-43.compute-1.amazonaws.com:3306/insert" method="post">
            
            <Input label="Enter state"
                
            input={{
            
                id:"state",
                type:"text",
                label:"Enter state",
                value:state,
            }}

            onChange = {changerState}
            />

<Input label="Enter Date"
                
                input={{
                
                    id:"date",
                    type:"text",
                    label:"Enter Date",
                    value:date,
                }}
    
                onChange = {changerDate}
                />

            <Input label="Cases" 
            
            input={{
                id:"amount",
                type: "number",
                min:'1',
                max:'100',
                step:'1',
                defaultValue:'2',
                value: cases
            }}
            
            onChange={changerCases}
            />
             <Input label="Number of samples" 
             onChange={changerSamples}

             input={{
                       id:"samples",
                       type: "number",
                       min:'1',
                       max:'100',
                       step:'1',
                      defaultValue:'2',
                      value: samples
            }}/>
                        <Input label="No. of positive case" 
                        onChange={changerPositive}
                        input={{
                         id:"positive",
                       type: "number",
                       min:'1',
                       max:'100',
                       step:'1',
                      defaultValue:'3',
                      value:posive
            }}/>
                        <Input label="No. of negative case" 
                        
                        onChange={changerNegative}
                        input={{
                    id:"negative",
                    type: "number",
                    min:'1',
                    max:'100',
                    step:'1',
                   defaultValue:'4',
                   value:negaive
            }}/>
                        <Input label="Discharge" 
                        onChange={changerDischarge}
                        input={{
                    id:"discharge",
                    type:"number",
                    label:"Discharge",
                    defaultValue:'4',
                    value: discharge
            }}/>
                        <Input label="death" 
                         onChange={changerDeath}
                        input={{
                id:"death",
                type:"number",
                label:"death",
                defaultValue:'4',
                value:death
            }}/>
           <button onClick={addItemsServer}>Add</button>
           {/* <button type="submit" >Add</button> */}
        </form>
    )}

export default MealItemForm;