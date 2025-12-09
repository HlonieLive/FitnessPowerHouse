import { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Activity, User, LogOut, Settings, CreditCard, Dumbbell, LayoutDashboard, HelpCircle, Zap } from 'lucide-react'
import { Footer } from './Home'

const DashboardNavbar = () => {
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path

  const linkClasses = (path) => `flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${isActive(path) ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-slate-300 hover:text-cyan-400'}`

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/dashboard" className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-lg group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300">
              <Activity className="w-4 h-4 text-cyan-400 fill-current" />
            </div>
            <span className="text-lg font-heading font-black text-white tracking-wide">
              Fitness<span className="text-cyan-400">PowerHouse</span>
            </span>
        </Link>
        <div className="hidden md:flex items-center gap-4 font-medium text-sm">
          <Link to="/dashboard" className={linkClasses('/dashboard')}>
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </Link>
          <Link to="/pricing" className={linkClasses('/pricing')}>
            <CreditCard className="w-4 h-4" /> Plans
          </Link>
          <Link to="/profile" className={linkClasses('/profile')}>
            <User className="w-4 h-4" /> Profile
          </Link>
          <Link to="/help" className={linkClasses('/help')}>
            <HelpCircle className="w-4 h-4" /> Help
          </Link>
        </div>
        <div className="flex items-center gap-4">
           <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 p-[2px]">
             <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
               <span className="font-bold text-xs text-white">JD</span>
             </div>
           </div>
           <Link to="/" className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors">
             <LogOut className="w-5 h-5" />
           </Link>
        </div>
      </div>
    </nav>
  )
}

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-cyan-500 selection:text-white flex flex-col">
      <DashboardNavbar />
      
      <div className="pt-32 px-6 max-w-7xl mx-auto w-full flex-grow">
        {/* Welcome Section */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Welcome back, John!</h1>
            <p className="text-slate-400 mt-2">Here's your daily fitness summary.</p>
          </div>
          <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl transition-colors hidden md:block">
            Start Workout
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-3xl backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 cursor-default">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                 <Activity className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">+12%</span>
            </div>
            <div className="text-3xl font-bold mb-1">1,240</div>
            <div className="text-slate-400 text-sm">Calories Burned</div>
          </div>
          
          <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-3xl backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 cursor-default">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-purple-500/10 rounded-xl">
                 <Dumbbell className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-sm font-medium text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">Level 5</span>
            </div>
            <div className="text-3xl font-bold mb-1">45 min</div>
            <div className="text-slate-400 text-sm">Active Duration</div>
          </div>

          <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-3xl backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 cursor-default">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-orange-500/10 rounded-xl">
                 <Activity className="w-6 h-6 text-orange-400" />
              </div>
              <span className="text-sm font-medium text-slate-400">Streak</span>
            </div>
            <div className="text-3xl font-bold mb-1">12 Days</div>
            <div className="text-slate-400 text-sm">Keep it up!</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Main Chart Area */}
          <div className="lg:col-span-2 p-8 bg-slate-800/30 border border-slate-700/50 rounded-3xl h-96 flex flex-col justify-center items-center text-center hover:bg-slate-800/50 transition-colors duration-300">
             <div className="w-full h-full bg-gradient-to-t from-cyan-500/5 to-transparent rounded-2xl flex items-end justify-center pb-10 gap-4">
               {/* Mock Chart Bars */}
               {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                 <div key={i} className="w-8 bg-slate-700 hover:bg-cyan-500 transition-colors rounded-t-lg relative group" style={{ height: `${h}%` }}>
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-700">
                      {h} mins
                    </div>
                 </div>
               ))}
             </div>
             <p className="text-slate-400 mt-4 text-sm font-medium">Weekly Activity Overview</p>
          </div>

          {/* Next Workout Card */}
          <div className="p-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl text-white relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 shadow-xl hover:shadow-cyan-500/20">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-10 -translate-y-10" />
             
             <h3 className="text-xl font-bold mb-2">Next Up</h3>
             <h2 className="text-3xl font-black mb-6">Upper Body<br/>Power</h2>
             
             <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-cyan-100">
                   <div className="w-1 h-1 bg-white rounded-full" />
                   45 Minutes
                </div>
                <div className="flex items-center gap-3 text-cyan-100">
                   <div className="w-1 h-1 bg-white rounded-full" />
                   Intermediate
                </div>
             </div>

             <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-colors">
               Start Now
             </button>
          </div>
        </div>
      </div>

       <div className="mt-auto">
           <Footer />
       </div>
    </div>
  )
}

export { DashboardNavbar }
export default Dashboard
