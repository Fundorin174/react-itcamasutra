import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from './../../../../../../src/img/avatar.png';
import classes from './User.module.css';
const User = (props) => {

  const addToFrends = () => {
    props.toFriends(props.id);
    props.addToFrends(props.id)
  }
  const deleteFromFrends = () => {
    props.fromFriends(props.id);
    props.deleteFromFrends(props.id)
  }

    return (
        <div className = {classes.user_wrapper}>
            <div className={classes.left_column}>
              <NavLink to={props.isAuth ? '/profile/' + props.id : '/login'}>
              <img
                  className={classes.img}
              src={props.smallPhotoSrc != null ? props.smallPhotoSrc : props.urlAIGeneratedImage ? props.urlAIGeneratedImage : avatar}
                  alt={"avatar"}/>
              </NavLink>
               {
                   props.followed ? 
              <button disabled={props.followInProgress.some(id => id === props.id)} onClick = {() => {props.unFollow(props.id)}}
                   className = {classes.btn}> Отписаться </button> 
                   : 
              <button disabled={props.followInProgress.some(id => id === props.id)} onClick = {() => {props.follow(props.id)}} className={classes.btn}>Подписаться</button>
               }
               {
                    props.isFrend ?
              <button onClick={deleteFromFrends} className={classes.btn}>Убрать из друзей </button> :
              <button onClick={addToFrends} className={classes.btn}>Добавить в друзья </button>
                }  
               
            </div>
            <div className={classes.right_column}>
                <div className={classes.row}>
                    <NavLink to={props.isAuth ?'/profile/' + props.id : '/login'}>
                    <h4>{props.fullName}</h4>
                    </NavLink>
                    <p>Какая то страна</p>
                </div>
                <div className={classes.row}>
                    <p>{props.status}</p>
                    <p>Какой то город</p>
                </div>
            </div>


        
       </div>
    );
}

export default User;