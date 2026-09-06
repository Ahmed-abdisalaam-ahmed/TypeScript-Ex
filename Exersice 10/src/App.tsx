import useNumberStorage from "./hooks/useNumberStorage"



const App = () => {

    const [score , setScore] = useNumberStorage("numberScore", 999);

  return (
    <div>
      <p>{score}</p>
      <button onClick={()=> setScore(score + 1)}>increment</button>


    </div>
  )
}

export default App