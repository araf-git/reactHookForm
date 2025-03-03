import { useEffect } from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, setValue } = useForm();

  // Example: Update form values on mount
  useEffect(() => {
    setValue("name", "John Doe"); // Programmatically set value for 'name' field
  }, [setValue]);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
      <input {...register("name")} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default App;



// Lesson 9: Optimizing Performance with useEffect.

// In React Hook Form, you might use useEffect for tasks like:

// Updating form values programmatically.
// Resetting the form based on certain conditions.
// Handling external data updates (e.g., API response).



// Key Points:
// setValue: Used to programmatically set form values.
// useEffect: Runs once after the component mounts, useful for data population or resetting values.




// Conclusion:
// Using useEffect with React Hook Form is helpful when you need to handle side effects, like setting form data after fetching from an API.