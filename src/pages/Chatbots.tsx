// src/pages/Chatbots.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, Users, Zap, Shield, Globe, BarChart, MessageCircle, CheckCircle } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Chatbots = () => {
  const features = [
    {
      title: "Natural Conversations",
      description: "AI-powered chatbots that understand context and maintain natural, engaging conversations",
      icon: <MessageSquare className="w-12 h-12 text-blue-500" />
    },
    {
      title: "24/7 Support",
      description: "Provide round-the-clock customer support with intelligent chatbots that never sleep",
      icon: <Users className="w-12 h-12 text-green-500" />
    },
    {
      title: "Quick Resolution",
      description: "Resolve customer queries instantly with intelligent response systems and knowledge bases",
      icon: <Zap className="w-12 h-12 text-purple-500" />
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability for all your conversational AI needs",
      icon: <Shield className="w-12 h-12 text-orange-500" />
    }
  ];

  const benefits = [
    "Reduce support costs by up to 70%",
    "Increase customer satisfaction by 35%",
    "Handle over 80% of common queries automatically",
    "Seamless integration with your existing platforms",
    "Multilingual support for global audiences",
    "Analytics dashboards for continuous improvement"
  ];

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

      {/* Main Features Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + (index * 0.1) }}
            className="glass p-6 rounded-2xl"
          >
            <div className="mb-4">{feature.icon}</div>
            <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
            <p className="text-foreground/70">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Benefits Section */}
      <ScrollAnimation animation="fadeIn" className="mb-16">
        <div className="glass p-8 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">Transform Your Customer Experience</h2>
              <p className="text-foreground/70 mb-6">
                Our AI chatbots leverage the latest in natural language processing and machine learning to create 
                seamless, human-like conversational experiences that delight customers and streamline operations.
              </p>
              
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="glass p-6 rounded-xl mb-4 bg-blue-500/5">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                    <MessageCircle className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="font-bold">BioriBot</div>
                </div>
                <p className="text-sm">
                  Hello! I'm BioriBot, your AI assistant. How can I help you today?
                </p>
              </div>
              
              <div className="glass p-6 rounded-xl mb-4 bg-green-500/5 ml-8">
                <p className="text-sm">
                  I need information about your chatbot integration options.
                </p>
              </div>
              
              <div className="glass p-6 rounded-xl bg-blue-500/5">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                    <MessageCircle className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="font-bold">BioriBot</div>
                </div>
                <p className="text-sm">
                  We offer seamless integration with websites, mobile apps, WhatsApp, Facebook Messenger, and more. 
                  Would you like me to explain the setup process for any specific platform?
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Key Applications */}
      <ScrollAnimation animation="slideUp" className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Key Applications</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Customer Support",
              description: "Handle inquiries, troubleshoot issues and provide instant assistance 24/7",
              icon: <Users className="w-10 h-10 text-blue-500" />
            },
            {
              title: "E-commerce",
              description: "Guide customers through product selection, answer questions and process orders",
              icon: <BarChart className="w-10 h-10 text-green-500" />
            },
            {
              title: "Internal Operations",
              description: "Automate HR queries, IT support and administrative tasks for your employees",
              icon: <Globe className="w-10 h-10 text-purple-500" />
            }
          ].map((app, index) => (
            <div key={index} className="glass p-6 rounded-xl text-center">
              <div className="inline-flex items-center justify-center mb-4">
                {app.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{app.title}</h3>
              <p className="text-foreground/70 text-sm">{app.description}</p>
            </div>
          ))}
        </div>
      </ScrollAnimation>

      {/* Implementation Process */}
      <ScrollAnimation animation="fadeIn" className="mb-16">
        <div className="glass p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Simple Implementation Process</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Discovery", description: "We analyze your needs and design the optimal chatbot solution" },
              { step: 2, title: "Development", description: "Our team builds and trains your custom AI chatbot" },
              { step: 3, title: "Integration", description: "Seamless implementation with your existing platforms" },
              { step: 4, title: "Optimization", description: "Continuous improvement based on real-world interactions" }
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">{step.step}</span>
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-foreground/70 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation animation="fadeIn">
        <div className="glass p-10 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Customer Engagement?</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our AI chatbot solutions can transform your customer experience and streamline your operations.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:translate-y-[-2px] shadow-lg"
            >
              Request a Demo
            </Link>
            
            <Link
              to="/products"
              className="px-6 py-3 border border-primary/30 text-foreground hover:bg-primary/10 rounded-lg transition-all"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Chatbots;