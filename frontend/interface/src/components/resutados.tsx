import React,{useState, useEffect} from 'react';
interface results {
    results : string;
}
const ShowResults = (props : results)=>{
    const [resp, setReps] = useState(props.results);
    useEffect(()=>{
        setReps(props.results);
    },[props.results])
    return( <div>
        {resp}
    </div>)
}

export default ShowResults;