import { useEffect,useState } from "react";

function Usecurrency(currency){
    const[data,setdata]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`).then((response)=>
            response.json()).then((response)=>setdata(response[currency]))
    console.log(data);
    }
    ,[currency])
    console.log(data);
    return data;

}
export default Usecurrency;