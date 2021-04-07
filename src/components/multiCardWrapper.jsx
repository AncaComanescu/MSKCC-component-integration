import React from 'react';

const MskMultiCardWrapper = (props) => {

    /* Will wrap all child components in a single wrapper using the following structure:
        .card.card-wrapper.has-card-type-[child_1-name].has-card-type-[child_n-name] >
            .card-inner >
                [ child ]
        
        Returns a fragment containing all wrappers
    */

    let classes = ['card','card-wrapper'];
    const childrenWithProps = React.Children.map(props.children, child => {
        if (React.isValidElement(child)) {
          classes.push(`has-card-type-${child.type.name}`);
            return React.cloneElement(child);
        }
        return child;
    });

    return (
        <div className={classes.join(' ')}>
            <div className="card-inner">
                { childrenWithProps }
            </div>
        </div>
    );

};

export default MskMultiCardWrapper;