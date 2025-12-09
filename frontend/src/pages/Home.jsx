import { useState, useEffect } from 'react'
import { Dumbbell, Activity, Utensils, MessageSquare, ChevronRight, Play, Trophy, Users, Target, CheckCircle2, Flame, Timer, ChefHat, Bot, Mic, Sparkles, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') {
        setActiveSection('')
        return
    }

    const handleScroll = () => {
        const sections = ['about', 'programs', 'diet-plans', 'ai-coach']
        
        // Default to nothing or top
        let current = ''

        for (const section of sections) {
            const element = document.getElementById(section)
            if (element) {
                const rect = element.getBoundingClientRect()
                // If the section top is near the top of the viewport (considering navbar height ~80px)
                // or if it occupies a significant portion of the screen
                if (rect.top <= 150 && rect.bottom >= 150) {
                    current = section
                }
            }
        }
        
        setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    // Run once on mount to set initial state
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location])

  const linkClasses = (section) => `px-4 py-2 rounded-full transition-all duration-300 ${activeSection === section ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-slate-300 hover:text-cyan-400'}`

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md bg-slate-900/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-lg group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300">
              <Activity className="w-4 h-4 text-cyan-400 fill-current" />
            </div>
            <span className="text-lg font-heading font-black text-white tracking-wide">
              Fitness<span className="text-cyan-400">PowerHouse</span>
            </span>
        </Link>
        <div className="hidden md:flex items-center gap-4 font-medium text-sm">
          <HashLink smooth to="/#about" className={linkClasses('about')}>About</HashLink>
          <HashLink smooth to="/#programs" className={linkClasses('programs')}>Programs</HashLink>
          <HashLink smooth to="/#diet-plans" className={linkClasses('diet-plans')}>Diet Plans</HashLink>
          <HashLink smooth to="/#ai-coach" className={linkClasses('ai-coach')}>AI Coach</HashLink>
        </div>
        <div className="hidden md:flex items-center gap-4">
           <Link to="/signin" className="font-bold text-sm text-white hover:text-cyan-400 transition-colors">
             Sign In
           </Link>
           <Link to="/signup" className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300">
             Get Started
           </Link>
        </div>
      </div>
    </nav>
  )
}

