import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import MovieList from "./pages/movieList/movieList";
import EditMovie from "./pages/editMovie/editMovie";
import NewMovie from "./pages/newMovie/NewMovie";
import NewTheater from "./pages/newTheater/newTheater";
import ViewTheater from "./pages/theaterList/theaterList"

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/movieList">
            <MovieList />
          </Route>

          <Route path="/newmovie">
            <NewMovie />
          </Route>
          <Route path="/editmovie/:id">
            <EditMovie />
          </Route>
          <Route path="/addTheater">
            <NewTheater />
          </Route>
          <Route path="/viewTheater">
            <ViewTheater />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
