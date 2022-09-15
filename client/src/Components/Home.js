import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import {Formik,Form,Field,ErrorMessage,FieldArray} from 'formik';
import * as Yup from 'yup';

function Home() {
  const navigate = useNavigate();
  const [mess,setmess]=useState('');
  const  initialState={Otp:""}
  const [Onetympass,setOnetympass]=useState(initialState);
  const [user,setuser]=useState('');
  // const [Loginform,setloginform]=useState({
  //   Username: "",
  //   Password: "",
    
  // });
  const [checkmark,setcheckmark]=useState(false);
  const [OTP,setOTP]=useState(true);
  const [error,seterror]=useState("");
  const [disable,setdisable]=useState(true);
  const [userotp,setuserotp]=useState('');
  // const [minutes,setminutes]=useState(2);
  // const [seconds,setseconds]=useState(0);



//   setInterval(() => {

//     if (seconds > 0) {
//       setseconds(seconds-1);
//     }
//     if (seconds === 0) {
//         if (minutes === 0) {
//             clearInterval(this.myInterval)
//         } else {
//              setminutes(minutes-1);
//               setseconds(59);
//         }
//     } 
// }, 1000)


const initialValues={
  Username: "",
  Password: "",
}


//  function handlechange(eve){
//   const {name,value}=eve.target;
//   setloginform(()=>{
//     return{
//       ...Loginform,
//       [name]:value,
//     }
// //   })

// }
function handlechangeotp(eve){
  console.log(user);
  const {name,value}=eve.target;
  setOnetympass({
    ...initialState,
      Otp:value
    
  })
// setuserotp(user.concat(Onetympass.Otp));

}
  function setintial (val){
    console.log(val);
    setOnetympass((prevState)=>
    {
      console.log(prevState)
      return{
      ...prevState,
        Otp:val
    }

  })
  }
const onSubmit=(values)=>{
 setuser(values.Username);
 var error=document.getElementById('error');

 console.log(error);
  if(!checkmark){
    axios.post("http://localhost:8000/",values,{withCredentials:true})
    .then((response)=>{
     // alert(JSON.stringify(response.data.username));
      // localStorage.setItem('username', response.data.username);
       // if(response.data.username){
      //  navigate('/Welcome');
    // }
      // 
      if(response.data.fisrtlog===true){
        console.log(values.Username);
        error.style.display='none';
        axios.post("http://localhost:8000/getmail",{user:values.Username})
        .then((response)=>{
          const msg=response.data.message;
          setmess(msg);
      
         
           })
  
      }else{
        console.log("hllleeell");
        error.style.display='block';
        error.textContent='Invalid username Or password';
      }
      
    })
    
  }else{
    navigate('/welcome');
  }
 
}

// useEffect(() => {

// }, [Onetympass.Otp])

const checkotp=async (e)=>{
  e.preventDefault();
//  console.log("heloooo OTP"+user);

console.log(userotp);
// //  console.log(Onetympass.Otp);
//  const valot=user.concat(Onetympass.Otp);
  // // setintial(valot);
  // console.log(userotp);
  console.log(e.target.name);
  if(e.target.name==="Verify"){
    console.log("deepcheck");
    const response=await axios.post("http://localhost:8000/checkOTP",{Otp:Onetympass.Otp,username:user})
    if(response.data.Timein){
      setcheckmark(true);
     }else{
      setOTP(false);
      seterror(response.data.error);
      setintial("");
      setdisable(false);
      console.log("heww");
     }
     
  }else{
    console.log("hello");
    setOTP(true);
    console.log(user);
    const response=await axios.post("http://localhost:8000/getmail",{user:user});
    setintial("");
    setdisable(true);
   

   }

}
// console.log(Onetympass.Otp);

// const resentOTP =async ()=>{
  
// }


const validationSchema=Yup.object({
 
  Username:Yup.string().required('Required!'),
  Password:Yup.string().required('Required!'),
 
})

  return (
    
    <Formik initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
  
    <Form className="form">
    <h1>CURD APPLICATION</h1>
    <div className="Form-control">
        <label htmlFor='Username' >Username</label>
          <Field 
              type='text'
              id ='Username'
              name='Username' 
              autoComplete="off"
              placeholder="Username"  
          />
        <ErrorMessage   name="Username" component="span">
        { msg => <div style={{ color: 'red'}}>{msg}</div> }
        </ErrorMessage>  
    </div>
    <div className="Form-control">
    <label htmlFor='Password' >Password</label>
    <Field 
        type='password'
        id ='Password'
        name='Password' 
        autoComplete="off"
        placeholder="Password"   
      />
     <ErrorMessage  name="Password" component="span">
        { msg => <div style={{ color: 'red'}}>{msg}</div> }
     </ErrorMessage> 
  </div> 
<div  id='error' style={{ display: 'none',color: 'red'}} ></div>
    <div className='foot'>
    <div className='Otparea'>
    <span className={mess.length > 0 ? " ":"dshow"}>OTP</span>
    <div >
      <input type="password" name="Onetympass"  value={Onetympass.Otp} onChange={handlechangeotp} className={mess.length > 0 ? "otp":"dshow"}></input>
        <div className='otperror'>
              {error} 
         </div>
    </div>
   <span><button type='submit' name={OTP ? "Verify":"Resend"} className={mess.length > 0 ? "btn":"dshow"} disabled={(Onetympass.Otp=="" && disable) ? true:false}  onClick={checkotp}>
    <div className={checkmark ?"cvisible":"chide"}>
      <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
     <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
    <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
    </svg>
    </div>
   { OTP ? "Verify":"Resend"}
  </button></span> 
  
  </div>
 
    <div>
    {mess.length>0 ? <button disabled={ checkmark ? false : true } type='submit' color='primary'>Submit</button>: <button type='submit' color='primary'>Next</button>}
    </div>
    </div>
    <p>{mess}</p>
  </Form>

  </Formik>
  );
}

export default Home;
