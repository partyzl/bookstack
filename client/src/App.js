import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Login, Registration, Home, Search } from "./pages";
import { Landing, ToBeRead, CurrentReads } from "./pages/Library";
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

          {/* NAVBAR ROUTES */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
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
