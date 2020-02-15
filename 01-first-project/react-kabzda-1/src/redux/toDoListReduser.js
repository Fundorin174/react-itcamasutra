import {reset} from 'redux-form';
import {toDoListAPI} from './../DAL/api';
import {isloading} from './userReduser';

const SET_ALL_LISTS = 'SOCIAL-NETWORK/TO_DO_LIST/SET_ALL_LISTS';



    //  ACTION-CREATORS


 const setToDoLists = (data) => (
  {type: SET_ALL_LISTS, data}
)

// export const deleteToDoList = (todolistId) => (
// {type: DELETE_TODO_LIST, todolistId}
// );

// export const setNewTask = (todolistId, task) => (
// {type: SET_NEW_TASK, todolistId, task}
// );

// THUNKS

export const createNewToDoList = (title) => (dispatch) => {
  dispatch(isloading(true));
  toDoListAPI.setNewToDoList(title)
  .then(() =>{
    toDoListAPI.getAllToDoLists()
  .then((data)=>{
    dispatch(setToDoLists(data))
  })
  })

  dispatch(isloading(false));
}

export const getAllToDoLists = () => (dispatch) => {
  toDoListAPI.getAllToDoLists()
  .then((data)=>{
    dispatch(setToDoLists(data))
  })

}

export const deleteToDoList = (todolistId) => (dispatch) => {
  toDoListAPI.deleteToDoList(todolistId)
  .then(() => {
    toDoListAPI.getAllToDoLists()
    .then((data)=>{
      dispatch(setToDoLists(data))
    })
  })

}



// INITIAL STATE
let initialState = {
  toDoLists: []
};



const toDoListReducer = (state = initialState, action) => {

  switch (action.type) {
         
      case SET_ALL_LISTS:
          return {
              ...state,
              toDoLists: action.data
          };

//  case DELETE_TODO_LIST:
//         console.log(state);
//           return {
//               ...state,
//               toDoLists: state.toDoLists.push(...action.data)
//           };

      default:
          return state;

  }
}

export default toDoListReducer;