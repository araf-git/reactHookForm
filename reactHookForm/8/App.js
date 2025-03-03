import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>Name:</label>
      <input {...register("name", { required: "Name is required" })} />
      {errors.name && <p>{errors.name.message}</p>} {/* Display error */}

      <label>Email:</label>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid email format",
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>} {/* Display error */}

      <button type="submit">Submit</button>

    </form>
  );
}

export default App;




// Lesson 8: Handling Errors and Custom Error Messages.

// Understanding Error Handling in React Hook Form
// React Hook Form allows you to easily handle form errors. When a validation fails, React Hook Form populates the errors object, which you can use to display custom error messages next to the invalid field.


// Explanation:
// Error Object: The errors object holds the error messages. It is automatically populated by React Hook Form if any validation rule fails.
// Displaying Errors: You can display custom error messages next to the relevant form fields by checking if the field has an error (e.g., errors.name).



// Handling Multiple Validation Rules:
// You can combine multiple validation rules for a field, and React Hook Form will display the first error that occurs.

// <input
//   {...register("username", {
//     required: "Username is required",
//     minLength: {
//       value: 6,
//       message: "Username must be at least 6 characters long"
//     }
//   })}
// />
// {errors.username && <p>{errors.username.message}</p>}



// Custom Error Messages Based on Condition:
// You can also define custom error messages based on complex validation conditions. For example, checking if a password contains at least one special character.

{
  /* <input
  {...register("password", {
    required: "Password is required",
    validate: (value) => 
      /[A-Z]/.test(value) || "Password must contain at least one uppercase letter"
  })}
/>
{errors.password && <p>{errors.password.message}</p>} */
}


// Form Level Error Handling:
// You can also handle errors globally, for example, when a form submission fails, such as an API call error.

// import { useState } from "react";
// import { useForm } from "react-hook-form";

// function App() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [apiError, setApiError] = useState("");

//   const onSubmit = async (data) => {
//     try {
//       // Simulating an API call that may fail
//       throw new Error("Server error occurred"); // Example error
//     } catch (err) {
//       setApiError(err.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label>Email:</label>
//       <input
//         {...register("email", {
//           required: "Email is required",
//           pattern: {
//             value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//             message: "Invalid email format"
//           }
//         })}
//       />
//       {errors.email && <p>{errors.email.message}</p>}

//       <button type="submit">Submit</button>

//       {apiError && <p style={{ color: "red" }}>{apiError}</p>} {/* Display API error */}
//     </form>
//   );
// };

// export default App;

// Explanation:
// API Error: If your API call fails, you can set an error message and display it at the bottom of the form.
// Global Errors: The apiError state holds the error message, which can be shown outside the individual input fields.
