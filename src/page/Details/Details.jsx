import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';

const Details = () => {
    const details = useLoaderData();
    const [task, setTask] = useState();
    const { _id } = useParams()

    useEffect(() => {
        const findTask = details?.find((task) => task._id == _id);
        setTask(findTask);
    }, [_id, details])

    return (
        <div>
            {
                <DetailsCard task={task} ></DetailsCard>
            }
        </div>
    );
};

export default Details;