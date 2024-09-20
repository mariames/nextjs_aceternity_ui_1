import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
    return (
    <div className="py-20 bg-slate-900 text-white" id="testimonials">
        <h1 className="xl:ml-52 lg:ml-30 md:ml-20 sm:ml-10 text-3xl  font-semibold text-slate-200 mb-12 select-none">
            &nbsp; See what our customers say
        </h1>
        
        <div className="flex flex-col items-center max-lg:mt-10">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
        </div>
    </div>
    )
}

export default Clients;