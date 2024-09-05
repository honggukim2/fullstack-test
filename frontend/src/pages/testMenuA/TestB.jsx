import React,{useEffect,useState} from "react";
import ApiRequest from "../../utils/ApiRequest";

const TestB = () => {

const [testData,setData] = useState("");

useEffect(()=> {
   firstSet();
},[])

const firstSet = async () => {
    try{
        const response = await ApiRequest("/boot/api/hello");
        setData(response);
    }catch(error){
        console.log(error);
    }
}
    return (
        <div>
            안녕다람쥐
            <div>{testData}</div>
        </div>
    )
}

export default TestB;