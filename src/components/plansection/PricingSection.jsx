import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "firebase/auth";
import { auth } from "../../firebase";
import { firestore } from "../../firebase";
import Footer from "../Footer";
import NavBar from "../NavBar";
import "./PricingSection.css";
import "../../css/Modal.css";

function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [user, setUser] = useState(null);
  const [plan, setPlan] = useState(null);
  const [bookingid, setBookingId] = useState(null);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState(null);
  const [fname, setfname] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [addres, setAddress] = useState(null);
  const [userid, setUserId] = useState(null);

  const currentTimestamp = Date.now();
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };
  const timestamp = new Intl.DateTimeFormat("en-US", options).format(
    currentTimestamp
  );
  console.log(timestamp);

  const completiontime = "updated soon";
  const status = "Active";
  const previewlink = "updated soon";
  // const [verify, setVerify] = useState(false);

  //Modal Closeing and Opening Function
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  //Saved Service Data
  const savedServiceData = async () => {
    setEmail(user.email);
    setUserId(user.uid);
    if (
      fname !== null &&
      mobile !== null &&
      email !== null &&
      addres !== null &&
      plan !== null &&
      userid !== null &&
      bookingid !== null
    ) {
      setEmail(auth.currentUser.email);
      setUserId(auth.currentUser.uid);

      const result = firestore.collection("servicesbook").add({
        fullname: fname,
        MobileNo: mobile,
        Email: email,
        Address: addres,
        Plan: plan,
        UserId: userid,
        BookingID: bookingid,
        Timestamp: timestamp,
        CompletionTime: completiontime,
        Status: status,
        PreviewLink: previewlink,
      });

      document.getElementById("sd-form").reset();
      setError("Saved Your Service - Team Contact You");
      setfname(null);
      setMobile(null);
      setAddress(null);
      setBookingId(null);
      setEmail(null);
      setPlan(null);
      setError(false);
    } else {
      setError("Please Fill All Details");
    }
  };

  //Open Booking Service Modal
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePlanClick = (index) => {
    setSelectedPlan(index);
    handleOpenModal();
    setBookingId(uuidv4());
    if (index === 0) {
      setPlan("Web Designing - Basics Plan - ₹ 3500");
      console.log("Web Designing - Basics Plan");
    } else if (index == 1) {
      setPlan("Web Designing - Pro Plan - ₹ 6500");
    } else if (index == 2) {
      setPlan("Web Designing - Premium Plan - ₹ 12000");
    } else if (index == 3) {
      setPlan("App Designing - Basic Plan - ₹ 8999");
    } else if (index == 4) {
      setPlan("App Designing - Premium Plan - ₹ 15000");
    } else if (index == 5) {
      setPlan("Google Busines Setup Online - Premium Plan - ₹ 1000");
    } else {
      setPlan(null);
    }
  };

  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-body">
            <h2>Service Book</h2>
            <p>You Choose Plan : {plan}</p>

            <form id="sd-form">
              <div className="mb-3 row">
                <label for="fname" className="col-sm-2 col-form-label">
                  Full Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="fname"
                    className="form-control"
                    id="fname"
                    onChange={(e) => setfname(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label for="phoneno" className="col-sm-2 col-form-label">
                  Mobile No
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="phoneno"
                    className="form-control"
                    id="mobileno"
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label for="Address" className="col-sm-2 col-form-label">
                  Address
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="useraddress"
                    className="form-control"
                    id="useraddress"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label for="email" className="col-sm-2 col-form-label">
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    name="emailid"
                    className="form-control"
                    id="emailid"
                    value={user.email}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label for="plan" className="col-sm-2 col-form-label">
                  Choosed Plan
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    readonly
                    className="form-control-plaintext"
                    id="plan"
                    value={plan}
                    name="plan"
                    onChange={(e) => setPlan(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label for="plan" className="col-sm-2 col-form-label">
                  Booking ID
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    readonly
                    className="form-control-plaintext"
                    id="plan"
                    value={bookingid}
                    onChange={(e) => setBookingId(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label for="userID" className="col-sm-2 col-form-label">
                  User Id
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    readonly
                    className="form-control-plaintext"
                    id="userID"
                    value={user.uid}
                  />
                </div>
              </div>

              <div className="d-flex align-items-center">
                {" "}
                <button className="btn btn-closed" onClick={handleCloseModal}>
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-grad "
                  onClick={savedServiceData}
                >
                  Save
                </button>
                {error}
                {/* {verify ? (
                <button className="btn btn-grad ">Save</button>
              ) : (
                <div>
                  {" "}
                  <span style={{ color: "red" }}>Verfiy Your Email</span>
                </div>
              )} */}
              </div>
            </form>
          </div>
        </div>
      )}
      {user ? (
        <div>
          <div className="pricing-bg1">
            <NavBar />

            <div className="container mt-3">
              {" "}
              <h2 className="heading">Web Designing</h2>
            </div>
            <div className="pricing-section">
              <div className="pricing-card">
                <div
                  className={
                    selectedPlan === 0
                      ? "pricing-card-content selected"
                      : "pricing-card-content"
                  }
                >
                  <h2>Basic Plan</h2>
                  <p>Pages : 5</p>
                  <ul>
                    <li>Domain Price :- 200 ^ above</li>
                    <li>
                      Features Depends on Domain Provider or Your Domain Plans
                    </li>
                    <li>Hosting Price: 200^ above /per month </li>
                    <li>Designing Cost :- 2500</li>
                    <li>Total Cost :- 3500</li>
                    <li>Page Type : - Static</li>
                    <li>Programming Languages Used:- HTML /React</li>
                    <li>One Month IT Support</li>
                    <li>Training availabe</li>
                  </ul>
                </div>
                <button onClick={() => handlePlanClick(0)}>Select</button>
              </div>
              <div className="pricing-card">
                <div
                  className={
                    selectedPlan === 1
                      ? "pricing-card-content selected"
                      : "pricing-card-content"
                  }
                >
                  <h2>Pro</h2>
                  <p>Pages 15</p>
                  <ul>
                    <li>Domain Price :- 200 ^ above</li>
                    <li>
                      Features Depends on Domain Provider or Your Domain Plans
                    </li>
                    <li>Hosting Price: 200^ above /per month </li>
                    <li>Designing Cost :-5500</li>
                    <li>Total Cost :-6500</li>
                    <li>Page Type : - Static/Dynamic</li>
                    <li>Programming Languages Used:- HTML /React/PHP</li>
                    <li>Database Availabe :- MySql,MongoDB,Firebase</li>
                    <li>Three Month IT Support</li>
                    <li>Training availabe</li>
                    <li>Designing Updation Availabe</li>
                  </ul>
                </div>
                <button onClick={() => handlePlanClick(1)}>Select</button>
              </div>
              <div className="pricing-card">
                <div
                  className={
                    selectedPlan === 2
                      ? "pricing-card-content selected"
                      : "pricing-card-content"
                  }
                >
                  <h2>Premium</h2>
                  <p>Pages 30</p>
                  <ul>
                    <li>Domain Price :- 200 ^ above</li>
                    <li>
                      Features Depends on Domain Provider or Your Domain Plans
                    </li>
                    <li>Hosting Price: 200^ above /per month </li>
                    <li>Designing Cost :-10000</li>
                    <li>Total Cost :-12000</li>
                    <li>Page Type : - Static/Dynamic</li>
                    <li>Programming Languages Used:- HTML /React/PHP</li>
                    <li>Database Availabe :- MySql,MongoDB,Firebase</li>
                    <li>Six Month IT Support</li>
                    <li>Training availabe</li>
                    <li>Designing Updation Availabe</li>
                  </ul>
                </div>
                <button onClick={() => handlePlanClick(2)}>Select</button>
              </div>
            </div>

            <div className="container mt-3">
              {" "}
              <h2 className="heading">App Designing</h2>
            </div>
            <div className="pricing-section">
              <div className="pricing-card">
                <div
                  className={
                    selectedPlan === 3
                      ? "pricing-card-content selected"
                      : "pricing-card-content"
                  }
                >
                  <h2>Basic Plan</h2>
                  <p>Activity 5</p>
                  <ul>
                    <li>Development OS : - Android</li>
                    <li>Programming Languages Used:- Java</li>
                    <li>One Month IT Support</li>
                    <li>Training availabe</li>
                    <li>Database Included</li>
                    <li>Total Cost 8999</li>
                  </ul>
                </div>
                <button onClick={() => handlePlanClick(3)}>Select</button>
              </div>
              <div className="pricing-card">
                <div
                  className={
                    selectedPlan === 4
                      ? "pricing-card-content selected"
                      : "pricing-card-content"
                  }
                >
                  <h2>Pro</h2>
                  <p>More Than 10 Activity</p>
                  <ul>
                    <li>Development OS : - Android</li>
                    <li>Programming Languages Used:- Java</li>
                    <li>Six Month IT Support</li>
                    <li>Training availabe</li>
                    <li>Database Included</li>
                    <li>Total Cost 15000</li>
                  </ul>
                </div>
                <button onClick={() => handlePlanClick(4)}>Select</button>
              </div>
            </div>

            <div className="container mt-3">
              {" "}
              <h2 className="heading">GMB Setup</h2>
            </div>
            <div className="pricing-section">
              <div className="pricing-card">
                <div
                  className={
                    selectedPlan === 5
                      ? "pricing-card-content selected"
                      : "pricing-card-content"
                  }
                >
                  <h2>Basic Plan</h2>
                  <p>GMB is Free Tool We Charge only Setup</p>
                  <ul>
                    <li>Account Setup</li>
                    <li>Training Availabe</li>
                    <li>Updation Availabe</li>
                    <li>Google ADS seperate Charge</li>
                    <li>Setup Cost :1000</li>
                    <li>Updation Cost :100</li>
                  </ul>
                </div>
                <button onClick={() => handlePlanClick(5)}>Select</button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        user === null && (
          <div className="container">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                justifyItems: "center",
                top: "0",
                bottom: "0",
                left: "0",
                right: "0",
                position: "absolute",
                background: "rgba(198, 199, 182, 0.5)",
              }}
            >
              <span className="alert border border-danger bg-white">
                Please Login First..!
              </span>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default PricingSection;
