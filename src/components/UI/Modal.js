 
 import classes from './Modal.module.css';
 import { Fragment } from 'react';
 import reactDom from 'react-dom';


 const Backdrop = props =>{

   return <div className={classes.backdrop} onClick={props.onClick}></div>
 };
 
 
 const ModalOverlay = props =>{

   return <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
   </div>
 };

 const portalElement = document.getElementById('overlays');

 const Modal = (props)=>{ 

    return <Fragment>

   {reactDom.createPortal(<Backdrop onClick={props.onClick}/>, portalElement)}
   {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}

{/*   without using portal, we can achieve the same result like this    

<Backdrop></Backdrop>
       <ModalOverlay>{props.children}</ModalOverlay> */}
    </Fragment>
 };


 export default Modal;
