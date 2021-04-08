import React from "react";
import {
  MskMessage,
  MskLeftRail,
  BaseballCard,
  MskBreadcrumb,
  MskListBanner,
  MskRichCallout,
  MskList,
  MskListItem,
  MskSiteWrapper,
  MskLink,
  MskButton,
  MskSimpleCallout,
} from "@knapsack-cloud/msk-design-system/react";

function DoctorBio(props) {
  const pageIntro = (
    <>
      <header>
        <MskMessage
          body="MSK is offering COVID-19 vaccines to our patients 16 and over, who live in New York State who meet current NY State eligibility criteria. 
          Eligible patients over 18 can use this link to schedule a vaccination. For additional information"
          hideIcon={true}
          href="https://www.mskcc.org/coronavirus/covid-19-vaccine"
          isDismissable={true}
          title="COVID-19 Vaccine Available to MSK Patients"
          type="emergency"
        />
      </header>
      <MskBreadcrumb
        breadcrumb={[{ url: "https://example.com", text: "Find a Doctor" }]}
      />
      <BaseballCard
        img={{
          src:
            "https://www.mskcc.org/sites/default/files/styles/width_600/public/node/22/3x2/abdel-wahab_1200x800.jpg",
          srcset:
            "https://www.mskcc.org/sites/default/files/styles/width_600/public/node/22/3x2/abdel-wahab_1200x800.jpg 600w,https://www.mskcc.org/sites/default/files/styles/width_500/public/node/22/3x2/abdel-wahab_1200x800.jpg 500w,https://www.mskcc.org/sites/default/files/styles/width_400/public/node/22/3x2/abdel-wahab_1200x800.jpg 400w,https://www.mskcc.org/sites/default/files/styles/width_300/public/node/22/3x2/abdel-wahab_1200x800.jpg 300w",
          alt:
            "Memorial Sloan Kettering Cancer Center hematologic oncologist Omar Abdel-Wahab",
        }}
        hasDivider={false}
        heading="Omar Abdel-Wahab, MD"
        subheading="Hematologic Oncologist"
        bodyCopy="<strong>Clinical Expertise</strong><br> Leukemia; Myeloid Malignancies (myeloproliferative neoplasms, myelodysplasia, acute myeloid leukemia)"
        href="#"
      />
    </>
  );

  const mainContent = (
    <>
      <MskListBanner
        title="New Patient Appointments"
        text="Schedule an Appointment."
        icon1="phone"
        icon2="calendar-schedule-pediatrics"
        hasButtonStyle
        style="primary"
        telephoneNumber="646-497-9154"
        telephoneText="Mon–Fri, 8:00 AM–6:00 PM, ET"
      />
      <MskRichCallout
        body={[
          "Dr. Abdel-Wahab accepts the following list of insurance providers. Select your insurance provider to see more details.",
        ]}
        title="Accepted Insurance Providers"
        selectAction="reveal"
        select={{
          items: [
            {
              value: "insurance-8164",
              title: "Aetna",
              description:
                '<p>Memorial Sloan Kettering is an in-network provider with <a href="https://www.aetna.com/member/">Aetna HMO, POS, and PPO plans</a>.</p>\n',
            },
            {
              value: "insurance-8167",
              title: "Blue Cross Blue Shield",
              description:
                '<h4>In New York State</h4>\n\n<p>Memorial Sloan Kettering is an in-network provider with <a href="http://www.empireblue.com/">Empire Blue Cross Blue Shield</a> (Wellpoint) of New York HMO, EPO, PPO, and POS plans.</p>',
            },
          ],
          name: "Enter your insurance provider",
          placeholder: "Search for your insurance",
        }}
      />
      <h2>Contact and Location</h2>
      <MskRichCallout
        body={[
          "Memorial Sloan Kettering’s doctors work out of a variety of locations throughout New York City, Long Island, New Jersey, and Westchester for your convenience.",
        ]}
        ctaText="See all locations"
        imgSrc="https://www.mskcc.org/themes/mskcc/images/locations-map-thumbnail_large.png"
        title="Find a More Convenient Location "
        ctaLink="#"
      />
      <h2>About Me</h2>
      <MskList isOrdered={false} lang="en">
        <MskListItem hasRemovedListStyles={true}>
          <strong>Education</strong>
        </MskListItem>
        <MskListItem hasRemovedListStyles={true}>
          <li>MD, Duke University</li>
        </MskListItem>
        <MskListItem hasRemovedListStyles={true}>
          <strong>Fellowships</strong>
        </MskListItem>
        <MskListItem hasRemovedListStyles={true}>
          <li>Hematology/Oncology -</li>
          <li>Memorial Sloan Kettering</li>
          <li>Cancer Center</li>
        </MskListItem>
        <MskListItem hasRemovedListStyles={true}>
          <strong>Residencies</strong>
        </MskListItem>
        <MskListItem hasRemovedListStyles={true}>
          <li>Internal Medicine -</li>
          <li>Massachusetts General</li>
        </MskListItem>
        <MskListItem hasRemovedListStyles={true}>
          <strong>Board Certifications</strong>
        </MskListItem>
        <MskListItem hasRemovedListStyles={true}>
          <li>Internal Medicine</li>
        </MskListItem>
      </MskList>
      <p>
        I am the Director of the MSK Center for Hematologic Malignancies. I
        currently spend the majority of my time in the laboratory investigating
        the underlying causes of these disorders by studying the genes of
        patient samples as well as in vitro and in vivo models. As a member of
        the Human Oncology and Pathogenesis Program, I have helped to identify
        and characterize several new genetic abnormalities in the diseases
        mentioned above. In addition to increasing our understanding of the
        causes of these disorders, these discoveries have promise in helping to
        discover targeted therapies.
      </p>
      <h2>Awards and Honors</h2>
      <MskList isOrdered={false} lang="en">
        <MskListItem hasRemovedListStyles={true}>
          <li>
            Seldin-Smith Award for Pioneering Research, American Society of
            Clinical Investigation (2017)
          </li>
          <li>
            Pershing Square Sohn Prize for Young Investigators in Cancer
            Research (2016)
          </li>
          <li>Leukemia & Lymphoma Society Clinical Scholar Award (2015)</li>
          <li>
            Joanne Levy Memorial Award for Outstanding Achievement, American
            Society of Hematology (2015)
          </li>
        </MskListItem>
      </MskList>
      <h2>Colleagues</h2>
      <p>
        Doctors at Memorial Sloan Kettering work as teams, with specialists from
        all different areas. This allows us to consider all your needs together,
        and to give you the best possible care.
      </p>
      <MskLink
        isStandalone
        text="See all Leukemia Service doctors"
        href="https://mskcc.org"
      />
      <h2>Clinical Trials</h2>
      <MskRichCallout
        body={[
          "You may be able to participate in a clinical trial even if you are new to MSK. Search our online directory to find trial information and see more about who can participate.",
        ]}
        ctaText="Search clinical trials"
        imgSrc="https://www.mskcc.org/themes/mskcc/images/clinicaltrials.png"
        title="Find a Clinical Trial for You"
        ctaLink="#"
      />
      <h2>Research and Publications</h2>
      <MskButton text="View Dr. Abdel-Wahab's Lab" />
      <MskRichCallout
        body={[
          "Visit PubMed for a full listing of Dr. Abdel-Wahab’s journal articles. Pubmed is an online index of research papers and other articles from the US National Library of Medicine and the National Institutes of Health.",
        ]}
        ctaText="See all on PubMed"
        title="Publications on PubMed"
        ctaLink="#"
      />
      <h2>Disclosures</h2>
      <p>
        Doctors and faculty members often work with pharmaceutical, device,
        biotechnology, and life sciences companies, and other organizations
        outside of MSK, to find safe and effective cancer treatments, to improve
        patient care, and to educate the health care community.
      </p>
      <p>
        MSK requires doctors and faculty members to report (“disclose”) the
        relationships and financial interests they have with external entities.
        As a commitment to transparency with our community, we make that
        information available to the public.
      </p>
      <MskList isOrdered={false} lang="en">
        <MskListItem hasRemovedListStyles={true}>
          <p>
            Omar Abdel-Wahab discloses the following relationships and financial
            interests:
          </p>
        </MskListItem>
        <MskListItem hasRemovedListStyles={true}>
          <li>Alchemy, Inc.</li>
          <li>
            Ownership / Equity Interests; Provision of Services (uncompensated)
          </li>
        </MskListItem>
        <MskListItem hasRemovedListStyles={true}>
          <li>Envisagenics</li>
          <li>
            Ownership / Equity Interests; Provision of Services (uncompensated)
          </li>
        </MskListItem>
      </MskList>
      <p>
        If you’re a patient at MSK and would like more information about your
        doctor’s external relationships, please talk with your doctor.
      </p>
      <p>
        The information published here is for a specific annual disclosure
        period. There may be differences between information on this and other
        public sites as a result of different reporting periods and/or the
        various ways relationships and financial interests are categorized by
        organizations that publish such data.
      </p>
      <MskSimpleCallout ctaText="View all disclosures" ctaLink="#">
        This page and data include information for a specific MSK annual
        disclosure period (January 1, 2019 through disclosure submission in
        spring 2020). This data reflects interests that may or may not still
        exist. This data is updated annually. Learn more about MSK’s COI
        policies here. For questions regarding MSK’s COI-related policies and
        procedures, email MSK’s Compliance Office at{" "}
        <a href="ecoi@mskcc.org">ecoi@mskcc.org</a>.
      </MskSimpleCallout>
      <h2>Msk Carousel Placeholder</h2>
    </>
  );

  return (
    <>
      <MskSiteWrapper>
        <MskLeftRail
          pageLevelLayout
          classes={[]}
          pageIntro={pageIntro}
          leftRail={<>This nav MskNavWidget.</>}
          mainContent={mainContent}
        />
      </MskSiteWrapper>
    </>
  );
}
export default DoctorBio;
