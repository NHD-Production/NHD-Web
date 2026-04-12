import TeamCarousel from "@/components/TeamCarousel";
import { teamMembers } from "@/assets/content";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center py-10 sm:py-10 lg:py-20 px-4 relative overflow-hidden" >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] pointer-events-none opacity-[0.07] z-0 flex items-center justify-center" >
                <svg viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#D4A030]">
                    <path d="M50 100 Q 100 50, 150 100 T 250 100 T 350 100 T 450 100 T 550 100 T 650 100 T 750 100" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                    <path d="M50 100 Q 150 -20, 250 100 T 450 100 T 650 100 T 800 100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
                    <path d="M50 100 Q 120 180, 250 100 T 450 100 T 650 100 T 750 100" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
                    <path d="M100 100 Q 200 220, 300 100 T 500 100 T 700 100" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
                </svg>
            </div >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(212,160,48,0.06)_0%,transparent_70%)] pointer-events-none z-0" />

            {/* Heading */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20 relative z-10 mt-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-light text-white leading-tight tracking-tight">
                    Crafting musical excellence with
                </h1>
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-light italic text-[#D4A030] mt-1 sm:mt-2 tracking-tight">
                    the industry's premier artists
                </p>
            </div>

            {/* Team Carousel */}
            <div className="relative z-10 w-full">
                <TeamCarousel members={teamMembers} />
            </div>
        </div>
    );
}
