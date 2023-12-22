import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='h-screen max-w-screen-xl mx-auto'>
            <Link to={`/create`}>
                <button className='btn text-white bg-red-500 hover:bg-red-400'>Create Task</button>
            </Link>
        </div>
    );
};

export default Dashboard;