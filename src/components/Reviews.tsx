import React from 'react';
import { Star, ShieldCheck, Award, ExternalLink, ThumbsUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-zinc-950 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Community Reputation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-display tracking-tight">
            Knoxville's Highly Rated Spot
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            We are honored by the outstanding support from our guests across Knoxville and surrounding areas. Honest food, generous portions, and friendly service speak for themselves.
          </p>
        </div>

        {/* Big Metrics Showcase Card */}
        <div className="max-w-4xl mx-auto bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Score Block */}
            <div className="md:col-span-5 text-center md:text-left flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-zinc-800 pb-8 md:pb-0 md:pr-8">
              
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Verified Google Score
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-6xl sm:text-7xl font-black text-white font-display tracking-tight">
                  {RESTAURANT_INFO.rating.score}
                </span>
                <span className="text-2xl font-bold text-zinc-400 font-display">
                  / {RESTAURANT_INFO.rating.maxScore}
                </span>
              </div>

              {/* 5 Big Gold Stars */}
              <div className="flex items-center gap-1.5 my-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-6 h-6 fill-amber-400 text-amber-400 drop-shadow-sm"
                  />
                ))}
              </div>

              <p className="text-sm font-semibold text-zinc-300">
                Based on <strong className="text-white">~{RESTAURANT_INFO.rating.reviewCount} Google Reviews</strong>
              </p>
              
              <p className="text-xs text-zinc-400 mt-1">
                Reflecting consistent customer satisfaction in Knoxville, TN
              </p>

              <div className="mt-6">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-zinc-950 bg-amber-500 hover:bg-amber-400 transition-colors shadow-md"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Rating Breakdown & Highlights */}
            <div className="md:col-span-7 space-y-6">
              
              <h3 className="text-lg font-bold text-white uppercase tracking-wider font-display">
                What Guests Love About The Chow Hall
              </h3>

              {/* Progress Bar Distribution */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs">
                  <span className="w-14 text-zinc-400 font-semibold">5 Stars</span>
                  <div className="flex-1 h-3 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full w-[94%]" />
                  </div>
                  <span className="w-10 text-right text-zinc-300 font-bold">94%</span>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="w-14 text-zinc-400 font-semibold">4 Stars</span>
                  <div className="flex-1 h-3 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full w-[5%]" />
                  </div>
                  <span className="w-10 text-right text-zinc-300 font-bold">5%</span>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="w-14 text-zinc-400 font-semibold">1-3 Stars</span>
                  <div className="flex-1 h-3 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-zinc-600 rounded-full w-[1%]" />
                  </div>
                  <span className="w-10 text-right text-zinc-400 font-bold">1%</span>
                </div>
              </div>

              {/* Key Trust Signals */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                    <ThumbsUp className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Hearty Portions</p>
                    <p className="text-[11px] text-zinc-400">Generous value & taste</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">4.9 / 5.0 Score</p>
                    <p className="text-[11px] text-zinc-400">Top Knoxville rating</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Post-dining invitation notice */}
        <div className="mt-8 text-center text-xs text-zinc-400 max-w-xl mx-auto">
          <span>Have you enjoyed a meal at The Chow Hall? </span>
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline font-semibold"
          >
            Leave a review on Google
          </a>
          <span> to share your feedback with our team and community!</span>
        </div>

      </div>
    </section>
  );
};
