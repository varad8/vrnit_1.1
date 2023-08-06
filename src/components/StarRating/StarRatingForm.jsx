import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "firebase/auth";
import { auth } from "../../firebase";
import { firestore } from "../../firebase";
import { async } from "@firebase/util";
import { set } from "react-hook-form";
import LoadingScreen from "../LoadingScreen";

const StarRatingForm = () => {
  const [name, setName] = useState(null);
  const [rating, setRating] = useState(null);
  const [email, setEmail] = useState(null);
  const [userid, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);
  const [err, setErr] = useState(null);
  const [user, setUser] = useState(null);
  const [review, setReview] = useState(null);
  const [remark, setRemark] = useState(null);
  const [isHidden, setIsHidden] = useState(true);
  const update = "Not Updated";
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

  const handleStarClick = (value) => {
    setRating(value);
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setEmail(user.email);
      setUserId(user.uid);
    });
  }, []);

  const usersRef1 = firestore.collection("users");
  const query1 = usersRef1.where("userID", "==", userid);
  //Getting Data of the User Profile
  query1
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // For each document that matches the query, access its data using the
        // data() method
        // For each document that matches the query, access its data using the
        // data() method

        setUserData(doc.data().pictureUrl);
        console.log(userData);
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });

  const usersRef = firestore.collection("reviews");
  const query = usersRef.where("userid", "==", userid);

  const submitReview = async () => {
    setIsHidden(false);
    if (user === null) {
      setErr("Login First For  Submitung Review");
    } else if (
      name === null ||
      email === null ||
      userid === null ||
      review === null ||
      rating === null
    ) {
      setErr("Fill All Fileds");
      setIsHidden(true);
    } else {
      query.get().then((querySnapshot) => {
        if (!querySnapshot.empty) {
          // update the existing document(s)
          querySnapshot.forEach((doc) => {
            usersRef.doc(doc.id).update({
              name: name,
              email: email,
              rating: rating,
              review: review,
              remark: remark,
              update: timestamp,
            });
            document.getElementById("reviewform").reset();
            setErr("Update Successfully");
            setIsHidden(true);
          });
        } else {
          // add new data to the collection
          usersRef.add({
            name: name,
            email: email,
            rating: rating,
            review: review,
            remark: remark,
            update: update,
            userid: userid,
            timestamp: timestamp,
            profile: userData,
          });

          document.getElementById("reviewform").reset();
          setErr("Submit Successfully");
          setIsHidden(true);
        }
      });
    }
  };
  return (
    <div className="container">
      <div className="card mt-5 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Rating</h5>{" "}
          <p>Please rate this Service: {rating} out of 5</p>
          {[...Array(5)].map((_, index) => {
            const value = index + 1;
            return (
              <span
                key={value}
                onClick={() => handleStarClick(value)}
                style={{
                  color: value <= rating ? "orange" : "gray",
                  cursor: "pointer",
                }}
              >
                <i className="fa fa-star"></i>
              </span>
            );
          })}
          <form id="reviewform">
            <div class="form-group mt-3">
              <label for="name">Full Name</label>
              <input
                class="form-control mt-2"
                id="name"
                name="name"
                type={Text}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="form-group mt-3">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                class="form-control mt-2"
                id="exampleFormControlTextarea1"
                rows="3"
                name="reviewmessage"
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
            </div>

            <div class="form-group mt-3">
              <label for="exampleFormControlTextarea1">
                Remarks/Improvement Optional
              </label>
              <textarea
                class="form-control mt-2"
                id="exampleFormControlTextarea1"
                rows="3"
                name="remark"
                onChange={(e) => setRemark(e.target.value)}
              ></textarea>
            </div>

            <div class="d-flex justify-content-center align-items-center form-group mt-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={submitReview}
              >
                Submit
              </button>
            </div>

            <div
              id="dload"
              class="d-flex justify-content-center align-items-center form-group mt-2"
            >
              <img
                style={{
                  width: "20px",
                  height: "20px",
                  display: isHidden ? "none" : "block",
                }}
                src="https://i.gifer.com/VAyR.gif"
              />
            </div>
          </form>
        </div>
      </div>

      {err && (
        <small
          id="error"
          class="text-danger mt-2 text-center d-flex align-items-center justify-content-center"
        >
          {err}
        </small>
      )}
    </div>
  );
};

export default StarRatingForm;
