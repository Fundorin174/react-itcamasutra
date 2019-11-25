import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';



const Posts = (props) => {

let newPostElement = React.createRef();


let addNewPost = () => {
  let text = newPostElement.current.value;
  props.store.adPost(text);
} 

let addNewText = () => {
  let text = newPostElement.current.value;
  props.store.changeNewPostText(text);


}




let postsElements = props.posts.map( post => <Post msg = {post.msg} likeNum = {post.numOfLikes}/> );

    return(

    <div >
        <h3>Мои сообщения</h3>
        <div className={classes.newsform}>
          <textarea onChange={ addNewText } value={ props.newPostText } ref={newPostElement} name={classes.youNews} id={classes.youNews} cols="30" rows="3" />
          <button onClick={ addNewPost } className={classes.btn}>Добавить сообщение</button>
        </div>
        <div>

          { postsElements }

        </div>
    </div>);
    }

export default Posts;