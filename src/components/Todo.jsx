/*
 * @Descripttion: 
 * @version: 
 * @Author: shaye
 * @Date: 2024-05-25 17:33:39
 * @LastEditors: shaye
 * @LastEditTime: 2024-05-26 23:30:01
 */
import { useState } from "react"

export default function Todo({id,name,done,toggleChecked,editNameByID,deleteTodoByID}){
    const [edit,setEdit]=useState(true)
    const [newName,setNewName]=useState(name)
    function change_checked(){
        toggleChecked(id)
    }
    function editOp(){
        setEdit(false)
    }

    function deleteOp(){
        deleteTodoByID(id)
    }

    function change_name(e){
        setNewName(e.target.value)
    }

    function save(){
        console.log(`todo{id}`)
        editNameByID(id,newName)
        setEdit(true)
    }

    function cancel(){
        setEdit(true)
    }
    return (
        <div>
            <input type="checkbox" checked={done} onChange={change_checked}/>
            <input type="text" readOnly={edit} value={newName} onChange={change_name}/>
            <button className="btn" type="button" hidden={edit} onClick={save}>Save</button>
            <button className="btn" type="button" hidden={edit} onClick={cancel}>Cancel</button>
            <button className="btn edit_btn" onClick={editOp} hidden={!edit}>Edit</button>
            <button className="btn del_btn" onClick={deleteOp}>Delete</button>
        </div>
    )
}

