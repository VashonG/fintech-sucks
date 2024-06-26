import * as React from "react";
import { BentoGridThirdDemo } from "./bento-grid/bento-grid";

export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-black pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">What you get</h2>
            <p className="text-xl text-gray-600">We offer the largest embedded fintech library in the market 100% free.</p>
          </div>

          {/* Items */}

            <BentoGridThirdDemo />
        
        </div>
      </div>
    </section>
  )
}