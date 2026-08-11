// App.jsx (or wherever your Routes are defined)
import {  Routes, Route, Navigate } from "react-router";

// Pages
import HomePage from "./pages/Homepage.jsx"; //[cite: 3]
import CreatePage from "./pages/Createpage.jsx"; //[cite: 3]
import NoteDetailPage from "./pages/Notedetailpage.jsx"; //[cite: 3]
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

// Components
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      {/* Toast notifications global container */}
      <Toaster position="top-center" reverseOrder={false} />
      
      <Routes>
        {/* --- Public Routes --- */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* --- Protected Routes --- */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/create" 
          element={
            <ProtectedRoute>
              <CreatePage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/note/:id" 
          element={
            <ProtectedRoute>
              <NoteDetailPage />
            </ProtectedRoute>
          } 
        />

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;


// import React from 'react';
// import { Routes,Route } from 'react-router';
// import toast from 'react-hot-toast';

// import Homepage from './pages/Homepage';
// import Createpage from './pages/Createpage';
// import Notedetailpage from './pages/Notedetailpage';
// const App = () => {
//   return (
//     // <div data-theme="forest">
//      <div className="relative h-full w-full">
//       <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
//       {/* <button onClick={()=> toast.success("congrats")} className='btn btn-outline'>Click me</button> */}
//       <Routes>
//         <Route path="/" element={<Homepage/>}/>
//         <Route path="/create" element={<Createpage/>}/>
//         <Route path="/note/:id" element={<Notedetailpage/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App;