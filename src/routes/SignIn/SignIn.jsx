import { signInWithGooglePopUp } from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
  };
  return (
    <div>
      <h1>Sign In Page</h1>

      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
    </div>
  );
};

export default SignIn;
