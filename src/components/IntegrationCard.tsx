import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Clock, Award, ChevronDown, ArrowRight } from 'lucide-react';
import { Integration } from '../data/integrationsData';

interface IntegrationCardProps {
    integration: Integration;
    isExpanded: boolean;
    onToggle: () => void;
    colorClass: string;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({
    integration,
    isExpanded,
    onToggle,
    colorClass
}) => {
    // Extract color value from class name (simplified approximation for border/text)
    // Assuming colorClass is like "text-red-500"
    const baseColor = colorClass.replace('text-', '').replace('-500', '');

    return (
        <motion.div
            layout
            className={`glass rounded-xl overflow-hidden border transition-all duration-300 ${isExpanded
                    ? `border-${baseColor}-500/50 bg-white/5`
                    : `border-white/5 hover:border-${baseColor}-500/30 hover:bg-white/5`
                }`}
        >
            <motion.div
                layout="position"
                className="p-5 cursor-pointer"
                onClick={onToggle}
            >
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center backdrop-blur-sm">
                            <img
                                src={integration.logo}
                                alt={`${integration.name} logo`}
                                className="w-full h-full object-contain opacity-90"
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white">{integration.name}</h4>
                            <p className="text-sm text-gray-400 line-clamp-1">{integration.shortDescription}</p>
                        </div>
                    </div>
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`p-1 rounded-full ${isExpanded ? 'bg-white/10' : ''}`}
                    >
                        <ChevronDown className={`w-5 h-5 ${colorClass}`} />
                    </motion.div>
                </div>

                {/* Metrica in evidenza (sempre visibile ma più dettagliata se espansa) */}
                {!isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 flex items-center text-xs font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full w-fit"
                    >
                        <CheckCircle className="w-3 h-3 mr-1.5" />
                        {integration.metrics}
                    </motion.div>
                )}
            </motion.div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5 border-t border-white/5"
                    >
                        <div className="pt-4 space-y-4">
                            <p className="text-sm text-gray-300 leading-relaxed">
                                {integration.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {integration.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start text-xs text-gray-400">
                                        <div className={`mt-0.5 mr-2 min-w-[4px] h-1 rounded-full bg-${baseColor}-500`} />
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-white/5">
                                <div className="flex items-center text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg">
                                    <Clock className="w-3 h-3 mr-1.5 text-blue-400" />
                                    Setup: <span className="text-white ml-1">{integration.setupTime}</span>
                                </div>
                                <div className="flex items-center text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg">
                                    <Award className="w-3 h-3 mr-1.5 text-yellow-400" />
                                    <span className="text-white">{integration.certification}</span>
                                </div>
                                <div className="flex items-center text-xs font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-lg ml-auto">
                                    <CheckCircle className="w-3 h-3 mr-1.5" />
                                    {integration.metrics}
                                </div>
                            </div>

                            <div className="pt-2">
                                <button className={`text-xs font-semibold ${colorClass} flex items-center hover:underline`}>
                                    Vedi case study completo <ArrowRight className="w-3 h-3 ml-1" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default IntegrationCard;
