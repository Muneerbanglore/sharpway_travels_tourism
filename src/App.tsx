import { useState, useEffect } from 'react';
import { 
  Plane, Hotel, MapPin, Phone, Mail, 
  Globe, ShieldCheck, Star, FileCheck, UserCheck, 
  BookOpen, Moon, Coins, FileDigit, Fingerprint, Map, Car, ArrowRight,
  Award, Sparkles,
  Check, Menu, X, Share2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .012 5.403.01 12.039a11.818 11.818 0 001.577 5.914L0 24l6.102-1.6a11.836 11.836 0 005.944 1.595h.005c6.637 0 12.038-5.403 12.041-12.04a11.82 11.82 0 00-3.417-8.467z"/>
  </svg>
);

// --- Structured Data ---
const SEOStructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Sharpway Travel & Tourism",
    "image": "https://sharpwaytourism.com/assets/hero.png",
    "url": "https://sharpwaytourism.com/",
    "telephone": "+971564279281",
    "email": "Sharpwaytravelandtourism@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dubai",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    }
  };
  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
};

// --- Navbar ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Offers', href: '#offers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled || isOpen ? 'bg-white shadow-xl py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        <div className={`flex items-center gap-3 cursor-pointer group transition-all duration-700 ${isScrolled || isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'}`}>
          <img 
            src="/logo.png" 
            alt="Sharpway Logo" 
            className="h-16 w-auto object-contain" 
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-bold text-sm transition-all duration-500 px-8 py-3 rounded-full uppercase tracking-widest ${
                link.name === 'Home' 
                  ? 'bg-brand-primary text-white shadow-xl hover:scale-105' 
                  : isScrolled 
                    ? 'text-slate-600 hover:text-brand-primary' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <motion.a 
            href="tel:+971564279281"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden md:flex items-center gap-3 font-bold text-sm transition-all duration-500 uppercase tracking-widest p-2 pr-6 rounded-full shadow-2xl ${isScrolled ? 'bg-brand-primary/5 text-brand-primary' : 'bg-brand-primary/80 backdrop-blur-md text-white'}`}
          >
            <div className="relative">
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-white rounded-full blur-md opacity-30"
              />
              <motion.div 
                animate={{ 
                  rotate: [0, -15, 15, -15, 15, 0],
                  scale: [1, 1.1, 1.1, 1.1, 1.1, 1]
                }}
                transition={{ 
                  duration: 0.5, 
                  repeat: Infinity, 
                  repeatDelay: 1.5 
                }}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-primary shadow-lg relative z-10"
              >
                <Phone className="w-5 h-5 fill-current" />
              </motion.div>
            </div>
            <span className="text-white">+971 56 427 9281</span>
          </motion.a>

          <button 
            className="lg:hidden p-2 rounded-lg text-brand-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="lg:hidden overflow-hidden bg-white border-t border-slate-100"
      >
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black text-brand-primary hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="h-[1px] bg-slate-100 my-2" />
          <div className="flex flex-col gap-4">
            <p className="text-slate-500 font-bold flex items-center gap-2"><Phone className="w-5 h-5 text-brand-accent" /> +971 56 427 9281</p>
            <p className="text-slate-500 font-bold flex items-center gap-2"><Mail className="w-5 h-5 text-brand-accent" /> info@sharpwaytourism.com</p>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

// --- Minimalist Hero ---
const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const heroBgs = [
    '/assets/hero_dubai_skyline.png',
    '/assets/hero_tropical_paradise.png',
    '/assets/hero_majestic_mountains.png',
    '/assets/hero_private_jet_interior.png',
    '/assets/hero_paris_eiffel.png',
    '/assets/hero_swiss_alps.png',
    '/assets/hero_yacht_dubai.png',
    '/assets/hero_santorini.png',
    '/assets/hero_taj_mahal.png',
    '/assets/hero_safari.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroBgs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img 
              src={heroBgs[currentBg]} 
              className="w-full h-full object-cover"
              alt="Luxury Travel Experience"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6">
        <div className="max-w-5xl">
          <motion.img 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            src="/logo.png" 
            alt="Sharpway Logo" 
            className="h-24 md:h-40 w-auto object-contain mb-8 md:mb-12 brightness-0 invert"
          />
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-6xl md:text-[10rem] font-black text-white leading-[0.85] tracking-tighter uppercase drop-shadow-2xl"
          >
            Beyond the <br />
            <span className="text-brand-accent">Horizon</span>
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

const Intro = () => {
  return (
    <section className="bg-white relative z-30 -mt-24 rounded-t-[4rem] md:rounded-t-[8rem] shadow-2xl">
      <div className="container mx-auto px-8 md:px-20 py-24 md:py-40">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="editorial-label text-brand-accent mb-4 block">About Sharpway</span>
            <h2 className="text-4xl md:text-6xl font-black text-brand-primary mb-12 leading-[1.1] tracking-tighter uppercase">
              Your Gateway to <br /> <span className="text-brand-accent">Luxury Travel</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed md:leading-loose mb-12 font-medium">
              Crafting unique travel experiences designed exclusively for you. 
              Whether it's a luxurious getaway, an adventurous trek, or a spiritual pilgrimage, 
              we ensure every detail is meticulously planned.
            </p>
            <a 
              href="https://wa.me/971564279281"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-brand-primary text-white px-12 py-6 rounded-2xl font-black tracking-widest transition-all hover:scale-105 shadow-xl items-center gap-4 group"
            >
              EXPLORE NOW <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <img src="/assets/adventure.png" alt="Luxury Travel" className="rounded-[3rem] shadow-2xl" />
            <div className="absolute -bottom-10 -left-10 bg-brand-accent p-10 rounded-[2rem] shadow-xl gold-glow">
              <p className="text-brand-primary font-black text-4xl">15+</p>
              <p className="text-brand-primary/80 font-bold text-sm uppercase tracking-widest">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


// --- Premium Image Service Cards ---
const Services = () => {
  const services = [
    { title: 'Air Tickets', desc: 'Domestic & international flight bookings at competitive prices.', icon: Plane, bgImg: '/assets/srv_air.png', tint: 'from-blue-600/20' },
    { title: 'Visiting Visa', desc: 'Expert assistance for tourist visas for all major global destinations.', icon: FileCheck, bgImg: '/assets/srv_visit.png', tint: 'from-emerald-600/20' },
    { title: 'Emigration', desc: 'Hassle-free emigration clearance and documentation services.', icon: UserCheck, bgImg: '/assets/srv_emigration.png', tint: 'from-indigo-600/20' },
    { title: 'Passport Services', desc: 'Fast-track passport application, renewal, and assistance.', icon: BookOpen, bgImg: '/assets/srv_passport.png', tint: 'from-slate-600/20' },
    { title: 'Umrah Package', desc: 'Spiritual Umrah packages with premium stay and transport.', icon: Moon, bgImg: '/assets/srv_umrah.png', tint: 'from-cyan-600/20' },
    { title: 'Forex Services', desc: 'Best currency exchange rates and reliable exchange solutions.', icon: Coins, bgImg: '/assets/bg_finance.png', tint: 'from-amber-600/20' },
    { title: 'Certificate Attesting', desc: 'Quick document attestation for international use.', icon: FileDigit, bgImg: '/assets/srv_attestation.png', tint: 'from-blue-600/20' },
    { title: 'Hotel Booking', desc: 'Exclusive deals on luxury resorts and hotels worldwide.', icon: Hotel, bgImg: '/assets/srv_hotel.png', tint: 'from-sky-600/20' },
    { title: 'Visa Stamping', desc: 'Professional visa stamping for work, residence, and visit.', icon: Fingerprint, bgImg: '/assets/srv_visa_stamp.png', tint: 'from-fuchsia-600/20' },
    { title: 'Freelance Visa', desc: '2-Year Freelance residency visas with full sponsorship support.', icon: UserCheck, bgImg: '/assets/srv_emigration.png', tint: 'from-indigo-600/20' },
    { title: 'Family Visa', desc: 'Hassle-free family sponsorship and residency services.', icon: Sparkles, bgImg: '/assets/srv_visit.png', tint: 'from-emerald-600/20' },
    { title: 'Tour Package', desc: 'Curated holiday packages tailored to your preferences.', icon: Map, bgImg: '/assets/adventure.png', tint: 'from-orange-600/20' },
    { title: 'Travel Insurance', desc: 'Comprehensive insurance plans to keep you safe.', icon: ShieldCheck, bgImg: '/assets/maldives.png', tint: 'from-teal-600/20' },
    { title: 'Airport Transfers', desc: 'Reliable and comfortable airport transfer services.', icon: Car, bgImg: '/assets/bg_flight.png', tint: 'from-zinc-600/20' },
  ];

  return (
    <section id="services" className="py-24 md:py-40 bg-brand-primary">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="editorial-label text-brand-accent">Curated Experiences</span>
            <h2 className="heading-lg text-white mb-6">Expert <br />Services</h2>
            <p className="text-premium text-white/50">Direct booking and expert consultation for all your travel needs. Experience our premium services managed by industry veterans.</p>
          </div>
          <a href="https://wa.me/971564279281" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold tracking-wide transition-all duration-300 hover:bg-[#128C7E] flex items-center gap-2 shrink-0">
            <WhatsAppIcon className="w-5 h-5" /> Inquire Now
          </a>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              whileHover={{ y: -5 }}
              className="group relative h-[320px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg"
            >
              <img src={service.bgImg} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className={`absolute inset-0 bg-gradient-to-t ${service.tint} to-transparent opacity-20 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-transparent to-transparent" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="absolute top-8 right-10 text-white/10 text-8xl font-black italic tracking-tighter select-none">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent flex items-center justify-center text-brand-primary shadow-xl shadow-brand-accent/20 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20">
                    Sharpway Assured
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tighter group-hover:text-brand-accent transition-colors duration-300 font-display uppercase">{service.title}</h3>
                <p className="text-premium text-white/50 mb-8 line-clamp-2">{service.desc}</p>
                <div className="flex items-center gap-3 text-brand-accent font-black text-sm uppercase tracking-[0.2em] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <span>Connect Now</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- Why Choose Us Section ---
const WhyChooseUs = () => {
  const features = [
    { title: '12+ Years Excellence', desc: 'A decade of delivering premium travel experiences and expert consultancy across the globe.', icon: <Award className="w-8 h-8 text-brand-accent" /> },
    { title: 'Bespoke Itineraries', desc: 'Every journey is custom-crafted to match your unique luxury standards and preferences.', icon: <Sparkles className="w-8 h-8 text-brand-accent" /> },
    { title: 'Global Network', desc: 'Exclusive partnerships with top-tier airlines, luxury hotels, and global visa authorities.', icon: <Globe className="w-8 h-8 text-brand-accent" /> },
    { title: 'Direct Access', desc: 'No bots or automated forms. Direct, personal communication with travel experts via WhatsApp.', icon: <WhatsAppIcon className="w-8 h-8 text-brand-accent" /> },
  ];

  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="editorial-label text-brand-accent">The Sharpway Advantage</span>
          <h2 className="heading-lg text-brand-primary mb-8">Why Choose Us</h2>
          <p className="text-premium">Redefining luxury travel with a personalized, professional approach that prioritizes your comfort and peace of mind.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-accent/30 transition-all duration-500 group">
              <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
              <h3 className="text-xl font-black mb-4 tracking-tight font-display text-brand-primary uppercase">{feature.title}</h3>
              <p className="text-premium text-slate-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Promotional Ads (Multi-Offer Carousel) ---
const PromotionalAds = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const ads = [
    {
      badge: 'Featured Package',
      title: 'Visa Change By Luxury Bus',
      desc: 'Avoid airport hassles. Experience our premium visa change service via luxury bus to Oman. Meticulously planned for your total comfort.',
      features: ['60-Day Sharjah Visa Included', '10-Day Oman Visiting Visa', 'Premium Round-Trip Bus Ticket', '1-Day Stay in Oman Hotel'],
      img: '/assets/visa_ad_3.png',
      cta: 'Book This Package',
      link: 'https://wa.me/971564279281'
    },
    {
      badge: 'Bestseller',
      title: '2 Years UAE Residency Visa',
      desc: 'Secure your future with our all-inclusive 2-year residency visa packages. Available for Dubai and Abu Dhabi jurisdictions.',
      features: ['Full Medical & Emirates ID Support', 'Status Change Included', 'Multiple Entry Rights', 'Easy Installment Options Available'],
      img: '/assets/hero_dubai_flight.png',
      cta: 'Get Residency Now',
      link: 'https://wa.me/971564279281'
    },
    {
      badge: 'Premium Service',
      title: 'Freelance & Family Visa',
      desc: 'Empower your career or bring your loved ones closer. We specialize in hassle-free freelance and family sponsorship visas.',
      features: ['Work Anywhere in the UAE', 'No Company Required for Freelance', 'Bank Account Opening Assistance', 'Tabby & Tamara Pay Later Options'],
      img: '/assets/srv_visit.png',
      cta: 'Explore Options',
      link: 'https://wa.me/971564279281'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="services" className="py-24 md:py-40 bg-gray-50 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl relative min-h-[600px] flex flex-col lg:flex-row">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-secondary/20 to-transparent pointer-events-none" />
          
          <div className="p-12 lg:p-20 relative z-10 lg:w-1/2 flex flex-col justify-center">
            <motion.div
              key={currentAd}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/20 border border-brand-accent/50 rounded-full text-brand-accent text-xs font-bold uppercase tracking-wider mb-8">
                <Star className="w-3 h-3 fill-current" />
                {ads[currentAd].badge}
              </div>
              <h2 className="heading-lg text-white mb-8 tracking-tighter">
                {ads[currentAd].title.split(' ').slice(0, 2).join(' ')} <br />
                <span className="text-brand-accent">{ads[currentAd].title.split(' ').slice(2).join(' ')}</span>
              </h2>
              <p className="text-premium text-white/50 mb-12 italic">
                {ads[currentAd].desc}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 text-white/90">
                {ads[currentAd].features.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-bold tracking-tight">
                    <Check className="w-4 h-4 text-brand-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-6">
                <a href={ads[currentAd].link} className="bg-brand-accent text-brand-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all hover:scale-105 shadow-xl shadow-brand-accent/20">
                  {ads[currentAd].cta}
                </a>
                <div className="flex gap-2">
                  {ads.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setCurrentAd(i)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentAd ? 'bg-brand-accent w-10' : 'bg-white/20'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative lg:w-1/2 h-[400px] lg:h-auto overflow-hidden">
            <motion.img 
              key={currentAd}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              src={ads[currentAd].img} 
              alt={ads[currentAd].title} 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent via-brand-primary/20 to-brand-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Top Destinations Section ---
const Destinations = () => {
  const [activeTab, setActiveTab] = useState<'dubai' | 'global'>('dubai');

  const destinations = {
    dubai: [
      {
        title: 'Burj Khalifa',
        location: 'Downtown Dubai, UAE',
        desc: 'The world\'s tallest architectural masterpiece, rising elegantly above Dubai.',
        image: '/assets/dubai_burj_khalifa.png',
        badge: 'Iconic Wonder'
      },
      {
        title: 'Palm Jumeirah',
        location: 'Jumeirah Coast, Dubai',
        desc: 'A monumental man-made archipelago symbolizing engineering marvel and elite living.',
        image: '/assets/dubai_palm_jumeirah.png',
        badge: 'Luxury Living'
      },
      {
        title: 'Dubai Marina',
        location: 'Marina District, Dubai',
        desc: 'Dazzling skyscrapers framing pristine water canals with luxury mega yachts.',
        image: '/assets/hero_yacht_dubai.png',
        badge: 'Waterfront Elite'
      },
      {
        title: 'Burj Al Arab',
        location: 'Jumeirah Beach, Dubai',
        desc: 'The legendary sail-shaped luxury hotel, symbolizing high-end hospitality.',
        image: '/assets/dubai_burj_al_arab.png',
        badge: '7-Star Luxury'
      },
      {
        title: 'Museum of the Future',
        location: 'Sheikh Zayed Rd, Dubai',
        desc: 'A futuristic architectural masterpiece showcasing revolutionary designs and technology.',
        image: '/assets/dubai_museum_of_future.png',
        badge: 'Futuristic Design'
      },
      {
        title: 'Desert Dunes Safari',
        location: 'Al Lahbab Desert, Dubai',
        desc: 'Vibrant golden sand dune adventures followed by high-end private desert camps under the stars.',
        image: '/assets/dubai_desert_safari.png',
        badge: 'Heritage & Adventure'
      },
      {
        title: 'Dubai Frame',
        location: 'Zabeel Park, Dubai',
        desc: 'A magnificent golden structure framing panoramic views of old and new Dubai.',
        image: '/assets/hero_dubai_skyline.png',
        badge: 'Panoramic Skyline'
      },
      {
        title: 'Jumeirah Beach',
        location: 'Jumeirah District, Dubai',
        desc: 'Pristine white sand shoreline with crystalline azure waters, ideal for beachside dining.',
        image: '/assets/hero_tropical_paradise.png',
        badge: 'Coastal Paradise'
      },
      {
        title: 'Private Jet Concierge',
        location: 'Al Maktoum Airport, Dubai',
        desc: 'Seamless luxury air travel experiences custom-designed to match your schedule.',
        image: '/assets/hero_private_jet_interior.png',
        badge: 'Elite Flight'
      },
      {
        title: 'Dubai Miracle Garden',
        location: 'Dubailand, Dubai',
        desc: 'A breathtaking botanical oasis featuring over 150 million blooming flowers in artistic arrays.',
        image: '/assets/hero_majestic_mountains.png',
        badge: 'Botanical Oasis'
      }
    ],
    global: [
      {
        title: 'Eiffel Tower',
        location: 'Paris, France',
        desc: 'An eternal icon of art and romance, casting golden glows over the Seine.',
        image: '/assets/hero_paris_eiffel.png',
        badge: 'Cultural Landmark'
      },
      {
        title: 'Swiss Alps',
        location: 'Zermatt, Switzerland',
        desc: 'Majestic snow-clad peaks surrounding exclusive mountain retreats and winter wonderlands.',
        image: '/assets/hero_swiss_alps.png',
        badge: 'Alpine Escape'
      },
      {
        title: 'Santorini Caldera',
        location: 'Cyclades, Greece',
        desc: 'Stunning blue-domed architectural marvels perched on volcanic cliffs overlooking the Aegean.',
        image: '/assets/hero_santorini.png',
        badge: 'Island Paradise'
      },
      {
        title: 'Taj Mahal',
        location: 'Agra, India',
        desc: 'The ultimate symbol of eternal love, crafted perfectly in majestic white marble.',
        image: '/assets/hero_taj_mahal.png',
        badge: 'Historic Monument'
      },
      {
        title: 'Serengeti Safari',
        location: 'Serengeti, Tanzania',
        desc: 'Witness the boundless wildlife migration across the plains from premium hot air balloons.',
        image: '/assets/hero_safari.png',
        badge: 'Wilderness Escape'
      },
      {
        title: 'The Colosseum',
        location: 'Rome, Italy',
        desc: 'The historic, grand amphitheater representing the heart of ancient Rome\'s architectural genius.',
        image: '/assets/global_colosseum.png',
        badge: 'Historic Arena'
      },
      {
        title: 'Giza Pyramids',
        location: 'Cairo, Egypt',
        desc: 'Witness the mysterious and majestic tombs of ancient pharaohs standing tall across millennia.',
        image: '/assets/global_pyramids.png',
        badge: 'Ancient Eternity'
      },
      {
        title: 'Machu Picchu',
        location: 'Andes Mountains, Peru',
        desc: 'The dramatic, mist-shrouded Inca citadel perched high in the majestic Peruvian mountain tops.',
        image: '/assets/global_machu_picchu.png',
        badge: 'Lost Civilization'
      },
      {
        title: 'Luxury Yacht Voyager',
        location: 'Mediterranean Sea',
        desc: 'Sail through pristine Mediterranean shores on a fully-catered elite private vessel.',
        image: '/assets/hero_yacht_dubai.png',
        badge: 'Nautical Elite'
      },
      {
        title: 'Tropical Overwaters',
        location: 'Maldives Islands',
        desc: 'Unwind in ultra-luxury water villas with crystal clear private lagoons and sandy shores.',
        image: '/assets/hero_tropical_paradise.png',
        badge: 'Elite Seclusion'
      }
    ]
  };

  return (
    <section id="destinations" className="py-24 md:py-40 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <span className="editorial-label text-brand-accent">Curated Destinations</span>
            <h2 className="heading-lg text-brand-primary mb-6">Top Places <br />to Explore</h2>
            <p className="text-premium text-slate-500">Uncover the world’s most coveted locales, from Dubai's gravity-defying architecture to iconic wonders across continents.</p>
          </div>
          
          <div className="flex bg-slate-200/60 p-1.5 rounded-2xl gap-2 shadow-inner border border-slate-300/30">
            <button 
              onClick={() => setActiveTab('dubai')}
              className={`px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 ${activeTab === 'dubai' ? 'bg-brand-primary text-white shadow-lg' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Iconic Dubai
            </button>
            <button 
              onClick={() => setActiveTab('global')}
              className={`px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 ${activeTab === 'global' ? 'bg-brand-primary text-white shadow-lg' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Global Wonders
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {destinations[activeTab].map((item, index) => (
              <motion.div 
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="premium-card p-0 rounded-[2.5rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 bg-white border border-slate-100/80"
              >
                <div className="relative h-[280px] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                  <span className="absolute top-6 left-6 text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary bg-brand-accent px-4 py-2 rounded-full shadow-lg font-display select-none">
                    {item.badge}
                  </span>
                </div>
                <div className="p-8 flex flex-col justify-between h-[220px]">
                  <div>
                    <span className="text-[11px] font-black text-brand-accent uppercase tracking-widest block mb-2">{item.location}</span>
                    <h3 className="text-2xl font-black text-brand-primary mb-3 tracking-tighter uppercase font-display">{item.title}</h3>
                    <p className="text-sm font-medium text-slate-500 leading-relaxed line-clamp-3">{item.desc}</p>
                  </div>
                  <a 
                    href={`https://wa.me/971564279281?text=I'm%20interested%20in%20visiting%20${encodeURIComponent(item.title)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-brand-primary font-black text-sm uppercase tracking-[0.2em] group-hover:text-brand-accent transition-colors duration-300 w-fit"
                  >
                    <span>Inquire Destination</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// --- Contact Section with Dual Maps ---
const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-40 bg-brand-primary relative overflow-hidden">
      <div className="noise-overlay" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,112,243,0.1),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="editorial-label text-brand-accent">
            Global Network
          </span>
          <h2 className="heading-lg text-white mb-8 tracking-tighter">
            Global <br />Presence
          </h2>
          <p className="text-premium text-white/40 max-w-xl mx-auto">
            Strategically located in the world's most dynamic hubs to serve you better.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Abu Dhabi Branch */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="premium-card p-0 rounded-[3rem] overflow-hidden group"
          >
            <div className="flex flex-col h-full">
              <div className="p-10 flex flex-col justify-center">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform duration-500 gold-glow">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white tracking-tight uppercase">Abu Dhabi</h3>
                    <p className="text-brand-accent/80 text-xs font-black uppercase tracking-widest">Regional Branch - UAE</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-2 w-2 h-2 rounded-full bg-brand-accent" />
                    <p className="text-white/70 text-lg leading-relaxed"><span className="text-white font-black block mb-1 uppercase tracking-tighter text-sm">Location</span>Shk. Rashid Bin Saeed St, Al Nahyan, Abu Dhabi, UAE</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-2 w-2 h-2 rounded-full bg-brand-accent" />
                    <p className="text-white/70 text-lg leading-relaxed"><span className="text-white font-black block mb-1 uppercase tracking-tighter text-sm">Connect</span>+971 52 607 0011 <br /> Calicut Restaurant Building, Near Al Wahda Mall</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[350px] mt-auto">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.4644443666276!2d54.3856784!3d24.4644847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e666666666667%3A0x6b876b876b876b87!2sAl%20Nahyan%20Camp!5e0!3m2!1sen!2sae!4v1715865600000!5m2!1sen!2sae" 
                  className="absolute inset-0 w-full h-full border-none opacity-90 hover:opacity-100 transition-opacity duration-500"
                  loading="lazy" 
                  title="Abu Dhabi Office Map"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border-[1.5rem] border-brand-primary/20" />
              </div>
            </div>
          </motion.div>

          {/* Kerala Office */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="premium-card p-0 rounded-[3rem] overflow-hidden group"
          >
            <div className="flex flex-col h-full">
              <div className="p-10 flex flex-col justify-center">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform duration-500 gold-glow">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white tracking-tight uppercase">Kerala Office</h3>
                    <p className="text-brand-accent/80 text-xs font-black uppercase tracking-widest">Regional Branch - India</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-2 w-2 h-2 rounded-full bg-brand-accent" />
                    <p className="text-white/70 text-lg leading-relaxed"><span className="text-white font-black block mb-1 uppercase tracking-tighter text-sm">Location</span>Oyoor, Kollam, Kerala, India</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-2 w-2 h-2 rounded-full bg-brand-accent" />
                    <p className="text-white/70 text-lg leading-relaxed"><span className="text-white font-black block mb-1 uppercase tracking-tighter text-sm">Connect</span>+91 7907 887 149 <br /> Sharpwaytravelandtourism@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[350px] mt-auto">
                <iframe 
                  src="https://maps.google.com/maps?q=Oyoor,%20Kollam,%20Kerala,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  className="absolute inset-0 w-full h-full border-none opacity-90 hover:opacity-100 transition-opacity duration-500"
                  loading="lazy" 
                  title="Kerala Office Map"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border-[1.5rem] border-brand-primary/20" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-1 bg-gradient-to-r from-brand-accent/40 via-brand-accent to-brand-accent/40 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.3)]"
        >
          <div className="bg-brand-primary p-10 md:p-14 rounded-[2.3rem] flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h4 className="text-3xl md:text-4xl font-black text-white mb-3">Instant Concierge</h4>
              <p className="text-xl text-white/60 font-medium italic">Our global agents are standing by on WhatsApp 24/7.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 w-full md:w-auto">
              <a href="https://wa.me/971564279281" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black tracking-wider transition-all hover:scale-105 flex items-center justify-center gap-4 text-lg">
                <WhatsAppIcon className="w-6 h-6" /> DUBAI DESK
              </a>
              <a href="https://wa.me/917907887149" className="bg-white text-brand-primary px-10 py-5 rounded-2xl font-black tracking-wider transition-all hover:scale-105 flex items-center justify-center gap-4 text-lg">
                <WhatsAppIcon className="w-6 h-6" /> INDIA DESK
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-32 pb-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="lg:col-span-1">
            <div className="mb-10">
              <img src="/logo.png" alt="Sharpway Logo" className="h-20 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-white/40 text-lg leading-relaxed mb-12 font-medium">
              A decade of excellence in bespoke travel consultancy. Crafting journeys that transcend the ordinary.
            </p>
            <div className="flex gap-5">
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-accent hover:border-brand-accent/50 hover:bg-white/10 transition-all duration-500"><Globe className="w-5 h-5" /></a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-accent hover:border-brand-accent/50 hover:bg-white/10 transition-all duration-500"><Share2 className="w-5 h-5" /></a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-accent hover:border-brand-accent/50 hover:bg-white/10 transition-all duration-500"><WhatsAppIcon className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="editorial-label text-brand-accent mb-8">Navigation</h4>
            <ul className="space-y-6 text-white/50 text-base font-bold uppercase tracking-[0.2em]">
              <li><a href="#home" className="hover:text-white transition-colors flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-brand-accent" /> HOME</a></li>
              <li><a href="#services" className="hover:text-white transition-colors flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-brand-accent" /> SERVICES</a></li>
              <li><a href="#offers" className="hover:text-white transition-colors flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-brand-accent" /> OFFERS</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-brand-accent" /> CONTACT</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white/5 rounded-[3rem] p-12 border border-white/5 hover:border-white/10 transition-all duration-700">
              <h4 className="editorial-label text-brand-accent">THE SHARPWAY ASSURANCE</h4>
              <p className="text-white/80 text-3xl font-bold leading-tight mb-10 tracking-tight uppercase">
                "We don't just book tickets. We engineer memories that last a lifetime."
              </p>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-white/30 font-bold tracking-[0.3em] uppercase text-[10px]">CERTIFIED PREMIUM AGENCY 2024</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/20 text-xs font-black tracking-widest uppercase">
          <span>© 2024 Sharpway Travel & Tourism LLC.</span>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Floating WhatsApp Widget ---
const WhatsAppWidget = () => (
  <a href="https://wa.me/971564279281" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all group flex items-center justify-center">
    <WhatsAppIcon className="w-8 h-8" />
    <span className="absolute -top-1 -right-1 flex h-4 w-4">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
      <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-[#25D366]"></span>
    </span>
  </a>
);

// --- Root Component ---
function App() {
  return (
    <div className="min-h-screen bg-white">
      <SEOStructuredData />
      <Navbar />
      <Hero />
      <Intro />
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Services />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <WhyChooseUs />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <PromotionalAds />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Destinations />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
