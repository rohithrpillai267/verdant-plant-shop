import { forwardRef } from 'react';

export const AboutSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-emerald-900 
                 rounded-2xl px-6 py-10 md:px-10 md:py-14 
                 text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
    >
      {/* Soft Glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 
                      rounded-full -mr-24 -mt-24 blur-2xl" />

      <div className="relative z-10 max-w-2xl">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold leading-tight mb-4">
          Cultivating Joy, <br /> One Leaf at a Time.
        </h2>

        {/* Description */}
        <p className="text-emerald-50/80 text-sm md:text-base leading-relaxed mb-6">
          At Verdant, we believe every home deserves a touch of nature. 
          We simplify plant care by delivering healthy plants and the 
          guidance you need to help them thrive.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
          <div>
            <p className="text-2xl md:text-3xl font-semibold">50k+</p>
            <p className="text-emerald-200/60 text-[10px] md:text-xs uppercase tracking-wider">
              Plants Delivered
            </p>
          </div>

          <div>
            <p className="text-2xl md:text-3xl font-semibold">99%</p>
            <p className="text-emerald-200/60 text-[10px] md:text-xs uppercase tracking-wider">
              Happy Growers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';