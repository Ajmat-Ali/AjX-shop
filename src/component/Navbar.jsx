import { useEffect } from "react";

export default function NavBar() {
  useEffect(() => {
    console.log("NavBar Effect.............");
  }, []);

  return (
    <>
      {console.log("Inside NavBar component.............")}
      <h2>Navbar Component</h2>
    </>
  );
}
