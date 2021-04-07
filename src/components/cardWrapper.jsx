import React from 'react';

const MskCardWrapper = (props) => {


    
    const childrenWithProps = React.Children.map(props.children, child => {
        if (React.isValidElement(child)) {
            // console.log(child);
          return React.cloneElement(child);
        }
        return child;
    });

    // console.log(childrenWithProps);
    childrenWithProps.forEach(child => {
        console.log(child.type.name);
    });
   

    return (
        <div className="card card-wrapper">
            {childrenWithProps}
        </div>
    );

};

export default MskCardWrapper;