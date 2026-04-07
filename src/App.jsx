import { useState } from "react"
import "./App.css"
import { Button } from "./Button"
import second from './Button.module.css'
import { TodoInput } from "./TodoInput"
import { TodoList } from "./TodoList"
import { Userlist } from "./UserList"
import { UsestateComponent } from "./UsestateComponent"

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
      <div>
        <TodoInput setarr={setTodoArray} arr={todoArray} />
        <TodoList arr={todoArray} />
      </div>

    </>
  )
}

export default App