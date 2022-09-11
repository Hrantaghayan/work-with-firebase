import React, { useEffect, useState } from 'react';
import './App.css';
import{db} from './firebase-config';
import Header from './components/header';
import Body from './components/body';
import {
      collection,
      getDocs,
      getDoc,
      addDoc,
      updateDoc,
      deleteDoc,
      doc,
      arrayRemove,
    } from "firebase/firestore"
    function App2(){
        const[value,setvalue] = useState('United States Virgin Islands')
        const[id,setid] = useState('0764GelsYED4USrV1RqL')
        const[country,setcountry] = useState([])
        const[singldata,setsingledata]=useState(null)
        const usercolectionref = collection(db,"countrys")
        useEffect(()=>{
            getDocs(usercolectionref)
            .then((data)=>{
                // debugger
                setcountry(data.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                }))
            })
        },[])
        const onvaluechange = (e)=>{
            setvalue(e.target.value)
            setid(e.target.selectedOptions[0].id)
        }
        const onbtnclick = ()=>{
            // debugger
            const docref = doc(db,"countrys",id)
            getDoc(docref)
            .then((data)=>{
                console.log(data.data())
                setsingledata(data.data())
            })
        }
        return (
        <>
         <Header 
            countrys={country}
            value={value}
            onvaluechange={onvaluechange}
            id={id}
            onbtnclick={onbtnclick}
            />
            <Body
            singldata={singldata}
            />
        </>
        )
    }
    export default App2