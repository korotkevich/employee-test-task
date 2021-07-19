import React from 'react';

export const StateBar = (props:any) => {
    return (
         <>
            <div className="nav" onClick={()=>{props.getType(props.item)}}>
                <div className="arrow-left"></div>
                <div className={`nav-text  ${props.type.toLowerCase() === props.item ? 'active' : ''}`}><a href="#">{props.item.toUpperCase()}</a></div>
                <div className={`arrow-right  ${props.type.toLowerCase() === props.item ? 'active-arrow-right' : ''}`}></div>
            </div>

         </>
    );
};