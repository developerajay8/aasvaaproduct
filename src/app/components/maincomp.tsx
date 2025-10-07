import React from 'react';
import Rightview from './rightview';
import Header from './header';

const Maincomp = () => {
    return (
        <div>
            <div className="w-full h-screen overflow-hidden">
            <div className="flex">
                <div className='w-[7%] bg-[#1E1E1E] py-[24px] px-[24.5px] flex flex-col justify-between overflow-y-auto h-screen '>
                <Header/>
                </div>


{/* Right Section */}
                <div className="bg-[#F9F9F9] w-full pt-[30px] h-screen flex flex-col">
                <Rightview/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Maincomp;
