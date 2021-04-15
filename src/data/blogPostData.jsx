import {
  MskTeaserCard, MskPaginationPages, MskBackToTop
} from '@knapsack-cloud/msk-design-system/react';
import teasercard from '../images/030519_msk-01066_rt2_1200x800.jpg'

const backToTop = <MskBackToTop text={"Back To Top"}></MskBackToTop>;

export const blogPostData = [
  {
    element: <p>Having a vaccine that protects people from getting <em>any </em>cancer is a life-saving medical breakthrough; the HPV vaccine protects against <em>many</em> cancers – those of the <a href="/cancer-care/types/cervical">cervix</a>, <a href="/cancer-care/types/anal">anus</a>, <a href="/cancer-care/types/throat">throat</a>, penis, vagina, and more. All of them can result from HPV, the human papillomavirus.
    </p>
  },
  {
    element: <p>“It’s far better to prevent a cancer than treat a cancer,” says Andrew Kung, Chair of the Department of Pediatrics at MSK Kids. According to the Centers for Disease Control and Prevention, getting vaccinated could prevent an estimated 92 percent of cancers attributed to HPV.
    </p>
  },
  {
    element: <p>“It’s far better to prevent a cancer than treat a cancer,” says <a href="/cancer-care/doctors/andrew-kung">Andrew Kung</a>, Chair of the Department of Pediatrics at <a href="/pediatrics">MSK Kids</a>. According to the Centers for Disease Control and Prevention, getting vaccinated could prevent <a href="https://www.cdc.gov/media/releases/2019/p0822-cancer-prevented-vaccine.html" target="_blank" rel="noopener">an estimated 92 percent of cancers attributed to HPV.</a>
    </p>
  },
  {
    element: <p>HPV has led to an <a href="https://www.cancernetwork.com/view/late-stage-head-and-neck-cancer-us-sees-increasing-incidence" target="_blank" rel="noopener">alarming increase</a> in advanced head and neck cancers, especially among white men. So it’s just as important for boys to be vaccinated as girls.
    </p>
  },
  {
    element: <p>And yet, the number of parents reluctant to have their child vaccinated is rising, according to <a href="https://pediatrics.aappublications.org/content/147/3/e2020026286" target="_blank" rel="noopener">a recent study published in the journal <em>Pediatrics</em></a>. Study results indicated that some parents are worried about potential side effects of the vaccine, despite the fact that 15 years after its approval by the Food and Drug Administration (FDA), the number of side effects has been low.
    </p>
  },
  {
    element: <p>It’s natural for parents to want as much information as possible about vaccines, so Dr. Kung offers these answers to key questions.
      </p>
  },
  {
    element: <h2>What is HPV and how does it cause cancer?
      </h2>
  },
  {
    element: <p>HPV is the most common sexually transmitted infection in the United States. There are more than 100 types of HPV, some of which can cause serious health problems, like cancer. There are roughly 45,000 HPV-associated cancers diagnosed each year. About 25,400 cases are in women and 19,900 are in men.
      </p>
  },
  {
    element: <p>“As a pediatric oncologist, I’m often asked if there are things a parent can do to prevent their child from getting cancer,” says Dr. Kung. “The answer is yes: There are certain things that can be done in childhood to prevent cancer later, like getting vaccinated against HPV.”
        </p>
  },
  { element: backToTop },
  { element: <h2 class="right-rail__subtitle" id="the-hpv-vaccine-does-not-encourage-promiscuity-it-protects-children-from-developing-cancer-when-they-grow-up">The HPV vaccine does not encourage promiscuity; it protects children from developing cancer when they grow up.</h2> },
  {
    element: <p><a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(19)30298-3/fulltext" target="_blank" rel="noopener">A major study</a> of 66 million young people worldwide found that the HPV vaccine reduced pre-cancerous cervical lesions by more than 50 percent in young women.&nbsp;
      </p>
  },
  {
    element: <p>Dr. Kung compares the HPV vaccine to the Hepatitis B vaccine, which children routinely receive. Hepatitis B can also spread through sexual activity and can contribute to <a href="/cancer-care/types/liver">liver cancer</a> in adults. “The rationale for vaccinating against HPV is the same,” he says.
      </p>
  },
  {
    element: <MskTeaserCard
      hasHighlight={true}
      mediaAlignment="left"
      lowResLargeImg={teasercard}
      largeImg={teasercard}
      smallImg={teasercard}
      lowResSmallImg={teasercard}
      heading="Think You’re Too Old to Get the HPV Vaccine to Prevent Cancer? Maybe Not"
      buttonText="Learn More"
      href="#"
    >
      <p>Learn from an MSK expert what people over 26 should know about getting the HPV vaccine to protect themselves from several forms of cancer.
      </p>
    </MskTeaserCard>
  },
  { element: backToTop },
  { element: <h2 class="right-rail__subtitle" id="the-vaccine-has-a-proven-track-record-of-safety">The vaccine has a proven track record of safety.</h2> },
  {
    element: <p>“The safety requirements for a vaccine to receive FDA approval are extremely high,” says Dr. Kung. The FDA looked at safety data from <a href="https://www.cdc.gov/hpv/hcp/vaccine-safety-data.html" target="_blank" rel="noopener">tens of thousands of people</a> before approving the vaccine. Since then, the FDA has tracked results of the vaccine. As of 2018, data from more than 120 million administered doses show no evidence it causes harm, according to the <a href="https://www.cancer.gov/about-cancer/causes-prevention/risk/infectious-agents/hpv-vaccine-fact-sheet" target="_blank" rel="noopener">National Cancer Institute.</a>
    </p>
  },
  { element: backToTop },
  {
    element: <MskPaginationPages
      prevPage="In the News"
      nextUrl="#"
      prevUrl="#"
      nextPage="Four Things Parents Should Know about the HPV Vaccine"
    />
  }
];