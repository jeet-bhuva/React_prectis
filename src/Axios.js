import React, { useEffect} from 'react'
import Axios from 'axios'

function Demo() {

    // const [count ,setCount] = useState(0)

    useEffect(() => {

        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log("UseEffect Rerspons --->",res.data)
        })
    }, [])

  return (
    <div>Axios</div>
  )
}

export default Demo

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'


// export default function Demo() {
//   // const [post, setPost] = useState(null)

//   useEffect(()=>{
//       axios.get("https://jsonplaceholder.typicode.com/posts")
//       .then((res)=>{
//         console.log("response Data--->",res.data)
//       })
//   },[])

//   // function hendlePost(){
//   //   axios.post("https://jsonplaceholder.typicode.com/posts",{
//   //     titel : "Hello World",
//   //     body : "This A New Post"
//   //   }).then((res)=>{
//   //     setPost(res.data)
//   //   })
//   // }

//   // if(!post){
//   //   return "No Post !"
//   // }

//   return (
//       <div>
//         {/* <h1>{post.titel}</h1>
//         <p>{post.body}</p>
//         <button onClick={hendlePost}>Post Create</button> */}
//       </div>
//   )

// }


// import React, { useState } from 'react'
// import axios from 'axios'
// import { Button } from 'react-bootstrap'

// export default function Axios() {

//   const [data, setData] = useState([])

//   function hendleAxios() {
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => {
//         // console.log(res.data)
//         setData(res.data)
//       })
//   }

//   return (
//     <>
//       <h3>Click This Button And Get Data</h3>
//       <Button variant="outline-primary" onClick={hendleAxios}>Primary</Button>{' '}

//       <div className="container">
//         <div className='row'>
//           {
//             data.map((value,i) => {
//               return (
//                 <div className='col-4' key={i}>
//                   <div className="card" style={{ width: "18rem" }}>
//                     <div className="card-body">
//                       <h2 className="card-title">ID :{value.id}</h2><hr/>
//                       <h3 className="card-title">Titel : {value.title}</h3><hr/>
//                       <p className="card-text">{value.body}</p>
//                       <button href="#" className="btn btn-info">Go somewhere</button>
//                     </div>
//                   </div>
//                 </div>
//               )
//             })
//           }
//         </div>
//       </div>

//     </>
//   )
// }

