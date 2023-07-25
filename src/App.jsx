import { useState } from "react"
import Login from "./component/pages/LoginForm";

function App() {
  //state
  const [name, setName] = useState("");
  const tableau = useState("ArnaudV1");
  const [count, setCount] = useState(1);

  //console.log(tableau)
  //comportement
  const handleClick = (e) => {
   e.preventDefault();
    setCount(count + 1);
    console.log(count);
    //setName(e.);
  }

  //affichage
  return   <Login />
    

}
export default App