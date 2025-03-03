import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Optionally reset the form after submission
    reset(); // This clears the form fields
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
      <input {...register("name", { required: "Name is required" })} />
      
      <label>Email:</label>
      <input
        {...register("email", { required: "Email is required" })}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default App;


// Lesson 7: Managing Form Submission and Resetting Fields

// Form Submission with React Hook Form
// React Hook Form provides a simple method to handle form submissions. The handleSubmit function is used to process the form when the user submits it. After submission, you can either send the form data to an API or reset the form.


// Explanation:
// handleSubmit: This function wraps the onSubmit callback and prevents the default form submission behavior. It only fires if all validation rules pass.
// reset(): The reset function clears all fields in the form after submission. You can pass default values to reset() if you want to reset the form to specific values.















// Advanced: Handling Submission Success and Error
// You might want to show feedback (e.g., success or error messages) after submitting the form. This can be done by managing form states such as isSubmitting or isSubmitSuccessful.

// React Hook Form automatically provides isSubmitting and isSubmitSuccessful as part of its formState.

// How They Work:


// isSubmitting
// Becomes true when the form is being submitted.
// Becomes false once submission is complete.
// Useful for disabling the submit button during form submission.


// isSubmitSuccessful
// Becomes true if submission is successful (no validation errors).
// Resets to false when the form state resets.
// Useful for showing success messages.




// Form with Submission States Example:

// import { useState } from "react";
// import { useForm } from "react-hook-form";

// function App () {
//   const { register, handleSubmit, formState: { isSubmitting, isSubmitSuccessful }, reset } = useForm();
//   const [submitMessage, setSubmitMessage] = useState("");

//   const onSubmit = (data) => {
//     setSubmitMessage("Form Submitted Successfully!");
//     reset(); // Reset form fields after submission
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label>Name:</label>
//       <input {...register("name", { required: "Name is required" })} />

//       <label>Email:</label>
//       <input
//         {...register("email", { required: "Email is required" })}
//       />

//       <button type="submit" disabled={isSubmitting}>
//         {isSubmitting ? "Submitting..." : "Submit"}
//       </button>

//       {isSubmitSuccessful && <p>{submitMessage}</p>}
//     </form>
//   );
// };

// export default App;









// Explanation:
// isSubmitting: This flag is true when the form is in the process of being submitted. You can disable the submit button while the form is being processed.
// isSubmitSuccessful: This flag is true if the form submission was successful. You can use it to display a success message.








// Resetting Specific Fields:
// If you want to reset only specific fields instead of the entire form, you can use reset with the field names you want to reset.

// reset({ name: "John Doe" }); // Resets only the 'name' field with a new default value






// Summary:
// React Hook Form simplifies form submission and resetting.
// handleSubmit processes the form and calls your custom submit function.
// Use reset() to clear or reset the form fields.
// Manage submission state to provide feedback (e.g., "Submitting..." or "Form Submitted Successfully!").