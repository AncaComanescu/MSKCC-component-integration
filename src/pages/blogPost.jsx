import React from "react";
import { 
    MskTile,
} from '@knapsack-cloud/msk-design-system/react';
import '@knapsack-cloud/msk-design-system/dist/main.css';

function blogPost(props) {
    return (
         <MskTile 
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" 
            hasBackgroundColor={true} align="center"></MskTile>
    );
}
export default blogPost;