import React from "react";
import {
  MskBreadcrumb,
  MskVideo,
  MskGrid,
  MskGridRow,
  MskUtilityCard,
  MskButton,
  MskAccordion,
  MskLink,
  MskPaginationPages,
  MskFigure,
  MskMessage,
} from "@knapsack-cloud/msk-design-system/react";

import MskLocalSelect from "../components/select";
import { recipeListing } from "../data/recipeListingData";

const RecipeListing = () => {
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
      <MskBreadcrumb
        breadcrumb={[
          { text: "For Adult Patients", url: "https://example.com" },
          { text: "Your Experience", url: "https://example.com" },
          { text: "Patient Support", url: "https://example.com" },
          { text: "Nutrition and Cancer", url: "https://example.com" },
        ]}
      />

      <h1>
        <span>Recipes for People with Cancer</span>
      </h1>
      <MskGrid
        gutter={25}
        types={{
          small: "50:50",
          medium: "50:50",
          large: "50:50",
        }}
      >
        <MskGridRow>
          <MskVideo
            videoLength="0:41"
            overlineText="Video"
            linkText="View Details"
            linkURL="#"
            caption="MSK dietitian Alicia Gould shares advice for people experiencing nausea as a result of cancer treatment."
            videoOptions={{
              accountId: "630427826001",
              autostart: false,
              id: "9k67sivEXT8",
              type: "youtube",
              videoIdTypeKey: "videoId",
              playerId: "UZMYpPUmv",
            }}
            hasCta={false}
            hasNoBackground={false}
          />
        </MskGridRow>
        <MskGridRow>
          <p>
            It’s important to make sure you get proper nutrition during and
            after cancer treatment. Here are some recipes our nutrition experts
            have created to help people make changes in their diet. You can
            search by diet type (e.g., low-calorie diet) or by cancer-related
            symptom.
          </p>
        </MskGridRow>
      </MskGrid>
      <MskUtilityCard body="" ctaType="button" theme="theme-light">
        <>
          <MskGrid
            gutter={25}
            types={{
              small: "25:25",
              medium: "25:25",
              large: "25:25",
            }}
          >
            <MskGridRow>
              <MskLocalSelect
                hasEmptyOption={true}
                label={"Search by diet type:"}
                items={[
                  { title: "Option 1", value: "1" },
                  { title: "Option 2", value: "2" },
                  { title: "Option 3", value: "3" },
                  { title: "Option 4", value: "4" },
                  { title: "Option 4", value: "4" },
                  { title: "Option 5", value: "5" },
                  { title: "Option 6", value: "6" },
                ]}
              ></MskLocalSelect>
            </MskGridRow>
            <MskGridRow>
              <MskLocalSelect
                hasEmptyOption={true}
                label={"Search by sympton:"}
                items={[
                  { title: "Option 1", value: "1" },
                  { title: "Option 2", value: "2" },
                  { title: "Option 3", value: "3" },
                  { title: "Option 4", value: "4" },
                  { title: "Option 4", value: "4" },
                  { title: "Option 5", value: "5" },
                  { title: "Option 6", value: "6" },
                ]}
              ></MskLocalSelect>
            </MskGridRow>
            <MskGridRow>
              <MskButton
                isTextHidden={false}
                text="Search"
                extraClasses={[]}
                extraAttributes={[]}
                hasVideo={false}
                buttonStyle="primary"
              />
            </MskGridRow>
          </MskGrid>

          <MskAccordion
            state={false}
            headline="Narrow your choices"
            isInverted={false}
            isReadMore
            classes={[]}
            headlineSize="card-title"
            isMinimal={false}
          >
            <MskLocalSelect
              hasEmptyOption={true}
              label={"Recipe Category:"}
              items={[
                { title: "Option 1", value: "1" },
                { title: "Option 2", value: "2" },
              ]}
            ></MskLocalSelect>
            <MskLocalSelect
              hasEmptyOption={true}
              label={"Cuisine:"}
              items={[
                { title: "Option 1", value: "1" },
                { title: "Option 2", value: "2" },
              ]}
            ></MskLocalSelect>
            <MskLocalSelect
              hasEmptyOption={true}
              label={"Cooking Method:"}
              items={[
                { title: "Option 1", value: "1" },
                { title: "Option 2", value: "2" },
              ]}
            ></MskLocalSelect>
            <MskLocalSelect
              hasEmptyOption={true}
              label={"Family Friendly:"}
              items={[
                { title: "Option 1", value: "1" },
                { title: "Option 2", value: "2" },
              ]}
            ></MskLocalSelect>
            <MskButton
              isTextHidden={false}
              text="Go"
              extraClasses={[]}
              extraAttributes={[]}
              hasVideo={false}
              buttonStyle="primary"
            />
            <MskLink
              isStandalone={false}
              segmentedText={[]}
              text="Reset"
              href="https://mskcc.org"
            />
          </MskAccordion>
        </>
      </MskUtilityCard>

      <p>62 Recipes found</p>

      <MskGrid
        types={{
          small: "100",
          medium: "25:25:25:25",
          large: "25:25:25:25",
        }}
      >
        {recipeListing.data.map((list) => {
          return (
            <MskGridRow>
              <MskFigure
                personProfile={false}
                img={{
                  src: list.img,
                  alt: list.text,
                  srcset: list.srcset,
                  sizes: "(min-width: 400px) 50vw, 100vw",
                }}
                bodyText={list.text}
                borderless={false}
              />
            </MskGridRow>
          );
        })}
      </MskGrid>

      <MskButton
        buttonStyle="primary"
        text="Primary Button"
        isTextHidden={false}
        hasVideo={false}
        video={false}
        textHidden={false}
        extraAttributes={[]}
        extraClasses={[]}
      />

      <MskPaginationPages
        nextPage="Next Page Example 1"
        prevUrl="#"
        nextUrl="#"
        prevPage="Previous Page Example 1"
      />
    </>
  );
};

export default RecipeListing;
