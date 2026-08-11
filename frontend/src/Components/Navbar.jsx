import { PlusIcon, LogOutIcon } from 'lucide-react';
import { Link } from "react-router";
import miku from "../assets/pngwing.com (2).png";

const Navbar = () => {
  // Check if a token exists to determine auth state
  const isAuthenticated = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login"; // Redirect to login
  };

  return (
    <header className='bg-base-300 border-b border-base-content/10'>
      <div className='mx-auto max-w-6xl p-4'>
        <div className='flex items-center justify-between'>
          <div className="flex items-center">
            <img className='w-12 h-12 mr-2' src={miku} alt="miku"></img>
            <Link to="/"><h1 className="text-3xl font-bold text-primary font-mono tracking-tight">Thinkbook</h1></Link>
          </div>
          
          <div className='flex items-center gap-4'>
            {isAuthenticated ? (
              <>
                <Link to={"/create"} className="btn btn-primary btn-sm md:btn-md">
                  <PlusIcon className='size-5'/>
                  <span className="hidden md:inline">New Note</span>
                </Link>
                <button onClick={handleLogout} className="btn btn-ghost btn-sm md:btn-md text-error">
                  <LogOutIcon className="size-5" />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </>
            ) : (
              <Link to={"/login"} className="btn btn-primary">Login</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


// import { PlusIcon } from 'lucide-react';
// import React from 'react';
// import {Link} from "react-router";
// import miku from "../assets/pngwing.com (2).png";

// const Navbar = () => {
//   return (
//     <header className='bg-base-300 border-b border-base-content/10'>
//     <div className='mx-auto max-w-6xl p-4'>
//             <div className='flex items-center justify-between'>
//               <img className='size-25' src={miku} alt="miku"></img>
//                 <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">Thinkbook</h1>
//             <div className='flex items-center gap-4'>
//                 <Link to={"/create"} className="btn btn-primary">
//                 <PlusIcon className='size-5'/>
//                 <span>New Note</span>
//                     </Link>
//             </div>
//             </div>
//     </div>

//     </header>
//   )
// }

// export default Navbar;