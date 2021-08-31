import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
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
      </Switch>

    </>
  );
}

export default App;
