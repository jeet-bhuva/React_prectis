// import React, { Component } from 'react'


// export default class App extends Component {
//     state={
//         change:false
//     }
//     clickHendel =()=>{
//         this.setState({change:true})
//     }
//   render() {
//     const txtc = {
//         color:"#020202",
//         fontSize:"80px",
//         backgroundColor:"#68b7c0",  
//     }

//     if(this.state.change){
//         txtc.backgroundColor = "black";
//         txtc.color = "rgb(255 255 255)"
//     }
//     return <h1 onClick={this.clickHendel} style={txtc}> Hello_I_Am_Jeet</h1>
//   }
// }

// import User from "./user";

// function App (){
//   function apple(){
//     console.log("Hello Apple User")
//   }
//   return (
//     <div>
//       <h1>Hello App </h1>
//     <button onClick={apple}>Click It</button>
//       <User />
//     </div>
//   )
// }

// export default App;rt React, { Component } from 'react'
// import User from './user'
// import style from './App.module.css'

// export default class App extends Component {
//   render() {
//     return (
//         <React.Fragment>
//             <h1 className={style.txt}>Hello Ram</h1>
//             <User />
//         </React.Fragment>
//     )
//   }
// }


// import React, { Component } from 'react'
// import pic from './image/images (2).jpeg'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <img src={pic} alt='My Image'/>
//         {/* <img src={process.env.PUBLIC_URL + "/image/images (2).jpeg" } alt="mypic" /> */}
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react'

// export default class App extends Component {
//     render() {
//         return (
//             <div className="d-grid gap-2 col-6 mx-auto">
//                 <button type="button" className="btn btn-outline-primary">A</button>
//                 <button type="button" className="btn btn-outline-secondary">B</button>
//                 <button type="button" className="btn btn-outline-success">C</button>
//                 <button type="button" className="btn btn-outline-danger">D</button>
//                 <button type="button" className="btn btn-outline-warning">E</button>
//                 <button type="button" className="btn btn-outline-info">F</button>
//                 <button type="button" className="btn btn-outline-dark">G</button>
//             </div>
//         )
//     }
// }


// import React, { Component } from 'react'

// export default class App extends Component {

//     state = {
//         value: "Jeet"
//     }

//     changeIs = (e) => {
//         // console.log(e.target.value)
//         this.setState({ value: e.target.value.toUpperCase().substr(0,10)})
//     }
//     render() {
//         return (
//             <div>
//                 <form>
//                     <h2>Controlled By React</h2>
//                     <input type="text" value={this.state.value} onChange={this.changeIs} />
//                 </form>
//             </div>
//         )
//     }
// }


// import React, { Component } from 'react'

// export default class App extends Component {
//     state = {
//         value: "Hello Jeet Bhuva , Welcome To React Js"
//     }

//     chengeVal = (e) => {
//         this.setState({ value: e.target.value.substr(0, 100) })
//     }

//     render() {
//         return (
//             <div>
//                 <form>
//                     <textarea value={this.state.value} onChange={this.chengeVal} />
//                 </form>
//             </div>
//         )
//     }
// }

// import React, { Component } from 'react'

// export default class App extends Component {
//     state = {
//         name: "",
//         password: ""
//     }
//     hendalChange = (e) => {
//         // console.log([e.target.name])
//         this.setState({[e.target.name] : e.target.value})
//         // const value = e.target.name === "password" ? e.target.value.toUpperCase().substr(0,10) : e.target.value
//         // this.setState({[e.target.name] : value})

//     }
//     handelSubmit = (e) => {
//         console.log(e.target[0].value)
//         e.preventDefault()
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handelSubmit}>
//                     <label>
//                         Name : <input type="taxt" value={this.state.name} onChange={this.hendalChange} name="name" />
//                     </label>
//                     <br />
//                     <br />
//                     <label>
//                         Password : <input type="taxt" value={this.state.password} onChange={this.hendalChange} name="password" />
//                     </label>
//                     <br />
//                     <br />
//                     <input type="submit" value="Submit"  />
//                 </form>
//             </div>
//         )
//     }
// }

// import React, { Component } from 'react'

// export default class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             value: ""
//         }
//         this.inputText = React.createRef()
//     }

