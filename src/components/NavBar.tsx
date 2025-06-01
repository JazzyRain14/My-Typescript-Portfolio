import { CiHome } from "react-icons/ci";
import { RiCodeView } from "react-icons/ri";
import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link to="/"><CiHome /> Welcome</Link></li>
                            <li>
                                <summary className="flex gap-2 items-center"><RiCodeView size={20} /> Projects</summary>
                                <ul className="p-2">
                                    <li><Link to="/todoapp">Todo App</Link></li>
                                    <li><Link to="/taste-book">Taste Book</Link></li>
                                    <li><Link to="/bookshelf">Book Shelf</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/aboutme">About Me</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl block max-sm:hidden">React * TS</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/" className="flex items-center gap-2 font-semibold"><CiHome size={20}/> Welcome</Link></li>
                        <li>
                            <details>
                                <summary className="flex items-center gap-2 font-semibold"><RiCodeView size={20}/> Projects</summary>
                                <ul className="p-2">
                                    <li><Link to="/todoapp">Todo App</Link></li>
                                    <li><Link to="/taste-book">Taste Book</Link></li>
                                    <li><Link to="/bookshelf">Book Shelf</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to="/aboutme" className="flex items-center gap-2 font-semibold">About Me</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl hidden max-sm:navbar-end">React * TS</a>
            </div>
        </>
    )
}
