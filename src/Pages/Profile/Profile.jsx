import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
    const {user} = use(AuthContext);
    console.log(user)
    const photoprofile = user?.photoURL;
    return (
        <div className="min-h-screen  bg-white text-black">
            <div className="bg-purple-200 h-40 w-full rounded-b-3xl relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 top-10">
                    <img
                        src={photoprofile}
                        alt="Profile"
                        className="w-56 h-56 rounded-full border-4 border-white shadow-md"
                    />
                </div>
            </div>

            <div className="mt-28 text-center">
                <h2 className="text-2xl font-bold">{user?.displayName}</h2>
                <p className="text-sm text-gray-500">Phone: </p>
                <p className="text-sm text-gray-500">Mail: {user?.email}</p>
            </div>

            <div className="mt-8 space-y-4">
                <div className="px-4 py-3 border-b flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A4 4 0 0112 14h0a4 4 0 016.879 3.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Profile details
                </div>

                <div className="px-4 py-3 border-b flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3a.75.75 0 00-.75.75V6h6V3.75a.75.75 0 00-.75-.75h-4.5zM4.5 6.75A2.25 2.25 0 016.75 4.5h10.5A2.25 2.25 0 0119.5 6.75v12.75a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.75z" /></svg>
                    Settings
                </div>

                <div className="px-4 py-3 flex items-center gap-2 text-red-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7" /></svg>
                    Log out
                </div>
            </div>
        </div>
    );
}

export default Profile
