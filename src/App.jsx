import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default App;
