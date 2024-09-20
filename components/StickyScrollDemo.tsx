"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScrollReveal";
import Image from "next/image";

const content = [
    {
      title: "Real-time Competitive Intelligence at Scale",
      description: (
        <>
          <p>
          Kompyte automatically tracks your competitors&rsquo; updates across hundreds of sources and millions of data points including:
          </p>
          <ul className="list-disc ml-5">
            <li>Websites</li>
            <li>Reviews</li>
            <li>Content</li>
            <li>Social</li>
            <li>Ads</li>
            <li>Job postings</li>
          </ul>
          <br></br>
          <p>Next, AI filters out the noise, surfacing actionable updates that might otherwise go unnoticed.</p>
          <br></br>
          <p>With AI Daily Summaries, what used to take days now takes about an hour a week.</p>
        </>
      ),
      content: (
        <Image
          src="/kompyte_img_1.jpg"
          width={700}
          height={600}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Battlecards Designed to Close More Deals",
      description: (
        <>
          <p>
            Sales-ready Battlecard templates curate key intelligence from any source. Adjust for the way your sales team closes deals by highlighting overviews, differentiators - anything!
          </p>
          <br></br>
          <p>
            Kompyte keeps your Battlecards consistent, up to date, and easily available. With bi-directional CRM and sales tool integrations, even new sales reps are equipped to close every winnable deal.
          </p>
          <br></br>
            <ul className="list-disc ml-5">
                <li>Surface competitive intelligence where your reps already work</li>
                <li>Measure and increase the adoption of always-updated Battlecards and Reports</li>
            </ul>
        </>
      ),
      content: (
          <Image
            src="/kompyte_img_2.jpg"
            width={700}
            height={600}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
      ),
    },
    {
      title: "Deep Insights for Truly Informed Decisions",
      description: (
        <>
          <p>
            Win/loss analysis tools power your competitive intelligence program with real data such as competitive revenue, competitor frequency, and win rates - with and without battlecards.
          </p>
          <p>
            Through our research partner IcebergIQ, Kompyte becomes the single source of truth for all win/loss and churn/renewal insights. Put unbiased market feedback into action by populating Reports and Battlecards with key interview takeaways.
          </p>
          <br></br>
          <ul className="list-disc ml-5">
            <li>Surface the direct impact of your competitive initiatives on revenue with automated win/loss calculations</li>
            <li>Quantitative and qualitative data provide a 360-degree view of the market</li>
            <li>Candid customer feedback completes the picture</li>
          </ul>
        </>
      ),
      content: (
          <Image
            src="/kompyte_img_3.jpg"
            width={700}
            height={600}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
      ),
    }
  ];
  
export function StickyScrollRevealDemo() {
  return (
    <div className="p-0">
      <StickyScroll content={content} />
    </div>
  );
}
