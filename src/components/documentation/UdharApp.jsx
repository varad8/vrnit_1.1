import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

function UdharApp() {
  const handleButtonClick = () => {
    const confirmed = window.confirm(
      "Are you sure you want to make this purchase?"
    );
    if (confirmed) {
      const phoneNumber = "+917058834216"; // Your WhatsApp number
      const message = "I want to make a purchase Udhar App."; // The message to send
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url);
    }
  };
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <h1>UdharApp Android App</h1>
        <h2>Home Fragment</h2>
        <p>
          This is a Java code for an Android app that uses Firebase for data
          storage and authentication. The code defines a Fragment named
          <strong>HomeFragment</strong> that handles the logic for displaying
          the user interface of the home screen of the app. The home screen has
          different views and functionalities depending on the type of user who
          logs in to the app. The <strong>HomeFragment</strong> class contains
          several instance variables, including <strong>admindashboard</strong>,
          welcome, and
          <strong>userdashboard</strong>, which are LinearLayout views used to
          display different content depending on the user type. The class also
          has totaluserudhari, usertotalpaid, mytotalpaid, and mytotalunpaid,
          which are TextView views that display the total amount of money owed
          by the user or the admin. The onCreateView method initializes the
          Firebase authentication and Firestore, and then calls the{" "}
          <strong>checkedUserType</strong> method to check the type of user who
          logs in to the app. Depending on the type of user, the method displays
          the appropriate views and calls different methods to retrieve data
          from Firebase. The <strong>checkedUserType</strong> method checks the
          user type by reading the accountType field from Firebase. If the user
          is an admin, it shows the <strong>admindashboard</strong> view and
          calls the
          <strong>getAdminTotalCount</strong> method to retrieve the total
          amount of money owed by all users. If the user is a regular user, it
          shows the userdashboard view, calls the <strong>getUserCount</strong>{" "}
          method to retrieve the admin's ID, and then calls the{" "}
          <strong>getUserCount</strong> method to retrieve the total amount of
          money owed by the user. The getUserData method reads the servicecode
          field from Firebase and uses it to retrieve the admin's ID from the
          ServiceProvider collection. The getAdminTotalCount and getUserCount
          methods retrieve the total amount of money owed by all users or a
          specific user, respectively, by querying the Udhari collection and
          calculating the total amount using an AtomicInteger.
        </p>

        <h2>UserDetailsFragment</h2>
        <p>
          This code is the implementation of a fragment that shows user details
          and has functionality to generate a new bill for the selected user.
          The fragment is called <strong>UserDetailsFragment</strong>. The code
          first initializes some views such as CircleImageView, TextView,
          EditText and Button. The Firebase instances are also initialized for
          Firebase Firestore and Firebase Authentication. When the fragment is
          created, it gets the selected user's information from the
          UserListViewModel. The user's information is then displayed on the
          views such as the user's profile picture, name, email, and UID. When
          the "Add Bill" button is clicked, an alert dialog is created to get
          the details of the new bill. The dialog contains an EditText for the
          bill title and bill amount and a Spinner to select the bill remark,
          which can be "udhari" or "paid". The Spinner is initialized with an
          ArrayAdapter. If the "Add Bill" button is clicked with any of the
          fields empty, a Snackbar is shown to prompt the user to fill in the
          empty fields. Otherwise, the details are added to Firebase Firestore.
          The bill number is generated randomly and appended to the user's
          collection in Firestore.
        </p>
        <h2>UserPaidFragment</h2>
        <p>
          This is an Android app fragment written in Java that displays a list
          of paid bills for the current user. It uses FirestoreRecyclerAdapter
          to populate the RecyclerView with the data from the Firestore
          database. The onCreateView method inflates the layout for the fragment
          and initializes the RecyclerView. The onViewCreated method retrieves
          the data for the selected user and passes it to a ViewModel. It then
          observes the LiveData in onViewCreated and updates the RecyclerView
          with the new data when it changes. The adapter variable is set to a
          new instance of FirestoreRecyclerAdapter with the appropriate options
          and is used to set the adapter on the RecyclerView. The adapter starts
          listening for changes when the fragment starts and stops when it is
          stopped. The onBindViewHolder method binds the data to the view holder
          and sets an OnClickListener on the root view of the item layout to
          open an AlertDialog when clicked. The AlertDialog displays the details
          of the selected bill, including the username, bill number, bill title,
          bill amount, bill status, bill paid date, and bill date. The user can
          click the "OK" button to dismiss the dialog. The code uses Firebase
          Authentication to retrieve the current user's ID and Firestore to
          query the database for the user's paid bills. The user_bill class is a
          model class that represents the data structure of the bills in the
          Firestore database.
        </p>
        <h2>DetailsHistoryFragment</h2>
        <p>
          This is an Android Java class that defines a Fragment used for
          updating the details of a user's bill. The Fragment contains a
          ViewModel to handle data and an AlertDialog that prompts the user to
          select the new status of the bill from a dropdown list. In the
          onCreateView method, the Fragment's layout is inflated and the
          ViewModel is instantiated. The selected user's details are retrieved
          from the ViewModel and displayed in the Fragment's TextViews. The
          updateExistBill method is called when the user clicks the "Update Bill
          Status" button on the AlertDialog. This method retrieves the selected
          status from the dropdown list and updates the bill's status in the
          Firestore database accordingly. If the update is successful, a success
          message is displayed using a Snackbar. Overall, this class is
          responsible for updating the status of a user's bill and displaying
          their bill details in a user-friendly manner.
        </p>
        <h2>PaidHistoryFragment</h2>
        <p>
          This is a Java class for an Android fragment that displays a list of
          paid bills. The fragment uses Firebase Firestore to fetch data and
          FirebaseUI FirestoreRecyclerAdapter to display the data in a
          RecyclerView. The onCreateView() method inflates the layout for the
          fragment and sets up a FirestoreRecyclerAdapter to display the list of
          paid bills. The query is constructed to fetch only the bills that have
          been marked as paid in Firestore. The options for the adapter are
          configured using the query and the user_bill model class. The adapter
          is then set on the RecyclerView, and the onStart() and onStop()
          methods are implemented to start and stop listening for changes to the
          Firestore data. When the user clicks on an item in the list, an
          AlertDialog is displayed showing the details of the selected bill. The
          ViewModelProvider is used to get a reference to the
          UnpaidHistoryViewModel, and the setSelectedUser() method is called to
          pass the selected bill to the ViewModel. Overall, this fragment
          provides a simple way to display a list of paid bills and show their
          details in an AlertDialog when the user clicks on an item.
        </p>
        <h2>UnpaidHistoryFragment</h2>
        <p>
          This is an Android application code written in Java. It represents a
          fragment for displaying unpaid user bills history for an admin user.
          The code uses Firebase as a backend for storing user data. The
          fragment inflates a layout file named fragment_unpaid_history.xml. The
          onCreateView method initializes the Firebase Firestore database, gets
          a reference to the current user, and queries the Firestore database to
          get all user bills with the bill_remarks field set to "udhari". The
          query results are then used to initialize a FirestoreRecyclerAdapter,
          which is used to populate a RecyclerView with the list of user bills.
          The onStart method of the fragment starts listening to the adapter,
          and the onStop method stops listening to the adapter to avoid memory
          leaks. The bill_viewHolder class is a custom view holder that extends
          the RecyclerView.ViewHolder class. It is used to bind the user bill
          data to the corresponding views in the RecyclerView item layout file
          named udhari_history.xml. When a user clicks on a specific user bill,
          the onClick method is triggered, and the selected user data is passed
          to a ViewModel, which is then used to navigate to the
          userDetailsHistory fragment.
        </p>
        <h2>UserListFragment</h2>
        <p>
          This is a Java class that represents a fragment in an Android app. The
          purpose of this fragment is to display a list of users in a
          RecyclerView using a FirebaseRecyclerAdapter. The
          FirebaseRecyclerAdapter is initialized with a FirebaseRecyclerOptions
          object that specifies the data source (a Firebase Realtime Database
          reference) and the model class (usersmodel) that represents the data.
          The FirebaseRecyclerAdapter also has an inner class called
          UserViewHolder that extends RecyclerView.ViewHolder. The
          UserViewHolder is responsible for binding the data from the model to
          the view, as well as setting an OnClickListener on the root view of
          the item layout. When the item is clicked, it retrieves the data for
          the selected user and passes it to a ViewModel, and then navigates to
          the UserDetailsFragment. The UserListFragment overrides the onStart
          and onStop methods to start and stop listening to Firebase updates
          when the fragment is started and stopped, respectively.
        </p>
        <h2>MyUnpaidFragment</h2>
        <p>
          This is a Java class for a fragment in an Android application. The
          fragment is used to display unpaid bills for the current user. It
          retrieves the data from a Firestore collection and displays it in a
          RecyclerView using a FirestoreRecyclerAdapter. The class defines
          several instance variables, including a DatabaseReference, a
          FirebaseAuth, and a CollectionReference for Firestore. It also defines
          a FirestoreRecyclerAdapter to display the data in a RecyclerView, a
          RecyclerView to display the data, and a Query to retrieve the data
          from Firestore. The class overrides several lifecycle methods,
          including onViewCreated, onCreateView, onStart, and onStop. In
          onViewCreated, it retrieves the data for the selected user and passes
          it to a ViewModel. It then observes the LiveData in onViewCreated or
          any other appropriate lifecycle method. In onCreateView, it inflates
          the layout for the fragment and initializes the RecyclerView. In
          onStart, it starts listening for changes to the adapter, and in
          onStop, it stops listening for changes to the adapter. The class also
          defines a method to display an AlertDialog when an item in the
          RecyclerView is clicked. The AlertDialog displays details about the
          selected bill, including the name of the user, the bill number, the
          bill title, the bill amount, the bill status, the bill paid date, and
          the bill date.
        </p>
        <h2>Links</h2>
        <h4>Buy Me</h4>
        <button className="btn btn-success mb-3" onClick={handleButtonClick}>
          Buy Me !
        </button>
        <h4>Demo of App</h4>
        <a
          href="https://mega.nz/file/GksH2Ybb#t3sRRbHN-mGbXbUi1_9AvwfqAjAX3aAXGL_jKHXASqw"
          className="btn btn-secondary mb-5"
        >
          Download App
        </a>
        <h2>Conclusion</h2>
        <p>
          Overall this app is designed for small business like Milkman,General
          Store,Paper Delivery,Local Vegetable Market.It helpful for managed
          udhar.Simple UI any one can used this app.
        </p>
        <br />
      </div>
      <Footer />
    </>
  );
}

export default UdharApp;