//     // componentDidMount = () => {
//     //     // console.log(this.inputText.current)
//     //     this.inputText.current.focus()

//     // }
//     hendleSubmit = (e) => {
//         e.preventDefault()
//         // console.log(this.inputText.current.value)
//         this.setState({value : this.inputText.current.value})
//     }
//     render() {
//         return (
//             // <form>
//             //     Name : <input type="taxt" ref={this.inputText} />
//             //     <br />
//             //     <br />
//             //     Password : <input type="taxt" />
//             //     <br />
//             //     <br />
//             //     Address : <input type="taxt" />
//             // </form>
//             <React.Fragment>
//                 <h2>You Type : {this.state.value}</h2>
//                 <form onSubmit={this.hendleSubmit}>
//                     Input : <input type="text" ref={this.inputText}/>
//                     <br/>
//                     <br/>
//                     <input type="submit" value="Submit" />
//                 </form>
//             </React.Fragment>
//         )
//     }
// }

// ---------------------- Callback Refs ---------------------------
// import React, { Component } from 'react'

// export default class App extends Component {
//     constructor(){
//         super();
//         this.backRef = null;
//         this.setBackRef = (e) => {
//             this.backRef = e
//         }
//     }
//     componentDidMount = () => { 
//         if(this.backRef){
//             this.backRef.focus()
//         }
//     }
//   render() {
//     return (
//       <div>
//         <form>
//             Name : <input type="taxt"/>
//             <br/>
//             <br/>
//             Password : <input type="taxt" ref={this.setBackRef}/>
//             <br/>
//             <br/>
//             Address : <input type="taxt" />
//         </form>
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react'
// import User from './user'
// import Guest from './guest'

// export default class App extends Component {
//     state = {
//         name: "Jeet",
//         sname:"Bhuva"
//     }
//   render() {
//     return (
//       <div>
//         <User name={this.state.name}/>
//         <Guest name={this.state.sname}/>
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react'
// import User from './user'

// export default class App extends Component {
//     state = {
//         name: "Jeet"    
//     }
//   render() {
//     return (
//         <User name={this.state.name}/>
//     )
//   }
// }



// import React, { Component } from 'react'
// import User from './user'
// // export const MyContext = React.createContext();
// // console.log(MyContext)
// import { Provider } from './Context'
// export default class App extends Component {
//     state = {
//         name: "Jeet",
//         email : "jb@gmail.com",
//         value : 0        
//     }

//     hendleClickContext = () => {
//         this.setState({value : this.state.value + 1})
//     }
//     render() {
//         const contextValue = {
//             data : this.state,
//             hendalClicks : this.hendleClickContext               
//         }
//         return (
//             <Provider value={contextValue}>
//                 <User />
//             </ Provider>
//         )
//     }
// }


// import React, { Component } from 'react'
// import Rahul from './Rahul'
// import Raj from './Raj'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Rahul />
//         <Raj />
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react'
// import image from './image/download.jpeg'
// import image2 from './image/images (2).jpeg'
// import Image from './Image'
// import Error from './Error'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Error>
//           <Image jimage={image} /><br />
//         </Error>

//         <Error>
//           <Image jimage={image2} /><br />
//         </Error>

//         <Error>
//           <Image jimage="NoImage" /><br />
//         </Error>
//       </div>
//     )
//   }
// }

// import User from "./user";

// function App (){
//   function apple(){
//     console.log("Hello Apple User")
//   }
//   return (
//     <div>
//       <h1>Hello App </h1>
//     <button onClick={apple}>Click It</button>
//       <User />
//     </div>
//   )
// }

// export default App;


// import React,{useState} from 'react'

// function App(){

//   const [data,setData] = useState(0)

//   function updatedata() {
//     setData(data + 1)
//   }

//   return(
//     <div>
//       <h1>{data}</h1>
//       <button onClick={updatedata}>Update-Data</button>
//     </div>
//   )
// }

// export default App;

// import React, { Component } from 'react'

// export default class App extends Component {
//   state ={
//     data : 0
//   }
//   hendleClick = () => {
//     this.setState({data : this.state.data + 1})
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.data}</h1>
//         <button onClick={this.hendleClick}>Click</button>
//       </div>
//     )
//   }
// }


