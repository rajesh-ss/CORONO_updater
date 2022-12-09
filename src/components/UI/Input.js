import classes from './Input.module.css';



const Input = (props) =>{

    return <div className={classes.input}>
        <lable htmlFor={props.input.id}> {props.label}</lable>
        <input {...props.input} onChange = {props.onChange}/>
    </div>
}

export default Input;