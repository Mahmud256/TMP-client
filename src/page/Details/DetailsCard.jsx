/* eslint-disable react/prop-types */
import { format } from 'date-fns';

const DetailsCard = ({ task }) => {
    const { _id, title, dueDate, taskLevel, description, taskImage } = task || {};
    const formattedDueDate = dueDate ? format(new Date(dueDate), 'dd/MM/yyyy') : '';


    return (
        <div>
            <div className="p-2 flex flex-col lg:flex-row justify-around bg-base-100 px-2">
                <div className='meh lg:w-[440px]'>
                    <figure><img className='w-full' src={taskImage} alt="" /></figure>
                    <div className='mah my-5'>
                        <div className="relative">
                            <h2 className="card_title text-start text-xl font-medium rounded p-2">
                                Level: {taskLevel}
                            </h2>
                            <h2 className="card_title text-start text-xl font-medium rounded p-2">
                                Due Date: {formattedDueDate}
                            </h2>
                        </div>
                    </div>
            </div>

            <div className="cardbody w-330px lg:w-[730px] pb-10">
                <h2 className="card-title text-2xl lg:text-4xl font-bold pb-3 capitalize">{title}</h2>
                <p className='text-base'>{description}</p>
            </div>
        </div>
        </div >
    );
};

export default DetailsCard;