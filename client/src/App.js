import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Login, Registration, ProfileSetup, Profile, Home, Search, CurrentReads } from "./pages";
import { Landing, ToBeRead } from "./pages/Library";
import { BookContextProvider } from "./context/bookContext";

function App() {
  return (
    <BookContextProvider>
      <div className="App">
        <Switch>
          {/* Account Creation Routes */}
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/registration">
            <Registration />
          </Route>

          <Route path="/profile-setup">
           <ProfileSetup />
          </Route>

          {/* NAVBAR ROUTES */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/profile">
           <Profile />
          </Route>

          {/* Library Routes*/}
          <Route path="/library">
            <Landing />
          </Route>
          <Route exact path="/toberead">
            <ToBeRead />
          </Route>
          <Route exact path="/currentreads">
            <CurrentReads />
          </Route>



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