import React from 'react'
import Completed from './Completed'
import Incompleted from './Incompleted'

const TaskContainer = () => {
  return (
    <div className='bg-blue-50'>
      <div>
      <Incompleted />
      <Completed />
      </div>
    </div>
  )
}

export default TaskContainer
