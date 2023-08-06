// Import React and necessary Firebase modules
import React, { useState, useEffect, Children } from "react";
import "firebase/auth";

import { auth } from "../../firebase";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { firestore, storage } from "../../firebase";
import LoadingScreen from "../LoadingScreen";
import "./profile.css";
import Table from "../Table/Table";

function Profile() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  const [showContainer, setShowContainer] = useState(false);
  const [user, setUser] = useState(null);
  const { userID } = useParams();
  const { register, handleSubmit } = useForm();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [mobileno, setMobileNo] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [error]);

  const usersRef = firestore.collection("users");
  const query = usersRef.where("userID", "==", userID);

  //Getting Data of the User Profile
  query
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // For each document that matches the query, access its data using the
        // data() method
        const data = doc.data();
        setUserData(data);
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });

  //Show Updating Container
  function update() {
    setShowContainer(!showContainer);
  }

  function handleUpdate() {
    // Update the documents that match the specified condition
    if ((name != null || email != null || mobileno != null, address != null)) {
      if (userData.id === null) {
        console.log("Log In Please");
      } else {
        query.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const docRef = usersRef.doc(doc.id);
            docRef
              .update({
                name,
                email,
                mobileno,
                address,
              })
              .then(() => {
                setError("Data Updated Successfully");
                document.getElementById("uprofile-form").reset();
                console.log("Document successfully updated!");
              })
              .catch((error) => {
                setError("Error While Updating Data", error.message);
                console.error("Error updating document: ", error);
              });
          });
        });
      }
    } else {
      setError("Please Fill All the Data");
    }
  }

  //Uploading Data of the New User Profile
  const onSubmit = async (data) => {
    if (userData === null) {
      const { name, email, mobileno, address, picture } = data;
      data.userID = userID;
      // Upload picture to Firebase Storage
      const pictureRef = storage.ref(`users/${picture[0].name}`);
      const uploadTask = pictureRef.put(picture[0]);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Update progress bar
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setUploadProgress(progress);
        },
        (error) => {
          setError(error.message);
        }
      );

      // Wait for upload to finish and get download URL
      const pictureUrl = await uploadTask.snapshot.ref.getDownloadURL();

      // Save profile data and picture URL to Firestore
      await firestore.collection("users").add({
        userID,
        name,
        email,
        mobileno,
        address,
        pictureUrl,
      });

      setError("Registration Successfully");
      // Reset form and progress bar
      setUploadProgress(0);
      document.getElementById("profile-form").reset();
    } else {
      document.getElementById("profilefilldata").hidden(true);
    }
  };
  return (
    <>
      {isLoading ? (
        <LoadingScreen message={"Wait While Fetching Data"} />
      ) : user && userData ? (
        <div className="container">
          <div className="profile-card mt-5">
            <div className="profile-image">
              <img
                style={{ width: "100%", height: "100%" }}
                src={userData.pictureUrl}
                alt={userData.name + " Profile Picture"}
              />
            </div>
            <div className="profile-info">
              <h2>Name: {userData.name}</h2>
              <p>Email: {userData.email}</p>
              <p>Phone: {userData.mobileno}</p>
              <p>Address: {userData.address}</p>
            </div>
            <div className="d-flex flex-column">
              <button className="btn btn-primary p-2" onClick={update}>
                Update Profile
              </button>
              <button className="btn btn-success p-2">
                <a
                  href="/ratings"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Ratings
                </a>
              </button>
            </div>
          </div>

          <h1 className="mb-5 mt-3">Dashboard</h1>
          <Table />
          <br />
          <br />

          {showContainer && (
            <div>
              <h1 className="mt-5">Update Profile Details</h1>
              <div className="border border-dark p-3 mt-3 rounded">
                <form id="uprofile-form">
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col">
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text">+91</div>
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          id="inlineFormInputGroup"
                          value={mobileno}
                          onChange={(e) => setMobileNo(e.target.value)}
                          placeholder="Phone No"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="row">
                      <div className="col mt-3 d-flex justify-content-center align-items-center">
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={handleUpdate}
                        >
                          Update Profile Details
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {error && (
                <span
                  className="container alert alert-warning fade show  fixed-top  mt-2"
                  role="alert"
                  id="alert"
                >
                  <strong> {error}</strong>
                </span>
              )}
            </div>
          )}
        </div>
      ) : user ? (
        <div className="container">
          <div className="profile" id="profilefilldata">
            <div className="profile-header">
              <img
                src={"https://cdn-icons-png.flaticon.com/512/2202/2202112.png"}
                alt="Profile Picture"
              />
              <h1>Upload Profile</h1>
            </div>
            <div className="profile-content">
              <form id="profile-form" onSubmit={handleSubmit(onSubmit)}>
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  {...register("name")}
                />
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...register("email")}
                />
                <label for="email">Mobile No</label>
                <input
                  type="text"
                  id="mobileno"
                  name="email"
                  {...register("mobileno")}
                />
                <label for="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  {...register("address")}
                ></textarea>
                <label for="avatar">Avatar</label>
                {/* select image from file */}
                <input
                  type="file"
                  id="avatar"
                  name="picture"
                  {...register("picture")}
                />
                <button type="submit">Save Changes</button>
                {error && (
                  <div id="emailHelp" className="form-text mt-5">
                    {error}
                  </div>
                )}

                {uploadProgress > 0 && (
                  <div>
                    <progress
                      className="mt-3"
                      style={{
                        width: "100%",
                        height: "8px",
                        max: "100",
                        backgroundColor: "green",
                      }}
                      value={uploadProgress}
                    />
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
}

export default Profile;

// {uploadProgress > 0 && <progress value={uploadProgress} max="100" />}
