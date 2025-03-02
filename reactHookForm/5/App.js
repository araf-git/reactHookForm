import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

function App () {
  const { control, handleSubmit } = useForm();
  const [inputValue, setInputValue] = useState(""); // State to control the input

  const onSubmit = (data) => {
    console.log(data); // Output form data to console
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            value={inputValue} // Controlled value
            onChange={(e) => setInputValue(e.target.value)} // Update value manually
            placeholder="Enter your name"
          />
        )}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default App;





// Lesson 5: Integrating Controlled Inputs


// What Are Controlled Inputs?
// In React, a controlled input is an input element whose value is controlled by the component’s state. In React Hook Form, you can integrate controlled inputs, but React Hook Form’s goal is to minimize the need for controlling form inputs manually. However, if you want to control the input's value directly in your state, you can use React Hook Form’s Controller component.

// Why Use Controller?
// The Controller component allows you to use controlled components with React Hook Form while still benefiting from its optimization features (like reduced re-renders).

// Using Controller with Controlled Inputs:
// The Controller component is used to wrap your input field, allowing you to manually control the field's value via the React state while still leveraging React Hook Form's validation and form submission features.



// How It Works:
// Controller: The Controller component takes care of managing the input’s value, ensuring it integrates properly with React Hook Form’s state management.
// control={control}: The control prop is passed to the Controller to link it with the form state.
// render={({ field }) => ...}: The render function provides the field props (like onChange, value, etc.) that need to be passed to the input element.
// Controlled State: In the example, we're controlling the input value using the local state inputValue. When the input value changes, setInputValue updates the local state.




// When to Use Controller:
// Complex Inputs: Use Controller when working with complex or custom components (like date pickers, text editors, or third-party UI libraries) that aren’t natively supported by React Hook Form.
// Manual State Control: Use Controller if you need to manage the state of the input yourself but still want to benefit from React Hook Form's features like validation and easy form handling.


