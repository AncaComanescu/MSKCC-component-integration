import React from 'react';

import './cardWrapper.css';

const MskCardWrapper = (props) => {

    const renderWrapper = () => {

        if ( props.renderCombined ) {

            /* Will wrap all child components in a single wrapper using the following structure:
                .card.card-wrapper.has-card-type-[child_1-name].has-card-type-[child_n-name].has-[n]-cards.[props.classes] >
                    .card-inner >
                        [ child ]
                
                Returns a fragment containing all wrappers
            */

            let classNames = ['card','card-wrapper', props.classes];
            if ( props.bleed ) classNames.push('is-bleed');
            if ( props.theme ) classNames.push( props.theme );
        
            let n = 0;
            const childrenWithProps = React.Children.map(props.children, child => {
                if (React.isValidElement(child)) {
                    n += 1;
                    classNames.push(`has-card-type-${child.type.name}`);
                    return React.cloneElement(child);
                }
                return child;
            });
        
            classNames.push(`has-${n}-cards`);
            
            return (
                <div className={classNames.join(' ')}>
                    <div className="card-inner">
                        { childrenWithProps }
                    </div>
                </div>
            );            
    
        }

        /* Will wrap each child component using the following structure:
            .card.card-wrapper.is-card-type-[child-name].[props.classes]>
                .card-inner >
                    [ child ]
            
            Returns a fragment containing all wrappers
        */

        const childrenWithProps = React.Children.map(props.children, child => {
            if (React.isValidElement(child)) {
                let classNames = ['card','card-wrapper',`is-card-type-${child.type.name}`, props.classes];
                
                if ( props.bleed ) classNames.push('is-bleed');
                if ( props.theme ) classNames.push( props.theme );
    
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

        return <>{childrenWithProps}</>        

    }


    return renderWrapper();

};

export default MskCardWrapper;