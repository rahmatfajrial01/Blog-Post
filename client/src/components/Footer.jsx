import React from 'react'

const Footer = () => {
    return (
        <footer className=' bg-black text-white mx-auto py-10 flex justify-center mt-10'>
            <section className='container mx-auto grid md:grid-cols-4 grid-cols-2 gap-7'>
                <div className='flex flex-col items-center'>
                    <div className="">
                        <h3 className="text-dark-light font-bold md:text-lg">Product</h3>
                        <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
                            <li>
                                <a href="/">Landingpage</a>
                            </li>
                            <li>
                                <a href="/">Features</a>
                            </li>
                            <li>
                                <a href="/">Documentation</a>
                            </li>
                            <li>
                                <a href="/">Referral Program</a>
                            </li>
                            <li>
                                <a href="/">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className="">
                        <h3 className="text-dark-light font-bold md:text-lg">Service</h3>
                        <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
                            <li>
                                <a href="/">Documentation</a>
                            </li>
                            <li>
                                <a href="/">Design</a>
                            </li>
                            <li>
                                <a href="/">Themes</a>
                            </li>
                            <li>
                                <a href="/">Illustrations</a>
                            </li>
                            <li>
                                <a href="/">UI Kit</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className="">
                        <h3 className="text-dark-light font-bold md:text-lg">Company</h3>
                        <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
                            <li>
                                <a href="/">About</a>
                            </li>
                            <li>
                                <a href="/">Terms</a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/">Referral Program</a>
                            </li>
                            <li>
                                <a href="/">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className="">
                        <h3 className="text-dark-light font-bold md:text-lg">More</h3>
                        <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
                            <li>
                                <a href="/">Documentation</a>
                            </li>
                            <li>
                                <a href="/">License</a>
                            </li>
                            <li>
                                <a href="/">Changelog</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <span className='flex items-center h-full'>
                    footer
                </span>
                <span className='flex items-center h-full'>
                    footer
                </span>
                <span className='flex items-center h-full'>
                    footer
                </span> */}
            </section>

        </footer>
    )
}

export default Footer