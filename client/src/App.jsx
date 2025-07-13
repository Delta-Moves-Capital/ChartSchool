import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center p-6 space-y-10 font-sans">
      
      <div className="flex space-x-10 animate-fade-in">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={viteLogo}
            className="h-20 drop-shadow-xl transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_20px_#646cff]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            className="h-20 drop-shadow-xl transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_20px_#61dafb]"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-4xl font-extrabold tracking-tight text-center">
        Vite + React + <span className="text-cyan-400">Tailwind</span>
      </h1>

      <div className="bg-gray-800 rounded-xl p-6 shadow-lg text-center w-72">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800 transition-colors text-white text-lg font-medium py-2 px-4 rounded w-full"
        >
          Count is {count}
        </button>
        <p className="text-gray-400 text-sm mt-3">
          Edit <code className="text-pink-400">src/App.jsx</code> and save to test HMR (It works!)
        </p>
      </div>

      <p className="text-sm text-gray-500 italic">
        Click on the logos to learn more 
      </p>
    </div>
  );
}
