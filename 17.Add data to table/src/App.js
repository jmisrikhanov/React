import React, { useState, useEffect } from "react";
import { Table } from "./components/Table";

const getDataFromLS = () => {
  const localData = localStorage.getItem("data");
  return localData ? JSON.parse(localData) : [];
};

export const App = () => {
  const [data, setData] = useState(getDataFromLS());
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleAddDataSubmit = (e) => {
    e.preventDefault();
    // phonenumber(values.phone);
    setData([...data, values]);
    setValues({});
  };

  const deleteData = (number) => {
    const filteredData = data.filter((_, index) => {
      return index !== number;
    });
    setData(filteredData);
  };

  const handleNumberEnter = (event) => {
    if (event.key === "Enter") {
      handleAddDataSubmit();
    }

    if (!/^[0-9 -+]+$/.test(event.key)) {
      event.preventDefault();
    }
  };

  // function phonenumber(inputtxt) {
  //   var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  //   if (inputtxt.value.match(phoneno)) {
  //     return true;
  //   } else {
  //     alert("message");
  //     return false;
  //   }
  // }

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <div className="wrapper">
      <h1>Data to table</h1>
      <div className="main">
        <div className="form-container">
          <form
            autoComplete="off"
            className="form-group"
            onSubmit={handleAddDataSubmit}
          >
            <label>First Name:</label>
            <input
              type="text"
              className="form-control"
              required
              name="firstName"
              onChange={handleChange}
              value={values.firstName || ""}
            />
            <br></br>
            <label>Last Name:</label>
            <input
              type="text"
              className="form-control"
              required
              name="lastName"
              onChange={handleChange}
              value={values.lastName || ""}
            />
            <br></br>
            <label>Phone Number:</label>
            <input
              type="tel"
              className="form-control"
              required
              name="phone"
              onChange={handleChange}
              value={values.phone || ""}
              onKeyPress={handleNumberEnter}
            />
            <br></br>
            <button type="submit" className="btn btn-success btn-md">
              ADD USER
            </button>
          </form>
        </div>

        <div className="view-container">
          {data.length > 0 && (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Phone Number</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Table data={data} deleteData={deleteData} />
                  </tbody>
                </table>
              </div>
              <button
                className="btn btn-danger btn-md"
                onClick={() => setData([])}
              >
                Remove All
              </button>
            </>
          )}
          {data.length < 1 && <div>No user added</div>}
        </div>
      </div>
    </div>
  );
};

export default App;
