import React, { useState } from "react";
import './Todo.css';
// import './Menu.js'

function Todo (){
    const [AddTask ,setAddTask] =useState([])
    const [Ivalue ,setvalue] = useState('')
    const [EditId ,setEditId] =useState(null)
    const [AddBtn ,setAddBtn] =useState(false)


    const Add =()=>{
        const IdAuto = AddTask.length + 1;
        if(Ivalue){
            setAddTask([...AddTask,{
                Id : IdAuto,
                date: new Date().toLocaleString() ,
                InputValue : Ivalue , 
            }])
            setAddBtn(true)
        }
        setvalue('')
    }
    const Delete =(Idsupp) =>{
        const SuppTask = AddTask.filter(A => A.Id !== Idsupp)
        setAddTask(SuppTask)
        if (SuppTask.length === 0) {
            setAddBtn(false)
        }
    }
    const Edit =(Id)=>{
        const listTask = AddTask.find(A => A.Id === Id)
        setvalue(listTask.InputValue)
        setEditId(Id)// Stocker l'ID de la tâche en cours d'édition
    }
    const Update =()=>{
        if(Ivalue && EditId){
            const UpdateTask = AddTask.map(A => A.Id === EditId
                ?{
                    ...A,
                    date: new Date().toLocaleString() ,
                    InputValue : Ivalue , 
                }:A
            ) 
            setAddTask(UpdateTask)
            setEditId(null)// Réinitialiser l'édition
        } setvalue('')
    }
    const Clear =()=>{
        setAddTask([])
        setAddBtn(false)
        setEditId(null) 
        setvalue('') 
    }

   return(
        <div className="todo-container">
            {/* <menu> */}
                {/* <a href="Home.js">Home</a> */}
                {/* <a href="Todo.js">Write Your Task</a> */}
                {/* <a href="Login.js">Log in</a> */}
                {/* <a href=""></a> */}
            {/* </menu> */}
            <div className="todo-form">
               <input type="text"  className="todo-input" value={Ivalue} onChange={(e)=> setvalue(e.target.value)}/>
                <div className="todo-btn">
                   {EditId ?(
                   <button className="update-btn" onClick={Update}>Update Task</button>
                   ):(
                    <button className="add-btn" onClick={Add}>Add Task</button>
                   )}
                </div>
            </div>
            {AddBtn ?(
            <div className="todo-list">
            {AddTask.map((A,index)=>{
                return(
                    <div key={index} className="todo-item">
                      <p className="your-task">Your Task : <small className="date">{A.date}</small></p> 
                      <p>{A.InputValue}</p>
                      <button className="task-btn" onClick={() => Delete(A.Id)}>Delete Task</button>
                      <button className="task-btn" onClick={() => Edit(A.Id)}>Edit Task</button>
                    </div>
                )
            })}
            <button className="clear-btn" onClick={Clear}>Clear the task list</button>
            </div>
            ):(<p className="p">Add Your Task </p>)}
        </div>
   )
}
export default Todo ;