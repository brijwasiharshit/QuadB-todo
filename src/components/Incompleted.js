import React from 'react';
import TaskCard from './TaskCard';
import { useSelector } from 'react-redux';

const Incompleted = () => {
    const listOfIncompleteTasks = useSelector((store) => store.list.incomplete);
  return (
    <div className="container mx-auto py-4">
    <h1 className="text-2xl font-bold mb-4">InComplete</h1>
    <div className="flex flex-col gap-2">
      {listOfIncompleteTasks.length === 0 ? <h1 className='mx-2  text-2xl bg-blue-200  mx-auto rounded-md p-2'>No incomplete tasks, Please add new tasks!!</h1> : listOfIncompleteTasks.map((task,i) => <TaskCard title = {listOfIncompleteTasks[i].name} time = {listOfIncompleteTasks[i].time} disabled = {false}/>)
      }
    </div>
  </div>
  )
}

export default Incompleted;
