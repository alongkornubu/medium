import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import TextEditor from "./components/TextEditor";
import {Switch ,Route} from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route path="/login">
           <Login/>
        </Route>
        <Route path="/signup">
           <Signup/>
        </Route>
        <Route path="/editor">
           <TextEditor/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
