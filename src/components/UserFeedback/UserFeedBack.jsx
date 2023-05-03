import React from 'react';

const UserFeedBack = () => {
    return (
        <section
            className=" container mx-auto  bg-gradient-to-r from-orange-600 to-orange-400 flex  justify-between  items-center flex-col md:flex-row py-20 mt-20 rounded-lg ">

            <div className=" w-5/6 md:w-2/6 text-start pl-9 text-white font-semibold space-y-3">
                <h1 className="text-4xl">User FeedBack</h1>
                <p className="text-sm">we have archive 100k+ of user archive..many user have been halpfull when user oparate this application  When providing feedback, it's important to consider the context in here some commants apper </p>
                <button className="bg-slate-100 px-3 py-2 rounded-lg text-gray-800">Show all</button>
            </div>


            <div className="md:w-3/6 w-5/6 space-y-16 relative">

                <div className="bg-slate-100 rounded-lg p-5 ring-2 ring-lime-400 w-4/5 opacity-40 hidden md:block">
                    <p>It's important to remember   even if you had a negative experience with the application.
                     Consider the context: When providing feedback, it's important to consider the context in which you used the application.if you were using the application device, this could   feedback</p>
                        <h4>muhammad zabbar</h4>
                        
                </div>
                <div className="bg-slate-100 rounded-lg p-5 ring-2 ring-lime-400 w-4/5 opacity-40 hidden md:block">
                    <p>It's important to remember   even if you had a negative experience with the application.
                        Consider the context: When providing feedback, it's important to consider the context in which you used the application.if you were using the application device, this could   feedback</p>
                        <h4>muhammad zabbar</h4>
                       
                </div>

                <div
                    className="bg-slate-100 rounded-lg p-5 ring-2 ring-lime-400 md:w-4/5 md:absolute md:top-[50px] md:-left-40">
                    <p>It's important to remember   even if you had a negative experience with the application.
                        Consider the context: When providing feedback, it's important to consider the context in which you used the application.if you were using the application device, this could   feedback</p>
                        <h4 className="text-2xl">muhammad zabbar</h4>
        
                </div>
            </div>


        </section>

    );
};

export default UserFeedBack;