import React from "react";
import {
    MskLogo, MskList, MskLink
} from '@knapsack-cloud/msk-design-system/react'; 

 function Home() {
    return (
        <div>
            <MskLogo name="msk"></MskLogo>
            <MskLink text="doctor-bio" href="doctor-bio"></MskLink>
            <br />
            <MskLink text="blog-post" href="blog-post"></MskLink>
            <br />
        </div>
    );
}

export default Home;