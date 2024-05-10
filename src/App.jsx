import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";
import SignIn from "./routes/SignIn/SignIn";

const Shop = () => {
  return <h1>I am Shop!</h1>;
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
