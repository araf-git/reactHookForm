import { useForm } from "react-hook-form";

function App() {

    const { register, handleSubmit } = useForm();

  // Submit handler function
  const onSubmit = (data) => {
    console.log(data); // Output form data to console
  };

  return (
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







// Lesson 2: Registering Fields and Basic Form Structure
// In React Hook Form, you register form fields using the register function. This allows React Hook Form to manage the state of the inputs and handle validation.
// Each input must have a unique name, which will be used to store its value in the form data.
// {/* <input {...register("name")} placeholder="Enter your name" /> */}
// This will register the input with the name "name," and React Hook Form will manage its state.
// The name provided here will be used to access this field's value when the form is submitted.
// You can easily add more fields by calling register with different names (e.g., "email", "password", etc.).
// When the form is submitted, React Hook Form collects the data from all registered fields and passes it to your onSubmit handler.







// The {...register()} syntax uses spread syntax in JavaScript. It allows you to pass all the properties returned by register() directly to the input element. This is how React Hook Form integrates with the DOM elements in a simple and efficient way.
// Here's why it's done this way:
// 1. Spreads all necessary props:
// register() returns an object with several properties (like onChange, onBlur, ref, etc.), and using {...register()} spreads those properties onto the input field. This ensures that all necessary handlers and references for the input are properly set up, without you having to manually specify each one.
// 2. Simplifies code:
// It allows you to avoid manually passing props like onChange, onBlur, value, etc., to each field. React Hook Form automatically manages these things for you.



// Without spread syntax:

// {/* <input
//   value={value}
//   onChange={handleChange}
//   onBlur={handleBlur}
//   ref={register}
// /> */}


// With spread syntax:

// {/* <input {...register("name")} /> */}
// The register("name") will automatically handle the value, onChange, onBlur, and ref for that field.


