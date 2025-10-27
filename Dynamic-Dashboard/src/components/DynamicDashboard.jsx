import React from 'react';

const userName = 'Frodo';
const isPremium = true

const DynamicDashboard = () => {
    return(
        <div>
            <h1 className='greeting'>Hello {userName}!</h1>
        </div>
    );
};

export default DynamicDashboard;