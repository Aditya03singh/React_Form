// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="main">
      <div class="container">
        <form>
          <h2>Send us a Message!</h2>

          <label for="name" className="label" ></label>
          <input id ="name" input type="text" placeholder='Name'/><br></br><br></br>

          <label for="email" className="label" ></label>
          <input id ="email" input type="email" placeholder='Email' /><br></br><br></br>

          <label for="message" className="Message" ></label>

          <textarea rows="6" cols="100" name="message" placeholder='Message' ></textarea><br></br>
          <button>Send</button>
          </form>
          </div>
    </div>
  );
}

export default App;
