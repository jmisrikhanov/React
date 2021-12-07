import { useState } from "react";
import FormComponent from "./components/form/Form";
import Contacts from "./components/contacts/Contacts";
import { addInfo } from "./utils/functions";

const initialState = { username: "", phoneNumber: "", gender: "NO INFO" };

function App() {
  const [info, setInfo] = useState(initialState);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addInfo(info);
  };
  return (
    <div className="App">
      <FormComponent
        handleFormSubmit={handleFormSubmit}
        className="form"
        info={info}
        setInfo={setInfo}
      />
      <Contacts />
    </div>
  );
}

export default App;
