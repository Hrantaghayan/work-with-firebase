import { arrayRemove } from "firebase/firestore";
import React from "react";
function Body(props){
    // debugger
if(props.singldata){
    let keyarr = Object.keys(props.singldata)
    function destrucure(keyarr){
        // debugger
        let result = [{flag:props.singldata.Flagimg}]
        for(let i = 0;i<keyarr.length;i++){
            if(keyarr[i]==="Flagimg"){
                continue
            }
            if(Array.isArray(props.singldata[keyarr[i]])){
                let name = keyarr[i]
             let obj = {
              [name]:props.singldata[keyarr[i]][0]
             }
             result.push(obj)
            }
            if(typeof props.singldata[keyarr[i]] === 'object' && Array.isArray(props.singldata[keyarr[i]])===false){
                for(let key in props.singldata[keyarr[i]]){
                    let name = key
                    let obj ={
                     language:props.singldata[keyarr[i]][key]
                    }
                    result.push(obj)
                }
            }
           if(typeof props.singldata[keyarr[i]]==='string'){
            let name = keyarr[i]
            let obj ={
                [name]:props.singldata[keyarr[i]]
            }
            result.push(obj)
           }
        }
        return result
    }
    let result= destrucure(keyarr)
    result=result.map((el,ind)=>{
        debugger
    for(let key in el){
        if(key==='flag'){
            return (
                <div className="for-img" key={Math.random()}>
                    <img src={el[key]} className="piture" alt="good-picture"/>
                </div>
            )
        }
        else{
            return (
                <h1 key={Math.random()}>{`${[key]}: ${el[key]}`}</h1>
            )
        }
    }
    })
    console.log(result)
    return (
        <div className="container">
            {result}
        </div>
    )
}
else{
    return <div className="container"></div>
}
}
export default Body