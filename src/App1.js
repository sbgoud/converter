import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <body>
       
      <div class="total-box">
        <div class="role">
          <strong>Role</strong>
        </div>
        <div>
          <div class="box-element1">
            <input type="radio" id="radiobutton" name="rbutton"></input>
            <label for="radiobutton">
              <strong>Viewer</strong>
              <div>Cannot do anything except view data</div>
            </label>
          </div>

          <div class="box-element2">
            <input type="radio" id="radiobutton2" name="rbutton"></input>
            <label for="radiobutton2">
              <strong>Editor</strong>
              <div>Make changes to invoices, no payments</div>
            </label>
          </div>
          <div class="box-element3">
            <input type="radio" id="radiobutton3" name="rbutton"></input>
            <label for="radiobutton3">
              <strong>Controller</strong>
              <div>All editor permissions, can make payments</div>
            </label>
          </div>
          <div class="box-element4">
            <input type="radio" id="radiobutton4" name="rbutton"></input>
            <label for="radiobutton4">
              <strong>Admin</strong>
              <div>Full access, can add team members</div>
            </label>
          </div>

          <div class="box-element5">
            <a href="">Remove</a>
          </div>

          <div class="box-element6">
            <a href="">Update permissions</a>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
