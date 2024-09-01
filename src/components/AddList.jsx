import React from 'react'
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

import './AddList.css'



const AddList = ({ onAddList, onClose }) => {

    const [newList, setNewList] = useState("")


    const handleAddList = (e) => {
        e.preventDefault();
        onAddList(newList)
        setNewList("")
        onClose()
    }


    return (
        <>
            <div className="add-list-container">
                <form action="" onSubmit={handleAddList}>
                    <div className="form-control">
                        <input type="text" placeholder='Write a list name' onChange={(e) => setNewList(e.target.value)}/>
                    </div>
                    <input type="submit" value={"Add"} />
                </form>
                <div className="close-button">
                    <button onClick={onClose}>
                        <IoClose />
                    </button>
                </div>
            </div>
        </>
    )
}

export default AddList