const Footer = () => (
  <footer className="py-12 px-6 border-t border-slate-800 bg-slate-950 text-slate-400 font-medium">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2 group">
        <div className="p-1.5 rounded-lg group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300">
          <Activity className="w-4 h-4 text-cyan-400 fill-current" />
        </div>
        <span className="text-lg font-heading font-black text-white tracking-wide">
          Fitness<span className="text-cyan-400">PowerHouse</span>
        </span>
      </div>
      <div className="flex gap-8">
        <HashLink smooth to="/#privacy" className="hover:text-cyan-400 transition-colors">Privacy</HashLink>
        <HashLink smooth to="/#terms" className="hover:text-cyan-400 transition-colors">Terms</HashLink>
        <HashLink smooth to="/#contact" className="hover:text-cyan-400 transition-colors">Contact</HashLink>
      </div>
      <div className="text-sm">© 2025 All rights reserved.</div>
    </div>
  </footer>
)

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <DietPlans />
      <AICoach />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    {/* Abstract Background */}
    <div className="absolute inset-0 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/30 via-slate-900 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[100px]" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          AI-Powered Fitness Revolution
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
          Train Smarter,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
             Not Harder.
          </span>
        </h1>
        <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
          Unlock your potential with real-time AI pose detection, personalized nutrition plans, and smart workout recommendations tailored tailored just for you.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/signup" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors flex items-center gap-2 group shadow-xl shadow-cyan-500/10">
            Start Free Trial
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <HashLink smooth to="/#programs" className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-full font-bold text-lg hover:border-cyan-500/50 transition-colors flex items-center gap-2 cursor-pointer">
            <Play className="w-5 h-5 fill-current" />
            Watch Demo
          </HashLink>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative hidden lg:block"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20 -rotate-6 transform" />
        <div className="relative rounded-3xl border border-white/10 bg-slate-800/50 backdrop-blur-xl p-6 shadow-2xl overflow-hidden aspect-video group transform hover:scale-[1.02] transition-transform duration-500">
           {/* Mock UI/Dashboard Display would go here */}
           <div className="h-full w-full bg-slate-900/50 rounded-xl flex items-center justify-center border border-white/5 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
             <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20 shadow-lg shadow-cyan-500/20">
                  <Activity className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">AI Analysis Active</h3>
                <div className="flex items-center gap-2 justify-center text-slate-300 bg-slate-900/60 rounded-full px-4 py-1 backdrop-blur-sm border border-white/10">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   Tracking metrics...
                </div>
             </div>
           </div>
        </div>
      </motion.div>
    </div>
  </section>
)

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative bg-slate-900 overflow-hidden">
        {/* Decorative Divider Gradient Top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl opacity-20 blur-xl"></div>
             <img 
               src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
               alt="Athlete tying shoelaces" 
               className="relative rounded-3xl shadow-2xl border border-white/10 w-full transform hover:scale-[1.01] transition-transform duration-500"
             />
             <div className="absolute bottom-10 -right-6 lg:-right-12 bg-slate-900/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl max-w-[240px]">
                <div className="flex items-center gap-4">
                   <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-400">
                      <Users className="w-6 h-6" />
                   </div>
                   <div>
                      <div className="text-3xl font-bold text-white">50k+</div>
                      <div className="text-sm text-slate-400 font-medium">Active Members</div>
                   </div>
                </div>
             </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
             <div className="inline-block px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-cyan-400 text-xs font-bold tracking-wider uppercase mb-6">
                Our Mission
             </div>
             <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Empowering Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Evolution.</span></h3>
             
             <p className="text-slate-400 text-lg mb-6 leading-relaxed">
               At FitnessPowerHouse, we believe that elite personal training should be accessible to everyone. By combining cutting-edge computer vision technology with expert fitness knowledge, we've created a platform that sees, learns, and guides you towards your goals.
             </p>

             <p className="text-slate-400 text-lg mb-10 leading-relaxed border-l-4 border-cyan-500 pl-6 italic">
              "We don't just track your reps; we understand your movement."
             </p>

             <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                   <div className="mt-1 bg-slate-800 p-2 rounded-lg h-fit">
                      <Target className="w-6 h-6 text-cyan-400" />
                   </div>
                   <div>
                      <h4 className="font-bold text-lg text-white">Precision Tracking</h4>
                      <p className="text-sm text-slate-500 mt-1">Real-time form correction with 99% accuracy using advanced CV.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="mt-1 bg-slate-800 p-2 rounded-lg h-fit">
                      <Trophy className="w-6 h-6 text-cyan-400" />
                   </div>
                   <div>
                      <h4 className="font-bold text-lg text-white">Goal Oriented</h4>
                      <p className="text-sm text-slate-500 mt-1">Dynamic paths that adapt as you get stronger and faster.</p>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Programs = () => {
    const programs = [
        {
            title: "Strength & Hypertrophy",
            level: "Intermediate",
            duration: "12 Weeks",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
            tags: ["Muscle Build", "Gym"]
        },
        {
            title: "HIIT & Cardio Burn",
            level: "Beginner",
            duration: "8 Weeks",
            image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1925&auto=format&fit=crop",
            tags: ["Fat Loss", "Home/Gym"]
        },
        {
            title: "Yoga & Flexibility",
            level: "All Levels",
            duration: "4 Weeks",
            image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop",
            tags: ["Mobility", "Home"]
        }
    ]

    return (
        <section id="programs" className="py-32 px-6 bg-slate-950 relative">
             {/* Background Mesh */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-cyan-400 font-bold tracking-wider uppercase mb-3 text-sm">Our Programs</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white">Expert-Designed Workouts</h3>
                    </div>
                    <HashLink smooth to="/#programs" className="group text-white hover:text-cyan-400 flex items-center gap-2 font-semibold transition-colors bg-slate-900 border border-slate-800 px-6 py-3 rounded-full hover:border-cyan-500/50">
                        View All Programs <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </HashLink>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {programs.map((prog, idx) => (
                        <motion.div 
                            key={idx}
                            whileHover={{ y: -15 }}
                            className="group relative rounded-[2rem] overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl cursor-pointer"
                        >
                            <div className="aspect-[4/5] relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 opacity-90" />
                                <img 
                                    src={prog.image} 
                                    alt={prog.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 z-20 flex gap-2">
                                    {prog.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/10 shadow-lg">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">{prog.title}</h4>
                                    <div className="flex gap-4 text-sm text-slate-300 border-t border-white/10 pt-4">
                                        <span className="flex items-center gap-2"><Flame className="w-4 h-4 text-orange-500" /> {prog.level}</span>
                                        <span className="flex items-center gap-2"><Timer className="w-4 h-4 text-cyan-500" /> {prog.duration}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const DietPlans = () => {
    const categories = [
        { name: "Keto", icon: Utensils, active: true },
        { name: "Vegan", icon: ChefHat, active: false },
        { name: "Paleo", icon: Utensils, active: false },
        { name: "Balanced", icon: Activity, active: false },
    ]

    return (
        <section id="diet-plans" className="py-32 px-6 bg-slate-900 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[100px] translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[100px] -translate-x-1/2" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold tracking-wider uppercase mb-6">
                            Smart Nutrition
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Fuel Your Body With <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">Precision.</span></h3>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            Achieve your fitness goals faster with personalized meal plans generated by our AI. Whether you're cutting, bulking, or maintaining, we calculate the perfect macros for you seamlessly.
                        </p>

                        <div className="space-y-6 mb-10">
                            {[
                                "AI-Generated Meal Plans tailored to your allergies.",
                                "Real-time macro tracking & grocery automation.",
                                "Weekly prep guides customized for your schedule."
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 group cursor-default">
                                    <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 group-hover:border-cyan-500/50 flex items-center justify-center flex-shrink-0 mt-1 transition-colors">
                                        <CheckCircle2 className="w-4 h-4 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <p className="text-slate-300 group-hover:text-white transition-colors">{item}</p>
                                </div>
                            ))}
                        </div>

                        <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold shadow-xl hover:bg-cyan-50 transition-all transform hover:scale-105">
                            Create My Meal Plan
                        </button>
                    </div>

                    <div className="relative order-1 lg:order-2">
                         <div className="absolute -inset-4 bg-gradient-to-tr from-green-500 to-cyan-500 rounded-[2.5rem] opacity-20 blur-2xl"></div>
                        <div className="relative bg-slate-900 border border-slate-700/50 rounded-[2rem] p-3 shadow-2xl">
                              <img 
                                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop" 
                                alt="Healthy Meal Prep" 
                                className="rounded-[1.5rem] w-full h-full object-cover aspect-square"
                             />
                             
                             {/* Floating Card */}
                             <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="absolute -bottom-10 -left-6 lg:-left-12 bg-slate-800/95 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl w-[90%]"
                             >
                                <div className="flex gap-3 mb-6 overflow-x-auto pb-2 no-scrollbar mask-linear-fade">
                                    {categories.map((cat, idx) => (
                                        <div key={idx} className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 whitespace-nowrap border transition-all ${cat.active ? 'bg-cyan-500 border-cyan-500 text-white shadow-lg shadow-cyan-500/25' : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'}`}>
                                            <cat.icon className="w-3 h-3" />
                                            {cat.name}
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between text-sm items-end">
                                        <span className="text-slate-400 font-medium">Daily Target</span>
                                        <span className="font-bold text-white text-lg">2,400 <span className="text-xs text-slate-500 font-normal">kcal</span></span>
                                    </div>
                                    <div className="w-full bg-slate-900 rounded-full h-3 p-[2px]">
                                        <div className="bg-gradient-to-r from-cyan-400 to-blue-500 w-3/4 h-full rounded-full shadow-lg shadow-cyan-500/20" />
                                    </div>
                                    <div className="flex justify-between text-xs text-slate-500 font-medium pt-2 border-t border-white/5">
                                        <div className="text-center">
                                            <div className="text-slate-300 mb-1">Protein</div>
                                            <div>180g</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-slate-300 mb-1">Carbs</div>
                                            <div>220g</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-slate-300 mb-1">Fats</div>
                                            <div>65g</div>
                                        </div>
                                    </div>
                                </div>
                             </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const AICoach = () => {
    return (
        <section id="ai-coach" className="py-32 px-6 relative bg-slate-950">
            {/* Tech Background Grid */}
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Visual Side */}
                    <div className="relative order-last lg:order-first">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[3rem] opacity-10 blur-3xl transform rotate-6"></div>
                        <div className="relative bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden min-h-[500px] flex flex-col">
                             {/* Chat Interface Header */}
                             <div className="flex items-center gap-4 border-b border-slate-800 pb-6 mb-6">
                                 <div className="relative">
                                     <div className="absolute inset-0 bg-cyan-500 blur rounded-full opacity-50 animate-pulse"></div>
                                     <div className="relative w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                                         <Bot className="w-6 h-6 text-cyan-400" />
                                     </div>
                                 </div>
                                 <div>
                                     <h4 className="font-bold text-lg text-white">PowerCoach AI</h4>
                                     <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full w-fit">
                                         <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                                         ADVANCED MODEL
                                     </div>
                                 </div>
                             </div>

                             {/* Chat Bubbles */}
                             <div className="flex-grow space-y-6">
                                 <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex gap-4 items-end"
                                >
                                     <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex-shrink-0 flex items-center justify-center">
                                         <Bot className="w-4 h-4 text-cyan-400" />
                                     </div>
                                     <div className="bg-slate-800/80 border border-slate-700 rounded-2xl rounded-bl-none p-4 max-w-[85%] shadow-sm">
                                         <p className="text-slate-300 text-sm leading-relaxed">Hello! I noticed you hit a <span className="text-white font-bold">PR on your deadlift</span> yesterday. 💪 Would you like to focus on recovery yoga today?</p>
                                     </div>
                                 </motion.div>

                                 <motion.div 
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="flex gap-4 items-end justify-end"
                                >
                                     <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl rounded-br-none p-4 max-w-[85%] shadow-lg shadow-blue-900/20">
                                         <p className="text-white text-sm">That sounds great! My lower back is a bit tight actually.</p>
                                     </div>
                                     <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex-shrink-0 flex items-center justify-center">
                                         <span className="text-xs font-bold text-slate-400">JD</span>
                                     </div>
                                 </motion.div>

                                 <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.4 }}
                                    className="flex gap-4 items-end"
                                >
                                     <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex-shrink-0 flex items-center justify-center">
                                         <Bot className="w-4 h-4 text-cyan-400" />
                                     </div>
                                     <div className="bg-slate-800/80 border border-slate-700 rounded-2xl rounded-bl-none p-4 max-w-[85%] shadow-sm">
                                         <p className="text-slate-300 text-sm leading-relaxed">Understood. I've generated a <span className="text-cyan-400 font-medium">20-min mobility flow</span> specifically targeting your lumbar spine and hamstrings. Ready to start?</p>
                                         <div className="mt-3 flex gap-2">
                                             <button className="px-3 py-1.5 bg-cyan-500/10 text-cyan-400 text-xs font-bold rounded-lg hover:bg-cyan-500/20 transition-colors">Start Session</button>
                                             <button className="px-3 py-1.5 bg-slate-700/50 text-slate-400 text-xs font-bold rounded-lg hover:bg-slate-700 transition-colors">More Details</button>
                                         </div>
                                     </div>
                                 </motion.div>
                             </div>

                             {/* Input Area */}
                             <div className="mt-6 pt-4 border-t border-slate-800 flex gap-3">
                                 <div className="flex-grow bg-slate-950 rounded-xl px-4 py-3 text-sm text-slate-500 flex items-center justify-between border border-slate-800 focus-within:border-cyan-500/50 transition-colors">
                                     <span>Type a message...</span>
                                     <Mic className="w-4 h-4 hover:text-cyan-400 cursor-pointer" />
                                 </div>
                                 <button className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center text-slate-900 hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20">
                                     <ChevronRight className="w-5 h-5" />
                                 </button>
                             </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-wider uppercase mb-6">
                            <Sparkles className="w-4 h-4" />
                            Personalized Intelligence
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Your Personal Coach,<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Available 24/7.</span></h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            Stop guessing what to do next. Our AI Coach analyzes your performance history, sleep data, and feedback to create the perfect workout for you, every single day.
                        </p>

                        <div className="grid gap-6">
                             <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                                 <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 mt-1">
                                     <MessageSquare className="w-5 h-5" />
                                 </div>
                                 <div>
                                     <h4 className="font-bold text-lg mb-1 text-white">Instant Q&A</h4>
                                     <p className="text-slate-400 text-sm">Ask about form, nutrition, or modifications and get expert answers instantly.</p>
                                 </div>
                             </motion.div>
                             
                             <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                                 <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 mt-1">
                                     <Activity className="w-5 h-5" />
                                 </div>
                                 <div>
                                     <h4 className="font-bold text-lg mb-1 text-white">Dynamic Adjustments</h4>
                                     <p className="text-slate-400 text-sm">Too tired? The AI adjusts your volume and intensity in real-time to prevent burnout.</p>
                                 </div>
                             </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Features = () => {
    const features = [
      { icon: Dumbbell, title: "Smart Workouts", desc: "Adaptive plans that evolve with your strength and endurance levels." },
      { icon: Activity, title: "Pose Correction", desc: "Real-time AI feedback on your form to prevent maximize gains." },
      { icon: Utensils, title: "Nutrition Plans", desc: "Macros and meal plans calculated automatically for your body type." },
      { icon: MessageSquare, title: "AI Assistant", desc: "24/7 access to your personal fitness expert for any questions." },
    ]
  
    return (
      <section className="py-32 px-6 bg-slate-900 relative">
         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Why Choose FitnessPowerHouse?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Experience the future of fitness with our cutting-edge technology designed to help you succeed.</p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[2rem] bg-slate-950 border border-slate-800 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-800 group-hover:border-cyan-500/30 shadow-inner">
                  <feature.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

const CTA = () => (
    <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-600 to-blue-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-900/40">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="relative z-10">
                 <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">Ready to Transform?</h2>
                 <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto font-medium">Join thousands of users who have already achieved their dream physique with FitnessPowerHouse.</p>
                 <Link to="/signup" className="px-12 py-5 bg-white text-blue-700 rounded-full font-bold text-xl hover:bg-slate-50 transition-all shadow-2xl hover:shadow-white/20 hover:scale-105 inline-block">
                     Get Your Plan Now
                 </Link>
                 <p className="mt-6 text-cyan-200/80 text-sm font-medium">No credit card required for 7-day trial</p>
             </div>
        </div>
    </section>
)

export { Navbar, Footer }
export default Home
