import React from 'react';

const Page: React.FC = () => {
    console.log('DashboardPage component rendered');
    return (
        <>
            <div className="flex h-full">

                <aside className="w-64 bg-white shadow-md p-4 hidden md:block" style={{ background: '#23333f' }}>
                    <div className="flex w-full justify-end">
                        <button className="bg-gray-200 rounded-lg px-3 py-1 text-sm text-gray-700 hover:bg-gray-300">
                            New
                        </button>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <h2 className="text-sm items-center text-white">test@user.com</h2>
                        <div>
                            <button className="bg-gray-200 rounded-lg px-3 py-1 text-[12px] text-gray-700 hover:bg-gray-300">
                                Logout
                            </button>
                        </div>
                    </div>
                    <nav className="flex flex-col gap-4 mt-4">
                        <a 
                            href="#" 
                            className="text-white hover:text-blue-600 text-sm"

                        >
                            a girl crying
                        </a>
                    </nav>
                </aside>

                <div className="flex-1 flex flex-col">
                    
                    <header className="bg-white shadow p-4 flex justify-between items-center">
                        <h1 className="text-xl font-semibold">AI Image Generator</h1>
                    </header>

                    <main className="flex-1 p-6 h-[calc(100vh-4rem)] overflow-y-auto">
                        


                        <div className="">
                            <div className="flex flex-col gap-4">
                                
                                


                                <div className="space-y-4 bg-white p-4 rounded-lg shadow">
                                    <h2 className="text-xl font-semibold text-gray-700">Reference Images</h2>
                                    <label className="flex items-center gap-2">
                                    <input type="checkbox" checked className="toggle toggle-primary" />
                                    <span className="text-sm">Use global references</span>
                                    </label>
                                    <div className="border border-gray-300 rounded-lg h-32 flex items-center justify-center flex-col text-gray-500 text-sm">
                                    <p className="text-sm">Drop reference images here or</p>
                                    <input type="file" className="hidden" id="fileInput" />
                                    <button className="mt-2 px-4 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm">Upload</button>
                                    </div>
                                </div>
                            
                                <div className="space-y-4 bg-white p-4 rounded-lg shadow">
                                    <h2 className="text-xl font-semibold text-gray-700">Create Paintings</h2>
                                    <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-600">Title:</label>
                                    <input type="text" className="w-full border rounded p-2 text-sm" placeholder="a girl crying" />
                                    </div>
                                    <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-600">Custom Instructions:</label>
                                    <textarea className="w-full border rounded p-2 text-sm" placeholder="make all the images in the style of mona lisa"></textarea>
                                    {/* <textarea className="w-full border rounded p-2 text-sm" rows="2" placeholder="make all the images in the style of mona lisa"></textarea> */}
                                    </div>
                                    <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-600">Number of Paintings:</label>
                                    <input type="number" min="1" max="10" className="w-24 border rounded p-2 text-sm" value="5" />
                                    </div>
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Generate Paintings</button>
                                </div>
                            
                                <div className="space-y-4 bg-white p-4 rounded-lg shadow">
                                    <h2 className="text-xl font-semibold text-gray-700">Generated Paintings</h2>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                                    <div className="border rounded-lg shadow p-2 flex flex-col items-center text-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg" className="w-full h-40 object-cover rounded" />
                                        <div className="mt-2 text-sm text-gray-600">In the Mona Lisa style, a Renaissance girl mourns...</div>
                                        <div className="mt-2 flex gap-2 text-sm">
                                        <a href="#" className="text-blue-600 hover:underline text-sm">Download</a>
                                        <a href="#" className="text-blue-600 hover:underline text-sm">Regenerate</a>
                                        </div>
                                    </div>
                                    <div className="border rounded-lg shadow p-2 flex flex-col items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg" className="w-full h-40 object-cover rounded" />
                                        <div className="mt-2 flex gap-2 text-sm">
                                        <a href="#" className="text-blue-600 hover:underline">Download</a>
                                        <a href="#" className="text-blue-600 hover:underline">Regenerate</a>
                                        </div>
                                    </div>
                                    <div className="border rounded-lg shadow p-2 flex flex-col items-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg" className="w-full h-40 object-cover rounded" />
                                        <div className="mt-2 flex gap-2 text-sm">
                                        <a href="#" className="text-blue-600 hover:underline">Download</a>
                                        <a href="#" className="text-blue-600 hover:underline">Regenerate</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>




                            </div>

                        </div>

                    </main>

                </div>
            </div>
        </>
    );
};

export default Page;