import { motion } from 'framer-motion';
import { MessageSquare, Users, Zap, Shield } from 'lucide-react';

const Chatbots = () => {
  return (
    <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Chatbots</h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
          Advanced conversational AI solutions for enhanced customer engagement
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass p-6 rounded-2xl"
        >
          <MessageSquare className="w-12 h-12 mb-4 text-blue-500" />
          <h2 className="text-2xl font-bold mb-4">Natural Conversations</h2>
          <p className="text-foreground/70">
            AI-powered chatbots that understand context and maintain natural, engaging conversations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass p-6 rounded-2xl"
        >
          <Users className="w-12 h-12 mb-4 text-green-500" />
          <h2 className="text-2xl font-bold mb-4">24/7 Support</h2>
          <p className="text-foreground/70">
            Provide round-the-clock customer support with intelligent chatbots that never sleep.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="glass p-6 rounded-2xl"
        >
          <Zap className="w-12 h-12 mb-4 text-purple-500" />
          <h2 className="text-2xl font-bold mb-4">Quick Resolution</h2>
          <p className="text-foreground/70">
            Resolve customer queries instantly with intelligent response systems and knowledge bases.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="glass p-6 rounded-2xl"
        >
          <Shield className="w-12 h-12 mb-4 text-orange-500" />
          <h2 className="text-2xl font-bold mb-4">Secure & Reliable</h2>
          <p className="text-foreground/70">
            Enterprise-grade security and reliability for all your conversational AI needs.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Chatbots;