import { useContext, useState } from "react"
import "./App.css"



import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Login } from "./pages/Login"
import Navbar from "./component/Navbar"
import { NotFound } from "./component/NotFound"
import { Product } from "./pages/Product"
import { AddProduct } from "./pages/AddProduct"
import themeContext from "./context/themeContext";


function App() {
 
const {theme}=useContext(themeContext)


  // Ass
  // create three component for each card 
  // use one css module for the three card
  return (
    <div className={`app ${theme}`}>
      {/* <UsestateComponent />
      <Userlist />
      <div className="container">
        <h1 style={{ color: "yellow", backgroundColor: "black" }}>Hello world</h1>
        <h1 style={h1}>Another h1</h1>
        <p className={second.container}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et recusandae dolorem, eius repudiandae nulla itaque voluptatum neque illo aliquam cumque odit tenetur in, delectus temporibus optio sapiente atque tempore?</p>
      </div>
      <div className={second.box}></div>
      <Button text={"submit"} />
      <Button text={"Log In"} /> */}
      {/* <div>
        <TodoInput setarr={setTodoArray} arr={todoArray} />
        <TodoList arr={todoArray} />
      </div> */}
      {/* <Timer /> */}
      <Navbar />
      <Routes>
        {/* <Route path="/home" element={<h1>This is home page</h1>} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="*" element={<NotFound />} />

      </Routes>


    </div>
  )
}

export default App