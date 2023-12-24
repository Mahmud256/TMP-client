/* eslint-disable react/prop-types */
import { format } from 'date-fns';
import { Link } from "react-router-dom";

const MyTaskCard = ({ task, handleRemove }) => {

    const { _id, title, dueDate, taskLevel, taskImage } = task || {};

    // Format the due date using date-fns
    const formattedDueDate = dueDate ? format(new Date(dueDate), 'dd/MM/yyyy') : '';


    return (
        <div>
            <div className="card lg:w-72 bg-base-100 border shadow" data-aos="flip-up">
                <figure>
                    <img className='h-40 w-96 lg:w-72' src={taskImage} alt="" />
                </figure>
                <div className="card-body p-4">
                    <h2 className="card_title text-center text-xl font-medium rounded p-2">
                        Title: {title}
                    </h2>
                    <h2 className="card_title text-start text-xl font-medium rounded p-2">
                        Level: {taskLevel}
                    </h2>
                    <h2 className="card_title text-center text-xl font-medium rounded p-2">
                        Due Date: {formattedDueDate}
                    </h2>
                </div>
                <div className="card-actions justify-center">
                    <Link to={`/details/${_id}`}>
                        <button className="btn bg-green-700 hover:bg-green-700 normal-case text-lg font-semibold text-[#fff]">Details</button>
                    </Link>
                    <Link to={`/updatetask/${_id}`}>
                        <button className="btn bg-orange-600 hover:bg-orange-600 normal-case text-lg font-semibold text-[#fff]">Edit Task</button>
                    </Link>
                    <button onClick={() => handleRemove(_id)} className="btn bg-red-600 hover:bg-yellow-600 normal-case text-lg font-semibold text-[#fff]">Delete Task</button>
                </div>
            </div>
        </div>
    );
};

export default MyTaskCard;