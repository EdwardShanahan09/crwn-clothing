import {
  signInWithGooglePopUp,
  createUserDocument,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();

    createUserDocument(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>

      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
    </div>
  );
};

export default SignIn;
