import { useState } from "react";

const SignUp = () => {
  const initialFormState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formState, setFormState] = useState(
    initialFormState
  );
  const [error, setError] = useState("");

  const validateForm = () => {
    for (const field in formState) {
      if (formState[field] === "") {
        setError(`Please fill out the ${field} field.`);
        return false;
      }
    }
    if (!formState.email.includes("@")) {
      setError("Invalid email format.");
      return false;
    }
    return passwordMatch(
      formState.password,
      formState.confirmPassword
    );
  };

  const passwordMatch = (password, passwordConfirm) => {
    if (password !== passwordConfirm) {
      setError("Passwords do not match!");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setError(""); // Clear error on change
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const url = `https://blogapi-production-1975.up.railway.app/signup`;

  const signUpUser = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
        credentials: "include",
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(
          data.message || "Failed to Sign Up"
        );
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      await signUpUser();
      // Handle successful form submission, like calling an API
      console.log("Form data", formState);
      setFormState(initialFormState); // Reset form after successful submission
      setError(""); // Clear any errors
      alert("Form submitted successfully!"); // Or display a success message on the page
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 mt-10 bg-white rounded-lg shadow-md"
      >
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-700">
          Sign Up
        </h1>

        {[
          {
            label: "First Name",
            name: "firstname",
            type: "text",
          },
          {
            label: "Last Name",
            name: "lastname",
            type: "text",
          },
          {
            label: "Email Address",
            name: "email",
            type: "email",
          },
          {
            label: "Password",
            name: "password",
            type: "password",
          },
          {
            label: "Confirm Password",
            name: "confirmPassword",
            type: "password",
          },
        ].map(({ label, name, type }) => (
          <div className="mb-4" key={name}>
            <label
              htmlFor={name}
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              {label}
            </label>
            <input
              type={type}
              name={name}
              id={name}
              placeholder={label}
              onChange={handleChange}
              value={formState[name]}
              className="w-full px-3 py-2 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
        ))}

        {error && (
          <p className="my-4 text-sm text-center text-red-600">
            {error}
          </p>
        )}

        <div className="mt-4">
          <button
            type="submit"
            className="w-full p-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
