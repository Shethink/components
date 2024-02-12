import React, { CSSProperties, SVGProps } from 'react';

const CircleIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect y="0.5" width="20" height="20" rx="10" fill="white" />
            <rect x="0.5" y="1" width="19" height="19" rx="9.5" stroke="#393A69" strokeOpacity="0.2" />
            <path d="M4.37109 10.503L7.91259 14.0501L15.209 6.75" stroke="white" strokeWidth="1.75484" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default CircleIcon;