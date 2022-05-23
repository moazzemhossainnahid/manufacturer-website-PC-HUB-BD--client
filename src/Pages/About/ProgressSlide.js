import React from 'react';


const ProgressSlide = () => {
    return (
        <div className='text-left h-full w-full mx-auto py-10'>
                
                <h1 tabIndex={0} className="text-6xl font-bold leading-0 text-center text-gray-800">
                    What <span className="text-accent">I Know</span>
                </h1>

            <div className="mx-auto flex flex-col justify-center items-center">
                <div className="w-5/6 md:w-4/6 lg:w-3/6 border-2 rounded-lg p-10 m-10 shadow-lg">

                    <div className="mb-1 text-base font-medium">HTML</div>
                    <div className="w-full mb-2 bg-gray-200 rounded-full h-4">
                    <div className="bg-gray-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "95%"}}> 95%</div>
                    </div>

                    <div className="mb-1 text-base font-medium text-blue-700">CSS</div>
                    <div className="w-full mb-2 bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "89%"}}> 89%</div>
                    </div>

                    <div className="mb-1 text-base font-medium text-red-700">Bootstrap</div>
                    <div className="w-full mb-2 bg-gray-200 rounded-full h-4">
                    <div className="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "90%"}}> 90%</div>
                    </div>

                    <div className="mb-1 text-base font-medium text-green-700">Tailwind</div>
                    <div className="w-full mb-2 bg-gray-200 rounded-full h-4">
                    <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "75%"}}> 75%</div>
                    </div>

                    <div className="mb-1 text-base font-medium text-yellow-700">JavaScript</div>
                    <div className="w-full mb-2 bg-gray-200 rounded-full h-4">
                    <div className="bg-yellow-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "87%"}}> 87%</div>
                    </div>

                    <div className="mb-1 text-base font-medium text-indigo-700">JQuery</div>
                    <div className="w-full mb-2 bg-gray-200 rounded-full h-4">
                    <div className="bg-indigo-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "65%"}}> 65%</div>
                    </div>

                    <div className="mb-1 text-base font-medium text-purple-700">React</div>
                    <div className="w-full mb-2 bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "68%"}}> 68%</div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ProgressSlide;