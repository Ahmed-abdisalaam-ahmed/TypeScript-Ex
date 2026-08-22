import { useState } from "react";
  interface EmailFormProps {
    onSubmit: (email: string) => void;
  }

const EmailForm = ({ onSubmit }: EmailFormProps) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(input)
  }
  return (
    <div>
        <h1>Email Form</h1>
        <form onSubmit={handleSubmit} >
            <input
                type="email"
                value={input}
                onChange={(e : React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                placeholder="Enter your email"
            />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default EmailForm