import React from 'react'

const User = () => {
    return (
        <section className='pt-5 bg-slate-50 w-full '>
            <div className="px-4  sm:px-8">
                <div className="">
                    <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
                        <span className=" p-3 font-semibold">
                            User
                        </span>
                        <div className="">
                            <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                                <div className=" relative ">
                                    <input type="text" id="&quot;form-subscribe-Filter" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name" />
                                </div>
                                <button className="px-3 py-2  text-white bg-purple-600 rounded-xl hover:opacity-85 " type="submit">
                                    Filter
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            User
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Programer
                                            </p>
                                        </td>

                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 space-x-3">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                Edit
                                            </a>
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                Hapus
                                            </a>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            {/* <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                                <div className="flex items-center">
                                    <button type="button" className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100">
                                        <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                            </path>
                                        </svg>
                                    </button>
                                    <button type="button" className="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 ">
                                        1
                                    </button>
                                    <button type="button" className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
                                        2
                                    </button>
                                    <button type="button" className="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100">
                                        3
                                    </button>
                                    <button type="button" className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
                                        4
                                    </button>
                                    <button type="button" className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100">
                                        <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default User