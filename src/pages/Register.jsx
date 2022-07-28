import styled from "styled-components";
import { mobile } from "../responsive";
import {useState} from 'react';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("background1.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
const [user,setUser] =useState({
  name:"",
  lastname:"",
  username:"",
  email:"",
  password:"",
  confirmpassword:"",

});
 let name,value;
 const getUserData = (event) =>{
  name = event.target.name;
  value = event.target.value;

  setUser({ ...user,[name]: value });
 }

  const postData = async (e) =>{
    e.preventDefault();

    const {name,lastname,username,email,password,confirmpassword } = user;
    if(name && lastname && username && email && password && confirmpassword){
      const res = await fetch("https://bookstore-b0e6f-default-rtdb.firebaseio.com/bookstoredata.json",{
      method: "POST",
      headers : { 'Content-Type': 'application/json'},
      body:JSON.stringify({
      name,
      lastname,
      username,
      email,
      password,
      confirmpassword,
      })
    });

    if(res){
      setUser({
        name:"",
        lastname:"",
        username:"",
        email:"",
        password:"",
        confirmpassword:"",
      });
      alert("Submitted Succesfully!");    
      }
    }
    else {
      alert("Please Fill all the details !");

    }
  

    
  }


  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form method="POST">
          <Input name ="name" placeholder="name" value={user.name} onChange={getUserData} />
          <Input name="lastname" placeholder="last name" value={user.lastname} onChange={getUserData} />
          <Input name ="username" placeholder="username" value={user.username} onChange={getUserData}/>
          <Input name="email" placeholder="email" value={user.email} onChange={getUserData}/>
          <Input name="password" placeholder="password" value={user.password} onChange={getUserData}/>
          <Input name="confirmpassword" placeholder="confirm password" value={user.confirmpassword} onChange={getUserData}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={ postData }>CREATE ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
