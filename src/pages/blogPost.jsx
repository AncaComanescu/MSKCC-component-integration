import React from "react";
import {
  MskBreadcrumb, MskRightRail, MskActions, MskSummary, MskAccordion, MskTile, MskGrid, MskGridRow, MskList//, MskBackToTop, MskNavWidget, MskFigure, MskButton
} from '@knapsack-cloud/msk-design-system/react';

import { blogPostData } from '../data/blogPostData'

///TODO: enable for rendering componenent MskFigure
// import child_vaccine from '../images/img_6070_2_hq_ret_1200x800.jpg';
// import child_vaccine_w200 from '../images/img_6070_2_hq_ret_1200x800_w200.jpg';
// import child_vaccine_w300 from '../images/img_6070_2_hq_ret_1200x800_w300.jpg';
// import child_vaccine_w400 from '../images/img_6070_2_hq_ret_1200x800_w400.jpg';
// import child_vaccine_w500 from '../images/img_6070_2_hq_ret_1200x800_w500.jpg';
// import child_vaccine_w600 from '../images/img_6070_2_hq_ret_1200x800_w600.jpg';
// import child_vaccine_w700 from '../images/img_6070_2_hq_ret_1200x800_w700.jpg';
// import child_vaccine_w800 from '../images/img_6070_2_hq_ret_1200x800_w800.jpg';
import hpv2_3x2 from '../images/hpv2_3x2.jpeg';
import hpv2_3x2_w200 from '../images/hpv2_3x2_w200.jpeg';
import hpv2_3x2_w300 from '../images/hpv2_3x2_w300.jpeg';
import hpv2_3x2_w400 from '../images/hpv2_3x2_w400.jpeg';
import hpv2_3x2_w500 from '../images/hpv2_3x2_w500.jpeg';
import hpv2_3x2_w600 from '../images/hpv2_3x2_w600.jpeg';
import hpv2_3x2_w700 from '../images/hpv2_3x2_w700.jpeg';
import hpv2_3x2_w800 from '../images/hpv2_3x2_w800.jpeg';

