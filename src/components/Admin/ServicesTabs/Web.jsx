import React, { useState, useEffect } from "react";
import { auth } from "../../../firebase";
import { firestore, storage } from "../../../firebase";
import "./service.css";
function Web() {
  // Function to set Data
  const [data, setData] = useState([]);
  const startValue = "Web";
  const endValue = "Web" + "\uf8ff";
  useEffect(() => {
    const collectionRef = firestore.collection("servicesbook");
    const query = collectionRef
      .where("Plan", ">=", startValue)
      .where("Plan", "<", endValue);
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
    <div>
      {" "}
      <div className="table-container2">
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
      </div>{" "}
    </div>
  );
}

export default Web;
