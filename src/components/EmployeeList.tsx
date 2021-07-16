import React, {useEffect, useState} from 'react';
import {Employee} from "./Employee";
import {get, patch} from "../api/apiRequests";
import {IGetEmployee} from "../interfaces/IGetEmployee.dto";


export const EmployeeList:React.FC = () => {
    const [employee, setEmployee] = useState<IGetEmployee[]>([])

    const getEmployees = () => {
        get('http://localhost:5000/employees')
            .then((response) => {
                setEmployee(response.data)
            })
    }
    useEffect(() => {
        getEmployees()
    }, [])

    const changeType = (id: number, type: string) => {
        patch('http://localhost:5000/employees', {id, type})
            .then(() => {
                const nextEmployee = employee.map(item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            type
                        };
                    }
                    return item;
                });
                setEmployee(nextEmployee);
            })
    }

    return (
        <>
                {employee.map(item => (
                    <Employee key={item.id}
                              type={item.type}
                              id={item.id}
                              changeType={changeType}
                              first_name={item.first_name}
                              last_name={item.last_name}
                    />
                ))
                }
        </>
    );
};