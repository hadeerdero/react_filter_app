import React, { useState } from "react";
import Form from "../layout/Form";
import Button from "../layout/Button";

const AddUser = ({ handelOnSubmit}) => {
       const onSubmitHandler = (e) => {
      e.preventDefault()
         console.log("child component")
         handelOnSubmit({name,age,phone,address,type})
    }
  // const [form, setForm] = useState({
  //   name: "",
  //   age: "",
  //   address: "",
  //   phone: "",
  // });
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");

  const handelInputField = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    // console.log("key", key);
    // console.log("value", value);
    switch (key) {
      case "name":
        setName(value);
        console.log(name,"name")
        break;
      case "age":
        setAge(value);
        console.log(age,"age")

        break;

      case "address":
        setAddress(value);
        console.log(address,"address")

        break;

      case "phone":
        setPhone(value);
        console.log(phone,"phone")

        break;

      case "type":
        setType(value);
        console.log(type,"type")

        break;

      // Add more cases as needed
      default:
      // Code to execute if no case matches
    }
    // setForm((prvState)=>({...prvState,[key]:value}))
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <Form.Controller>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="enter name"
            value={name}
            onChange={handelInputField}
          ></input>
        </Form.Controller>

        <Form.Controller>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            placeholder="enter age"
            value={age}
            onChange={handelInputField}
          ></input>
        </Form.Controller>

        <Form.Controller>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="enter address"
            value={address}
            onChange={handelInputField}
          ></input>
        </Form.Controller>

        <Form.Controller>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            placeholder="enter phone"
            value={phone}
            onChange={handelInputField}
          ></input>
        </Form.Controller>

        <Form.Controller>
          <label htmlFor="type">Type</label>
          <input
            type="text"
            id="type"
            placeholder="enter type"
            value={type}
            onChange={handelInputField}
          ></input>
        </Form.Controller>

        <div style={{ marginTop: "20px" }}>
          <Button type="submit" style={{ marginRight: "20px" }} >
            save
          </Button>
          <Button type="reset">Reset</Button>
        </div>
      </form>
    </>
  );
};

export default AddUser;
