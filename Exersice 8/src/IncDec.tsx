import { useState } from "react"


const IncDec = () => {

      const [count, setCount] = useState<number>(0)

  return (
        <div className="max-w-7xl mx-auto p-4 text-center">
      <button onClick={()=> setCount(count + 1)} className="border p-2 mr-2 bg-green-400">increment me</button>
      <button onClick={()=> setCount(count - 1)} className="border p-2 mr-2 bg-red-400">decrement me</button>
      <p>{count}</p>
    </div>
  )
}

export default IncDec