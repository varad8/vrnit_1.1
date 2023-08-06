import React, { useState, useEffect } from "react";
import "../Table/Table.css";
import { auth } from "../../firebase";
import { firestore, storage } from "../../firebase";

const Table = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    const collectionRef = firestore.collection("servicesbook");
    const query = collectionRef.where("UserId", "==", auth.currentUser.uid);
    query.onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setData(docs);
    });
  }, []);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Moble No</th>
            <th>Email</th>
            <th>Address</th>
            <th>Plan</th>
            <th>User Id</th>
            <th>Booking ID</th>
            <th>Timestamp</th>
            <th>CompletionTime</th>
            <th>status</th>
            <th>Preview Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.fullname}</td>
              <td>{item.MobileNo}</td>
              <td>{item.Email}</td>
              <td>{item.Address}</td>
              <td>{item.Plan}</td>
              <td>{item.UserId}</td>
              <td>{item.BookingID}</td>
              <td>{item.Timestamp}</td>
              <td>{item.CompletionTime}</td>
              <td>{item.Status}</td>
              <td>{item.PreviewLink}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
