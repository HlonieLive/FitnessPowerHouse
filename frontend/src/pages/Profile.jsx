import { useRef, useState } from 'react'
import { User, Mail, Shield, CreditCard, Bell, Camera, ChevronUp, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { DashboardNavbar } from './Dashboard'
import { Footer } from './Home'

const Profile = () => {
  const fileInputRef = useRef(null)
  const [avatar, setAvatar] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const handleAvatarClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setAvatar(imageUrl)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-cyan-500 selection:text-white flex flex-col">
      <DashboardNavbar />
      
      <div className="flex-grow pt-32 px-6 max-w-4xl mx-auto w-full pb-20">
        <h1 className="text-3xl font-bold mb-8">Account Settings</h1>

        <div className="grid gap-8">
            {/* Profile Card */}
            <div className="p-8 bg-slate-800/50 border border-slate-700/50 rounded-3xl backdrop-blur-sm flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div 
                   className="relative group cursor-pointer"
                   onClick={handleAvatarClick}
                >
                    <input 
                       type="file" 
                       ref={fileInputRef} 
                       className="hidden" 
                       accept="image/*"
                       onChange={handleFileChange}
                    />
                    
                    {avatar ? (
                        <div className="w-24 h-24 rounded-full p-[3px] bg-gradient-to-tr from-cyan-500 to-blue-600">
                           <img src={avatar} alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-slate-900" />
                        </div>
                    ) : (
                        <div className="w-24 h-24 rounded-full bg-slate-700 flex items-center justify-center border-4 border-slate-800 text-slate-400 text-3xl font-bold">
                            JD
                        </div>
                    )}
                    
                    <div className="absolute bottom-0 right-0 p-2 bg-cyan-500 rounded-full text-slate-900 border-4 border-slate-900 hover:scale-110 transition-transform shadow-lg group-hover:bg-cyan-400">
                        <Camera className="w-4 h-4" />
                    </div>
                </div>
                
                <div className="flex-grow text-center md:text-left">
                    <h2 className="text-2xl font-bold">John Doe</h2>
                    <p className="text-slate-400">Fitness Enthusiast • Member since 2024</p>
                    <div className="flex gap-4 mt-4 justify-center md:justify-start">
                         <button onClick={handleAvatarClick} className="px-5 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm font-medium transition-colors">Change Avatar</button>
                         <button 
                            onClick={() => setIsEditing(!isEditing)} 
                            className={`px-5 py-2 rounded-lg border text-sm font-medium transition-colors flex items-center gap-2 ${isEditing ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400' : 'border-slate-600 hover:border-cyan-500/50'}`}
                         >
                            Edit Details
                            {isEditing ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                         </button>
                    </div>
                </div>
            </div>

            {/* Forms Section */}
            <AnimatePresence>
                {isEditing && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="p-8 bg-slate-800/50 border border-slate-700/50 rounded-3xl backdrop-blur-sm space-y-6">
                            <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
                                <User className="text-cyan-400" />
                                <h3 className="text-xl font-bold">Personal Information</h3>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400">First Name</label>
                                    <input type="text" defaultValue="John" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400">Last Name</label>
                                    <input type="text" defaultValue="Doe" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-medium text-slate-400">Email Address</label>
                                     <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input type="email" defaultValue="john.doe@example.com" className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
                                     </div>
                                </div>
                            </div>

                            <div className="flex justify-end pt-4">
                                <button 
                                    onClick={() => setIsEditing(false)}
                                    className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl transition-colors"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

             {/* Settings Items */}
             <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-800/30 border border-slate-700/30 rounded-2xl hover:bg-slate-800/50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                            <CreditCard className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <h4 className="font-bold">Billing & Plans</h4>
                            <p className="text-sm text-slate-400">Manage your subscription</p>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-slate-800/30 border border-slate-700/30 rounded-2xl hover:bg-slate-800/50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
                            <Bell className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                            <h4 className="font-bold">Notifications</h4>
                            <p className="text-sm text-slate-400">Manage alert preferences</p>
                        </div>
                    </div>
                </div>

                 <div className="p-6 bg-slate-800/30 border border-slate-700/30 rounded-2xl hover:bg-slate-800/50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                            <Shield className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                            <h4 className="font-bold">Security</h4>
                            <p className="text-sm text-slate-400">Update password & 2FA</p>
                        </div>
                    </div>
                </div>
             </div>
        </div>
      </div>

       <div className="mt-auto">
          <Footer />
       </div>
    </div>
  )
}

export default Profile
