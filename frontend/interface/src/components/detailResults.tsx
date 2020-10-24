import React, {useState, useEffect} from "react";
import {Row} from "./resutados"
import Vrt from './vrt';
interface Props {
    row: Row
}
const DetailResults = (props : Props) =>{
    const [isVrt, setIsVrt] = useState(false);
    useEffect(()=>{
        if (props.row.typeOfTest === "VRT"){
            setIsVrt(true);
            console.log(props.row.data, 'detail');
        }
        else{
            setIsVrt(false);
        }
    }, [props]);
    return (
        <>
        {isVrt? <Vrt results={props.row.data}/>: <div></div> }
        </>
    )
}
export default DetailResults;