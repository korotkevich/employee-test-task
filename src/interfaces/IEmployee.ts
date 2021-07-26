export interface IEmployee{
    id: number,
    first_name: string,
    type: string,
    changeType: (id: number, status: string) => void
}