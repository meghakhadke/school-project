import React from 'react'
import { Link } from 'react-router'

function Footer() {
    return (
        <>
        <div className='w-11/12 mx-auto grid sm:grid-cols-3 grid-cols-1 gap-x-5 gap-y-5 py-5'>
            <div className="">
                <h2 className="text-left text-secondary text-2xl font-semibold underline underline-offset-8 decoration-gray-300 pb-5">
                    {" "}
                    School Address{" "}
                </h2>

                <p className="text-left text-primary">
                    <span className="text-2xl">Bhondawe Patil Public School </span>{" "}
                    <br />
                    Gut No. 49, Bajaj Nagar,MIDC, <br /> Waluj, Aurangabad – 431136.
                    (MH).
                </p>
                <p className="text-left text-primary">
                    Contact: 6232616161/ 6232717171
                </p>
                <p className="text-left text-primary">
                    Email: bhondawepatilschool@gmail.com
                </p>
            </div>

            <div className=" ">
                <h2 className="text-left text-secondary text-2xl font-semibold underline underline-offset-8 decoration-gray-300 pb-5">
                    {" "}
                    Quick Links
                </h2>

                <div className="grid grid-cols-1 gap-y-1">
                    <ul>
                        <Link to="/" >
                            <li
                                className="text-left text-primary cursor-pointer hover:font-semibold hover:text-secondary"

                            >
                                Home
                            </li>
                        </Link>

                        <Link to="/about" >
                            <li
                                className="text-left text-primary cursor-pointer hover:font-semibold hover:text-secondary"

                            >
                                About Us{" "}
                            </li>
                        </Link>
                        <Link to="/admission" >
                            <li
                                className="text-left text-primary cursor-pointer hover:font-semibold hover:text-secondary"

                            >
                                Admission{" "}
                            </li>
                        </Link>
                        <Link to="/mandatory-public-disclosure" >
                            <li
                                className="text-left text-primary cursor-pointer hover:font-semibold hover:text-secondary"

                            >
                                Mandatory Public Disclosure
                            </li>
                        </Link>
                        <Link to="/academic" >
                            <li
                                className="text-left text-primary cursor-pointer hover:font-semibold hover:text-secondary"

                            >
                                Academic{" "}
                            </li>
                        </Link>
                        <Link to="/achievement" >
                            <li
                                className="text-left text-primary cursor-pointer hover:font-semibold hover:text-secondary"

                            >
                                Achievement{" "}
                            </li>
                        </Link>
                        <Link to="/infrastructure" >
                            <li
                                className="text-left text-primary cursor-pointer hover:font-semibold hover:text-secondary"

                            >
                                Infrastructure{" "}
                            </li>
                        </Link>
                        <Link to="/gallery" >
                            <li
                                className="text-left text-primary cursor-pointer hover:font-semibold hover:text-secondary"

                            >
                                Gallery{" "}
                            </li>
                        </Link>
                        <Link to="/contact" >
                            <li
                                className="text-left text-primary cursor-pointer hover:font-semibold hover:text-secondary"

                            >
                                Contact Us{" "}
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>

            <div className=" ">
            <h3 className="text-left text-red-700 text-2xl font-semibold underline underline-offset-8 decoration-gray-300 pb-5">
              {" "}
              Follow Us on
            </h3>
            <div className="flex flex-row items-start justify-start space-x-2">
           
               
                  <img
                    className=" mr-1 cursor-pointer"
                    src="/images/icons/facebook.png"
                    alt=""
                    width={50}
                    height={50}
                  />
               
             
          
               
                  <img
                    className=" mr-1 cursor-pointer"
                    src="/images/icons/instagram.png"
                    width={50}
                    height={50}
                    alt=""
                  />
               
             
          
               
                  <img
                    className=" mr-1 cursor-pointer"
                    src="/images/icons/youtube.png"
                    width={50}
                    height={50}
                    alt=""
                  />
               
          
            </div>
          </div>

        </div>
        <div className="bg-secondary px-5">
          <div className="container mx-auto flex justify-center items-center py-1 text-sm text-white">
            <div className="hidden md:block">
              All Rights Reserved With Bhondawe Patil Public School{" "}
            </div>
          </div>
        </div>
        </>
    )
}

export default Footer