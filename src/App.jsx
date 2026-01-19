import { useEffect } from "react";
import NavBar from "./component/Navbar";

export default function App() {
  useEffect(() => {
    console.log("Inside APP useEffect");
  }, []);

  return (
    <>
      <h1>App Component</h1>
      <NavBar />
      {console.log("Inside APP Render")}
    </>
  );
}
