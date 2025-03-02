import { useForm } from "react-hook-form";

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Output form data to console
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>Name:</label>
      <input
        {...register("name", { required: "Name is required", minLength: { value: 3, message: "Name must be at least 3 characters" } })}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <label>Email:</label>
      <input
        {...register("email", { required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Invalid email address" } })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default App;





// Lesson 3: Applying Validation to Form Fields

// Built-in Validation Methods
// React Hook Form provides several built-in validation methods for form fields. You can use these directly when registering inputs. 


// required: Ensures the field is not empty.
// minLength: Requires the field value to be at least a certain length.
// maxLength: Requires the field value to be no longer than a certain length.
// pattern: Validates the field against a regular expression.
// validate: A custom validation function.


// The validation rules are passed as the second argument in the register() method.
// Error messages are stored in the errors object, and you can display them conditionally.








// required: "Name is required": This rule makes the "name" field required. If the user leaves it empty, the error message will display "Name is required".

// minLength: { value: 3, message: "Name must be at least 3 characters" }: This rule ensures the "name" field has at least 3 characters. If it doesn't, it will show the error message.

// pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Invalid email address" }: This rule ensures the "email" field contains a valid email format using a regular expression.





// Custom Validation
// You can also use the validate method for more complex, custom validation logic.

// <input
//   {...register("customField", {
//     validate: (value) => value.length > 5 || "Value must be longer than 5 characters"
//   })}
// />




