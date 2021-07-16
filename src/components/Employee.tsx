import React, {useState} from 'react';
import {StateBar} from "./StateBar";
import {IEmployee} from "../interfaces/IEmployee";

const typesArray = [
    'added',
    'in-check',
    'approved',
    'active',
    'inactive'
]

export const Employee: React.FC<IEmployee> = ({id, first_name,last_name,type, changeType}) => {
    const [employeeType, setEmployeeType] = useState(typesArray)
    const getType = ( type: string) => {
        changeType(id, type)
         }
    return (
        <div>
            <p>#{id} Full name: {first_name}{last_name} Type: {type}</p>
            <div>
                {typesArray.map(item => (
                        <StateBar
                            changeType={getType}
                            key={item}
                            type={item}/>
                    )
                )}
            </div>

        </div>
    );
};

