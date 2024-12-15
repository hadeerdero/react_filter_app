import React, { Fragment } from "react";
import styles from "./Model.module.css";
import ReactDOM from "react-dom/client";
import { createPortal } from 'react-dom';

const BackDrop = ({ close ,show}) => {
  
  return <div className={`${styles.backDrop} ${show ? styles.showBackDrop : null}`} onClick={close}>


    
  </div>;
};

const OverLay = ({ children,show }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault() 
    console.log(e)
  }
  return <div className={`${styles.overLay} ${show ? styles.showOverLay : ""}`} >
    { children}
    {/* <form onSubmit={ onSubmitHandler}>
      <Form.Controller>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="enter name"></input>
      </Form.Controller>
      
      <Form.Controller>
        <label htmlFor="age">Age</label>
        <input type="text" id="age" placeholder="enter age"></input>
      </Form.Controller>
      
      <Form.Controller>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" placeholder="enter address"></input>
      </Form.Controller>

      <Form.Controller>
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" placeholder="enter phone"></input>
      </Form.Controller>
  <div  style={{marginTop:"20px"}}>
        <Button type="submit" style={{marginRight:"20px"}}>save</Button>
        <Button type="reset">Reset</Button>
        </div>

      
    </form> */}
  </div>;
};
const Model = ({ children,show, closeModel}) => {
  return (
    ( <Fragment>
      {/* <BackDrop></BackDrop>
            <OverLay></OverLay> */}
      {createPortal(
        <Fragment>
          <BackDrop close={closeModel} show={ show}></BackDrop>
          <OverLay show={show}>{ children}</OverLay>
        </Fragment>,
        document.getElementById("modal")
      )}
    </Fragment>)
  );
};

export default Model;
