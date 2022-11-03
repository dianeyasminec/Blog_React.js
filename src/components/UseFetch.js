import{useState, useEffect} from 'react'

const useFetch = (url) =>{

const[data, setData] = useState(null)
const[error, setError]= useState(null)

    useEffect(()=>{
        fetch(url)
        .then(response => {
            console.log(response)
            if(!response.ok){
                throw Error('Could not fetch the data');
            }
           return response.json()
        })
        .then(data=>{console.log(data)
            setData(data)
        })
        .catch(err => {
            setError(err.message)
        })
    },[url]);

    return {data, error}
}

export default useFetch;