import React from 'react';

import './cardWrapper.css';

const MskCardWrapper = (props) => {

    /* Will wrap each child component using the following structure:
        .card.card-wrapper.is-card-type-[child-name].[props.classes]>
            .card-inner >
                [ child ]
        
        Returns a fragment containing all wrappers
    */

    const childrenWithProps = React.Children.map(props.children, child => {
        if (React.isValidElement(child)) {
            let classNames = ['card','card-wrapper',`is-card-type-${child.type.name}`, props.classes];
            
          return (
                <div className={classNames.join(' ')}>
                    <div className="card-inner">
                        { React.cloneElement(child) }
                    </div>
                </div>
          );
          
        }
        return child;
    });

    return <>{childrenWithProps}</>;

};

export default MskCardWrapper;