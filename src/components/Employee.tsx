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

export const Employee: React.FC<IEmployee> = ({id, first_name,type, changeType}) => {
    const [employeeType, setEmployeeType] = useState(typesArray)
    const getType = ( type: string) => {
        changeType(id, type)
         }
    return (
        <div>
            <p>#{id} Full name: {first_name}</p>
            <div>
                {typesArray.map(item => (
                        <StateBar
                            getType={getType}
                            key={item}
                            item={item}
                            type={type}/>
                    )
                )}
            </div>

        </div>
    );
};

