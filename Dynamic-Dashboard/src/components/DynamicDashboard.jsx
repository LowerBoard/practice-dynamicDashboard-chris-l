import React from 'react';

const userName = 'Frodo';
const isPremium = true;
const tasks = [
    {
        taskName: 'taking out the trash',
        completed: true
    },
    {
        taskName: 'doing dishes',
        completed: true
    },
    {
        taskName: 'raking leaves',
        completed: false
    }
];

const DynamicDashboard = () => {
    return(
        <div>
            <h1 className='greeting'>Hello {userName}!</h1>
            {isPremium ? <h2>Thank you for being a Premium Member!</h2> : <h2>Upgrade to Premium to enjoy Exclusive Features!</h2>}
            {tasks.map((task) => task.completed ? <p>{task.taskName} - ✅</p> : <p>{task.taskName} - ❌</p>)}
        </div>
    );
};

export default DynamicDashboard;