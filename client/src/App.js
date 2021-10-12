import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home, Search } from "./pages";
import { Landing, ToBeRead } from "./pages/Library";
import { BookContextProvider } from "./context/bookContext";

function App() {
  return (
    <BookContextProvider>
      <div className="App">
        <Switch>
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

          {/* <Route path="/completedreads">
            <CompletedReads />
          </Route>
         

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
