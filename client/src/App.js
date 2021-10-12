import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Login, Home, Search } from "./pages";
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

          {/* NAVBAR ROUTES */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>

          {/* Library Routes*/}
          {/* <Route path="/library">
            <Library />
            </Route>
            <Route path="/completedreads">
            <CompletedReads />
            </Route>
            <Route exact path="/toberead">
            <ToBeRead />
          </Route> */}

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
