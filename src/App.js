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
      </MskSiteWrapper>
      <MskFooter
        connect={{
          contact: { phone: '(800) 456 7943', location: '#' },
          social: [
            { name: 'Facebook', href: '#', icon: 'facebook-iso' },
            { href: '#', name: 'Twitter', icon: 'twitter-iso' },
            { name: 'Instagram', icon: 'instagram-iso', href: '#' },
            { name: 'YouTube', icon: 'youtube-iso', href: '#' },
            { name: 'RSS', icon: 'feed', href: '#' },
          ],
        }}
        siteinfo={{
          logo: { href: 'mskcc.org', svg: 'msk' },
          copyright: 'Memorial Sloan Kettering Cancer Center',
          login: false,
          legal: [
            { text: 'Legal disclaimer', href: '#' },
            { text: 'Privacy policy', href: '#' },
            { text: 'Public notices', href: '#' },
          ],
          related: [
            {
              text: 'Careers',
              href: 'https://www.example.com',
              forceExternal: true,
            },
            {
              href: 'https://example.com',
              text: 'Giving',
              forceExternal: true,
            },
            {
              text: 'Library',
              href: 'https://example.com',
              forceExternal: true,
            },
            {
              href: 'https://example.com',
              text: 'OneMsk',
              forceExternal: true,
            },
            {
              text:
                'Gerstner Sloan Kettering Graduate School of Biomedical Sciences',
              href: 'https://example.com',
              forceExternal: true,
            },
          ],
          crm: [
            { text: 'Subscribe to MSK', href: '#' },
            { text: 'Manage Preferences', href: '#' },
          ],
          info: [
            { text: 'About us', href: '#' },
            { text: 'Pressroom', href: '#' },
            { text: 'OnCancer Blog', href: '#' },
            { text: 'Events', href: '#' },
            { text: 'Contact us', href: '#' },
          ],
        }}
        sitemap={[
          {
            state: false,
            title: 'For Adult Patients',
            slug: 'pc',
            headingLink: '/example',
            highlightLinks: [
              { text: 'Find a doctor', cta: '#' },
              { text: 'Schedule an appointment', cta: '#' },
              { text: 'Insurance', cta: '#' },
            ],
            links: [
              {
                cta: 'landing-page.html?q=pc-l',
                text: 'Overview',
                extraClasses: ['mobile'],
              },
              { cta: '#', text: 'Adult Cancers' },
              { text: 'Clinical Trials', cta: '#' },
              { text: 'Integrative Medicine', cta: '#' },
              { text: 'Patient & Caregiver Education', cta: '#' },
              { text: 'Patient Login', cta: '#' },
            ],
          },
          {
            state: false,
            slug: 'pd',
            headingLink: '/example',
            title: 'For Pediatric Patients',
            links: [
              {
                text: 'Overview',
                cta: 'landing-page.html?q=pc-l',
                extraClasses: ['mobile'],
              },
              { text: 'Pediatric Cancers', cta: '#' },
              { text: 'Life in Pediatrics', cta: '#' },
              { text: 'Hear from our Patients', cta: '#' },
              { text: 'Educational Resources', cta: '#' },
              { text: 'FAQs', cta: '#' },
            ],
            highlightLinks: [
              { text: 'Find a doctor', cta: '#' },
              { text: 'Make an Appointment', cta: '#' },
            ],
          },
          {
            state: false,
            headingLink: '/example',
            slug: 'hp',
            title: 'For Healthcare Professionals',
            links: [
              {
                text: 'Overview',
                cta: 'landing-page.html?q=hp-l',
                extraClasses: ['mobile'],
              },
              { text: 'Departments & Divisions', cta: '#' },
              { text: 'Find a Fellowship', cta: '#' },
              { text: 'Continuing Medical Education', cta: '#' },
              { text: 'Prediction Tools', cta: '#' },
            ],
            highlightLinks: [
              { text: 'Refer a Patient', cta: '#' },
              { text: 'Find a Fellowship', cta: '#' },
            ],
          },
          {
            state: false,
            slug: 'rs',
            title: 'For Research Scientists',
            headingLink: '/example',
            links: [
              {
                text: 'Overview',
                cta: 'landing-page.html?q=rs-l',
                extraClasses: ['mobile'],
              },
              { text: 'Clinical Research & Trials', cta: '#' },
              { text: 'PhD & MD/PhD Education', cta: '#' },
              { text: 'Sloan Kettering Institute', cta: '#' },
              { text: 'Find a Researcher', cta: '#' },
            ],
            highlightLinks: [
              { text: 'Research Areas', cta: '#' },
              { text: 'Find a Research Position', cta: '#' },
            ],
          },
        ]}
      />
    </div>
  );
}

export default App;
