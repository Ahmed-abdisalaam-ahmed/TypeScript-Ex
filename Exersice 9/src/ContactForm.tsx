import { useState } from "react"
interface ContactFormProps {
  onSubmit(data: { name: string; email: string }): void
}

const ContactForm = ({ onSubmit }: ContactFormProps ) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, email });
  };

  return (
    <div>
      <h1>Contact Form</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
            <input type="text"  value={name} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} placeholder="Enter your name Pls" />
        <label htmlFor="email">Email:</label>
            <input type="email" value={email} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} placeholder="Enter your email Pls" />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ContactForm