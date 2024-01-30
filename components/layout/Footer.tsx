import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assests/Logo.webp";


export const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap justify-evenly md:text-left text-center -mb-10 -mx-4">
                        <div>
                            <Link href="/">
                                <Image src={logo} alt="Dinemarket" className="w-30" />
                            </Link>
                            <p className="font-sans text-lg leading-7 [&:not(:first-child)]:mt-6 mb-10">Small, artisan label that offers a<br />thoughtfully curated collection of high<br />quality everyday essentials made.</p>
                            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                                <a className="text-gray-500">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-7 h-7"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-7 h-7"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-7 h-7"
                                        viewBox="0 0 24 24"
                                    >
                                        <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={0}
                                        className="w-7 h-7"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="none"
                                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                        />
                                        <circle cx={4} cy={4} r={2} stroke="none" />
                                    </svg>
                                </a>
                            </span>

                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h3 className="font-sans text-gray-500 font-bold text-xl">
                                Company
                            </h3>
                            <nav className="list-none mb-6">
                                <li>
                                    <Link href={"#"} className="text-gray-600 hover:text-gray-800 font-sans text-lg">About</Link>
                                </li>
                                <li>
                                    <Link href={"#"} className="text-gray-600 hover:text-gray-800 font-sans text-lg">Terms of Use</Link>
                                </li>
                                <li>
                                    <Link href={"#"} className="text-gray-600 hover:text-gray-800 font-sans text-lg">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href={"#"} className="text-gray-600 hover:text-gray-800 font-sans text-lg">How it Works</Link>
                                </li>
                                <li>
                                    <Link href={"#"} className="text-gray-600 hover:text-gray-800 font-sans text-lg">Contact Us</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h3 className="font-sans text-gray-500 font-bold text-xl">
                                Support
                            </h3>
                            <nav className="list-none mb-6">
                                <li>
                                    <Link href={"#"} className="text-gray-600 hover:text-gray-800 font-sans text-lg">Support Carrer</Link>
                                </li>
                                <li>
                                    <Link href={"#"} className="text-gray-600 hover:text-gray-800 font-sans text-lg">24/7 Service</Link>
                                </li>
                                <li>
                                    <Link href={"#"} className="text-gray-600 hover:text-gray-800 font-sans text-lg">Quick Chat</Link>
                                </li>
                            </nav>

                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h3 className="font-sans text-gray-500 font-bold text-xl">
                                Contact
                            </h3>
                            <nav className="list-none mb-6">
                                <li>
                                    <Link href={"#"} className="text-gray-600 hover:text-gray-800 font-sans text-lg">Whattsapp</Link>
                                </li>
                                <li>
                                    <Link href={"#"} className="text-gray-600 hover:text-gray-800 font-sans text-lg">Email</Link>
                                </li>
                                <li>
                                    <Link href={"#"} className="text-gray-600 hover:text-gray-800 font-sans text-lg">Dial</Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="border-t p-4 border-gray-900 flex justify-around items-center">
                    <p className="text-lg text-gray-500">
                        Copyright © 2023<br /><span className="text-lg font-sans font-bold text-black">Dine Market</span></p>

                    <p className="text-lg text-gray-500">
                        Design by: <span className="text-lg font-sans font-bold text-black">Weird<br/>Design Studio</span>
                    </p>

                    <p className="text-lg text-gray-500">
                        Code by: <span className="text-lg font-sans font-bold text-black">Farrukh007<br/>on github</span>
                    </p>


                </div>
            </footer>

        </div>
    )
}

