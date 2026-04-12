"use client";

import { useState, useCallback, useEffect } from "react";
import { TeamMember } from "@/assets/content";
import TeamMemberCard from "./TeamMemberCard";

interface TeamCarouselProps {
    members: TeamMember[];
}

export default function TeamCarousel({ members }: TeamCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);

    // Responsive visible count
    useEffect(() => {
        function handleResize() {
            const w = window.innerWidth;
            if (w >= 1280) setVisibleCount(4);
            else if (w >= 1024) setVisibleCount(3);
            else if (w >= 640) setVisibleCount(2);
            else setVisibleCount(1);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(0, members.length - visibleCount);
    const isMobile = visibleCount === 1;

    const prev = useCallback(() => {
        setCurrentIndex((i) => Math.max(0, i - 1));
    }, []);

    const next = useCallback(() => {
        setCurrentIndex((i) => Math.min(maxIndex, i + 1));
    }, [maxIndex]);

    // Clamp currentIndex when maxIndex changes (e.g. on resize)
    useEffect(() => {
        setCurrentIndex((i) => Math.min(i, maxIndex));
    }, [maxIndex]);

    const progressWidth =
        members.length > visibleCount
            ? ((currentIndex + visibleCount) / members.length) * 100
            : 100;

    // Gap values in px for the transform calculation
    const gapPx = isMobile ? 0 : visibleCount > 2 ? 24 : 20;

    return (
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
            {/* Decorative arc behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[120%] max-w-[1400px] aspect-square pointer-events-none">
                <div className="w-full h-full rounded-full border border-violet-500/10" />
            </div>

            {/* Carousel container */}
            <div className={`relative overflow-hidden ${isMobile ? "mx-10" : ""}`}>
                <div
                    className={`flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isMobile ? "gap-0" : "gap-5 lg:gap-6"
                        }`}
                    style={{
                        transform: isMobile
                            ? `translateX(-${currentIndex * 100}%)`
                            : `translateX(calc(-${currentIndex} * (100% / ${visibleCount} + ${gapPx}px)))`,
                    }}
                >
                    {members.map((member) => (
                        <div
                            key={member.id}
                            className="flex-shrink-0"
                            style={{
                                width: isMobile
                                    ? "100%"
                                    : `calc((100% - ${(visibleCount - 1) * gapPx}px) / ${visibleCount})`,
                            }}
                        >
                            <TeamMemberCard member={member} resetKey={currentIndex} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prev}
                disabled={currentIndex === 0}
                aria-label="Previous"
                className={`absolute top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5 disabled:hover:border-white/20 ${isMobile ? "left-0" : "left-0 sm:-left-2 lg:-left-4"
                    }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                </svg>
            </button>
            <button
                onClick={next}
                disabled={currentIndex >= maxIndex}
                aria-label="Next"
                className={`absolute top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5 disabled:hover:border-white/20 ${isMobile ? "right-0" : "right-0 sm:-right-2 lg:-right-4"
                    }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                </svg>
            </button>

            {/* Scroll indicator bar */}
            <div className="mt-8 sm:mt-10 flex justify-center">
                <div className="w-24 sm:w-28 h-1 rounded-full bg-white/10 overflow-hidden">
                    <div
                        className="h-full rounded-full bg-white/50 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                        style={{ width: `${progressWidth}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
