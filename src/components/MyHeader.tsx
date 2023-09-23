// components/MyComponent.js

import React from 'react';

const MyHeader = () => {
    return (
        <>
            <nav className='flex items-center justify-start py-4 bg-pink-600 w-full m-0 '>
                <p className='text-white text-4xl font-bold ml-2'>mOOD TRACKER</p>
            </nav>

            <h2 className='font-semibold mt-10 mb-5 text-center' style={{ fontSize: '40px' }}>
                mOOD TRACKER
            </h2>
        </>
    );
};

export default MyHeader;