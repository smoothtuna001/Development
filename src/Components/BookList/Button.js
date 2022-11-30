import React from 'react';



function Button(props){
    return <button onClick={props.eventHandler} className={'btn btn-primary ' + (props.isActive)}>{props.children}</button>
}

export default Button;