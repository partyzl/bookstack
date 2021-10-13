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
} from "./pages";
import { BookContextProvider } from "./context/bookContext";

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
          {/* <Route exact path="/currentreads">
            <CurrentReads />
          </Route> */}

          

          {/* <Route path="/completedreads">
            <CompletedReads />

           

          {/* <Route path="/profile">
           <Profile />
           </Route>
           
           <Route path="/">
           < />
           </Route>
           
           <Route>
           <NotFound404 />
          </Route>  */}

        </Switch>
      </div>
    </BookContextProvider>
  );
}

export default App;
