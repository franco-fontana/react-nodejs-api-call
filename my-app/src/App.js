import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import { Users } from "./components/Users";
import { DisplayBoard } from "./components/DisplayBoard";
import CreateUser from "./components/CreateUser";
import { getAllUsers, createUser } from "./services/UserService";
import AgGrid from "./components/AgGrid";
import Counter from "./components/Counter";
import { getAllCars } from "./services/AgGridService";

function App() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [numberOfUsers, setNumberOfUsers] = useState(0);

  const [cars, setCars] = useState([]);
  const [numberOfCars, setNumberOfCars] = useState(0);

  const userCreate = (e) => {
    createUser(user).then((response) => {
      console.log(response);
      setNumberOfUsers(numberOfUsers + 1);
    });
  };

  const fetchAllUsers = () => {
    getAllUsers().then((users) => {
      console.log(users);
      setUsers(users);
      setNumberOfUsers(users.length);
    });
  };

  useEffect(() => {
    getAllUsers().then((users) => {
      console.log(users);
      setUsers(users);
      setNumberOfUsers(users.length);
    });
  }, []);

  const fetchAllCars = () => {
    getAllCars().then((cars) => {
      console.log(cars);
      setCars(cars);
      setNumberOfCars(cars.length);
    });
  };

  // useEffect(() => {
  //   getAllCars().then((cars) => {
  //     console.log(cars);
  //     setCars(cars);
  //     setNumberOfCars(cars.length);
  //   });
  // }, []);

  const onChangeForm = (e) => {
    if (e.target.name === "firstname") {
      user.firstName = e.target.value;
    } else if (e.target.name === "lastname") {
      user.lastName = e.target.value;
    } else if (e.target.name === "email") {
      user.email = e.target.value;
    }
    setUser(user);
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-8">
            <CreateUser
              user={user}
              onChangeForm={onChangeForm}
              createUser={userCreate}
            ></CreateUser>
          </div>
          <div className="col-md-4">
            <DisplayBoard
              numberOfUsers={numberOfUsers}
              getAllUsers={fetchAllUsers}
            ></DisplayBoard>
          </div>
        </div>
      </div>
      <div className="row mrgnbtm">
        <Users users={users}></Users>
      </div>
      <br />
      <div className="justify-content-center">
        <div className="d-flex mx-auto border w-75 pl-5 pt-2 pb-2">
          <Counter />
        </div>
        <br />
        <div className="display-flex grid mx-auto border w-75 pl-5 pt-2 pb-2">
          <div className="row mb-6">
            <AgGrid cars={cars} />
          </div>
          <br />
          <br />
          <div className="row mb-2">
            <button onClick={fetchAllCars}>Load grid</button>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default App;
