import React from 'react';
import { SocialPattern } from "./SocialPattern";
export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
       
        {/* <img className="h-8 w-8 rounded-full" src="/twitter-logo.png" alt="Twitter Logo" /> */}
        <nav>
          <ul className="flex space-x-4">
            <li><a className="font-bold text-blue-500 hover:text-blue-600" href="/">Home</a></li>
            <li><a className="font-bold text-blue-500 hover:text-blue-600" href="/explore">Explore</a></li>
            <li><a className="font-bold text-blue-500 hover:text-blue-600" href="/notifications">Notifications</a></li>
            <li><a className="font-bold text-blue-500 hover:text-blue-600" href="/messages">Messages</a></li>
          </ul>
        </nav>
      </div>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600">Tweet</button>
    </header>
  );
};