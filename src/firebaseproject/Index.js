import React, { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

const Index = () => {
  const [user, setuser] = useState([]);
  const [usergetdata, setusergetdata] = useState({
    name: "",
    age: "",
    email: "",
  });
  const userCollectionRef = collection(db, "user");
  useEffect(() => {
    getuser();
  }, []);
  const getuser = async () => {
    const data = await getDocs(userCollectionRef);
    setuser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const handlechange = (e) => {
    const { name, value } = e.target;
    setusergetdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const savedata = async () => {
    const { name, email, age } = usergetdata;
    await addDoc(userCollectionRef, { name, age, email });

    getuser();
    setusergetdata((prev) => ({
      ...prev,
      name: "",
      age: "",
      email: "",
    }));
  };
  return (
    <div>
      <div>
        <div>
          <label>name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={usergetdata.name}
            onChange={handlechange}
          />
        </div>
        <div>
          <label>age</label>
          <input
            type="number"
            name="age"
            placeholder="age"
            value={usergetdata.age}
            onChange={handlechange}
          />
        </div>
        <div>
          ex
          <label>email</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={usergetdata.email}
            onChange={handlechange}
          />
        </div>
        <button onClick={savedata}>save data </button>
      </div>

      <ul>
        {user.map((user) => {
          return (
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 50px",
              }}
            >
              Name :<span> {user.name}</span>
              email:<span> {user.email}</span>
              age: <span> {user.age}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
