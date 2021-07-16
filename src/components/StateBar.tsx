import React from 'react';
import {IEmployee} from "../interfaces/IEmployee";

interface Props {

}

export const StateBar = (props:any) => {
    return (
        <>
            <div className="nav" onClick={()=>{props.changeType()}}>
                <div className="arrow-left"></div>
                <div className="nav-text"><a href="#">{props.type}</a></div>
                <div className="arrow-right"></div>
            </div>
        </>
    );
};