import SignUpForm from "../../components/SignUpForm/SignUpForm";
import {
  signInWithGooglePopUp,
  createUserDocument,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();

    const userDocRef = await createUserDocument(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>

      <button onClick={logGoogleUser}>Sign In With Google Popup</button>

      <SignUpForm />
    </div>
  );
};

export default SignIn;
