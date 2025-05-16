import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';

const SupportSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#261038] via-[#151226] to-[#0F0F1A]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2A2A3E] rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Need help or want to support osu!?
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Get assistance from our helpful community or check out our store for official merchandise and supporter packs.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://osu.ppy.sh/home/support"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-[#931852] text-white rounded-xl hover:bg-[#aa4f93] transition-colors"
                    >
                      <Heart className="mr-2 h-5 w-5" />
                      <span>Osu Support</span>
                    </a>

                    <a
                      href="https://osu.ppy.sh/store/listing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-900 to-indigo-950 text-white rounded-xl hover:bg-[#FF86BB] transition-colors"
                    >
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      <span>Visit Store</span>
                    </a>
                  </div>
                </div>

                <div className="md:w-1/3">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Why become a supporter?
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Exclusive in-game features',
                        'Friend list capacity ×8',
                        'Download beatmaps directly in-game',
                        'Exclusive username colors',
                        'Early access to new features'
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <svg
                            className="h-5 w-5 text-[#741d44] mr-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
