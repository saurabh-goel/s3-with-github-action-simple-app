import { useSelector } from "react-redux"

function UserList() {
    const count= useSelector((state)=>state.counter.value);
    
    return (
        <div style={{backgroundColor:'skyblue'}} >
            <h1>User List</h1>
            <h3>{count}</h3>
        </div>
    )
}

export default UserList
