"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { TeamMember, SocialLink } from "@/data/teamMembers";

interface TeamMemberCardProps {
    member: TeamMember;
    resetKey?: number;
}

const SocialIcon = ({ platform }: { platform: SocialLink["platform"] }) => {
    switch (platform) {
        case "instagram":
            return (
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
            );
        case "spotify":
            return (
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.36.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.781-.18-.6.18-1.2.78-1.381 4.26-1.26 11.28-1.02 15.72 1.62.539.3.719 1.02.419 1.56-.239.54-.959.72-1.619.361z" />
                </svg>
            );
        case "soundcloud":
        case "applemusic":
            return (
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18V5l12-2v13M9 9l12-2M9 18a3 3 0 11-6 0 3 3 0 016 0zm12-2a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            );
    }
};

export default function TeamMemberCard({ member, resetKey }: TeamMemberCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        setIsFlipped(false);
    }, [resetKey]);

    return (
        <div
            className="group relative w-full aspect-[3/4] sm:aspect-[3/4] max-h-[60vh] sm:max-h-none rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 border border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(212,160,48,0.2)]"
            onClick={() => setIsFlipped((prev) => !prev)}
        >
            {/* Portrait Image (z-0) */}
            <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 70vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 22vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105 z-0"
            />

            {/* Always visible bottom gradient (z-10) to make the name legible */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#070b24]/90 via-[#070b24]/40 to-transparent pointer-events-none z-10" />

            {/* Swipe-Up Overlay Container (z-20) */}
            <div
                className={`absolute inset-x-0 bottom-0 h-[55%] z-20 flex flex-col justify-end bg-gradient-to-t from-[#070b24] via-[#070b24]/95 to-transparent backdrop-blur-sm border-t border-[#D4A030]/20 transition-transform duration-500 ease-out 
                group-hover:translate-y-0 pb-[88px] px-4 sm:px-5 
                ${isFlipped ? "translate-y-0" : "translate-y-[101%]"}`}
            >
                {/* Social Links */}
                <div className={`flex gap-3 justify-center py-1 text-white/50 mb-3 transition-opacity duration-700 ease-in-out delay-100 group-hover:opacity-100 ${isFlipped ? "opacity-100" : "opacity-0"}`}>
                    {member.socials.map((social) => (
                        <a
                            key={social.platform}
                            href={social.url}
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.platform}
                        >
                            <SocialIcon platform={social.platform} />
                        </a>
                    ))}
                </div>

                {/* Bio text */}
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-4">
                    {member.bio}
                </p>

                {/* Featured Works */}
                {/* {member.featuredWorks && member.featuredWorks.length > 0 && (
                    <div className="mt-4 border-t border-white/10 pt-3">
                        <p className="text-white/40 text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold mb-2">
                            Featured Works
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {member.featuredWorks.map((work, idx) => (
                                <span key={idx} className="bg-white/5 text-white/90 text-[10px] sm:text-xs px-2.5 py-1 rounded-full border border-white/10">
                                    {work}
                                </span>
                            ))}
                        </div>
                    </div>
                )} */}
            </div>

            {/* Static Name Container (z-30) - ALWAYS VISIBLE AT BOTTOM */}
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col justify-end h-[88px] z-30 pointer-events-none">
                <h3 className="text-white text-base sm:text-lg font-bold tracking-wide">
                    {member.name}
                </h3>
                <p className="text-[#D4A030] text-xs sm:text-sm font-medium mt-1 flex items-center gap-1.5">
                    <span>{member.roleIcon}</span> {member.role}
                </p>
            </div>
        </div>
    );
}
