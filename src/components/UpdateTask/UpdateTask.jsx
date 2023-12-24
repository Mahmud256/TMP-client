import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';

const UpdateTask = () => {
    const [dueDate, setDueDate] = useState(new Date());

    const task = useLoaderData();

    const { _id, title, dueDate: formattedDueDate, taskLevel, description, taskImage } = task || {};

    const handleUpdateTask = (event) => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const taskLevel = form.taskLevel.value;
        const description = form.description.value;
        const taskImage = form.photo.value;

        // Format the dueDate as "YYYY-MM-DD"
        const formattedDueDate = dueDate.toISOString().split('T')[0];

        const updatedTask = { title, dueDate: formattedDueDate, taskLevel, description, taskImage };
        console.log(updatedTask);

        // Send data to the server
        fetch(`https://tmp-server-zeta.vercel.app/task/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Update Task Success', {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            });
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
                        <h2 className='text-2xl font-extrabold text-center'>Update Task</h2>
                    </div>
                    <form onSubmit={handleUpdateTask}>

                        <div className="mb-4 form-control">
                            <label className="label text-gray-700 font-bold mb-2">Photo URL:</label>
                            <input
                                type="url"
                                id="photo"
                                name="photo"
                                defaultValue={taskImage}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter Photo URL"
                            />
                        </div>
                        <div className="mb-4 form-control">
                            <label className="label text-gray-700 font-bold mb-2">Task Title</label>
                            <input
                                type="text"
                                name="title"
                                defaultValue={title}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter Task Title"
                            />
                        </div>

                        <div className='flex gap-5'>
                            <div className="mb-4 form-control">
                                <label className="label text-gray-700 font-bold mb-2">Task Due Date</label>
                                <DatePicker
                                    selected={dueDate}
                                    defaultValue={dueDate}
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
                                        defaultValue={taskLevel}
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
                                defaultValue={description}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter Short Description"
                            ></textarea>
                        </div>

                        <input
                            type="submit"
                            value="Update Task"
                            className="btn btn-block bg-yellow-700 hover:bg-green-700 text-white"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateTask;