// import React,{useState} from 'react'
// import Student from './Student'

// function App() {

//   const [name , setName] = useState("Jeet")
//   // const [email , setEmail] = useState("jeet@gmail.com")

//   return(
//     <div>
//       <h1>Props :)  </h1>
//       <Student name={name} />
//       <button onClick={()=>{setName("Karan")}}>Click</button>
//     </div>
//   )
// }

// export default App  

// import React, { useState } from 'react'

// function App() {
//   const [data, setData] = useState(null);
//   const [print, setPrint] = useState(false);

//   function getData(val) {
//     console.warn(val.target.value)
//     setData(val.target.value)
//     setPrint(false)
//   }

//   return (
//     <div>
//       <h1>Get Input Box value</h1>
//       {
//         print ? <h2 style={{color:"darkcyan"}}>{data}</h2> : null
//       }
//       <input type="taxt" onChange={getData} />
//       <button onClick={()=>setPrint(true)}>Print Data</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'

// function App() {

//   const [status,setStatus] = React.useState(true)

//   return (
//     <div>
//       <h1>
//         Hello App :)
//       </h1>
//       {
//         status ? <h2>Hello Jeet</h2> : null
//       }
//       <button onClick={()=>setStatus(true)}>Show</button>
//       <button onClick={()=>setStatus(false)}>Hide</button>
//     </div>

//   )
// }

// export default App

// import React,{useEffect, useState} from 'react'
// import axios from 'axios'

// function App() {

//   const [mydata, setMydata] = useState(0)

//   useEffect(() => {

//     axios.get("https://jsonplaceholder.typicode.com/users")
//     .then((res)=>{
//       setMydata(res.data)
//     })

//   }, [])


//   return (
//     <div>

//       <h1>Hello</h1>
//       {
//         mydata.map((post)=>{
//           const {id,name,username,email,address} = post
//           return <div  key={id}>
//             <h3>{name}</h3>
//             <h4>{username}</h4>
//             <h4>{email}</h4>
//             <h4>{address}</h4>
//           </div>
//         }) 
//       }
//     </div>
//   )
// }

// export default App

// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     name:"Jeet"
//   }
//   render() {
//     return (
//       <div>Hello {this.state.name}</div>
//     )
//   }
// }

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     console.warn("constructor")
//     super();
//     this.state ={
//       name : "Jeet-Bhuva"
//     }
//   }

//   componentDidMount(){
//     console.warn("ComponentDidMount")
//   }


//   render() {
//     console.warn("render")


//     return (
//       <div>
//         <h1>Hello {this.state.name}</h1>
//         <button onClick={()=>this.setState({name : "Karan-Senjaliys"})}>Click This</button>
//       </div>
//     )
//   }
// }

// import React, { useState } from 'react'

// export default function App() {

//   const [data,setData] = useState("Jeet")

//   return (
//     <div>
//       <h1>{data}</h1>
//       <button onClick={()=>{setData("Parth")}}>Update Data</button>
//     </div>
//   )
// }

// import React, { useEffect, useState } from 'react'

// function App() {

//   const [data , setData] = useState(0)

//   useEffect(() => {
//     console.log("useEffect")
//   }) 

//   return (
//     <div>
//       <h1>Hello {data}</h1>
//       <button onClick={()=>{setData(data + 1)}}>Chenge Data</button>
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'

// function App() {

//   const [data , setData] = useState("Jeet")
//   const [count , setCount] = useState(0)

//   useEffect(()=>{
//     alert("Chang Data Is :"+ data)
//   },[data])

//   useEffect(()=>{
//     console.log("useEffect")
//   },[count])

//   return (
//     <div>
//       <h2> name :{data}</h2>
//       <h2> Count :{count}</h2>
//       <button onClick={()=>{setData("Harsh")}}>Change Data</button>
//       <button onClick={()=>{setCount(count + 1)}}>Change Data</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import {Table} from 'react-bootstrap'

// function App() {

