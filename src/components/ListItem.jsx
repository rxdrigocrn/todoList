import React, { useState } from 'react';
import './ListItem.css';
import { FaHome, FaTrash } from "react-icons/fa";

const ListItem = ({ lists, onDelete, onSelect }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleListItem = (index) => {
        setSelectedIndex(index);
        onSelect(lists[index]);
    };

    return (
        <>
            <ul>
                {lists.map((list, index) => (
                    <div className="item-container" key={index} onClick={() => handleListItem(index)}>
                        <li>
                            <FaHome />
                            {list}
                        </li>
                        <div className="delete-button" onClick={(e) => {
                            e.stopPropagation();
                            onDelete(index);
                        }}>
                            <FaTrash />
                        </div>
                    </div>
                ))}
            </ul>

        </>
    );
};

export default ListItem;
