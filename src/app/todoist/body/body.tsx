'use client'
import React, { useState } from 'react';
import HeaderToDo from '../header/header';

interface Task {
    id: number,
  name: string;
  description: string;
}

const BodyToDo = (): JSX.Element => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task>({ id: 1, name: '', description: '' });
  const [lastId, setLastId] = useState(1);

  const handleAddTask = () => {
      setTasks([...tasks, newTask]);
      setNewTask({ id: lastId + 1, name: '', description: '' });
      setLastId(lastId + 1);
  };
  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <>
    <HeaderToDo tasksCount={tasks.length}/>
      <div className='px-14'>
        {tasks.map((task) => (
          <div key={task.id} className='mx-auto w-2/4 border-b mb-9'>
            <div className='flex'>
              <div className='flex flex-1'>
                <div className='flex'>
                  <div>
                  <button className="w-5 h-5 bg-white border-2 border-black rounded-full flex items-center justify-center"
                  onClick={()=>{deleteTask(task.id),alert("success task")}}></button>
                  </div>
                  <div className='ml-2'>
                    <div>{task.name}</div>
                    <div>{task.description}</div>
                  </div>
                </div>
              </div>
              <div>
                <button onClick={() =>deleteTask(task.id)}>delete</button>
              </div>
            </div>
          </div>
        ))}
        <div className="mx-auto w-2/4 mb-9 border p-4 rounded-md">
          <form className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
            <div className="space-y-2">
              <div>
                <input
                  type="text"
                  className="mt-1 p-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter task name"
                  onChange={(e) => setNewTask({...newTask,name:e.target.value})}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="mt-1 p-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter task description"
                  onChange={(e) => setNewTask({...newTask,description:e.target.value})}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button className="mr-2 px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-gray-300">
                Cancel
              </button>
              <button
                className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
                onClick={handleAddTask}
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </>
  );
}

export default BodyToDo;
