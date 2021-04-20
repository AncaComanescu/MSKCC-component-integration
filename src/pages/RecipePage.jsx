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
  MskTile,
  MskAccordion,
  MskMessage,
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
      borderless={false}
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
            <>
              Thoroughly rinse fresh produce under warm running water for 20
              seconds. Scrub to remove excess dirt.
            </>
          </MskListItem>
          <MskListItem hasRemovedListStyles={false}>
            <>Preheat oven to 350 degrees.</>
          </MskListItem>
          <MskListItem hasRemovedListStyles={false}>
            <>
              In a saucepan over medium-high heat, warm olive oil. Add onion and
              cook until translucent, about 5 minutes. Add garlic and cook until
              fragrant. Stir in tomatoes with juices, season with salt and
              pepper to taste, and bring to a boil. Reduce heat to low and
              simmer until nicely thickened, about 15 minutes. Season with more
              salt and pepper to taste.
            </>
          </MskListItem>
          <MskListItem hasRemovedListStyles={false}>
            <>
              Place four medium ramekins on a baking sheet. Divide tomato sauce
              evenly between ramekins. Top with mozzarella and oregano. Break 2
              eggs into each ramekin, on top of the tomato sauce and cheese, and
              season with salt and pepper.
            </>
          </MskListItem>
          <MskListItem hasRemovedListStyles={false}>
            <>
              Bake until egg whites are opaque and yolks register as 160 degrees
              or higher using an instant-read thermometer (set but still
              slightly runny in the middle), about 15 minutes. Eggs will
              continue cooking from residual heat. Let cool slightly and serve
              with toast, if desired.
            </>
          </MskListItem>
        </MskList>
      </MskGridRow>
      <MskGridRow>
        <MskList isOrdered={false} lang="en">
          <MskListItem hasRemovedListStyles>
            <>
              <strong>Ingredients</strong>
            </>
          </MskListItem>
          <MskListItem hasRemovedListStyles>2 tablespoons olive oil</MskListItem>
          <MskListItem hasRemovedListStyles>½ small yellow onion, chopped</MskListItem>
          <MskListItem hasRemovedListStyles>2 cloves garlic, minced</MskListItem>
          <MskListItem hasRemovedListStyles>28-ounce can crushed tomatoes</MskListItem>
          <MskListItem hasRemovedListStyles>
            4 ounces fresh mozzarella, cut into 1⁄2-inch pieces
          </MskListItem>
          <MskListItem hasRemovedListStyles>
            ¼ cup fresh oregano leaves, coarsely chopped
          </MskListItem>
          <MskListItem hasRemovedListStyles>8 eggs</MskListItem>
          <MskListItem hasRemovedListStyles>4 slices multigrain toast (optional)</MskListItem>
        </MskList>
      </MskGridRow>
    </MskGrid>

    <MskList isOrdered={false} lang="en">
      <MskListItem hasRemovedListStyles>
        <>
          <strong>Nutritional Information</strong>
        </>
      </MskListItem>
      <MskListItem hasRemovedListStyles>
        <strong>Calories:</strong> 270 calories
      </MskListItem>
      <MskListItem hasRemovedListStyles>
        <strong>Carbohydrates:</strong>
        27g
      </MskListItem>
      <MskListItem hasRemovedListStyles>
        <strong>Fat:</strong> 15g
      </MskListItem>
      <MskListItem hasRemovedListStyles>
        <strong>Fiber:</strong> 4g
      </MskListItem>
      <MskListItem hasRemovedListStyles>
        <strong>Protein:</strong> 10g
      </MskListItem>
      <MskListItem hasRemovedListStyles>
        <strong>Saturated Fat:</strong> 5g
      </MskListItem>
      <MskListItem hasRemovedListStyles>
        <strong>Sodium:</strong> 360mg
      </MskListItem>
      <MskListItem hasRemovedListStyles>
        <strong>Sugar:</strong> 9g
      </MskListItem>
    </MskList>

    <MskList isOrdered={false}>
      <MskListItem hasRemovedListStyles>
        <>
          <p>
            <strong>Diets</strong>
          </p>
          <ul>
            <li>
              <MskLink
                isStandalone={false}
                segmentedText={[]}
                text="Low-Calorie Diet"
                href="https://mskcc.org"
              />
            </li>
            <li>
              <MskLink
                isStandalone={false}
                segmentedText={[]}
                text="Low-Fiber"
                href="https://mskcc.org"
              />
            </li>
          </ul>
        </>
      </MskListItem>
      <MskListItem hasRemovedListStyles>
        <>
          <p>
            <strong>Symptons</strong>
          </p>
          <ul>
            <li>
              <MskLink
                isStandalone={false}
                segmentedText={[]}
                text="Difficulty swallowing"
                href="https://mskcc.org"
              />
            </li>
            <li>
              <MskLink
                isStandalone={false}
                segmentedText={[]}
                text="Fatigue"
                href="https://mskcc.org"
              />
            </li>
          </ul>
        </>
      </MskListItem>
    </MskList>
  </>
);

