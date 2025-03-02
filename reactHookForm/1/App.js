// Lesson 1: Introduction to React Hook Form & Setup
// npm install react-hook-form
import { useForm } from "react-hook-form";

function App() {
  // useForm hook to handle form data
  // useForm(): Initializes React Hook Form in your component and provides functions like register (for registering input fields) and handleSubmit (for handling form submission).
  const { register, handleSubmit } = useForm();

  // Submit handler function
  const onSubmit = (data) => {
    console.log(data); // Output form data to console
  };

  return (
    // When you use handleSubmit(onSubmit), React Hook Form intercepts the form submission and prevents the default behavior, so you don't need to manually call e.preventDefault() as you would in a typical form submission.
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
      <input {...register("name")} placeholder="Enter your name" />

      <label>Email:</label>
      <input {...register("email")} placeholder="Enter your email" />

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
