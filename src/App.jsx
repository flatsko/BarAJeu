import { useState } from "react"

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
    setName(e.);
  }

  //affichage
  return (
    <div>
      <h1>Bonjour {name}</h1>
      <form>
        <input type="Text" placeholder="Utilisateur"></input>
        <button onClick={handleClick}>{count}</button>
      </form>
    </div>
  )
}
export default App