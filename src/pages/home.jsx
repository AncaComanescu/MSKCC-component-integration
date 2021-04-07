import React, { useEffect, useState } from "react";
import {
  MskMessage, MskUtilityCard, MskListBanner, MskGrid, MskGridRow, MskTile, MskTeaserCard, MskHero //, MskTabs, MskCarousel, MskCarouselSlide
} from '@knapsack-cloud/msk-design-system/react';

import MskCardWrapper from '../components/cardWrapper';
import MskLocalSelect from '../components/select';
import vaccineImage from '../images/vaccine_hp.jpg';
import infosess from '../images/infosess_covidpatient_1200x800.jpg';


function Home() {

  const [cancerTypes, setCancerTypes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [patientTypes, setpatientTypes] = useState([]);

  const getCancerTypes = function () {
    fetch('./data/cancerTypes.json')
      .then(response => {
        return response.json();
      }).then(data => {
        setCancerTypes(data.cancerTypes);
      })
      .catch(ex => {
        console.log("exception");
        console.log(ex);
      });
  }

  const getLocations = function () {
    fetch('./data/locations.json')
      .then(response => {
        return response.json();
      }).then(data => {
        setLocations(data.locations);
      })
      .catch(ex => {
        console.log("exception");
        console.log(ex);
      });
  }
  const getPatientType = function () {
    fetch('./data/patient.json')
      .then(response => {
        return response.json();
      }).then(data => {
        setpatientTypes(data.patientTypes);
      })
      .catch(ex => {
        console.log("exception");
        console.log(ex);
      });
  }

  useEffect(() => {
    getCancerTypes();
    getLocations();
    getPatientType();
  }, []);

  const bodyHtml = (
    <p>MSK is offering COVID-19 vaccines to <strong>our patients 18 and over, who live in New York State,&nbsp;and&nbsp;who meet current
    </strong>
      <a href="https://covid19vaccine.health.ny.gov/" target="_blank" rel="noopener">
        <strong>NY State eligibility criteria</strong>
      </a>
      <strong>.</strong>&nbsp;Eligible patients can use
      <a href="https://mskcovid19.myhealthdirect.com/DecisionSupport" target="_blank" rel="noopener">this link</a>
      to schedule a vaccination appointment.For additional information,
      <a href="https://www.mskcc.org/coronavirus/covid-19-vaccine">
      </a>
    </p>);

  const plainTextMessage = "MSK is offering COVID-19 vaccines to our patients 18 and over, who live in New York State who meet current NY State eligibility criteria. Eligible patients can use this link to schedule a vaccination appointment. For additional information,";

  const listBanner = (
    <p>MSK is offering COVID-19 vaccines to
      <strong>our patients 18 and over, who live in New York State, and who meet current </strong>
      <a href="https://covid19vaccine.health.ny.gov/" target="_blank" rel="noopener"><strong>NY State eligibility criteria</strong></a>
      <strong>.</strong>
        Eligible patients can use
      <strong><a href="https://mskcovid19.myhealthdirect.com/DecisionSupport" target="_blank" rel="noopener">this link</a></strong>
        to schedule a vaccination appointment. For additional information,
      <strong><a href="/coronavirus/covid-19-vaccine">learn more</a></strong>.
    </p>

  );

  const plainTextListBanner = "MSK is offering COVID-19 vaccines to our patients 18 and over, who live in New York State, and who meet current   NY State eligibility criteria. Eligible patients can use this link to schedule a vaccination appointment. For additional information, learn more."
  const heroChildren = (<p>Learn more about vaccines and eligibility for vaccination appointments.</p>);
  return (
    <>
      <MskCardWrapper bleed renderCombined>
        <MskMessage
          body={plainTextMessage}
          hideIcon={true}
          href="https://www.mskcc.org/coronavirus/covid-19-vaccine"
          title="COVID-19 Vaccine Available to MSK Patients"
          type="emergency"
        />

        <MskMessage
          body={"MSK Notice of Accellion Data Incident."}
          hideIcon={true}
          href="https://www.mskcc.org/coronavirus/covid-19-vaccine"
          isDismissable={true}
          type="info"
        />
      </MskCardWrapper>

      <MskCardWrapper bleed>
        {/* placegholder for carousel with hero content */}
        <MskHero
          theme="segment"
          img={{
            large: 'https://www.mskcc.org/sites/default/files/2021-01/hp_hero_shah_1920x640-1.jpg',
            medium: 'https://www.mskcc.org/sites/default/files/2021-01/hp_hero_shah_1200x400.jpg',
            small: 'https://www.mskcc.org/sites/default/files/2021-01/hp_hero_shah_1200x400.jpg',
            xsmall: 'https://www.mskcc.org/sites/default/files/2021-01/hp_hero_shah_1200x400.jpg',
          }}
          isNarrow={false}
          title="COVID-19 Vaccination Information for Patients"
          ctaLinks={[{ text: "Read More", href: "/coronavirus/covid-19-vaccine" }]}
        >
          {heroChildren}
        </MskHero>
      </MskCardWrapper>
      <MskCardWrapper>
        <MskListBanner
          style="primary"
          title={"COVID-19 Vaccine Available to MSK Patients"}
          telephoneText={plainTextListBanner} />
      </MskCardWrapper>

      <MskCardWrapper theme="theme-light">
        <MskGrid
          types={{ small: '50:50', medium: '33:33:33', large: '33:33:33' }}
          gutter={20}
        >
          <MskGridRow>

            <MskUtilityCard theme="theme-white"
              icon="doctor"
              heading="Find a Doctor"
              body=""
              ctaType={'link'}
              ctaItems={[{ ctaText: 'View our doctors ', ctaHref: 'https://www.mskcc.org/doctor' }]}>
              <>
                <br></br>
                <MskLocalSelect hasEmptyOption={true} label={"Search for doctors by cancer type:"} items={[
                  { title: 'Option 1', value: '1' },
                  { title: 'Option 2', value: '2' },
                  { title: 'Option 3', value: '3' },
                  { title: 'Option 4', value: '4' },
                  { title: 'Option 4', value: '4' },
                  { title: 'Option 5', value: '5' },
                  { title: 'Option 6', value: '6' },
                ]}>
                </MskLocalSelect>
              </>
            </MskUtilityCard>
          </MskGridRow>
          <MskGridRow>
            <MskUtilityCard theme="theme-white"
              children={MskLocalSelect}
              icon="calendar"
              heading="Make an Appointment"
              body=""
              ctaType={'link'}
              ctaItems={[{ ctaText: 'Get in touch with us', ctaHref: '/experience/become-patient/appointment' }]}>
              <>
                <br></br>
                <MskLocalSelect hasEmptyOption={true} label={"How can we help?"} items={patientTypes}>
                </MskLocalSelect>
              </>
            </MskUtilityCard>
          </MskGridRow>

          <MskGridRow>
            <MskUtilityCard theme="theme-white"
              children={MskLocalSelect}
              icon="location"
              heading="Select a location near you:"
              body=""
              ctaType={'link'}
              ctaItems={[{ ctaText: 'Get in touch with us', ctaHref: '/experience/become-patient/appointment' }]}>
              <>
                <br></br>
                <MskLocalSelect hasEmptyOption={true} label={"How can we help?"} items={locations}>
                </MskLocalSelect>
              </>
            </MskUtilityCard>
          </MskGridRow>
        </MskGrid>
      </MskCardWrapper>
      <MskCardWrapper>
        <MskListBanner
          style={"secondary"}
          title={"Giving to MSK"}
          telephoneText={"Your generosity drives progress at MSK."}
          hasButtonStyle={true}
          text={"Donate now"}
        ></MskListBanner>
      </MskCardWrapper>

      <MskCardWrapper>
        <MskUtilityCard
          heading={"Cancer care is essential care."}
          body={"From testing for patients and staff, to enhanced safety measures, to telemedicine, we are making sure that you are able to get the care you need, when you need it, and where you need it. As always, our specialists treat every type of cancer, including the most important one: yours. Appointments are available for new and existing patients. Our inpatient and outpatient locations are open, and our healthcare teams are ready to provide the care and treatment you need."}

        >
          <>
            <div> Placeholder for Tabs</div>
            <MskLocalSelect hasEmptyOption={true} label={"Cancer types we treat"} items={cancerTypes}>
            </MskLocalSelect>
          </>
        </MskUtilityCard>
      </MskCardWrapper>

      <MskCardWrapper>
        <MskTeaserCard
          hasHighlight={false}
          mediaAlignment="left"
          maintainAspectRatio={false}
          lowResLargeImg={vaccineImage}
          largeImg={vaccineImage}
          lowResSmallImg={vaccineImage}
          smallImg={vaccineImage}
          heading="What You Should Know about the COVID-19 Vaccines"
          buttonText="Learn More"
          href="/coronavirus/covid-19-vaccine">
          <p>You probably have been hearing a lot lately about vaccines for the COVID-19 virus and may have questions. We want you to know how these vaccines work, why we believe they are safe and effective, and how soon they may be available to you.</p>
        </MskTeaserCard>
      </MskCardWrapper>

      <MskCardWrapper>
        <MskTeaserCard
          hasHighlight={false}
          mediaAlignment="right"
          maintainAspectRatio={false}
          lowResLargeImg={infosess}
          largeImg={infosess}
          lowResSmallImg={infosess}
          smallImg={infosess}
          heading="Patient Information Session: COVID-19 Update"
          href="/coronavirus/covid-19-vaccine">
          <p>You probably have been hearing a lot lately about vaccines for the COVID-19 virus and may have questions. We want you to know how these vaccines work, why we believe they are safe and effective, and how soon they may be available to you.</p>
        </MskTeaserCard>
      </MskCardWrapper>
      
      <MskCardWrapper>

        <MskUtilityCard theme="theme-white"
          heading="A Variety of Services for You"
          body="We’re here to help you and your family before, during, and after your treatment."
        >
          <>
            <MskGrid
              types={{ small: '50:50', medium: '33:33:33', large: '33:33:33' }}
              gutter={20}
            >
              <MskGridRow>
                <MskTile
                  img={{

                    srcset:
                      '/images/imagePlaceholder2.png 500w, /images/imagePlaceholder3.png 700w, /images/imagePlaceholder1.png 350w',
                    sizes: '(min-width: 400px) 50vw, 100vw',
                    alt: 'A simple example',
                  }}
                  title="Counseling and Support "
                  titleUrl=" /experience/patient-support/counseling "
                >
                  From support groups to one-on-one sessions, our team is here for you.
              </MskTile>

              </MskGridRow>
              <MskGridRow>
                <MskTile

                  title="Nutrition"
                  titleUrl="/experience/patient-support/nutrition-cancer"
                >Get information about healthy eating, recipes, and tips.
                </MskTile>
              </MskGridRow>
              <MskGridRow>
                <MskTile title="Integrative Medicine"
                  titleUrl="/cancer-care/diagnosis-treatment/symptom-management/integrative-medicine"
                  >View information on herbs, find meditations, and learn about our array of at-home classes and services.
                </MskTile>
              </MskGridRow>

            </MskGrid>

          </>
        </MskUtilityCard>
      </MskCardWrapper>
    </>
  );
}

export default Home;
