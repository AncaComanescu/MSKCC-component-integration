import doctorBio from "./pages/doctorBio";
import blogPost from "./pages/blogPost";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router> 
      <Route path="/doctor-bio" component={doctorBio}></Route>
      <Route path="/blog-post" component={blogPost}></Route>
    </Router>   
  );
}

export default App;
