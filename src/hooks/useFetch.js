import { useState } from "react"

export const useFetch = () => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    });

    const fetchData = async (url, method, bodyData = null) =>{
        if(!url) return;
        try {

            const options = {
                method: method,
                headers:{
                    "Content-Type": "application/json; charset=UTF-8" 
                },
                body: method == "GET" || method == "DELETE" ? null : JSON.stringify(bodyData)
            }

            const res = await fetch(url, options);
            const data = await res.json();
            console.log(data);
            setState({
                data: data,
                isLoading: false,
                error: null
            })
        } catch (error) {
            setState({
                data: data,
                isLoading: false,
                error: error
            })
        }
    }

    return {
        ...state,
        fetchData
    }
}
