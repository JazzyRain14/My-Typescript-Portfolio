// import React from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import AllProjects from "./pages/AllProjects"
import AboutMe from "./pages/AboutMe"
import Todo from "./pages/ToDoAPP/Todo"
import TasteBook from "./pages/TasteBook/TasteBook"
import MealDetail from "./pages/MealDetail"

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow flex items-center justify-center p-2 md:px-12 md:py-5 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todoapp" element={<Todo/>} />
          <Route path="/taste-book" element={<TasteBook />} />
          <Route path="/meal/:id" element={<MealDetail />} />
          <Route path="/bookshelf" element={<AllProjects/>} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
