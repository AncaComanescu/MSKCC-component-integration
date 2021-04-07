import React from 'react';

const MskMultiCardWrapper = (props) => {

    /* Will wrap all child components in a single wrapper using the following structure:
        .card.card-wrapper.has-card-type-[child_1-name].has-card-type-[child_n-name].has-[n]-cards >
            .card-inner >
                [ child ]
        
        Returns a fragment containing all wrappers
    */

    let classes = ['card','card-wrapper'];
    let n = 0;
    const childrenWithProps = React.Children.map(props.children, child => {
        if (React.isValidElement(child)) {
            n += 1;
          classes.push(`has-card-type-${child.type.name}`);
            return React.cloneElement(child);
        }
        return child;
    });

    classes.push(`has-${n}-cards`);

    return (
        <div className={classes.join(' ')}>
            <div className="card-inner">
                { childrenWithProps }
            </div>
        </div>
    );

};

export default MskMultiCardWrapper;