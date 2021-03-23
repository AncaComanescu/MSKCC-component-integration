import DoctorBio from "./pages/doctorBio";
import BlogPost from "./pages/blogPost";
import Home from "./pages/home";
import '@knapsack-cloud/msk-design-system/dist/main.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/doctor-bio" component={DoctorBio}></Route>
      <Route path="/blog-post" component={BlogPost}></Route>
    </Router>

  );
}

export default App;
