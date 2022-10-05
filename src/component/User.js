import { useParams } from "react-router-dom"


function User() {

    const perams = useParams()
    const {name} = perams;

  return (
    <div>
        <h1>This Is {name} Page</h1>
    </div>
  )
}

export default User