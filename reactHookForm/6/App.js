import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "./features/user/userSlice";

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // Imagine you make an API call and get the user data
    const user = { name: data.name, email: data.email };

    // Dispatch the user data to the global state (Redux)
    dispatch(setUser(user));

    console.log("User Logged In:", user);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
      <input
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <label>Email:</label>
      <input
        {...register("email", { required: "Email is required" })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default App;




// Lesson 6: Integrating with Redux Toolkit for Global State Management

// Let’s say you have a login form, and upon successful login, you want to update the global state with the user data.


// Explanation:
// Redux Dispatch: After the form is successfully submitted, the onSubmit function dispatches the setUser action with the form data (e.g., name and email) to update the global state.
// Form Submission: React Hook Form handles the form validation and passes the form data to Redux after successful validation.



// Using the Global State in Components:
// You can now access the global state (e.g., user) anywhere in your app by using useSelector from react-redux.


// import { useSelector } from "react-redux";

// const UserProfile = () => {
//   const user = useSelector((state) => state.user.user);

//   return (
//     <div>
//       <h1>Welcome, {user ? user.name : "Guest"}</h1>
//     </div>
//   );
// };

// export default UserProfile;
