import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home, ToBeRead } from "./pages";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/toberead">
          <ToBeRead />
        </Route>

        {/* <Route path="/search">
            <Search />
          </Route>

          <Route path="/library">
            <Library />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/">
            < />
          </Route>

          <Route>
            <NotFound404 />
          </Route> */}
      </Switch>
    </div>
  );
}

export default App;
