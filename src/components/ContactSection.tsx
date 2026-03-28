import { forwardRef, type FormEvent } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactSection = forwardRef<HTMLElement>((_, ref) => {
  const contactMethods = [
    { icon: Mail, label: "Email Us", value: "hello@verdant.com" },
    { icon: Phone, label: "Call Us", value: "+1 (555) 000-GREEN" },
    { icon: MapPin, label: "Visit Studio", value: "123 Garden Lane, NY" }
  ];

  return (
    <section
      ref={ref}
      className="grid md:grid-cols-2 gap-8 items-center pb-14"
    >
      {/* Left */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-emerald-950 mb-4">
          Let’s Grow Together
        </h2>

        <p className="text-stone-500 text-sm mb-6 max-w-md">
          Have questions about plant care or an order? Our team is here to help.
        </p>
        
        <div className="space-y-4">
          {contactMethods.map((method, i) => (
            <div key={i} className="flex items-center gap-3">
              
              <div className="w-10 h-10 bg-white rounded-xl 
                              flex items-center justify-center 
                              shadow-sm border border-stone-200 text-emerald-700">
                <method.icon size={16} />
              </div>

              <div>
                <p className="text-[10px] font-semibold text-stone-400 uppercase tracking-wide">
                  {method.label}
                </p>
                <p className="text-sm text-stone-800">{method.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <ContactForm />
    </section>
  );
});

function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log('Form submitted');
};

  return (
    <div className="bg-white p-5 rounded-xl 
                    shadow-[0_8px_20px_rgba(0,0,0,0.06)] 
                    border border-stone-200">
      <form onSubmit={handleSubmit} className="space-y-3">
        
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full px-3 py-2 rounded-lg bg-stone-50 
                     text-sm border border-transparent
                     focus:bg-white
                     focus:ring-1 focus:ring-emerald-900/20 
                     outline-none transition-all"
        />

        <input 
          type="email" 
          placeholder="Email Address" 
          className="w-full px-3 py-2 rounded-lg bg-stone-50 
                     text-sm border border-transparent
                     focus:bg-white
                     focus:ring-1 focus:ring-emerald-900/20 
                     outline-none transition-all"
        />

        <textarea 
          placeholder="How can we help?" 
          rows={3} 
          className="w-full px-3 py-2 rounded-lg bg-stone-50 
                     text-sm border border-transparent
                     focus:bg-white
                     focus:ring-1 focus:ring-emerald-900/20 
                     outline-none transition-all resize-none"
        />

        <button 
          type="submit"
          className="w-full bg-emerald-900 text-white py-2.5 
                     rounded-lg text-sm font-semibold 
                     hover:bg-emerald-800 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

ContactSection.displayName = 'ContactSection';