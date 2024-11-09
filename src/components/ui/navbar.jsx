
import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from './themeChangeBtn';

const Navbar = () => {

    return (
        <nav className=" bg-background/50 sticky top-0 backdrop-blur border-b z-50 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex-1">
                        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white font-serif">
                            AHArman
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            <Link href="/" className="py-4 px-2 text-gray-800 hover:text-blue-800 dark:text-white hover:scale-105 transition duration-300 ">
                                Home
                            </Link>
                            <Link href="/about" className="py-4 px-2 text-gray-800 hover:text-blue-800 dark:text-white hover:scale-105 transition duration-300">
                                About
                            </Link>
                            <Link href="/work" className="py-4 px-2 text-gray-800 hover:text-blue-800 dark:text-white hover:scale-105 transition duration-300">
                                Work
                            </Link>
                            <Link href="/portfolio" className="py-4 px-2 text-gray-800 hover:text-blue-800 dark:text-white hover:scale-105 transition duration-300">
                                Portfolio
                            </Link>
                            <Link href="/contact" className="py-4 px-2 text-gray-800 hover:text-blue-800 dark:text-white hover:scale-105 transition duration-300">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Theme Change BUtton */}
                    <div className='ml-4 mr-3'>
                        <ModeToggle/>
                    </div>

                     {/* Mobile Menu Button */}
                     <div className='md:hidden flex items-center '>
                        <div className='mt-2'>
                            <Sheet >
                                <SheetTrigger>
                                    <div className="">
                                        <button>
                                            <svg
                                                className="w-6 h-6 text-gray-800 dark:text-white"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            ><path d="M4 6h16M4 12h16M4 18h16" /></svg>
                                        </button>
                                    </div>
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetDescription>
                                            <div className="flex flex-col items-center py-2 justify-center">
                                                <Link href="/"
                                                    className=" px-2 py-2 text-gray-800 dark:text-white hover:text-gray-600 transition duration-300 w-full flex justify-start">
                                                    Home
                                                </Link>
                                                <Link href="/about"
                                                    className="flex justify-start px-2 py-2 text-gray-800 dark:text-white hover:text-gray-600 transition duration-300 w-full">
                                                    About
                                                </Link>
                                                <Link href="/contact"
                                                    className="flex justify-start px-2 py-2 text-gray-800 dark:text-white hover:text-gray-600 transition duration-300 w-full">
                                                    Work
                                                </Link>
                                                <Link href="/contact"
                                                    className="flex justify-start px-2 py-2 text-gray-800 dark:text-white hover:text-gray-600 transition duration-300 w-full">
                                                    Portfolio
                                                </Link>
                                                <Link href="/contact"
                                                    className="flex justify-start px-2 py-2 text-gray-800 dark:text-white hover:text-gray-600 transition duration-300 w-full">
                                                    Contact
                                                </Link>
                                            </div>
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </div>

                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;