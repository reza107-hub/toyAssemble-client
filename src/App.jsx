import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)]">
        <Outlet></Outlet>
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default App;
