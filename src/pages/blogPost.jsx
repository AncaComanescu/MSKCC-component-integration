import React from "react";
import {
    MskLeftRail, MskBreadcrumb, BaseballCard, MskRightRail
} from '@knapsack-cloud/msk-design-system/react';

function BlogPost(props) {
    
    let articleLst= [{subtitle:"text", paragraph:""}]
    const mainContent = (
        <>
            news article  
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