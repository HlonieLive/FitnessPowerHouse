import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { DashboardNavbar } from './Dashboard'
import { Footer } from './Home'

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            price: "Free",
            features: ["5 Workouts/month", "Basic Pose Detection", "Community Access"],
            cta: "Current Plan",
            active: true
        },
        {
            name: "Pro",
            price: "R299",
            period: "/month",
            features: ["Unlimited Workouts", "Advanced AI Coaching", "Custom Meal Plans", "Priority Support"],
            cta: "Upgrade to Pro",
            recommend: true
        },
        {
            name: "Elite",
            price: "R599",
            period: "/month",
            features: ["1-on-1 Human Coach", "All Pro Features", "Video Form Analysis", "Exclusive Gear"],
            cta: "Get Elite"
        }
    ]

    return (
        <div className="min-h-screen bg-slate-900 text-white selection:bg-cyan-500 selection:text-white flex flex-col">
            <DashboardNavbar />
            
            <div className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Invest in Your Health</h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">Choose the plan that best fits your fitness goals. Cancel anytime.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <motion.div 
                            key={idx}
                            whileHover={{ y: -10 }}
                            className={`relative p-8 rounded-3xl border ${plan.recommend ? 'bg-slate-800 border-cyan-500 shadow-2xl shadow-cyan-500/20' : 'bg-slate-800/50 border-slate-700'} flex flex-col`}
                        >
                            {plan.recommend && (
                                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">RECOMMENDED</span>
                                </div>
                            )}

                            <h3 className="text-xl font-medium text-slate-300 mb-2">{plan.name}</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-extrabold">{plan.price}</span>
                                <span className="text-slate-500">{plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-3 text-slate-300">
                                        <div className="p-1 rounded-full bg-cyan-500/10 text-cyan-400">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.active ? 'bg-slate-700 text-slate-400 cursor-default' : 'bg-white text-slate-900 hover:bg-cyan-50'}`}>
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Pricing
