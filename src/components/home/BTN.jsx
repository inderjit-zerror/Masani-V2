'use client'
import React, { useRef } from 'react';
import gsap from 'gsap';

const BTN = ({ label = "RSVP" }) => {
    const buttonRef = useRef(null);
    const textRef = useRef(null);

    return (
        <button
            ref={buttonRef}
            /* Adjusted padding and min-width to make the button slightly smaller */
            className="relative inline-flex items-center justify-center px-10 py-2 min-w-[100px] w-max h-auto group cursor-pointer select-none focus:outline-none mt-4"
        >
            {/* Precision SVG Frame (Notched/Concave Corners) */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm"
                viewBox="0 0 300 80"
                preserveAspectRatio="none"
            >
                {/* Outer Gold Border */}
                <path
                    d="M 26 4 
             H 274 
             A 16 16 0 0 0 290 20 
             V 60 
             A 16 16 0 0 0 274 76 
             H 26 
             A 16 16 0 0 0 10 60 
             V 20 
             A 16 16 0 0 0 26 4 Z"
                    fill="none"
                    stroke="#C59B4E"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                />

                {/* Inner Soft Powder-Blue Fill with White Margin */}
                <path
                    d="M 28 8 
             H 272 
             A 13 13 0 0 0 285 21 
             V 59 
             A 13 13 0 0 0 272 72 
             H 28 
             A 13 13 0 0 0 15 59 
             V 21 
             A 13 13 0 0 0 28 8 Z"
                    fill="#E2EDF7"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>

            {/* Button Label */}
            <span
                ref={textRef}
                className="relative z-10 font-serif text-[#C59B4E] text-lg sm:text-[1.2rem] font-medium  pl-[0.3em] transition-colors duration-300 group-hover:text-[#B08538] whitespace-nowrap"
            >
                {label}
            </span>
        </button>
    )
}

export default BTN;