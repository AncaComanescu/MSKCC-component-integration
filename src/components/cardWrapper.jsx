import React from 'react';

const MskCardWrapper = (props) => {

    /* Will wrap each child component using the following structure:
        .card.card-wrapper.is-card-type-[child-name] >
            .card-inner >
                [ child ]
        
        Returns a fragment containing all wrappers
    */

    const childrenWithProps = React.Children.map(props.children, child => {
        if (React.isValidElement(child)) {
          return (
                <div className={`card card-wrapper is-card-type-${child.type.name}`}>
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