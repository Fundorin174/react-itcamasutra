import React from 'react';
import classes from './DialogItems.module.css';
import DialogItem from './DialogItem/DialogItem';


const DialogItems = (props) => {


let dialogElements = props.dialogs.map( dialogItem => <DialogItem key = {dialogItem.id} id={dialogItem.id} name={dialogItem.name} date={dialogItem.date} avaSrc={dialogItem.avaSrc} />);
return (
<div className={classes.dialogItems}>
    { dialogElements }
</div>
);
}

export default DialogItems;
