import { useDispatch } from "react-redux"
import { bulkChange } from "../redux/slice"


function Input(){
    const dispatch = useDispatch()
    return(
        <div>
            <input onBlur={(e)=>dispatch(bulkChange(e.target.value))} type="number" placeholder="enter value" />
        
        </div>
    )
}

export default Input