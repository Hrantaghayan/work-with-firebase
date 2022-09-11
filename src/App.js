// import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from 'react';
// import{db} from './firebase-config';
// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
//   arrayRemove,
// } from "firebase/firestore"
// // ssd
// function App() {
//   let res;
//   // debugger
//   const collectionref = collection(db,"countrys")
//    useEffect(()=>{
//     // debugger
//     fetch('https://restcountries.com/v3.1/all')
//     .then((response)=>{
//       return response.json()
//     })
//     .then((result)=>{
//       debugger
//       res = result.map((country)=>{
//         // debugger
//         return{
//           Name:country.name.common,
//           OfficialName:country.name.official,
//           Capital:country.capital,
//           Population:country.population,
//           Region:country.region,
//           Flagimg:country.flags.png,
//           languages:country.languages,
//           CountryCode:country.tld
//         }
//       })
//       for(let i = 0;i<res.length;i++){
//         addDoc(collectionref,res[i])
//       }
        
//       console.log(res)
//     })
//    },[])
//   //  useEffect(()=>{
//   //   debugger
//   //     addDoc(collectionref,forsentoserver[0])
//   //  },[forsentoserver])
//   return (
//   <div>Hello world</div>
//   );
// }

// export default App;
