import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/library">
            <Library />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route>
            <NotFound404 />
          </Route>
        </Switch>
      </NavBar>
    </div>
  );
}

export default App;
