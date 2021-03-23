import DoctorBio from "./pages/doctorBio";
import BlogPost from "./pages/blogPost";
import Home from "./pages/home";
import '@knapsack-cloud/msk-design-system/dist/main.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
 
    <Router>
        <Switch>
          <Route path="/doctor-bio">
            <DoctorBio />
          </Route>
          <Route path="/blog-post">
            <BlogPost />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
