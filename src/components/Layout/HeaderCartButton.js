import classes from './HeaderCartButton.module.css';

import chartsIcon from '../../assests/charts.png';


const HeaderCartButton = props =>{

    return <button className={classes.button} onClick={props.onClick}>

        <img className = {classes.icon} src={chartsIcon} alt="increase casses chart"/>
        {/* <span>Number of cases</span> */}
        
        <span className={classes.badge}>
            15
        </span>
    </button>
}

export default HeaderCartButton;