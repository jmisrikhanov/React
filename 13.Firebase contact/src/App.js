import { useState } from "react";
import FormComponent from "./components/form/Form";
import Contacts from "./components/contacts/Contacts";
import { addInfo, editHandler } from "./utils/functions";
import { ToastContainer } from "react-toastify";

const initialState = { username: "", phoneNumber: "", gender: "NO INFO" };

function App() {
  const [info, setInfo] = useState(initialState);
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (info?.id) {
      editHandler(info);
    } else {
      addInfo(info);
    }
    setInfo(initialState);

    // console.log("info :>> ", info);
    // addInfo(info);
  };

  const updateFormHandler = (item) => {
    setInfo({ ...item });
  };

  return (
    <div className="App">
      <FormComponent
        handleFormSubmit={handleFormSubmit}
        className="form"
        info={info}
        setInfo={setInfo}
      />
      <Contacts className="contacts" updateFormHandler={updateFormHandler} />
      <ToastContainer />
    </div>
  );
}

export default App;