//   // const std = ["Jeet","Karan","Harsh","Vijay","Parth"]
//   const student = [
//     { name: "Jeet", email: "jeet@gmail.com", contect: 9638527419 },
//     { name: "Karan", email: "karan@gmail.com", contect: 8638527419 },
//     { name: "Harsh", email: "harsh@gmail.com", contect: 7638527419 },
//     { name: "Parth", email: "parth@gmail.com", contect: 6638527419 },
//     { name: "Mohit", email: "mohit@gmail.com", contect: 7838527419 },
//     { name: "Vijay", email: "vijay@gmail.com", contect: 9938527419 },
//   ]

//   return (
//     <div>
//       <h1>Hello</h1>
//       <Table striped bordered hover>
//         <tbody>
//           <tr>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Contect</td>
//           </tr>
//           {
//             student.map((data, i) =>
//               <tr key={i}>
//                 <td>{data.name}</td>
//                 <td>{data.email}</td>
//                 <td>{data.contect}</td>
//               </tr>
//             )
//           }
//         </tbody>
//       </Table >
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { Table } from 'react-bootstrap'

// function App() {

//   // const std = ["Jeet","Karan","Harsh","Vijay","Parth"]
//   const employee = [
//     {
//       name: "Jeet", email: "jeet@gmail.com", contect: 9638527419, address: [
//         { houseNo: "144", city: "Surat", state: "Gujrat" },
//         { houseNo: "133", city: "Jaypur", state: "Rajasthan" },
//         { houseNo: "122", city: "Rajkot", state: "Gujrat" },
//         { houseNo: "111", city: "Amritsir", state: "Panjab" }
//       ]
//     },
//     {
//       name: "Karan", email: "karan@gmail.com", contect: 8638527419, address: [
//         { houseNo: "144", city: "Surat", state: "Gujrat" },
//         { houseNo: "133", city: "Jaypur", state: "Rajasthan" },
//         { houseNo: "122", city: "Rajkot", state: "Gujrat" },
//         { houseNo: "111", city: "Amritsir", state: "Panjab" }
//       ]
//     },
//     {
//       name: "Harsh", email: "harsh@gmail.com", contect: 7638527419, address: [
//         { houseNo: "144", city: "Surat", state: "Gujrat" },
//         { houseNo: "133", city: "Jaypur", state: "Rajasthan" },
//         { houseNo: "122", city: "Rajkot", state: "Gujrat" },
//         { houseNo: "111", city: "Amritsir", state: "Panjab" }
//       ]
//     },
//     {
//       name: "Parth", email: "parth@gmail.com", contect: 6638527419, address: [
//         { houseNo: "144", city: "Surat", state: "Gujrat" },
//         { houseNo: "133", city: "Jaypur", state: "Rajasthan" },
//         { houseNo: "122", city: "Rajkot", state: "Gujrat" },
//         { houseNo: "111", city: "Amritsir", state: "Panjab" }
//       ]
//     },
//     {
//       name: "Mohit", email: "mohit@gmail.com", contect: 7838527419, address: [
//         { houseNo: "144", city: "Surat", state: "Gujrat" },
//         { houseNo: "133", city: "Jaypur", state: "Rajasthan" },
//         { houseNo: "122", city: "Rajkot", state: "Gujrat" },
//         { houseNo: "111", city: "Amritsir", state: "Panjab" }
//       ]
//     },
//     {
//       name: "Vijay", email: "vijay@gmail.com", contect: 9938527419, address: [
//         { houseNo: "144", city: "Surat", state: "Gujrat" },
//         { houseNo: "133", city: "Jaypur", state: "Rajasthan" },
//         { houseNo: "122", city: "Rajkot", state: "Gujrat" },
//         { houseNo: "111", city: "Amritsir", state: "Panjab" }
//       ]
//     },
//   ]

//   return (
//     <div>
//       <h1 style={{textAlign:'center'}}>Employee Data</h1>
//       <Table striped bordered>
//         <tbody>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Contect</th>
//             <th>Address</th>
//           </tr>
//           {
//             employee.map((e, i) =>
//               <tr key={i}>
//                 <td>{i+1}</td>
//                 <td>{e.name}</td>
//                 <td>{e.email}</td>
//                 <td>{e.contect}</td>
//                 <td>
//                   <Table  bordered>
//                     <tbody>
//                       <tr>
//                         <th>House No.</th>
//                         <th>City</th>
//                         <th>State</th>
//                       </tr>
//                       {
//                         e.address.map((data,i) =>
//                           <tr key={i}>
//                             <td>{data.houseNo}</td>
//                             <td>{data.city}</td>
//                             <td>{data.state}</td>
//                           </tr>
//                         )
//                       }
//                     </tbody>
//                   </Table>
//                 </td>
//               </tr>
//             )
//           }
//         </tbody>
//       </Table>
//     </div>
//   )
// }