const rightRail = (
  <>
    <MskGrid types={{ small: "100", medium: "100", large: "100" }}>
      <MskGridRow>
        <MskAccordion
          headlineSize="card-title"
          isMinimal={false}
          isReadMore={false}
          isInverted={false}
          state={true}
          headline="Related Topics"
          classes={[]}
        >
          <MskTile
            img={{
              src:
                "https://www.mskcc.org/sites/default/files/styles/width_400_3x1/public/node/170809/3x2/msk_120418_0764_3x2.jpg",
              srcset:
                "https://www.mskcc.org/sites/default/files/styles/width_800_3x1/public/node/170809/3x2/msk_120418_0764_3x2.jpg 800w, https://www.mskcc.org/sites/default/files/styles/width_700_3x1/public/node/170809/3x2/msk_120418_0764_3x2.jpg 700w,  https://www.mskcc.org/sites/default/files/styles/width_600_3x1/public/node/170809/3x2/msk_120418_0764_3x2.jpg 600w, https://www.mskcc.org/sites/default/files/styles/width_500_3x1/public/node/170809/3x2/msk_120418_0764_3x2.jpg 500w, https://www.mskcc.org/sites/default/files/styles/width_400_3x1/public/node/170809/3x2/msk_120418_0764_3x2.jpg 400w, https://www.mskcc.org/sites/default/files/styles/width_300_3x1/public/node/170809/3x2/msk_120418_0764_3x2.jpg 300w, https://www.mskcc.org/sites/default/files/styles/width_200_3x1/public/node/170809/3x2/msk_120418_0764_3x2.jpg 200w",
              sizes:
                "(min-width: 1250px) 366px, (min-width: 768px) 30vw, calc(100vw - 60px)",
              alt: "Walnut Pumpkin Bread.",
            }}
            title="Walnut Pumpkin Bread"
            titleUrl="/experience/patient-support/nutrition-cancer/recipes/walnut-pumpkin-bread"
          ></MskTile>

          <MskTile
            img={{
              src:
                "https://www.mskcc.org/sites/default/files/styles/width_400_3x1/public/node/151237/3x2/banana-pancakes_3-2_0.jpg",
              srcset:
                "https://www.mskcc.org/sites/default/files/styles/width_800_3x1/public/node/151237/3x2/banana-pancakes_3-2_0.jpg 800w, https://www.mskcc.org/sites/default/files/styles/width_700_3x1/public/node/151237/3x2/banana-pancakes_3-2_0.jpg 700w,  https://www.mskcc.org/sites/default/files/styles/width_600_3x1/public/node/151237/3x2/banana-pancakes_3-2_0.jpg 600w, https://www.mskcc.org/sites/default/files/styles/width_500_3x1/public/node/151237/3x2/banana-pancakes_3-2_0.jpg 500w, https://www.mskcc.org/sites/default/files/styles/width_400_3x1/public/node/151237/3x2/banana-pancakes_3-2_0.jpg 400w, https://www.mskcc.org/sites/default/files/styles/width_300_3x1/public/node/151237/3x2/banana-pancakes_3-2_0.jpg 300w, https://www.mskcc.org/sites/default/files/styles/width_200_3x1/public/node/151237/3x2/banana-pancakes_3-2_0.jpg 200w",
              sizes:
                "(min-width: 1250px) 366px, (min-width: 768px) 30vw, calc(100vw - 60px)",
              alt: "Cinnamon Banana Pancakes",
            }}
            title="Banana Pancakes"
            titleUrl="/experience/patient-support/nutrition-cancer/recipes/banana-pancakes"
          ></MskTile>

          <MskTile
            img={{
              src:
                "https://www.mskcc.org/sites/default/files/styles/width_400_3x1/public/node/170701/3x2/msk_120418_0439_3x2.jpg",
              srcset:
                "https://www.mskcc.org/sites/default/files/styles/width_800_3x1/public/node/170701/3x2/msk_120418_0439_3x2.jpg 800w, https://www.mskcc.org/sites/default/files/styles/width_700_3x1/public/node/170701/3x2/msk_120418_0439_3x2.jpg 700w,  https://www.mskcc.org/sites/default/files/styles/width_600_3x1/public/node/170701/3x2/msk_120418_0439_3x2.jpg 600w, https://www.mskcc.org/sites/default/files/styles/width_500_3x1/public/node/170701/3x2/msk_120418_0439_3x2.jpg 500w, https://www.mskcc.org/sites/default/files/styles/width_400_3x1/public/node/170701/3x2/msk_120418_0439_3x2.jpg 400w, https://www.mskcc.org/sites/default/files/styles/width_300_3x1/public/node/170701/3x2/msk_120418_0439_3x2.jpg 300w, https://www.mskcc.org/sites/default/files/styles/width_200_3x1/public/node/170701/3x2/msk_120418_0439_3x2.jpg 200w",
              sizes:
                "(min-width: 1250px) 366px, (min-width: 768px) 30vw, calc(100vw - 60px)",
              alt: "Mango Lassi.",
            }}
            title="Mango Lassi"
            titleUrl="/experience/patient-support/nutrition-cancer/recipes/mango-lassi"
          >
            <MskList isOrdered={false} lang="en">
              <MskListItem hasRemovedListStyles={false}>
                <>Saepe distinctio nam</>
              </MskListItem>
              <MskListItem>
                <>Saepe distinctio nam</>
              </MskListItem>
            </MskList>
          </MskTile>
        </MskAccordion>
      </MskGridRow>
    </MskGrid>
  </>
);

const RecipePage = () => {
  return (
    <>
      <MskMessage
        hideIcon
        href="https://example.com"
        isDismissable
        id="banner-id-125"
        title="This is an emergency banner message"
        classes={[]}
        type="emergency"
      >
        Following New York state guidance, MSK has suspended offering the J &
        J/Janssen vaccine. We continue to offer the Pfizer-BioNTech and Moderna
        vaccines to our eligible patients. Appointments can be scheduled
        <a href="#"> here</a>. For more on the J & J vaccine,{" "}
        <a href="#">read this</a>.
      </MskMessage>
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
