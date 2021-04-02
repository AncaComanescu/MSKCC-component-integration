
import React from "react";

/*
* Temp componenet. To be replaced by knapsack MskSelect component 
*/
function MskLocalSelect(props) {
    
    return (
        <>
            <label htmlFor="items-select">{props.label}</label>
            <select id="items-select">
                {props.hasEmptyOption && (<option key={`select`}>{"Slect ..."}</option>)}
                {
                    props.items && props.items.map((item, index) => {
                            return (<option key={`${item.value}-${index}`}>{item.title}</option>);
                        })

                }

            </select>
        </>
    );
}


export default MskLocalSelect;