// export default App


// import React, { createContext, useState } from 'react'
// import Child from './Child'
// import SuperChild from './SuperChild'


// export const GlobalInfo = createContext()
// // console.log("GlobalInfo-->",GlobalInfo)

// function App() {
//   const [color, setColor] = useState('red')
//   return (
//     <GlobalInfo.Provider value={{ infoColor: color }}>
//       <div>
//         <h1>App Component</h1>
//         <Child />
//         <SuperChild />
//       </div>
//     </GlobalInfo.Provider>
//   )
// }

// export default App

// import React, { useMemo, useState } from 'react'

// function App() {

//   const [count, setCount] = useState(0)
//   const [item, setItem] = useState(5)

//   const multiCountMemo = useMemo(function mountCount() {
//     console.log("mountCount")
//     return count
//   })

//   return (
//     <>
//       <h1>Count : {count}</h1>
//       <h1>Item : {item}</h1>
//       <h2>{multiCountMemo}</h2>
//       <button onClick={() => setCount(count + 1)}>Click And Update Count</button>
//       <button onClick={() => setItem(item * 5)}>Click And Update Item</button>
//     </>
//   )
// }

// export default App


// import React from 'react'
// import './App.css'
// // import { Router } from 'react-router-dom'
// import Routers from './component/Routers'

// function App() {
//   return (
//     <div>
//       <Routers />
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'


// function App() {

//   const [name, setName] = useState('')
//   const [year, setYear] = useState('')
//   const [color, setColor] = useState('')
//   const [pantone_value, setPantone_value] = useState('')

//   function saveUser() {
//     console.log({name,year,color,pantone_value})
//     const data = {name,year,color,pantone_value}
//     fetch("https://reqres.in/api/products",{
//       method:'POST',
//       headers:{
//         'Accept':'application/json',
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify(data)
//     }).then((result)=>{
//       console.log("result",result)
//     })
//   }

//   return (
//     <div style={{textAlign:"center"}}>
//       <h1>Post API </h1>
//       Name : <input type='taxt' value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/> <br/> <br/>
//       Year : <input type='taxt' value={year} onChange={(e)=>{setYear(e.target.value)}}  name="year"/> <br/> <br/>
//       Color : <input type='taxt' value={color}  onChange={(e)=>{setColor(e.target.value)}} name="color"/> <br/> <br/>
//       Pantone-Value : <input type='taxt' value={pantone_value} onChange={(e)=>{setPantone_value(e.target.value)}}  name="pantone_value"/> <br/> <br/>
//       <button type='button' onClick={saveUser}>Save Data</button>
//     </div>
//   )
// }

// export default App



// import React from 'react';  

// import axios from 'axios';  

// export default class PostList extends React.Component {  
//   state = {  
//     posts: []  
//   }  

//   componentDidMount() {  
//     axios.get(`https://jsonplaceholder.typicode.com/posts`)  
//       .then(res => {  
//         const posts = res.data;  
//         this.setState({ posts });  
//       })  
//   }  

//   deleteRow(id, e){  
//     axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)  
//       .then(res => {  
//         console.log(res);  
//         console.log(res.data);  

//         const posts = this.state.posts.filter(item => item.id !== id);  
//         this.setState({ posts });  
//       })  

//   }  

//   render() {  
//     return (  
//       <div>  
//         <h1> Delete Data </h1>  

//         <table className="table table-bordered">  
//             <thead>  
//               <tr>  
//                   <th>ID</th>  
//                   <th>Title</th>  
//                   <th>Body</th>  
//                   <th>Action</th>  
//               </tr>  
//             </thead>  

