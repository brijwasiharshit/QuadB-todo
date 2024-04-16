import React from 'react';
import { useDispatch } from 'react-redux';
import { markComplete, removeTask } from '../utils/ListSlice';

const TaskCard = ({ title, time, disabled }) => {
    const dispatch = useDispatch();

    const handleComplete = () => {
        dispatch(markComplete({ name: title, time: time }));
    };

    const handleRemove = () => {
        dispatch(removeTask({ name: title, time: time }));
    };

    return (
        <div className="bg-white rounded-lg py-2 px-4 flex justify-between items-center">
            <div className="flex items-center">
                <input type="checkbox" className="w-6 h-6 mr-4" disabled={disabled} onClick={handleComplete} />
                <div>
                    <h1 className="text-lg font-semibold text-left">{title}</h1>
                    <span className="text-gray-500 text-sm text-left">Time: {time}</span>
                </div>
            </div>
            <button className="text-red-600 hover:text-red-800 focus:outline-none" onClick={handleRemove}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>
    );
};

export default TaskCard;
