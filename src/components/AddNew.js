import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../utils/ListSlice';

const AddNew = ({ setShowNew }) => {
    const handleClose = () => {
        setShowNew(false);
    };

    const newTaskName = useRef(null);
    const newTaskTime = useRef(null);
    const [timeError, setTimeError] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const isTimeValid = /^[0-2][0-3]:[0-5][0-9]$/.test(newTaskTime.current.value);
        if (!isTimeValid) {
            setTimeError("Invalid Time");
            return;
        }

        dispatch(addTask({
            name: newTaskName.current.value,
            time: newTaskTime.current.value,
        }));
     
        newTaskName.current.value = '';
        newTaskTime.current.value = '';
    };

    return (
        <div className="my-4 absolute z-10 bg-white rounded-lg shadow-lg p-6 mt-44 border-black border-2">
            <div className="flex justify-end mb-2">
                <button onClick={handleClose}>❌</button>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    ref={newTaskName}
                    type="text"
                    className="border rounded-md px-4 py-2 w-full"
                    placeholder="Enter a new task "
                />
                <input
                    ref={newTaskTime}
                    type="text"
                    className="border rounded-md px-4 py-2 w-full"
                    placeholder="Enter time for the task (HH:MM)"
                />
                {timeError && <span className='text-red-500 font-semibold '>{timeError}</span>}
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full">
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default AddNew;
