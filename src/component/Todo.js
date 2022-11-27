import React from 'react'
import { useState } from 'react'
import TaskItems from './TaskItems';
import uuid from 'react-uuid';

const Todo = (props) => {
   // const [input,setInput]=useState("");
   const defaultState=[{

    employee_name:"",
    age:"",
    index:0,
    id:""
   }]

   const  [count,setCount]=useState(0);
   const [editMode,setEditMode]=useState(false);

   const [task,setTask]=useState(defaultState)
   
    const [itemsarray,setItemsArray]=useState([]);

   const inputChange=(event)=>{
   //console.log(event);

    setTask({...task,[event.target.name]:event.target.value});
    console.log(setTask);

   }

   const addToItemArray=()=>{

    // generate random guid
    let uid=uuid();  // generates a unique id --->
    task.id=uid;
    // and will attach to the task 
    // then we will insert it in the array item ---
     
      console.log(task);
    itemsarray.push(task);
    setItemsArray([...itemsarray]);

    setTask(defaultState)

   }



   const removeItem=(index)=>{

    //console.log("Remove item clicked",index)

    // Apply operation on array

    // we have to find the item on the basis of index

    // remove the item  from an array on the basis of index

    // Set the new array in the state
   itemsarray.splice(index,1);  // OXCEEF

   let newArr=[];  //
   for (let i=0;i<itemsarray.length;i++){
    newArr.push(itemsarray[i]);
   }

    //setItemsArray([...itemsarray]);
    setItemsArray(newArr);

   }


   const populateEditData=(ele,i)=>{

    setTask([{

      name:ele.employee_name,
      age:ele.age,
      index:i,
      id:ele.id
     }])

     // We will also enable the edit mode

     setEditMode(true);
   }

   const editItem=()=>{

    console.log(task);

    /*
    First Way
     itemsarray.splice(task.index, 1);
     itemsarray.splice(task.index, 0, task);
     setItemsArray([...itemsarray]);
     */

      //itemsarray.splice(task.index,1);

     //console.log(itemsarray[task.index]);

      //

      /*
        Second way
        itemsarray[task.index]=task
        setItemsArray([...itemsarray]);

      */
 
 
     //setItemsArray([...itemsarray,task]);

     // We have to delete the old data 
     // We have to enter the new data --->

     /**third way */

  const filteredData=itemsarray.filter(ele=>ele.id!==task.id)
 //filteredData[task.index]=task

 filteredData.push(task);
 setItemsArray([...filteredData]);
 setEditMode(false); // changed to add mode 


   }

   /*
 const   handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log('enter press here! ')
      itemsarray.push(task);
    setItemsArray([...itemsarray]);
    }
  }
  */

  return (
    <div className={"container"}>
        <h1 style={{textAlign:"center"}}>Employee Details </h1>
        <div className={"row"} style={{marginTop:"40px"}}>

            <div className={'col-md-6'}>
              <label><strong>Employee Name</strong></label><br></br>
              <input type={"text"} className={"form-control"} value={task.employee_name}  name={"employee_name"} placeholder={"Employee_name"} onChange={inputChange}/> <br></br><br></br>
              <label><strong>Enter Your Age </strong></label><br></br>
              <input type={"tel"} className={"form-control"}  value={task.age} name={"age"}  placeholder={"What is age"} onChange={inputChange}/><br></br><br></br>

               {
                editMode?<button className={"btn btn-primary"} onClick={editItem}>Edit ToDo </button> : 
                <button className={"btn btn-primary"} onClick={addToItemArray}>
                Add ToDo
                </button>
               }

            

           

            </div>


            <div className={'col-md-6'}>
            <ol className={"list-group"}>
                   {/* <TaskItems data={ele} i={i} />*/}

                {
                    itemsarray.map((ele,i)=>(
                    
                       <li key={ele.id}  className="list-group-item" aria-current="true"><strong>Name - </strong>{ele.employee_name} <strong>age-</strong>{ele.age} 
                       <button className={"btn btn-danger"} style={{marginLeft:"20px"}} onClick={()=>removeItem(i)}>
                        Delete
                       </button>

                       <button className={"btn btn-danger"} style={{marginLeft:"20px"}} onClick={function (){ return populateEditData(ele,i);}}>
                        Edit
                       </button>

                     
                       
                       </li>


                    ))
                }




            </ol>



            </div>


        </div>



    </div>
  )
}

export default Todo