function BlogPost(props) {

  const mainContent = (
    <>
      <MskActions
        shareUrl="https://www.mskcc.org"
        printHref="https://www.mskcc.org/test"
        languages={[
          { name: 'english', href: '#', langCode: 'en' },
        ]}///workaround to render the component

        shareTitle="Share Title"
        shareSource="https://www.mskcc.org"
      />
      {/*
      ///TODO: enable for rendering MskFigure 
        <MskFigure
          personProfile={false}
          img={{
            src:{child_vaccine},
            srcset:
              `${child_vaccine_w200} 200w, ${child_vaccine_w300} 300w, ${child_vaccine_w400} 400w,${child_vaccine_w500} 500w,${child_vaccine_w600} 600w,${child_vaccine_w700} 700w, ${child_vaccine_w800} 800w`,
            sizes:'(min-width: 1250px) 780px, (min-width: 950px) 64vw, calc(100vw - 30px)',
            alt: 'Young girl',
          }}
          borderless={false}
          align="center"
          bodyText="Gregory Page, a dentist in Harlem in New York City, came to Memorial Sloan Kettering for a less invasive treatment for his prostate cancer. After surgery with MSK's Jonathan Coleman, he's back to living life as normal."
        />  */}
      <div class="abstract-summary__title">Summary (title can e part of summary component)</div>
      <MskSummary >
        <p>
          The human papillomavirus (HPV) vaccine protects against not only HPV but also certain types of cancer. Yet, a new study has found more parents are reluctant to have their child vaccinated. <a href="/cancer-care/doctors/andrew-kung">Andrew Kung</a>, Chair of the Department of Pediatrics at <a href="/pediatrics">MSK Kids</a>, explains why it’s so important to get this vaccine.
        </p>
      </MskSummary>
      {blogPostData.map((element, index) => {
        return element.element;
      })}
    </>
  );

  const pageIntro = <>
    <MskBreadcrumb
      breadcrumb={[
        { url: "https://www.mskcc.org/news", text: 'News & Information' },
        { url: "https://www.mskcc.org/news/in-the-news", text: 'In the News' }
      ]}
    />
  </>
  const rightRail = (<>

    <MskGrid types={{ small: '100', medium: '100', large: '100' }}>
      <MskGridRow>
        <div>placeholder for MskNavWidget </div>
        {/* TODO: enable for rendering componenent MskNavWidget
    <MskNavWidget
        hasBackToTop
        links={[
          { url: '#heading-one', text: 'link to heading one', isActive: false },
          { url: '#heading-two', text: 'link to heading two', isActive: true },
          {
            url: '#heading-three',
            text: 'link to heading three',
            isActive: false,
          },
        ]}
      /> */}
      </MskGridRow>
      <MskGridRow>
        <MskAccordion
          headlineSize="card-title"
          isMinimal={false}
          isReadMore={false}
          isInverted={true}
          state={true}
          headline="Related news"
          classes={[]}
        >
          <MskTile
            img={{
               src: { hpv2_3x2 },
               srcset: `${hpv2_3x2_w800} 800w,${hpv2_3x2_w700} 700w,  ${hpv2_3x2_w600}600w,${hpv2_3x2_w500} 500w,${hpv2_3x2_w400} 400w, ${hpv2_3x2_w300} 300w,${hpv2_3x2_w200} 200w`,
              // src:"https://www.mskcc.org/sites/default/files/styles/width_400_3x1/public/node/115969/3x2/hpv2_3x2.jpeg" ,
              // srcset:`https://www.mskcc.org/sites/default/files/styles/width_800_3x1/public/node/115969/3x2/hpv2_3x2.jpeg 800w,
              // https://www.mskcc.org/sites/default/files/styles/width_700_3x1/public/node/115969/3x2/hpv2_3x2.jpeg 700w,
              // https://www.mskcc.org/sites/default/files/styles/width_600_3x1/public/node/115969/3x2/hpv2_3x2.jpeg 600w,
              // https://www.mskcc.org/sites/default/files/styles/width_500_3x1/public/node/115969/3x2/hpv2_3x2.jpeg 500w,
              // https://www.mskcc.org/sites/default/files/styles/width_400_3x1/public/node/115969/3x2/hpv2_3x2.jpeg 400w,
              // https://www.mskcc.org/sites/default/files/styles/width_300_3x1/public/node/115969/3x2/hpv2_3x2.jpeg 300w,
              // https://www.mskcc.org/sites/default/files/styles/width_200_3x1/public/node/115969/3x2/hpv2_3x2.jpeg 200w`,
              sizes: "(min-width: 1250px) 366px, (min-width: 768px) 30vw, calc(100vw - 60px)",
              alt: 'Group of racially diverse boys and girls lying on grass and conversing.'
            }}
            title="Four Things Parents Should Know about the HPV Vaccine "
            titleUrl="/news/four-things-parents-should-know-about-hpv-vaccine"
          >
          </MskTile>
          <MskTile
            title="MSK Issues Joint Statement Urging Use of HPV Vaccine to Prevent Cancers"
            titleUrl="/news/msk-issues-joint-statement-urging-use-hpv-vaccine-prevent-cancers"
          >
          </MskTile>
          <MskTile
            title="HPV and Cancers of the Head and Neck: Common Questions and Answers"
            titleUrl="/news/hpv-and-head-and-neck-common-questions-and-answers"
          >
          </MskTile>
          <MskTile
            title="HPV Vaccine and Cancer Risk: Frequently Asked Questions"
            titleUrl="/news/hpv-vaccine-and-cancer-risk-frequently-asked-questions"
          >
          </MskTile>

          <MskTile
            title="Gynecologic Surgeon Carol Brown Discusses Importance of HPV Vaccine"
            titleUrl="/news/gynecologic-surgeon-carol-brown-discusses-importance-hpv-vaccine"
          >
          </MskTile>



        </MskAccordion>
      </MskGridRow>
      <MskGridRow>
        <MskAccordion
          headlineSize="card-title"
          isMinimal={false}
          isReadMore={false}
          isInverted={false}
          state={true}
          headline="Related People"
          classes={[]}
        >
          <MskGrid types={{ small: '50:50', medium: '66:33', large: '66:33' }}>
            <MskGridRow>
              <div className="demo-box">Andrew Kung
Chair, Department of Pediatrics</div>
            </MskGridRow>
          </MskGrid>
        </MskAccordion>

      </MskGridRow>
      <MskGridRow>
        <MskTile
          title="Stay Informed."
          buttonText="Newsletter Sign Up"
        >
          <div>Get the latest news and updates on MSK’s cancer care and research breakthroughs sent straight to your inbox with our e-newsletters.</div>
        </MskTile>
      </MskGridRow>       </MskGrid>
  </>)
  return (
    <MskRightRail
      lang="en"
      classes={[]}
      pageLevelLayout
      pageIntro={pageIntro}
      rightRail={rightRail}
      mainContent={mainContent}
    />

  );
}
export default BlogPost;