import React from "react";
import {
    MskRightRail, BaseballCard, MskBreadcrumb
} from '@knapsack-cloud/msk-design-system/react';

function DoctorBio(props) {
    const pageIntro = (<>
        page intro slot
        <MskBreadcrumb
            breadcrumb={[
                { url: 'https://example.com', text: 'Item 1' },
                { url: 'https://example.com', text: 'Item 2' },
                { url: 'https://example.com', text: 'Item 3' },
            ]}
        />
    </>);
    const rightRail = (<>this is the right rail</>);
    const pageOutro = (<p>
        This is the page outro.
    </p>);
    const imgUrl300='https://msk-design-system.herokuapp.com/images/sample-virus-image-3x2-300w';
    const imgUrl800="https://msk-design-system.herokuapp.com/images/sample-virus-image-3x2-800w";
    const imgUrlPlaceholder ="https://msk-design-system.herokuapp.com/images/placeholder/3x2.svg";
    
    const mainContent = (
        <BaseballCard
            img={{
                src: `${imgUrl300}.webp`,
                // srcset: `${imgUrl300}.jpg 300w, ${imgUrl800}.jpg 800w`,  
                webpSrcset:`${imgUrl300}.webp  300w, ${imgUrl800}.webp  800w`,   
                sizes: '250px',
                alt: 'Virus Image',
                lowResSrc:`${imgUrlPlaceholder}`,
                lowResSrcset: `${imgUrlPlaceholder}`,
            }}

            hasDivider={false}
            overlineText="In The Clinic"
            heading="Heading that can be 1-2 lines if necessary for content"
            subheading="Cotent varies by content type. Byline or date for blogs."
            bodyCopy="Body copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            href="#"
        />
    );

    return (
        <MskRightRail
            lang="en"
            pageIntro={pageIntro}
            rightRail={rightRail}
            mainContent={mainContent}
        />
    );
}
export default DoctorBio;