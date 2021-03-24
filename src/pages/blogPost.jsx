import React from "react";
import {
    MskLeftRail, MskBreadcrumb, BaseballCard
} from '@knapsack-cloud/msk-design-system/react';

function BlogPost(props) {
    const pageIntro = (<>
        This is the pageIntro
        <MskBreadcrumb
            breadcrumb={[
                { url: 'https://example.com', text: 'Item 1' },
                { url: 'https://example.com', text: 'Item 2' },
                { url: 'https://example.com', text: 'Item 3' },
            ]}
        />
    </>);
    const leftRail = (<p>
        This is the left rail.
    </p>);
    const pageOutro = (<p>
        This is the page outro.
    </p>);
    const mainContent = (
        <>
            <BaseballCard
                img={{
                    src: 'http://localhost:3999/images/sample-virus-image-3x2-300w.webp',
                    srcset:
                        'http://localhost:3999/images/sample-virus-image-3x2-300w.webp 300w, http://localhost:3999/images/sample-virus-image-3x2-800w.webp 800w',
                    webpSrcset:
                        'http://localhost:3999/images/sample-virus-image-3x2-300w.webp http://localhost:3999/images/sample-virus-image-3x2-800w.webp 800w',
                    sizes: '250px',
                    alt: 'Virus Image',
                    lowResSrc: 'http://localhost:3999/images/placeholder/3x2.svg',
                    lowResSrcset: 'http://localhost:3999/images/placeholder/3x2.svg',
                }}
                hasDivider={false}
                overlineText="In The Clinic"
                heading="Heading that can be 1-2 lines if necessary for content"
                subheading="Cotent varies by content type. Byline or date for blogs."
                bodyCopy="Body copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                href="#"
            />
        </>
    );
    return (
        <MskLeftRail 
            lang="en"
            classes={[]}
            pageIntro={pageIntro}
            leftRail={leftRail}
            pageOutro={pageOutro}
            mainContent={mainContent}
        />
    );
}
export default BlogPost;