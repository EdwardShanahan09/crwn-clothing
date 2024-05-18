import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
  signInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";
import FormInput from "../FormInput/FormInput";
import "./SignInForm.scss";
import Button from "../Button/Button";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const googleSignIn = async () => {
    const { user } = await signInWithGooglePopUp();

    await createUserDocument(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("incorrect password or email");
      }
      console.log(error);
    }
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={googleSignIn}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
