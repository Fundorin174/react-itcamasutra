import React, { useState } from 'react';
import classes from './ToDoList.module.css';
import ToDoList from './ToDoList';
import { createTextField } from '../common/helpFunctions';
import { InputFieldCreator } from '../common/BlockContainer';
import { required } from '../common/validators';


const Lists = (props) => {

  const [newToDoListName, setNewToDoListName] = useState(); //edit avatar upload mode on/off

  const setNewToDoList = (e) =>{
    let newName = e.target.value;
    setNewToDoListName(newName);
  }


return(
  <div className = {classes.listsWithBtnWrp}>
    <h1>СПИСОК ДЕЛ</h1>
    <div className = {classes.listsWrp}>
    {
    props.toDoLists.map((list) =>{
      return <ToDoList 
      key = {list.id}
      id = {list.id}
      title  = {list.title}
      addedDate = {list.addedDate}
      order = {list.order}
      deleteToDoList = {props.deleteToDoList}/>
    })
    }
    </div>

    <input onChange = {setNewToDoList} placeholder = 'Введите Имя нового списка'></input>    
    <button className={classes.btn} onClick={() => { props.createNewToDoList(newToDoListName)}}>Создать</button>

  </div>
)

}

export default Lists;