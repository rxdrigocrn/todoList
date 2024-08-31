import React, { useState } from 'react';
import AddList from './AddList';
import ListItem from './ListItem';
import { FaPlus } from "react-icons/fa";
import './Tasks.css';

const Tasks = ({ onSelectList }) => {
  const [lists, setLists] = useState([]);
  const [showAddList, setShowAddList] = useState(false);

  const addList = (listName) => {
    setLists([...lists, listName]);
  };

  const handleOpenAddList = () => {
    setShowAddList(true);
  };

  const handleCloseAddList = () => {
    setShowAddList(false);
  };

  const deleteList = (index) => {
    setLists(lists.filter((_, i) => i !== index));
  };

  return (
    <div className="sidebar-container">
      <div className="title-container">
        <h2>Rodr.io</h2>
      </div>
      <div className="lists-container">
        <h2>Private</h2>
        <div className="lists">
          <ListItem
            lists={lists}
            onDelete={deleteList}
            onSelect={onSelectList} // Passa a função para o ListItem
          />
        </div>
        {showAddList && (
          <AddList
            onAddList={addList}
            onClose={handleCloseAddList}
          />
        )}
        <div className="button-container" onClick={handleOpenAddList}>
          <button>
            <FaPlus />
            Create new List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
