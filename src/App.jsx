import { useState } from "react"
import "./App.css"
import { Button } from "./Button"
import second from './Button.module.css'
import { TodoInput } from "./TodoInput"
import { TodoList } from "./TodoList"
import { Userlist } from "./UserList"
import { UsestateComponent } from "./UsestateComponent"
import Timer from "./Timer"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import Navbar from "./component/Navbar"
import { NotFound } from "./component/NotFound"
import { Product } from "./pages/Product"
import { AddProduct } from "./pages/AddProduct"

function App() {
  const [todoArray, setTodoArray] = useState(['jkdsch']);
  console.log(todoArray);

  const h1 = {
    color: "yellow",
    backgroundColor: "black"
  }



  // Ass
  // create three component for each card 
  // use one css module for the three card
  return (
    <>
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
        <Route path="/contactpage" element={<Contact />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="*" element={<NotFound />} />

      </Routes>


    </>
  )
}

export default App