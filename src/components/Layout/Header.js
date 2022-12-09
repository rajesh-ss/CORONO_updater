import classes from "./Header.module.css";
import { Fragment } from "react";
import covidImg from "../../assests/corona.jpg"
import HeaderCartButton from './HeaderCartButton';

const Header = (props)=>{

    return<Fragment>
        <header className={classes.header}>
                <h1>covid 19</h1>
                <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={covidImg} alt="covid img"/>
        </div>
    </Fragment>
};

export default Header;