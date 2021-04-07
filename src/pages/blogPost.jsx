import React from "react";
import {
     MskBreadcrumb, MskRightRail,MskActions
} from '@knapsack-cloud/msk-design-system/react';

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
        </>
    );

    const pageIntro =  <> 
    <MskBreadcrumb
      breadcrumb={[
        { url: "https://www.mskcc.org/news", text: 'News & Information' },
        { url: "https://www.mskcc.org/news/in-the-news", text: 'In the News' }
      ]}
    />
  </>
     
    return (
        <MskRightRail 
            lang="en"
            classes={[]}
            pageLevelLayout
            pageIntro={pageIntro}
            rightRail={<>this is the right rail</>}
            mainContent={mainContent}
        />
    );
}
export default BlogPost;