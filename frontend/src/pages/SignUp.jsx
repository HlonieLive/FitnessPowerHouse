import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Lock, User, Check, X, Eye, EyeOff } from 'lucide-react'
import { Navbar, Footer } from './Home'

const SignUp = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    const [passwordStrength, setPasswordStrength] = useState(0) // 0-4
    const [emailError, setEmailError] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))

        if (name === 'password') {
            checkStrength(value)
        }
        if (name === 'email') {
             setEmailError('')
        }
    }

    const checkStrength = (pass) => {
        let score = 0
        if (!pass) return setPasswordStrength(0)
        
        if (pass.length > 7) score++
        if (/[A-Z]/.test(pass)) score++
        if (/[0-9]/.test(pass)) score++
        if (/[^A-Za-z0-9]/.test(pass)) score++

        setPasswordStrength(score)
    }

    const getStrengthColor = () => {
        switch (passwordStrength) {
            case 0: return 'bg-slate-700'
            case 1: return 'bg-red-500' 
            case 2: return 'bg-orange-500' 
            case 3: return 'bg-yellow-500' 
            case 4: return 'bg-green-500' 
            default: return 'bg-slate-700'
        }
    }

    const getStrengthText = () => {
         switch (passwordStrength) {
            case 0: return ''
            case 1: return 'Weak'
            case 2: return 'Fair'
            case 3: return 'Good'
            case 4: return 'Strong'
            default: return ''
        }
    }

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(email)
    }

    const isMatch = formData.password && formData.confirmPassword && formData.password === formData.confirmPassword

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (!validateEmail(formData.email)) {
            setEmailError('Please enter a valid email address')
            return
        }

        if (!isMatch) {
            return
        }

        if (passwordStrength < 2) { // Enforce at least fair password
             alert("Please create a stronger password")
             return
        }

        // Handle registration logic here (e.g., API call)
        console.log("Registering:", { ...formData, username: formData.firstName })
        
        // Redirect to Sign In on success
        navigate('/signin')
    }

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-cyan-500 selection:text-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-slate-900">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />
           <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px]" />
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full max-w-lg bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Create Account
            </h2>
            <p className="text-slate-400 mt-2">Start your fitness journey today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">First Name</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        required
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Last Name</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        required
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className={`w-full bg-slate-900/50 border rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${emailError ? 'border-red-500 focus:ring-red-500/50' : 'border-slate-700 focus:ring-cyan-500/50'}`}
                />
              </div>
              {emailError && <p className="text-xs text-red-500 ml-1">{emailError}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 pl-12 pr-12 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors">
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {/* Strength Indicator */}
              {formData.password && (
                  <div className="pt-1">
                      <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-slate-400">Strength</span>
                          <span className={`text-xs font-bold ${passwordStrength === 4 ? 'text-green-500' : passwordStrength === 3 ? 'text-yellow-500' : passwordStrength === 2 ? 'text-orange-500' : 'text-red-500'}`}>
                              {getStrengthText()}
                          </span>
                      </div>
                      <div className="flex gap-1 h-1.5">
                          {[1,2,3,4].map((level) => (
                              <div 
                                key={level}
                                className={`flex-1 rounded-full transition-all duration-300 ${level <= passwordStrength ? getStrengthColor() : 'bg-slate-700'}`}
                              />
                          ))}
                      </div>
                      <ul className="mt-2 space-y-1">
                          {[
                              { label: "At least 8 characters", valid: formData.password.length > 7 },
                              { label: "Contains a number", valid: /[0-9]/.test(formData.password) },
                              { label: "Contains special char", valid: /[^A-Za-z0-9]/.test(formData.password) },
                          ].map((rule, i) => (
                              <li key={i} className="flex items-center gap-2 text-xs text-slate-400">
                                  {rule.valid ? <Check className="w-3 h-3 text-green-500" /> : <div className="w-1 h-1 rounded-full bg-slate-600 ml-1 mr-1" />}
                                  <span className={rule.valid ? 'text-slate-300' : ''}>{rule.label}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full bg-slate-900/50 border rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        formData.confirmPassword && isMatch 
                        ? 'border-green-500/50 focus:ring-green-500/50' 
                        : formData.confirmPassword && !isMatch 
                            ? 'border-red-500/50 focus:ring-red-500/50' 
                            : 'border-slate-700 focus:ring-cyan-500/50'
                    }`}
                />
                {formData.confirmPassword && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        {isMatch ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-red-500" />}
                    </div>
                )}
              </div>
              {formData.confirmPassword && !isMatch && (
                  <p className="text-xs text-red-400 ml-1">Passwords do not match</p>
              )}
            </div>

            <button className="w-full py-3.5 mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
              Sign Up <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-6 text-center text-slate-400 text-sm">
            Already have an account?{' '}
            <Link to="/signin" className="text-cyan-400 hover:text-cyan-300 font-medium">
              Sign In
            </Link>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}

export default SignUp
