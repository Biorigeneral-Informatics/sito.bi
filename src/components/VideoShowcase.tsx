import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface VideoShowcaseProps {
    videoId: string;
    startTime?: number;
    title?: string;
    description?: string;
}

const VideoShowcase: React.FC<VideoShowcaseProps> = ({
    videoId,
    startTime = 0,
    title = "Guarda l'Agente in Azione",
    description = "Scopri come i nostri agenti AI vengono sviluppati e integrati nei flussi di lavoro aziendali."
}) => {
    return (
        <section className="py-16 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center p-2 rounded-full bg-red-500/10 text-red-500 mb-4 border border-red-500/20">
                            <Play className="w-4 h-4 mr-2 fill-current" />
                            <span className="text-xs font-bold uppercase tracking-wider">Live Demo</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">{description}</p>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 bg-black/40 backdrop-blur-sm group">
                        {/* Glow effect behind video */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

                        <div className="relative aspect-video w-full">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${videoId}?start=${startTime}&autoplay=0&rel=0&modestbranding=1`}
                                title={title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full rounded-xl"
                            ></iframe>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoShowcase;
