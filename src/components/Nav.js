import React, { useState } from 'react';
import AddNew from './AddNew';

const Nav = () => {
    const [ShowNew, setShowNew] = useState(false);
    const handleCreate = () => {
        setShowNew(!ShowNew);
    }
  return (
    <div className="bg-green-200 p-4 flex justify-center items-center">
    <button onClick={handleCreate} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Create New Task
      </button>
    {ShowNew && <AddNew setShowNew = {setShowNew}/>}
    </div>
  );
};

export default Nav;
