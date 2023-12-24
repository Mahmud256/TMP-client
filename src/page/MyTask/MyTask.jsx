import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import MyTaskCard from './MyTaskCard';
import Swal from 'sweetalert2';

const MyTask = () => {
    const loadedTasks = useLoaderData(); // Assuming useLoaderData is a custom hook for loading tasks
    const [tasks, setTasks] = useState(loadedTasks);
    const { user } = useContext(AuthContext);


    const url = `https://tmp-server-zeta.vercel.app/task?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    const creatorTasks = data.filter(item => item.creator === user.email);
                    setTasks(creatorTasks);
                }
            });
    }, []);
    const handleRemove = (_id) => {
        const taskToDelete = tasks.find((task) => task._id === _id);

        if (taskToDelete && taskToDelete.creator === user?.email) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://tmp-server-zeta.vercel.app/task/${_id}`, {
                        method: 'DELETE',
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.deletedCount > 0) {
                                Swal.fire('Deleted!', 'Your Task has been deleted.', 'success');
                                const remaining = tasks.filter((task) => task._id !== _id);
                                setTasks(remaining);
                            }
                        });
                }
            });
        } else {
            Swal.fire('Access Denied', 'You do not have permission to delete this task.', 'error');
        }
    }
    return (
        <div className='h-screen max-w-screen-xl mx-auto'>
            <div className='max-w-[1300px] mx-auto'>

                {tasks.length > 0 ? (
                    <div>
                        <h2 className='text-lg font-medium text-center'>My Task</h2>
                        <div className="flex justify-around py-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                                {tasks.map((task) => (
                                    <MyTaskCard
                                        key={task._id}
                                        task={task}
                                        handleRemove={handleRemove}
                                        setTasks={setTasks}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="text-center h-screen flex flex-col justify-center items-center">No Data found</p>
                )}
            </div>
        </div>
    );
};

export default MyTask;