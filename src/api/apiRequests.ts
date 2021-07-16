import axios from 'axios'

export const get = (url: string) => {
    return (axios.get(url))
}

export const post = (url: string, params: any)=> {
    return (axios.post(url, params))
}

export const patch = (url: string, params: any)=> {
    return (axios.patch(url, params))
}
