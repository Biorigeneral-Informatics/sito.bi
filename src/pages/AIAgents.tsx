import { motion } from 'framer-motion';
import { Brain, Cpu, LineChart, Workflow } from 'lucide-react';

const AIAgents = () => {
  return (
    <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Agents</h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
          Intelligent automation solutions powered by advanced AI technology
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass p-6 rounded-2xl"
        >
          <Brain className="w-12 h-12 mb-4 text-purple-500" />
          <h2 className="text-2xl font-bold mb-4">Intelligent Automation</h2>
          <p className="text-foreground/70">
            Automate complex business processes with AI agents that learn and adapt to your specific needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass p-6 rounded-2xl"
        >
          <Cpu className="w-12 h-12 mb-4 text-blue-500" />
          <h2 className="text-2xl font-bold mb-4">Machine Learning</h2>
          <p className="text-foreground/70">
            Leverage advanced machine learning algorithms to analyze data and make intelligent decisions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="glass p-6 rounded-2xl"
        >
          <LineChart className="w-12 h-12 mb-4 text-green-500" />
          <h2 className="text-2xl font-bold mb-4">Predictive Analytics</h2>
          <p className="text-foreground/70">
            Forecast trends and make data-driven decisions with our AI-powered analytics solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="glass p-6 rounded-2xl"
        >
          <Workflow className="w-12 h-12 mb-4 text-orange-500" />
          <h2 className="text-2xl font-bold mb-4">Process Optimization</h2>
          <p className="text-foreground/70">
            Optimize your workflows with intelligent agents that continuously improve operations.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AIAgents;