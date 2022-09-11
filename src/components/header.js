
function Header(props){
let countrys = props.countrys
countrys = countrys.map((country)=>{
    if(country.Name){
        return <option value={country.Name} key={country.id} id={country.id}>{country.Name}</option>
    }
})
return (
    <div className="header-container">
        <h1>About Countrys</h1>
       <select 
       className="sec"
       value={props.value}
       id={props.id}
       onChange={(e)=>{
        // debugger
        props.onvaluechange(e)
       }}
       >
      {countrys}
    </select>
    <button className="btn" onClick={props.onbtnclick}>Click me</button>
    </div>
)
}
export default Header