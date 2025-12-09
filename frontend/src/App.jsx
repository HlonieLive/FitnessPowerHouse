import { useState } from 'react'
import { Dumbbell, Activity, Utensils, MessageSquare, ChevronRight, Play } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

function App() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  // In a real app we'd add a scroll listener
  
  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 tracking-tighter">
          FITNESS<span className="text-white">POWERHOUSE</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-300">
          <a href="#" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Programs</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Diet Plans</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">AI Coach</a>
        </div>
        <div className="hidden md:block">
           <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300">
             Get Started
           </button>
        </div>
      </div>
    </nav>
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
          <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors flex items-center gap-2 group">
            Start Free Trial
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-full font-bold text-lg hover:border-cyan-500/50 transition-colors flex items-center gap-2">
            <Play className="w-5 h-5 fill-current" />
            Watch Demo
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative hidden lg:block"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20 -rotate-6 transform" />
        <div className="relative rounded-3xl border border-white/10 bg-slate-800/50 backdrop-blur-xl p-6 shadow-2xl overflow-hidden aspect-video group">
           {/* Mock UI/Dashboard Display would go here */}
           <div className="h-full w-full bg-slate-900/50 rounded-xl flex items-center justify-center border border-white/5 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
             <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <Activity className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold">AI Analysis Active</h3>
                <p className="text-slate-300">Tracking metrics...</p>
             </div>
           </div>
        </div>
      </motion.div>
    </div>
  </section>
)

const Features = () => {
    const features = [
      { icon: Dumbbell, title: "Smart Workouts", desc: "Adaptive plans that evolve with your strength and endurance levels." },
      { icon: Activity, title: "Pose Correction", desc: "Real-time AI feedback on your form to prevent maximize gains." },
      { icon: Utensils, title: "Nutrition Plans", desc: "Macros and meal plans calculated automatically for your body type." },
      { icon: MessageSquare, title: "AI Assistant", desc: "24/7 access to your personal fitness expert for any questions." },
    ]
  
    return (
      <section className="py-32 px-6 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose FitnessPowerHouse?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Experience the future of fitness with our cutting-edge technology designed to help you succeed.</p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-700 group-hover:border-cyan-500/30">
                  <feature.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

const CTA = () => (
    <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
             <div className="relative z-10">
                 <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Transform?</h2>
                 <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">Join thousands of users who have already achieved their dream physique with FitnessPowerHouse.</p>
                 <button className="px-10 py-4 bg-white text-blue-700 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-2xl">
                     Get Your Plan Now
                 </button>
             </div>
        </div>
    </section>
)

const Footer = () => (
  <footer className="py-12 px-6 border-t border-slate-800 bg-slate-900 text-slate-400">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-lg font-bold text-white">FitnessPowerHouse</div>
      <div className="flex gap-8">
        <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
      </div>
      <div className="text-sm">© 2025 All rights reserved.</div>
    </div>
  </footer>
)

export default App
