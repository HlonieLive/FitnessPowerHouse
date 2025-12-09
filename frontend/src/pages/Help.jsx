import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ChevronDown, ChevronUp, MessageCircle, Mail, Phone, FileText } from 'lucide-react'
import { DashboardNavbar } from './Dashboard'
import { Footer } from './Home'

const Help = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      question: "How does the AI Coach work?",
      answer: "Our AI Coach utilizes advanced machine learning algorithms to analyze your workout performance, form (via camera with your permission), and health data. It then generates personalized recommendations, real-time adjustments, and answers your fitness questions 24/7."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, absolutely. You can upgrade, downgrade, or cancel your subscription at any time from your Profile settings. There are no hidden fees or lock-in contracts."
    },
    {
      question: "Is my data private and secure?",
      answer: "We take your privacy seriously. All your health data and video streams are processed locally where possible and encrypted in transit and at rest. We do not sell your personal data to third parties."
    },
    {
      question: "What equipment do I need?",
      answer: "Our programs are designed for various equipment levels. We have bodyweight-only plans, home gym setups (dumbbells/bands), and full commercial gym routines. You can filter programs based on the equipment you have available."
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-cyan-500 selection:text-white flex flex-col">
      <DashboardNavbar />
      
      <div className="flex-grow pt-32 pb-20 px-6 max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
           <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
           <div className="relative max-w-lg mx-auto">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
             <input 
               type="text" 
               placeholder="Search for answers..." 
               className="w-full bg-slate-800 border border-slate-700 rounded-full py-3.5 pl-12 pr-6 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
             />
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
           <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:bg-slate-800 transition-colors cursor-pointer text-center group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="font-bold mb-2">Live Chat</h3>
              <p className="text-sm text-slate-400">Chat with our support team in real-time.</p>
           </div>
           
           <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:bg-slate-800 transition-colors cursor-pointer text-center group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-bold mb-2">Email Support</h3>
              <p className="text-sm text-slate-400">Get a response within 24 hours.</p>
           </div>

           <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:bg-slate-800 transition-colors cursor-pointer text-center group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-bold mb-2">Documentation</h3>
              <p className="text-sm text-slate-400">Detailed guides and tutorials.</p>
           </div>
        </div>

        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, idx) => (
                    <motion.div 
                        key={idx}
                        className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden"
                    >
                        <button 
                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                            className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-800/50 transition-colors"
                        >
                            <span className="font-medium text-lg">{faq.question}</span>
                            {openFaq === idx ? <ChevronUp className="text-cyan-400" /> : <ChevronDown className="text-slate-400" />}
                        </button>
                        <motion.div 
                            initial={false}
                            animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="p-6 bg-white text-slate-900 leading-relaxed font-medium">
                                {faq.answer}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Help
