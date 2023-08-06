import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
function PythonChatBot() {
  const handleButtonClick = () => {
    const confirmed = window.confirm(
      "Are you sure you want to make this purchase?"
    );
    if (confirmed) {
      const phoneNumber = "+917058834216"; // Your WhatsApp number
      const message = "I want to make a purchase Python Chatbot."; // The message to send
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
        <h1>VRNaichatbot Documentation</h1>
        <p>
          The VRNaichatbot is a Virtual Reality (VR) chatbot powered by OpenAI.
          It allows users to interact with an AI assistant in a virtual world
          through realistic conversations. The chatbot is designed to provide
          personalized responses and create a unique and futuristic experience
          for users.
        </p>{" "}
        <h3>Requirements</h3>{" "}
        <p>
          The following libraries are required to run the VRnaichatbot code:
        </p>{" "}
        <ul>
          <li>Flask: A micro web framework for Python.</li>
          <li>OpenAI: A Python library for accessing the OpenAI API.</li>
        </ul>{" "}
        <p>
          {" "}
          You also need to set up your OpenAI API key and model name before
          running the code. Replace the openai.api_key and model_name variables
          with your API key and model name respectively.
        </p>
        <h3> Usage </h3>
        <p>
          The VRnaichatbot code provides a Flask web application with a single
          route ('/') that supports both GET and POST methods. The GET method
          renders an HTML page for the chatbot interface, while the POST method
          handles user input and returns a response from the chatbot.
        </p>{" "}
        <h3>HTML Template</h3>{" "}
        <p>
          The HTML template used for the chatbot interface includes the
          following components:
        </p>{" "}
        <ul>
          <li>
            {" "}
            Title: The title of the webpage displayed in the browser. Viewport
            Meta
          </li>
          <li>
            {" "}
            Tag: Specifies the initial scale and width of the webpage for
            different devices.
          </li>
          <li>
            {" "}
            CSS and JavaScript Libraries: External libraries for styling and
            functionality.
          </li>
          <li>
            {" "}
            Description Meta Tag: Provides a brief description of the webpage
            for search engine optimization (SEO) purposes.
          </li>
          <li>
            {" "}
            JavaScript Code: Contains functions for handling user input,
            toggling the menu, starting/stopping the loading animation,
            displaying notifications, and disabling right-click.
          </li>
          <li>
            {" "}
            Styles: Contains CSS styles for different devices (small, medium,
            and large screens).
          </li>
        </ul>
        <h3> Flask Routes</h3>
        <strong>GET Method</strong>
        <p>
          The GET method renders the HTML template for the chatbot interface. It
          displays the chat container, user input form, and a menu icon for
          toggling the menu.
        </p>{" "}
        <strong>POST Method</strong>
        <p>
          The POST method handles user input from the chatbot interface. It
          sends the user input to the process_input() function to generate a
          response using the OpenAI API. The response is then returned as a JSON
          object containing the user input and the chatbot's response. The
          response is displayed in the chat container on the HTML template.
        </p>
        <h3>JavaScript Functions</h3>
        <p>
          The JavaScript code in the HTML template includes the following
          functions:
        </p>{" "}
        <ul>
          <li>
            {" "}
            submitForm(): Handles form submission when the user submits their
            input. It disables the submit button, sends a POST request to the
            Flask route with the user input, and displays the user input and
            chatbot's response in the chat container.
          </li>
          <li>
            {" "}
            toggleMenu(): Toggles the display of the menu when the menu icon is
            clicked.
          </li>
          <li>
            {" "}
            rotation(): Starts and stops the loading animation using the
            setInterval() and clearInterval() functions respectively.
          </li>
          <li>
            {" "}
            notifyMe(): Displays a notification to the user for a short period
            of time.
          </li>
          <li>
            {" "}
            contextmenu(): Disables the right-click context menu on the webpage.
          </li>
        </ul>{" "}
        <h3>Pricing</h3>
        <p>
          We are selling this peoject for Students as well as Production for any
          Blogger or Company.
        </p>
        <ul>
          <li>
            For Students : If you can't buy rights then you don't need to pay
            for that,but you can used only for display for college dont used
            anywhere else you pay fine
          </li>
          <li>
            For Production : You get all rights but you can't get projects
            credits{" "}
          </li>
          <li>Get Full Credits : For Full Credits is Unavialable </li>
        </ul>
        <h4>Buy Me</h4>
        <button className="btn btn-success mb-3" onClick={handleButtonClick}>
          Buy Me !
        </button>
        <h4>Demo</h4>
        <a
          href="https://vrnitsolution-chatbotai.vercel.app/"
          className="btn btn-secondary mb-5"
        >
          Demo
        </a>
        <h3 className="mt-3">Conclusion</h3>
        <p className="mb-5">
          The VRnaichatbot is a Virtual Reality (VR) chatbot powered by OpenAI
          that provides a unique and futuristic experience for users. The code
          includes a Flask web application with an HTML template for the chatbot
          interface, JavaScript functions for handling user input and interface
          functionalities, and styles for different devices. By following the
          documentation, you can set up and use the VRnaichatbot for interactive
          conversations with the AI assistant in a virtual world.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default PythonChatBot;
