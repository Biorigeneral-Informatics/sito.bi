import { motion } from 'framer-motion';
import { Users, Code, Briefcase, Clock } from 'lucide-react';

const Developers = () => {
  return (
    <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Expert Developers</h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
          Integrate skilled developers into your projects on demand
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass p-6 rounded-2xl"
        >
          <Users className="w-12 h-12 mb-4 text-blue-500" />
          <h2 className="text-2xl font-bold mb-4">Team Integration</h2>
          <p className="text-foreground/70">
            Seamlessly integrate our expert developers into your existing team and workflow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass p-6 rounded-2xl"
        >
          <Code className="w-12 h-12 mb-4 text-green-500" />
          <h2 className="text-2xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-foreground/70">
            Access to developers with extensive experience in modern technologies and best practices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="glass p-6 rounded-2xl"
        >
          <Briefcase className="w-12 h-12 mb-4 text-purple-500" />
          <h2 className="text-2xl font-bold mb-4">Project Management</h2>
          <p className="text-foreground/70">
            Professional project management ensuring smooth collaboration and timely delivery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="glass p-6 rounded-2xl"
        >
          <Clock className="w-12 h-12 mb-4 text-orange-500" />
          <h2 className="text-2xl font-bold mb-4">Flexible Engagement</h2>
          <p className="text-foreground/70">
            Choose the engagement model that works best for your project needs and timeline.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Developers;