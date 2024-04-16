import React from 'react';
import TaskCard from './TaskCard';
import { useSelector } from 'react-redux';

const Completed = () => {
    const listOfCompletedTasks = useSelector((store) => store.list.complete);
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Completed</h1>
      <div className="flex flex-col gap-2">
        {listOfCompletedTasks.length === 0 ? <h1 className='mx-2 text-2xl bg-blue-200  mx-auto rounded-md p-2'>No Tasks Completed</h1> : listOfCompletedTasks.map((task,i) => <TaskCard title = {listOfCompletedTasks[i].name} time = {listOfCompletedTasks[i].time} disabled = {true}/>)}
      </div>
    </div>
  );
};

export default Completed;
