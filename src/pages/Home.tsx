import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-10 bg-base-100">

      {/* Hero section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-primary">
          React*TS Hub 🚀
        </h1>
        <p className="text-lg text-gray-600"> A collection of mini-projects built with React, TypeScript, Tailwind, and DaisyUI. Learn by doing!</p>

      </div>
      {/* GIF / Video Section */}
      <div className="mt-10 w-full flex justify-center">
        {/* Replace the src with your GIF or video embed */}
        <img
          src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
          alt="Project demo"
          className="rounded-xl shadow-lg max-w-xl w-full"
        />
      </div>

      {/* Projects Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <Link to="/todoapp" className="card shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-accent">📝 Todo App</h2>
          <p className="text-gray-500 mt-2">Plan, add and manage your tasks effectively.</p>
        </Link>

        <Link to="/taste-book" className="card shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-accent">🍽️ TasteBook</h2>
          <p className="text-gray-500 mt-2">Search meals by alphabet using TheMealDB API.</p>
        </Link>

        <Link to="/more" className="card shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-accent">🧪 Experiments</h2>
          <p className="text-gray-500 mt-2">More projects to practice TypeScript and React concepts.</p>
        </Link>
      </div>

      {/* Technologies Section */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold mb-2 text-secondary">Built with:</h3>
        <div className="flex flex-wrap gap-4 justify-center text-gray-600">
          <span className="badge badge-outline">React</span>
          <span className="badge badge-outline">TypeScript</span>
          <span className="badge badge-outline">Tailwind CSS</span>
          <span className="badge badge-outline">DaisyUI</span>
          <span className="badge badge-outline">TheMealDB API</span>
        </div>
      </div>
    </div>

  )
}
