import { LiveVideo } from "./svg"; // Importing the LiveVideo component from "./svg"

function App() {

  const get=async () => {
    const res = await fetch('http://localhost/8000'); // Sending a GET request to 'http://localhost/8000'
    console.log(res); // Logging the response object
  };

  return (
    <div>
      welcome to frontend // Rendering a text message
    </div>
  );
  
}

export default App; // Exporting the App component as the default export
