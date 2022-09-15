import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Welcome = () => {
  
const [tabledata,settabledata]=useState();
const [Loading, setLoading]=useState(true);
const [editingId, setEditingId] = useState();
const [change,Setchange]=useState('');

const initiavalues={
  id:'',
  title:'',
  Price:'',
  imageUrl:'',
  createdAt:'',
  updatedAt:'',
}




const [dat,setdat]=useState(initiavalues);



function handeledit(eve){
  const {name,value}=eve.target;
  setdat(()=>{
  
    return{
    ...dat,
    [name]:value
    }

  })
  }
  
const navigate = useNavigate();

 const sqltable=async()=>{
  try{
    const response=await axios.post("http://localhost:8000/tabledata");
    console.log(response.data);
    settabledata(response.data);
    setLoading(false);
    
  }catch(err){
    console.log(err);
  }
 
 }

 const myapi=async ()=>{

try{
  const response=await axios.post("http://localhost:8000/getlogin");
  console.log(response.data);
  // if(response.data.loggedin=="true"){
  //     console.log("hiiiiiiiiiiiii")
  // }else{
  //   console.log("helleeeeeeeeee")
  //    navigate('/');
  // }

  }catch(err){
    console.log(err);
  }
}

  useEffect(() => {
 
    myapi()
    sqltable()
   
    
  }, [editingId])

  function handlelogout(){
   axios.post("http://localhost:8000/logout");
   navigate('/');
  }


 const handleUpdate=async (event)=>{
  event.preventDefault();
  console.log("from Update");
   try{
      const response=await axios.post("http://localhost:8000/Updatetable",dat);
      
      setEditingId(-1);

    }catch(err){
       console.log(err);
    }
 }

function handleClick(value){
    
    setEditingId(value);
    dat.id=tabledata[value-1].id;
    dat.title=tabledata[value-1].title;
    dat.Price=tabledata[value-1].Price;
    dat.imageUrl=tabledata[value-1].imageUrl;
    dat.createdAt=tabledata[value-1].createdAt;
    dat.updatedAt=tabledata[value-1].updatedAt;

    
}


  if(Loading){
    return(
      <h1>Loding...</h1>
    )
  }else{
    const headr=Object.keys(tabledata[0]);
    const listitem=tabledata.map((tdata)=>{

      if(editingId === tdata.id){
        return(
          <tr key={tdata.id}>
            <td><input style={{ width: '27px'}}  value={dat.id} name="id" onChange={e => handeledit(e)}/></td>
            <td><input style={{ width: '55px'}}  value={dat.title} name="title" onChange={e => handeledit(e)}/></td>
            <td><input style={{ width: '50px'}}  value={dat.Price} name="Price" onChange={e => handeledit(e)}/></td>
            <td><input style={{ width: '150px'}} value={dat.imageUrl} name="imageUrl" onChange={e => handeledit(e)}/></td>
            <td><input style={{ width: '150px'}} value={dat.createdAt} name="createdAt" onChange={e => handeledit(e)}/></td>
            <td><input style={{ width: '150px'}} value={dat.updatedAt} name="updatedAt" onChange={e => handeledit(e)}/></td>
            <td>
              <div className='InpActions'>
                <button onClick={(e)=>{setEditingId(-1)}}>Cancel</button>
                <button onClick={handleUpdate} style={{ marginLeft: '5px'}}>Update</button>
              </div>
            </td>
          
         </tr>
      )
      }else{
      return(
        <tr key={tdata.id}>
          <td>{tdata.id}</td>
          <td>{tdata.title}</td>
          <td>{tdata.Price}</td>
          <td>{tdata.imageUrl}</td>
          <td>{tdata.createdAt}</td>
          <td>{tdata.updatedAt}</td>
          <td >
          <div className='Actions'>
          <button onClick={(e)=>{handleClick(tdata.id)}}>Edit</button>
          <button style={{ marginLeft: '5px'}}>Delete</button>
          </div>
          </td>
          
       </tr>
    )
      }
    })
    

    return (
      <div>
         <div className='Logout'>
            <button onClick={handlelogout}>Logout</button>
          </div>
          <table>
            <thead>
            <tr >
              {
                headr.map((data,index)=>(
                  
                   <td key={index}>{data}</td>
                 
                ))
              }
              <td>Actions</td>
              </tr>
              
             </thead>
             <tbody>
              {listitem}
             </tbody>
          </table>
  
         
      </div>
    )
  }

}

export default Welcome