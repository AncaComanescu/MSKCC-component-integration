import React from "react";
import {
  MskActions,
  MskBreadcrumb,
  MskFigure,
  MskGrid,
  MskGridRow,
  MskList,
  MskListItem,
  MskRightRail,
  MskLink,
  MskSiteWrapper,
} from "@knapsack-cloud/msk-design-system/react";

const pageIntro = (
  <>
    <MskBreadcrumb
      breadcrumb={[
        { text: "For Adult Patients", url: "https://example.com" },
        { text: "Your Experience", url: "https://example.com" },
        { text: "Patient Support", url: "https://example.com" },
        { text: "Nutrition and Cancer", url: "https://example.com" },
        {
          text: "Recipes for People with Cancer",
          url: "https://example.com",
        },
      ]}
    />
  </>
);

const mainContent = (
  <>
    <h1>
      <span>Baked Eggs with Tomatoes and Mozzarella</span>
    </h1>
    <MskActions
      shareUrl="https://www.mskcc.org"
      printHref="https://www.mskcc.org/test"
      shareTitle="Share Title"
      shareSource="https://www.mskcc.org"
    />
    <MskFigure
      img={{
        src:
          "https://www.mskcc.org/sites/default/files/styles/large/public/node/170707/3x2/msk_120418_0417_3x2.jpg",
        srcset:
          "https://www.mskcc.org/sites/default/files/styles/width_200/public/node/170707/3x2/msk_120418_0417_3x2.jpg 200w, https://www.mskcc.org/sites/default/files/styles/width_300/public/node/170707/3x2/msk_120418_0417_3x2.jpg 300w, https://www.mskcc.org/sites/default/files/styles/width_400/public/node/170707/3x2/msk_120418_0417_3x2.jpg 400w, https://www.mskcc.org/sites/default/files/styles/width_500/public/node/170707/3x2/msk_120418_0417_3x2.jpg 500w, https://www.mskcc.org/sites/default/files/styles/width_600/public/node/170707/3x2/msk_120418_0417_3x2.jpg 600w, https://www.mskcc.org/sites/default/files/styles/width_700/public/node/170707/3x2/msk_120418_0417_3x2.jpg 700w, https://www.mskcc.org/sites/default/files/styles/width_800/public/node/170707/3x2/msk_120418_0417_3x2.jpg 800w",
        sizes:
          "(min-width: 1250px) 780px, (min-width: 950px) 64vw, calc(100vw - 30px)",
        alt: "Baked Eggs with Tomatoes and Mozzarella",
      }}
      personProfile={false}
      bodyText="This satisfying egg dish makes for an energizing breakfast or a special family-friendly dinner entrée. Make the meal heartier by serving it with multigrain toast."
    />
    <MskGrid
      gutter={25}
      types={{
        small: "25:25",
        medium: "25:25",
        large: "25:25",
      }}
    >
      <MskGridRow>
        <p>
          <strong>Prep Time</strong>
        </p>
        <p>10 minutes</p>
      </MskGridRow>
      <MskGridRow>
        <p>
          <strong>Cook Time</strong>
        </p>
        <p>35 minutes</p>
      </MskGridRow>
      <MskGridRow>
        <p>
          <strong>Total Time</strong>
        </p>
        <p>45 minutes</p>
      </MskGridRow>
      <MskGridRow>
        <p>
          <strong>Yield</strong>
        </p>
        <p>Serves 8</p>
      </MskGridRow>
    </MskGrid>
    <MskGrid
      gutter={25}
      types={{
        small: "50:50",
        medium: "50:50",
        large: "50:50",
      }}
    >
      <MskGridRow>
        <h3>Instructions</h3>
        <MskList isOrdered lang="en">
          <MskListItem hasRemovedListStyles={false}>
            <>Saepe distinctio nam</>
          </MskListItem>
          <MskListItem hasRemovedListStyles={false}>
            <>Saepe distinctio nam</>
          </MskListItem>
          <MskListItem hasRemovedListStyles={false}>
            <>Saepe distinctio nam</>
          </MskListItem>
          <MskListItem hasRemovedListStyles={false}>
            <>Saepe distinctio nam</>
          </MskListItem>
          <MskListItem hasRemovedListStyles={false}>
            <>Saepe distinctio nam</>
          </MskListItem>
        </MskList>
      </MskGridRow>
      <MskGridRow>Simple List or Card with theme background</MskGridRow>
    </MskGrid>

    <p>
      <strong>Diets</strong>
    </p>
    <MskGrid
      gutter={25}
      types={{
        small: "100",
        medium: "100",
        large: "100",
      }}
    >
      <MskGridRow>
        <MskLink
          isStandalone={false}
          segmentedText={[]}
          text="Internal link"
          href="https://mskcc.org"
        />
      </MskGridRow>
      <MskGridRow>
        <MskLink
          isStandalone={false}
          segmentedText={[]}
          text="Internal link"
          href="https://mskcc.org"
        />
      </MskGridRow>
    </MskGrid>

    <p>
      <strong>Symptons</strong>
    </p>
    <MskGrid
      gutter={25}
      types={{
        small: "100",
        medium: "100",
        large: "100",
      }}
    >
      <MskGridRow>
        <MskLink
          isStandalone={false}
          segmentedText={[]}
          text="Internal link"
          href="https://mskcc.org"
        />
      </MskGridRow>
      <MskGridRow>
        <MskLink
          isStandalone={false}
          segmentedText={[]}
          text="Internal link"
          href="https://mskcc.org"
        />
      </MskGridRow>
    </MskGrid>
  </>
);

const rightRail = (
  <>
    <MskGrid>
      <MskGridRow></MskGridRow>
    </MskGrid>
  </>
);

const RecipePage = () => {
  return (
    <>
      <MskRightRail
        lang="en"
        classes={[]}
        pageLevelLayout
        pageIntro={pageIntro}
        rightRail={rightRail}
        mainContent={mainContent}
      />
    </>
  );
};

export default RecipePage;
