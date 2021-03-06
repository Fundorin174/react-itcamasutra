import React, { useEffect } from 'react';
import classes from './NavBarFrends.module.css';
import Frend from './frend/Frend';
import { NavbarFriendsCOntainerPropsType } from './NavBarFrendsContainer';
import { FrendType } from '../../../types/types';




const NavbarFriends: React.FC<NavbarFriendsCOntainerPropsType> = React.memo((props: NavbarFriendsCOntainerPropsType) => {
  
  
  useEffect(() => {
    //@ts-ignore
    let savedFrends: Array<FrendType> = JSON.parse(localStorage.getItem('frends'));
    savedFrends && savedFrends[0] && props.setFrends(savedFrends);   
  }, [])

  useEffect(() => {
    props.frends.length !== 0 ? localStorage.setItem('frends', JSON.stringify(props.frends)) : localStorage.setItem('frends', JSON.stringify(''))

  }, [props.frends.length])

  const deleteFromFrends = (frendID: number) => {
        let frend = props
            .frends
            .filter(frend => frend.id === frendID);
        props.deleteFromFrends(frend[0]);
        props.fromFriends(frendID) //change button on users page
    }
    
  let allFriends = props
        .frends
        .map(
            frend => <Frend
                key={frend.id}
                id={frend.id}
                name={frend.name}
                photo={frend.photos.small}
                urlAIGeneratedImage={props.urlAIGeneratedImage}
                deleteFromFrends={deleteFromFrends}/>
        );
    return (
        <div className={classes.frends_wrapper}>
            <div className={classes.title}>Друзья</div>
            <div className={classes.frends_items}>
          {props.frends.length !== 0 ? allFriends : null}

            </div>
        </div>

    );
})

export default NavbarFriends;