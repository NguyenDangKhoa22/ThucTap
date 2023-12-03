'use client'
import { pages } from 'next/dist/build/templates/app-page';
import React, { useState } from 'react';

interface Task {
  id: number;
  text: string;
  status: string;
}

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const [getText, setText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (getText.trim() !== '') {
      const newTask: Task = { id: tasks.length + 1, text: getText, status: 'Đang làm' };
      setTasks([...tasks, newTask]);
      setText('');
    }
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className='text-4xl'>To Do List</h1>
      <div className='mb-4'>
        <table>
          <thead>
            <tr>
              <th className='border border-black p-2'>#</th>
              <th className='border border-black p-2'>Công việc</th>
              <th className='border border-black p-2'>Trạng thái</th>
              <th className='border border-black p-2'>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td className='border border-black p-2'>{task.id}</td>
                <td className='border border-black p-2'>{task.text}</td>
                <td className='border border-black p-2'>{task.status}</td>
                <td className='border border-black p-2'>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <form action="" className='flex items-center'>
        <table className='table-fixed border border-black'>
          <thead>
            <tr>
              <th className="border border-black p-2"> </th>
              <th className="border border-black p-2">Công việc</th>
              <th className="border border-black p-2">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-2">
                <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
              </td>
              <td className="border border-black p-2">
                <input
                  type="text"
                  className='text-black focus:text-black'
                  value={getText}
                  onChange={(e) => setText(e.target.value)}
                />
              </td>
              <td className="border border-black p-2">Đang làm</td>
            </tr>
          </tbody>
        </table>
      </form>
      <button
          type="button"
          onClick={addTask}
          className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
    </main>
  );
}