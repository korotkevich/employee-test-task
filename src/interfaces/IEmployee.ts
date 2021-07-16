export interface IEmployee{
    id: number,
    first_name: string,
    last_name: string,
    type: string,
    changeType: (id: number, status: string) => void
}