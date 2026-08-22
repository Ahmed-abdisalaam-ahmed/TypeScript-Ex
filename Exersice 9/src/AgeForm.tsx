import { useState } from "react";

interface AgeProps {
  onSubmit: (age: number | null) => void;
}

const AgeForm = ({ onSubmit }: AgeProps) => {

  const [inputAge , setInputAge] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(inputAge)
  }
  return (
    <div>
      <h1>Age Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" name="age" value={inputAge ?? undefined} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setInputAge(Number(e.target.value))} placeholder="Enter your age" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AgeForm