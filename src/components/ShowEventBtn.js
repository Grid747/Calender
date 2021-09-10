import react, {useState} from "react";
import MyButtons from './myButtons'

const AdminAcct = () => {
    const [dropValue, setdropValue] = useState("admin")
    const onClick = (e) => setdropValue(e.value.target)
    return (
        <div>
            <select type='select' value={dropValue} onChange={onClick}>
                <option value="admin"> admin </option>
                <option value="member"> member </option>
            </select>
{/*             {dropValue ? <MyButtons/>: null} */}
        </div>
    )
}

export default AdminAcct





/*if (DropDown = "Admin"){
    <MyButton Clicked={onclick} />
} else {
    return 'Members only!';
}*/