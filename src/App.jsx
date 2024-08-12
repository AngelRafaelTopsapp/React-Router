import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <header className="bg-cyan-200 w-full py-4">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          React Router
        </h1>
      </header>
      <Navbar />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
}

export default App;