//             <tbody>  
//               {this.state.posts.map((post) => (  
//                 <tr>  
//                   <td>{post.id}</td>  
//                   <td>{post.title}</td>  
//                   <td>{post.body}</td>  
//                   <td>  
//                     <button className="btn btn-danger" onClick={(e) => this.deleteRow(post.id, e)}>Delete</button>  
//                   </td>  
//                 </tr>  
//               ))}  
//             </tbody>  

//         </table>  
//       </div>  
//     )  
//   }  
// }  



// import './App.css';
// import React, { useEffect, useState } from 'react'
// function App() {
//   const [users, setUser] = useState([])
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [userId, setUserId] = useState(null)

//   useEffect(() => {
//     getUsers();
//   }, [])
//   function getUsers() {
//     fetch("http://localhost:4000/todo").then((result) => {
//       result.json().then((resp) => {
//         // console.warn(resp)
//         setUser(resp)
//         setName(resp[0].name)
//         setMobile(resp[0].mobile)
//         setEmail(resp[0].email)
//         setUserId(resp[0].id)
//       })
//     })
//   }

//   function deleteUser(id) {
//     fetch(`http://localhost:4000/todo/${id}`, {
//       method: 'DELETE'
//     }).then((result) => {
//       result.json().then((resp) => {
//         console.warn(resp)
//         getUsers()
//       })
//     })
//   }
//   function selectUser(id) {
//     let item = users[id - 1];
//     setName(item.name)
//     setEmail(item.email)
//     setMobile(item.mobile);
//     setUserId(item.id)
//   }
//   function updateUser() {
//     let item = { name, mobile, email }
//     console.warn("item", item)
//     fetch(`http://localhost:4000/todo/${userId}`, {
//       method: 'PUT',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(item)
//     }).then((result) => {
//       result.json().then((resp) => {
//         console.warn(resp)
//         getUsers()
//       })
//     })
//   }
//   return (
//     <div className="App">
//       <h1>Update User Data With API </h1>
//       <table border="1" style={{ float: 'left' }}>
//         <tbody>
//           <tr>
//             <td>ID</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Mobile</td>
//             <td>Operations</td>
//           </tr>
//           {
//             users.map((item, i) =>
//               <tr key={i}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>{item.mobile}</td>
//                 <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
//                 <td><button onClick={() => selectUser(item.id)}>Update</button></td>
//               </tr>
//             )
//           }
//         </tbody>
//       </table>
//       <div>
//         <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /> <br /><br />
//         <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} /> <br /><br />
//         <input type="text" value={mobile} onChange={(e) => { setMobile(e.target.value) }} /> <br /><br />
//         <button onClick={updateUser} >Update User</button>
//       </div>
//     </div>
//   );
// }
// export default App;


// import React, { useEffect, useState } from 'react'

// function App() {

//   const [count,setCount] = useState(0)

//   useEffect(()=>{
//     // console.warn("useEffect")
//   },[])
//   return (
//     <div>
//       <h1>Count {count}</h1>
//       <button onClick={()=>{setCount(count+1)}}>Click</button>
//     </div>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'

// function App() {

//   const [data, setData] = useState("Jeet")
//   const [count, setCount] = useState(1)

//   useEffect(() => {
//     console.warn(`useEffect`)
//   }, [count])

//   return (

//     <div>
//       <h1>Data : {data}</h1>
//       <h1>Count : {count}</h1>
//       <button onClick={() => { setData("Karan") }}>Update Data</button>
//       <button onClick={() => { setCount(count * 5) }}>Update Count</button>
//     </div>
//   )
// }


// export default App


// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// function App() {

//   const [post, setPost] = useState(null)

//   useEffect(() => {
//     // console.log("useEffect")

//     axios.get(`${baseURL}/2`).then((res) => {
//       setPost(res.data)
//     })

//   }, [])



//   if (!post) return null

//   return (
//     <div>
//       <h1>Hello_I_Am_Jeet</h1>
//       <h2>{post.title}</h2>
//       <p>{post.body}</p>

//     </div>
//   )
// }

// export default App


// import axios from "axios";
// import React from "react";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/posts/2").then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function deletePost() {
//     axios
//       .delete("https://jsonplaceholder.typicode.com/posts/2")
//       .then(() => {
//         setPost(null);
//       });
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={deletePost}>Delete Post</button>
//     </div>
//   );
// }

// 