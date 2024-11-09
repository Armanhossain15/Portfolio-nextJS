import Globe from "@/components/ui/globe";

export function GlobeDemo() {
    return (
        <div className="relative flex size-full max-w-lg items-end justify-center overflow-hidden rounded-lg bg-background  pb-40 pt-8 md:pb-60 ">
            
                <span className="border-2 border-slate-900 px-4 py-1 mr-4 flex items-center text-sm lg:text-base">
                    <svg className="w-5 h-auto mr-1"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    Moulvibazar, Sylhet
                </span>
                <span className="border-2 border-slate-900 px-4 py-1 text-sm lg:text-base">Bangladesh</span>
            
            <Globe className="top-16" />
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
    );
}
