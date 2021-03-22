import React from "react";
import {
    MskButton, MskTile,
} from '@knapsack-cloud/msk-design-system/react';
import '@knapsack-cloud/msk-design-system/dist/main.css';

function doctorBio(props) {
    return (
        <div>
            <MskTile title=""></MskTile>
            <div className="new-patients">
                <MskButton text="Schedule an Appointment"></MskButton>
            </div>

        </div>);
}
export default doctorBio;