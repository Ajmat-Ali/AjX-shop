import { useEffect } from "react";
import Header from "./component/Header";

export default function App() {
  useEffect(() => {
    console.log("Inside APP useEffect");
  }, []);

  return (
    <>
      <div className="bg-gray-200 height-500">
        <Header />
        <h1>App Component</h1>
        {console.log("Inside APP Render")}
      </div>
    </>
  );
}
