import "./App.css";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  Login,
  Registration,
  ProfileSetup,
  Profile,
  Search,
  LibraryLanding,
  ToBeRead,
  CurrentReads,
  Error404,
  StatsDisplay,
} from "./pages";
import { BookContextProvider } from "./context/bookContext";
import { useHistory } from "react-router";

const BASE_URL = "localhost:3000";
const USER_URL = "localhost:3000/profile";

const token = localStorage.getItem("token");

function checkToken() {
  if (!token) {
    // history.push("/loginlanding");
    console.log("No token");
    return;
  }
}

const userId = localStorage.getItem("id");
const authorization = { headers: { authorization: token } };

function App() {

  return (
    <BookContextProvider>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/profilesetup">
            <ProfileSetup />
          </Route>
          <Route path="/profilelanding">
            <Profile />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/librarylanding">
            <LibraryLanding />
          </Route>
          <Route path="/toberead">
            <ToBeRead />
          </Route>
          <Route path="/currentreads">
            <CurrentReads />
          </Route>
          <Route path="/stats">
            <StatsDisplay/>
          </Route>
          <Error404 />
        </Switch>
      </div>
    </BookContextProvider>
  );
}

export default App;
