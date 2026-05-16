import { useState, useEffect } from 'react';
import { 
  Plane, Hotel, MapPin, Phone, Mail, 
  Compass, Globe, ShieldCheck, Star, FileCheck, UserCheck, 
  BookOpen, Moon, Coins, FileDigit, Fingerprint, Map, Car, ArrowRight,
  MessageCircle, Award, Sparkles,
  Check, Menu, X, Share2
} from 'lucide-react';
import { motion } from 'framer-motion';

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
  return (
    <section id="home" className="relative h-screen flex flex-col justify-start pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          src="/assets/hero_dubai_flight.png" 
          alt="Dubai Luxury Travel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6">
        <div className="max-w-5xl pt-10 md:pt-0">
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
            className="heading-xl drop-shadow-2xl"
          >
            Beyond the <br />
            Horizon
          </motion.h1>
        </div>
      </div>

      {/* Bottom Content Card */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute bottom-0 right-0 w-full md:w-1/2 lg:w-1/3 bg-white p-12 rounded-tl-[5rem] shadow-2xl z-20"
      >
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-xl font-bold text-brand-primary mb-4 uppercase tracking-widest"
        >
          Your Gateway to Luxury Travel
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="text-slate-600 text-lg leading-relaxed mb-8"
        >
          Crafting unique travel experiences designed exclusively for you. Whether it's a luxurious getaway, an adventurous trek, or a spiritual pilgrimage, we ensure every detail is meticulously planned.
        </motion.p>
        <motion.a 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.9 }}
          href="https://wa.me/971564279281" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-brand-primary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform"
        >
          Explore Now <ArrowRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
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
    <section id="services" className="py-24 bg-brand-primary">
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
    <section className="py-24 bg-white">
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
    <section id="offers" className="py-24 bg-white relative overflow-hidden">
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

// --- Contact Section with Dual Maps ---
const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-brand-primary relative overflow-hidden">
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
                    <p className="text-white/70 text-lg leading-relaxed"><span className="text-white font-black block mb-1 uppercase tracking-tighter text-sm">Connect</span>+971 52 607 0011 <br /> Near Al Wahda Mall</p>
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
                    <p className="text-white/70 text-lg leading-relaxed"><span className="text-white font-black block mb-1 uppercase tracking-tighter text-sm">Location</span>Calicut Rahmath Restaurant Building, Kerala, India</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-2 w-2 h-2 rounded-full bg-brand-accent" />
                    <p className="text-white/70 text-lg leading-relaxed"><span className="text-white font-black block mb-1 uppercase tracking-tighter text-sm">Connect</span>+91 7907 887 149 <br /> Sharpwaytravelandtourism@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[350px] mt-auto">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.8351543666276!2d75.7831264!3d11.2424847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659999496f8c7%3A0x6b876b876b876b87!2sCalicut%20Rahmath%20Hotel!5e0!3m2!1sen!2sin!4v1715865600000!5m2!1sen!2sin" 
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
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
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
        <Contact />
      </motion.div>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
