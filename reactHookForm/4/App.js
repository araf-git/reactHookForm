import { useForm } from "react-hook-form";

function App() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Output form data to console
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>Name:</label>
      <input
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters",
          },
        })}
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}{" "}
      {/* Error message for name */}

      <label>Email:</label>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}{" "}
      {/* Error message for email */}

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;





// Lesson 4: Handling Errors and Displaying Messages


// Handling Errors with errors Object
// React Hook Form provides an errors object that holds all the error messages for each form field. This allows you to check if a field has an error and display the corresponding message.


// Accessing Errors:
// You can access the errors object after form submission (or during form validation) using the following syntax:

// formState: { errors }

// To check for an error on a specific field (e.g., name, email), you can use:
// errors.name
// errors.email


// Displaying Error Messages
// You can conditionally render error messages based on whether the field has an error. If there’s an error for a field, you can display a message.
// {errors.name && <p>{errors.name.message}</p>}
// {errors.email && <p>{errors.email.message}</p>}



// Error Messages: If there’s an error (for instance, if the name field is left empty or has fewer than 3 characters), the error message will be displayed below the respective field.
// Error Styles: We’ve added inline CSS to style the error messages in red, but you can style them as you like.


