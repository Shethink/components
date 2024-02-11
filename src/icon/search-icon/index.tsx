import { width } from '@mui/system';
import React, { CSSProperties, SVGProps } from 'react';


const SearchIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g opacity="0.7">
                <circle cx="13.7249" cy="13.7277" r="10.4867" stroke="#192023" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.0195 21.566L25.1309 25.6667" stroke="#192023" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>

    );
}

export default SearchIcon;