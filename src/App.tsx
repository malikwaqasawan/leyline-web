import { useState } from "react";
import CreateUser from "./pages/create-user";

function App() {
  const [count, setCount] = useState(0);

  const [isUserExist, setIsUserExist] = useState(false);

  return (
    <div className="container">
      <CreateUser />
    </div>
  );
}

export default App;
