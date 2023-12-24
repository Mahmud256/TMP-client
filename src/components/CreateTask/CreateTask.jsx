import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../providers/AuthProvider';


const CreateTask = () => {
    const [dueDate, setDueDate] = useState(new Date());
    const { user } = useContext(AuthContext);

    const handleCreateTask = (event) => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const taskLevel = form.taskLevel.value;
        const description = form.description.value;
        const taskImage = form.photo.value;

        // Format the dueDate as "YYYY-MM-DD"
        const formattedDueDate = dueDate.toISOString().split('T')[0];

        const c_task = { title, dueDate: formattedDueDate, taskLevel, description, taskImage };
        console.log(c_task);

        // Send data to the server
        const userEmail = user?.email;

        // Make the POST request with 'userEmail' as a query parameter
        fetch('https://tmp-server-zeta.vercel.app/task?email=' + userEmail, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(c_task), // 'taskData' should contain your task data
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    toast.success('Create Task Success', {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
                else {
                    toast.success('Create Task Success', {
                        position: toast.POSITION.TOP_CENTER
                    });
                }

            })
    };

    const handleDateSelect = (date) => {
        setDueDate(date);
    };

    return (
        <div>
            <ToastContainer />
            <div className='bg-[#331f64] p-4'>
                <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg">
                    <div className=''>
                        <h2 className='text-2xl font-extrabold text-center'>Create Task</h2>
                    </div>
                    <form onSubmit={handleCreateTask}>

                        <div className="mb-4 form-control">
                            <label className="label text-gray-700 font-bold mb-2">Photo URL:</label>
                            <input
                                type="url"
                                id="photo"
                                name="photo"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter Photo URL"
                            />
                        </div>
                        <div className="mb-4 form-control">
                            <label className="label text-gray-700 font-bold mb-2">Task Title</label>
                            <input
                                type="text"
                                name="title"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter Task Title"
                            />
                        </div>

                        <div className='flex gap-5'>
                            <div className="mb-4 form-control">
                                <label className="label text-gray-700 font-bold mb-2">Task Due Date</label>
                                <DatePicker
                                    selected={dueDate}
                                    onChange={handleDateSelect}
                                    dateFormat='dd/MM/yyyy'
                                    showTimeSelect={false}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                    placeholderText="Select Due Date"
                                />
                            </div>

                            <div className='w-[50%]'>
                                <div className="mb-4 form-control">
                                    <label className="label text-gray-700 font-bold mb-2">Task Level</label>
                                    <select
                                        id="taskLevel"
                                        name="taskLevel"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                    >
                                        <option value="easy">Low</option>
                                        <option value="medium">Moderate</option>
                                        <option value="hard">High</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        <div className="mb-4 form-control">
                            <label className="label text-gray-700 font-bold mb-2">Description:</label>
                            <textarea
                                id="description"
                                name="description"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter Short Description"
                            ></textarea>
                        </div>



                        <input
                            type="submit"
                            value="Create Task"
                            className="btn btn-block bg-yellow-700 hover:bg-green-700 text-white"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateTask;
