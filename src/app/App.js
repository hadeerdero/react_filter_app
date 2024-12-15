import CartList from "../components/cardList/cardList";
import "./App.css";
import React, { useRef, useState } from "react";
import Filter from "../components/filter/Filter";
import Model from "../components/modal/Modal";
import Button from "../components/layout/Button";
import AddUser from "../components/addUser/AddUser";

function App() {
  const inputRef = useRef(null);
  const [cardToggle, setCardToggle] = useState(true);
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({name:"",age:"",address:"",phone:""})
  const [boys, setBoys] = useState([
    { id:1,name: "Ahmed", age: 20, address: "Banha", phone: "01147116571" ,type : 'men'},
    { id:2,name: "CElia", age: 30, address: "Qalub", phone: "01110976544" ,type :'girl'},
    { id:3,name: "Mohamed", age: 25, address: "Banha", phone: "01272276579",type :'men' },
    { id:4,name: "Menna", age: 30, address: "Qalub", phone: "01110976544" ,type :'girl'},
    { id:5,name: "Mahmoud", age: 30, address: "Qalub", phone: "01110976544", type: 'men' },
    
    { id:6,name: "Hadeer", age: 30, address: "Qalub", phone: "01110976544" ,type :'girl'},

  ]);
  const deleteHandel = (el, indx) => {
    // console.log(el,indx)
    // const deletedArray = boys.filter((el, idx) => idx !== indx)
    // setBoys(deletedArray)
    setBoys((prevState) => {
      return prevState.filter((el) => el.id !== indx);
    });
  };
  // const [t] = UseCustom('https://jsonplaceholder.typicode.com/todos/')
  // const data = async() => {

  //    const c = await axios.get('https://jsonplaceholder.typicode.com/todos/')
  //   console.log(c.data, "data")
  // }
  // const names = ['celia','ahmed','mahmoud']
  // return (
  //   <div>
  //     {names.map((el) => {
  //       return (
  //       <p>{el}</p>

  //       )
  //     })}
  //   </div>
  // )
  // const boys =
  // const girls = [{name:"Hadeer",age:22,address:"Fayum",phone:"01147116571"},{name:"Celia",age:27,address:"Banha",phone:"01094442602"},{name:"Sofia",age:14,address:"NYC",phone:"01110976544"}]
  const hanelCardToggle = (e) => {
    // console.log(e)
    setCardToggle(!cardToggle);
  };
  const handelOnSubmit = ({name,age,phone,address,type}) => {
    console.log("parient function")
    console.log(name, age, phone, address, type)
    const newBoy = {
      id: boys.length + 1,
      name: name,
      age: age,
      phone: phone,
      address: address,
      type:type
    }

    setBoys((prevState)=>[newBoy,...prevState])
     setShowModal(false)

  }
  const testHadndler = () => {
    console.log(inputRef.current.value);
  };
  const handelInputFocus = () => {
    inputRef.current.focus();
  };
  const filterNames = (name) => {
    // console.log("filternames")
    setFilter(name);
  };
  const namesHandler = () => {
    console.log(filter, "filter");
    if (filter.length !== 0) {
      return boys.filter((el) => el.name.includes(filter));
    }
    return boys;
  };
  return (
    <>
    
    
    <div className="main-container">
      
      <h1>Data List</h1>
      <div style={{ display: "flex", marginBottom:"10px"}}>
      <Button className='button' style={{ marginRight: "20px" }} onClick={hanelCardToggle}>
        {cardToggle ? "Hide names" : "show names "}
      </Button>
      
      {/* <button className='button' onClick={()=>setShowModal(true)}>
        New Record
        </button> */}
        <Button onClick={() => setShowModal(true)} style={{marginRight:"20px;"}}> New Record</Button>
        </div>
      <div className={cardToggle ? "show" : "hide"}>
        <button onClick={handelInputFocus}>Click me</button>
        <Filter filtration={filterNames}></Filter>
        <CartList names={namesHandler()} deleteHandel={deleteHandel}></CartList>
      </div>
        
      {/* <h1>Girls List</h1> */}

      {/* <Cart1 names={girls} type='girl'></Cart1> */}
    </div>
    <Model show={showModal} closeModel={() => setShowModal(false)} >

       <AddUser handelOnSubmit={handelOnSubmit}></AddUser>
      </Model>
    </>
  );
}

export default App;
