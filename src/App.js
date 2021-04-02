import DoctorBio from "./pages/doctorBio";
import BlogPost from "./pages/blogPost";
import Home from "./pages/home";
import {
  MskFooter,
  MskSiteWrapper,
} from '@knapsack-cloud/msk-design-system/react';

import '@knapsack-cloud/msk-design-system/dist/main.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  let footerLinks = [
    { text: 'Example', href: 'https://example.com' },
    { text: 'Hello, world', href: 'https://helloworld.com' },
    { text: 'FooBar', href: 'https://foobar.com' },
  ];
  return (
    <div>
      <div className="msk-site-header">
        placeholder for msk site header
      </div>
      <MskSiteWrapper>
        <div>
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
        </div>
      </MskSiteWrapper>
      <MskFooter links={footerLinks} />
    </div>
  );
}

export default App;
