import AgeForm from "./AgeForm";
import ContactForm from "./ContactForm";
import EmailForm from "./EmailForm"


const App = () => {

  const handleSubmitEmail = (email: string) => {
    console.log("Email submitted:", email);
  }

  const handleSubmitAge = (age: number | null) => {
    if (age === null) {
      return alert("Please enter your age.");
    }
    if (age < 18) {
      return alert("You must be at least 18 years old to submit this form.");
    }
    console.log("Age submitted:", age);
  }
  const handleSubmitContact = (data: { name: string; email: string }) => {
    console.log("Contact submitted:", data);
  }

  return (
    <div>
      <EmailForm onSubmit={handleSubmitEmail}/>
      <AgeForm  onSubmit={handleSubmitAge}/>
      <ContactForm onSubmit={handleSubmitContact}/>
    </div>
  )
}

export default App