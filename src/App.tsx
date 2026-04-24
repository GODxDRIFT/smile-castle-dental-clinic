/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X, 
  Instagram,
  User,
  ShieldCheck,
  Stethoscope,
  ChevronDown,
  Award,
  Users,
  Heart
} from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Treatments", href: "#treatments" },
    { name: "Doctors", href: "#doctors" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-primary/95 backdrop-blur-xl shadow-2xl py-3 border-b border-accent/10" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-xl shadow-lg ring-4 ring-accent/10">
            <span className="text-white font-serif text-xl font-bold">S</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-serif font-black tracking-tighter leading-none ${isScrolled ? "text-white" : "text-primary"}`}>
              Smile Castle
            </span>
            <span className={`text-[8px] uppercase tracking-[0.3em] font-bold ${isScrolled ? "text-action" : "text-accent"}`}>
              Dental Clinic
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-xs uppercase tracking-widest font-bold transition-all hover:text-action relative group ${isScrolled ? "text-white/80" : "text-primary/70"}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-action transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#appointment" 
            className="action-gradient text-primary px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-action/20"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 md:hidden flex flex-col gap-4 border-t border-gray-100"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium py-2 border-b border-gray-50"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#appointment" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary text-white text-center py-4 rounded-xl font-bold mt-2"
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle, light = false }: { children: React.ReactNode; subtitle?: string; light?: boolean }) => (
  <div className="text-center mb-16 px-4">
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-accent font-semibold tracking-widest uppercase text-xs mb-3 block`}
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-3xl md:text-5xl font-bold ${light ? "text-white" : "text-primary"} leading-tight`}
    >
      {children}
    </motion.h2>
    <div className={`w-20 h-1 mx-auto mt-6 bg-accent rounded-full`}></div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* --- Hero Section --- */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-surface-2">
        <div className="absolute top-0 right-0 w-[40vw] h-full overflow-hidden hidden xl:block">
          <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-overlay"></div>
          <img 
            src="https://images.unsplash.com/photo-1629909605121-3d58628ce789?auto=format&fit=crop&q=80&w=2000" 
            alt="Premium Medical Interior" 
            className="w-full h-full object-cover grayscale opacity-40 scale-110"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full mb-10 shadow-sm border border-accent/10">
                <span className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-accent fill-accent" />)}
                </span>
                <span className="text-[10px] font-black text-primary/60 uppercase tracking-[0.2em]">Excellence in South Delhi</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-primary leading-[0.85] tracking-tighter mb-10">
                Crafting <br className="hidden md:block" /> 
                <span className="text-secondary italic font-serif font-normal">Timeless</span> <br className="hidden md:block" /> 
                Smiles.
              </h1>
              
              <p className="text-xl md:text-2xl text-primary/70 mb-12 max-w-2xl leading-relaxed font-light text-balance">
                Painless dentistry, precision smile correction and advanced implant care in <span className="font-bold text-primary border-b-2 border-accent/30">Saidulajab, South Delhi.</span> A vibrant sanctuary for your oral health.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <a href="#appointment" className="w-full sm:w-auto action-gradient text-primary px-12 py-6 rounded-full text-sm font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl shadow-action/30 text-center flex items-center justify-center gap-3">
                  Book Appointment <ChevronRight size={18} />
                </a>
                <a href="tel:8757720449" className="w-full sm:w-auto bg-white border border-primary/5 text-primary px-12 py-6 rounded-full text-sm font-black uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all text-center flex items-center justify-center gap-3 shadow-xl">
                  <Phone size={18} /> Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating indicators */}
        <div className="absolute bottom-12 right-12 hidden lg:flex flex-col gap-8">
           <div className="flex items-center gap-4 group">
             <div className="w-12 h-[1px] bg-accent/30 group-hover:w-20 transition-all duration-700"></div>
             <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary/40 group-hover:text-accent transition-colors">Scroll to explore</span>
           </div>
        </div>
      </section>

      {/* --- Address Strip --- */}
      <div className="bg-primary text-white py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-wide uppercase">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-accent" />
            <span className="opacity-80">Shop No 3, E-32, Opp Axis Bank, IGNOU Road, Saidullajab, New Delhi</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={16} className="text-accent" />
              <span>87577 20449 / 88152 01894</span>
            </span>
            <span className="hidden lg:flex items-center gap-2">
              <Mail size={16} className="text-accent" />
              <span className="lowercase underline underline-offset-4 decoration-accent/50 opacity-80">trishu.chowdhery@gmail.com</span>
            </span>
          </div>
        </div>
      </div>

      {/* --- About Section --- */}
      <section id="about" className="py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Dentistry" 
                  className="w-full h-[700px] object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-accent p-12 rounded-full hidden lg:block shadow-2xl ring-[1.5rem] ring-white">
                <p className="text-action text-6xl font-serif font-black">13</p>
                <p className="text-white text-[8px] uppercase font-bold tracking-[0.4em] leading-tight mt-2">Years of <br/> Clinical <br/> Mastery</p>
              </div>
            </div>
            
            <div className="max-w-xl">
              <span className="text-secondary font-black uppercase text-[10px] tracking-[0.4em] mb-6 block">Our Legacy</span>
              <h2 className="text-4xl md:text-6xl font-bold text-primary mb-10 leading-[0.9] tracking-tighter">
                Redefining the <br/> dental journey.
              </h2>
              <p className="text-xl text-primary/60 mb-12 leading-relaxed font-light italic border-l-4 border-secondary/20 pl-8">
                "Smile Castle isn't just a clinic; it's a sanctuary where clinical perfection meets human empathy. We believe in treatments that are as gentle as they are effective."
              </p>
              
              <div className="grid gap-6">
                {[
                  "Ultra-Modern Sterilization Suite",
                  "Gentle-First Pain Management",
                  "Precision Digital Diagnostics",
                  "Bespoke Patient Concierge",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="font-bold text-primary/80 uppercase tracking-widest text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Doctor Section --- */}
      <section id="doctors" className="py-32 bg-surface-2 relative">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading subtitle="Clinical Leadership">The Hands Behind Your Smile</SectionHeading>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Dr. Trishu */}
            <motion.div 
              whileHover={{ y: -15 }}
              className="bg-white rounded-[60px] p-12 shadow-2xl border border-black/5 flex flex-col items-center text-center group transition-all duration-700"
            >
              <div className="w-56 h-56 rounded-[40px] overflow-hidden mb-10 border-8 border-surface-2 shadow-inner group-hover:rotate-3 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400" 
                  alt="Dr. Trishu Chowdhery" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">Dr. Trishu Chowdhery</h3>
              <p className="text-accent font-black text-[10px] tracking-[0.3em] uppercase mb-6">BDS, MDS • Periodontology & Oral Implantology</p>
              <p className="text-primary/60 leading-relaxed text-sm max-w-sm mb-10 font-medium italic">
                "Precision gum health and implantology are the twin pillars of a lasting smile. My focus is on biological excellence and patient serenity."
              </p>
              <div className="flex gap-4">
                <div className="bg-primary text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">13+ Years Exp</div>
                <div className="bg-secondary/10 text-secondary px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">MDS Specialist</div>
              </div>
            </motion.div>

            {/* Dr. Arun */}
            <motion.div 
              whileHover={{ y: -15 }}
              className="bg-white rounded-[60px] p-12 shadow-2xl border border-black/5 flex flex-col items-center text-center group transition-all duration-700"
            >
              <div className="w-56 h-56 rounded-[40px] overflow-hidden mb-10 border-8 border-surface-2 shadow-inner group-hover:-rotate-3 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400" 
                  alt="Dr. Arun Kumar" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">Dr. Arun Kumar</h3>
              <p className="text-accent font-black text-[10px] tracking-[0.3em] uppercase mb-6">BDS • Restorative & General Dentistry</p>
              <p className="text-primary/60 leading-relaxed text-sm max-w-sm mb-10 font-medium italic">
                "Honesty and approachability are at the core of my practice. I believe in practical dentistry that respects the patient's lifestyle."
              </p>
              <div className="flex gap-4">
                <div className="bg-primary text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Associate</div>
                <div className="bg-secondary/10 text-secondary px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest italic font-serif">Patient-Friendly</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Treatments Section --- */}
      <section id="treatments" className="py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">Medical Excellence</span>
              <h2 className="text-5xl md:text-7xl font-bold text-primary leading-none tracking-tighter">
                Advanced Clinical <br/> Solutions.
              </h2>
            </div>
            <p className="text-primary/50 max-w-sm text-sm font-medium leading-relaxed">
              Every procedure is executed with surgical precision and aesthetic finesse, ensuring long-term oral stability and visual perfection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 rounded-[40px] overflow-hidden group shadow-2xl">
            {[
              { 
                title: "Dental Implants", 
                desc: "Long-term tooth replacement with surgical precision and natural aesthetics.", 
                icon: <Award className="w-6 h-6" /> 
              },
              { 
                title: "Root Canal", 
                desc: "Conservation-first therapy using microscopic techniques for painless results.", 
                icon: <ShieldCheck className="w-6 h-6" /> 
              },
              { 
                title: "Smile Design", 
                desc: "Digital planning of veneers and alignments for your unique facial profile.", 
                icon: <Star className="w-6 h-6" /> 
              },
              { 
                title: "Pediatric Care", 
                desc: "Building positive dental foundations for the next generation in a fun environment.", 
                icon: <Heart className="w-6 h-6" /> 
              },
              { 
                title: "Invisalign", 
                desc: "Virtually invisible alignment solutions for a perfectly straight, confident smile.", 
                icon: <CheckCircle2 className="w-6 h-6" /> 
              },
              { 
                title: "Periodontal Care", 
                desc: "Advanced gum health management led by MDS specialist Dr. Trishu.", 
                icon: <Stethoscope className="w-6 h-6" /> 
              },
              { 
                title: "Prosthodontics", 
                desc: "Bespoke crowns and bridges that restore full functionality and natural beauty.", 
                icon: <Award className="w-6 h-6" /> 
              },
              { 
                title: "Oral Surgery", 
                desc: "Expertly managed extractions and minor surgeries with rapid recovery focus.", 
                icon: <Clock className="w-6 h-6" /> 
              },
            ].map((treat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 bg-white flex flex-col hover:bg-surface-2 transition-all duration-500 cursor-pointer group/item"
              >
                <div className="w-14 h-14 bg-surface-2 rounded-2xl text-accent flex items-center justify-center mb-10 group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-white transition-all duration-500 shadow-sm">
                  {treat.icon}
                </div>
                <h4 className="text-2xl font-bold text-primary mb-5 tracking-tight group-hover/item:text-accent transition-colors">{treat.title}</h4>
                <p className="text-primary/50 text-sm leading-relaxed mb-8 font-medium">{treat.desc}</p>
                <div className="mt-auto pt-4 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-accent opacity-0 group-hover/item:opacity-100 transition-all">
                  Inquire Now <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="py-32 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <SectionHeading subtitle="The Perfectionist Edge" light>Why Smile Castle?</SectionHeading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "5.0 Rated Accuracy", desc: "A perfect track record of 238+ verifiable patient success stories." },
              { title: "MDS Board Certified", desc: "Specialist-led care in periodontology ensures biological integrity." },
              { title: "Inclusive luxury", desc: "A safe, welcoming haven for every background and identity." },
              { title: "Zero-Anxiety focus", desc: "Our 'Painless Protocol' utilizes the latest in comfort dentistry." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-10 border border-black/5 rounded-[40px] bg-white shadow-sm group transition-all"
              >
                <div className="w-16 h-16 medical-gradient rounded-3xl flex items-center justify-center text-white mb-8 shadow-xl group-hover:rotate-12 transition-transform">
                  <span className="text-2xl font-black">{i + 1}</span>
                </div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter text-primary">{item.title}</h4>
                <p className="text-primary/50 text-sm leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Reviews Section --- */}
      <section id="reviews" className="py-32 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-accent font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">Proven Trust</span>
              <h2 className="text-5xl md:text-7xl font-bold text-primary leading-none tracking-tighter">
                Real Voices. <br/> Perfect Ratings.
              </h2>
            </div>
            <div className="flex items-center gap-6 bg-surface-2 p-8 rounded-[40px] border border-accent/10 shadow-sm">
              <div className="text-center">
                <p className="text-5xl font-black text-primary tracking-tighter">5.0</p>
                <div className="flex justify-center text-accent py-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-accent" />)}
                </div>
                <p className="text-[10px] uppercase font-black tracking-widest text-primary/40">238+ Clinical Successes</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                text: "The clinical explanation was flawless. Dr. Trishu's approach to dental implants is world-class. I felt zero pain throughout.",
                author: "Sameer K.",
                tag: "Implant Mastery"
              },
              { 
                text: "Hands down the most professional dental environment in South Delhi. The attention to detail is breathtaking.",
                author: "Mallika A.",
                tag: "Aesthetic Design"
              },
              { 
                text: "Calm, supportive and extremely skilled. They managed my dental anxiety with such grace. Exceptional root canal therapy.",
                author: "Rahul P.",
                tag: "Painless RCT"
              }
            ].map((rev, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-surface-2 p-12 rounded-[50px] relative border border-black/5 group shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute top-10 right-12 text-8xl font-serif text-accent/5 pointer-events-none">“</div>
                <div className="flex mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-accent fill-accent" />)}
                </div>
                <p className="text-primary/70 mb-10 italic leading-relaxed text-lg font-medium">"{rev.text}"</p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary text-accent rounded-2xl flex items-center justify-center font-black text-xs shadow-lg">{rev.author.split(' ')[0][0]}</div>
                    <span className="font-black text-primary uppercase text-xs tracking-widest">{rev.author}</span>
                  </div>
                  <span className="text-[8px] font-black uppercase tracking-[0.3em] bg-accent/10 px-4 py-2 rounded-full text-accent">{rev.tag}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Appointment CTA --- */}
      <section id="appointment" className="py-32 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="relative rounded-[80px] overflow-hidden bg-primary p-16 md:p-32 text-center shadow-[0_50px_100px_rgba(15,46,51,0.3)]">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(var(--color-accent)_1.5px,transparent_1.5px)] [background-size:32px_32px]"></div>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10 max-w-4xl mx-auto"
            >
              <span className="text-accent font-black uppercase text-[10px] tracking-[0.6em] mb-10 block">Immediate Consultation</span>
              <h2 className="text-5xl md:text-8xl font-bold text-white mb-12 leading-[0.9] tracking-tighter">
                Begin your <br className="hidden md:block" /> healing journey.
              </h2>
              <p className="text-white/60 text-lg md:text-2xl mb-16 leading-relaxed font-light text-balance max-w-2xl mx-auto">
                Secure your consultation for expert diagnosis and a bespoke treatment plan crafted for your long-term wellness.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <a href="tel:8757720449" className="w-full sm:w-auto action-gradient text-primary px-16 py-8 rounded-full text-sm font-black uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-4">
                  <Phone size={28} /> 8757720449
                </a>
                <a href="https://wa.me/918757720449" className="w-full sm:w-auto mt-4 sm:mt-0 bg-white/10 backdrop-blur-md border border-white/20 text-white px-16 py-8 rounded-full text-sm font-black uppercase tracking-[0.3em] hover:bg-action transition-all hover:text-primary flex items-center justify-center gap-4">
                  <Instagram size={28} /> WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Contact & Map --- */}
      <section id="contact" className="py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Contact Info Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3 bg-primary text-white rounded-[60px] p-10 md:p-16 flex flex-col shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 medical-gradient opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <span className="text-action font-black uppercase text-[10px] tracking-[0.5em] mb-6 block">Visit Our Sanctuary</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-none tracking-tighter">Smile Castle <br/><span className="text-secondary font-normal italic">Dental Clinic</span></h2>
                
                <div className="space-y-10">
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-action shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-2">Our Location</h4>
                      <p className="text-sm md:text-base leading-relaxed text-white/80">
                        Shop No 3, E-32, Opp Axis Bank, IGNOU Main Road, Saidullajab, Sainik Farm, New Delhi 110030
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-action shrink-0 group-hover:scale-110 transition-transform">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-2">Clinic Hours</h4>
                      <p className="text-sm md:text-base text-white/80">Mon – Sat: 10:00 AM – 8:00 PM</p>
                      <p className="text-sm md:text-base text-white/80 italic font-serif">Sunday: 10:00 AM – 2:00 PM (By Appointment)</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-action shrink-0 group-hover:scale-110 transition-transform">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-2">Direct Contact</h4>
                      <div className="space-y-1">
                        <p className="font-bold text-xl">+91 87577 20449</p>
                        <p className="font-bold text-xl">+91 88152 01894</p>
                      </div>
                      <a href="mailto:trishu.chowdhery@gmail.com" className="mt-4 text-secondary hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                        Email Us <ChevronRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-16 flex gap-4">
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-all">
                    <Users size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Map Area */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 rounded-[60px] overflow-hidden shadow-2xl relative border-8 border-surface-2 min-h-[500px]"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.586616016738!2d77.19946401508027!3d28.521804982460838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3bd00000001%3A0xe7a569c730e70a6a!2sSmile%20Castle%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1714132821000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 opacity-90"
              ></iframe>
              <div className="absolute top-8 right-8">
                <a 
                  href="https://maps.app.goo.gl/YourGoogleMapsLinkGoesHere" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/90 backdrop-blur-md text-primary px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl flex items-center gap-3 hover:bg-primary hover:text-white transition-all group"
                >
                  <MapPin size={18} className="text-secondary" /> Get Directions <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-b border-white/10 pb-12 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary">
                <span className="font-serif text-2xl font-bold">S</span>
              </div>
              <div className="leading-tight">
                <h3 className="text-xl font-serif font-bold">Smile Castle</h3>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent">Dental Clinic</p>
              </div>
            </div>
            
            <div className="flex gap-8 text-sm font-medium tracking-wide border-y border-white/5 md:border-none py-6 md:py-0">
              <a href="#about" className="hover:text-accent transition-colors">About</a>
              <a href="#treatments" className="hover:text-accent transition-colors">Treatments</a>
              <a href="#reviews" className="hover:text-accent transition-colors">Reviews</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </div>

            <a href="#appointment" className="bg-accent text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all">
              Book Today
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-[10px] uppercase font-bold tracking-[0.3em]">
            <p>© 2026 Smile Castle Dental Clinic. All Rights Reserved.</p>
            <p className="text-center">Trusted Dental Care in Saidulajab & Sainik Farm, South Delhi</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
