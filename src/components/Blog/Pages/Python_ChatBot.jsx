import React, { useRef, useState, useEffect } from "react";
import NavBar from "../NavBar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Footer from "../Footer";
import Ads from "../Ads";
import FollowMe from "../FollowMe";
import ReadMore from "../ReadMore";
import Comments from "../Comments";
import { Helmet } from "react-helmet";

const Python_ChatBot = ({ code }) => {
  const protocol = window.location.protocol === "https:" ? "https:" : "http:";
  const scriptSrc = `${protocol}//www.profitabledisplaynetwork.com/97379240ae7e0b666f4f3d30944730a1/invoke.js`;

  const [postDescription, setPostDescription] = useState("");
  const codeRef = useRef(null);

  const handleCopyCode = () => {
    // Copy the code to clipboard
    codeRef.current.select();
    document.execCommand("copy");
  };

  useEffect(() => {
    const generateTitleAndDescription = async () => {
      try {
        setPostDescription(
          "In this tutorial, we will learn how to add a title and description to a specific post for a simple chatbot using the OpenAI GPT-3 language model. We will go through the steps of generating relevant and engaging titles and descriptions using GPT-3, and how to integrate them into your chatbot to enhance its functionality and user experience. With the ability to generate human-like text, GPT-3 can significantly improve the quality of your chatbot's responses and make it more interactive and engaging for users. So let's dive in and learn how to leverage the power of GPT-3 to add compelling titles and descriptions to your chatbot posts!"
        );
      } catch (error) {
        console.error("Failed to generate title and description:", error);
      }
    };
    generateTitleAndDescription();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Simple chatbot using the OpenAI GPT-3 language model</title>
        <meta name="description" content={postDescription} />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <NavBar />
      <div className="container">
        <h1 className="mt-3">
          Simple chatbot using the OpenAI GPT-3 language model
        </h1>
        <span className="lead">
          {" "}
          <i className="fas fa-user text-primary"></i>&nbsp;admin |&nbsp;
          <i className="fas fa-calendar text-primary"></i>&nbsp;12th April 2023
          &nbsp;<i className="fas fa-clock text-primary"></i>&nbsp;11:09:00 pm
        </span>
        {/* steps */}
        <h5 className="mt-3">
          This code is an example of a simple chatbot using the OpenAI GPT-3
          language model. It allows the user to input a message, which is used
          as a prompt for the GPT-3 model to generate a response. The response
          is then printed as the chatbot's reply.
        </h5>
        <ol
          className="mt-3 mt-5"
          style={{ textAlign: "justify", fontSize: "20px" }}
        >
          <li>
            Import the necessary OpenAI library: import openai. This code is
            using the OpenAI Python library to interact with the GPT-3 API.
          </li>
          <li>
            Set the API key and model name: openai.api_key is set to the API key
            required to authenticate and access the GPT-3 API. model_name is set
            to the specific GPT-3 model to be used, which is 'text-davinci-003'
            in this case.
          </li>
          <li>
            Define a function to generate a response: The generate_response()
            function takes a prompt as input, and makes a request to the GPT-3
            API using the openai.Completion.create() method. The prompt is
            passed as the prompt parameter, along with other parameters such as
            the engine (the GPT-3 model to use), max_tokens (the maximum length
            of the generated response), n (the number of responses to generate),
            stop (the string at which to stop generating further tokens), and
            temperature (a parameter that controls the randomness of the
            generated response). The generated response is extracted from the
            API response and returned.
          </li>
          <li>
            Enter a loop for chatbot interaction: The code enters a while loop
            that continues to prompt the user for input and generate chatbot
            responses until the loop is manually terminated.
          </li>
          <li>
            User input: The user is prompted to input a message using the
            input() function, and the input is stored in the user_input
            variable.
          </li>
          <li>
            Generate a response: The user_input is passed as the prompt to the
            generate_response() function, which generates a response using the
            GPT-3 model.
          </li>
          <li>
            Print chatbot response: The generated response is printed as the
            chatbot's reply using print() function, with "ChatGpt :" as a prefix
            for the chatbot's response.
          </li>
        </ol>
        {/* Code */}
        {/* Render the code box */}
        <SyntaxHighlighter language="python" style={dark}>
          {`import openai

# Set your OpenAI API key and model name
openai.api_key = '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'
model_name = 'text-davinci-003'

# Function to generate a response from GPT-3
def generate_response(prompt):
    completions = openai.Completion.create(
        engine=model_name,
        prompt=prompt,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.7,
    )
    message = completions.choices[0].text
    return message.strip()

# Main loop for chatbot interaction
while True:
    user_input = input("You: ")
    prompt = f"You: {user_input}\nChatGPT:"
    response = generate_response(prompt)
    print("ChatGpt :\n",response)





`}
        </SyntaxHighlighter>
        <button
          className="btn btn-dark pl-5 pr-5 mb-5"
          onClick={handleCopyCode}
        >
          Copy
        </button>
        <textarea
          ref={codeRef}
          value={`import openai

# Set your OpenAI API key and model name
openai.api_key = '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'
model_name = 'text-davinci-003'

# Function to generate a response from GPT-3
def generate_response(prompt):
    completions = openai.Completion.create(
        engine=model_name,
        prompt=prompt,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.7,
    )
    message = completions.choices[0].text
    return message.strip()

# Main loop for chatbot interaction
while True:
    user_input = input("You: ")
    prompt = f"You: {user_input}\nChatGPT:"
    response = generate_response(prompt)
    print("ChatGpt :\n",response)




`}
          style={{ position: "absolute", top: "-9999px" }}
          readOnly
        />
        <Ads />
        {/* Output */}
        <h5>Output</h5>
        <a href="https://ibb.co/wwRJJnh">
          <img
            src="https://i.ibb.co/HxVNNcT/output-chabot.jpg"
            className="img-fluid border border-light border-2 border-dark rounded"
            alt="output-chabot"
            border="0"
          />
        </a>
        <Ads />
        <FollowMe />
        <ReadMore />
        <h3>Comments</h3>
        <Comments />
        {/* Popunder Ads 18963092 */}
        <script
          type="text/javascript"
          src="//pl19063591.highrevenuegate.com/d1/63/35/d16335e22d7e82ad70b65eb8bc83183f.js"
        ></script>
        {/* Banner Ads  18963254 */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            atOptions = {
              'key' : '97379240ae7e0b666f4f3d30944730a1',
              'format' : 'iframe',
              'height' : 60,
              'width' : 468,
              'params' : {}
            };
            document.write('<scr' + 'ipt type="text/javascript" src="${scriptSrc}"></scr' + 'ipt>');
          `,
          }}
        ></script>
      </div>
      <Footer />
    </>
  );
};

export default Python_ChatBot;
