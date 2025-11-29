import React, { useState, useMemo, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

// Memoizzazione del componente video card
const VideoCard = React.memo(({ video, index, isCenter, onSelect }: {
  video: Video;
  index: number;
  isCenter: boolean;
  onSelect: (video: Video) => void;
}) => (
  <button
    onClick={() => onSelect(video)}
    className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 transform cursor-pointer ${
      isCenter ? 'md:scale-105 md:shadow-2xl' : 'hover:scale-105'
    }`}
    aria-label={`Play video: ${video.title}`}
  >
    <img
      src={video.thumbnail}
      alt={video.title}
      className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
      <div className="bg-red-600 rounded-full p-4 transform group-hover:scale-125 transition-transform duration-300">
        <Play size={32} className="text-white fill-white" />
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4">
      <p className="text-white font-semibold text-sm">{video.title}</p>
    </div>
  </button>
));

VideoCard.displayName = 'VideoCard';

const YouTubeCommunity: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const videos: Video[] = useMemo(() => [
    {
      id: 'FF1uI7xdNzQ',
      title: 'Video Tutorial 1',
      thumbnail: 'https://img.youtube.com/vi/FF1uI7xdNzQ/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=FF1uI7xdNzQ&t=62s',
    },
    {
      id: '1972U599P-M',
      title: 'Video Tutorial 2',
      thumbnail: 'https://img.youtube.com/vi/1972U599P-M/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=1972U599P-M&t=1566s',
    },
    {
      id: 'n6m2A94gBzk',
      title: 'Video Tutorial 3',
      thumbnail: 'https://img.youtube.com/vi/n6m2A94gBzk/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=n6m2A94gBzk&t=142s',
    },
    {
      id: 'LO8fYzdb6ak',
      title: 'Video Tutorial 4',
      thumbnail: 'https://img.youtube.com/vi/LO8fYzdb6ak/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=LO8fYzdb6ak&t=187s',
    },
    {
      id: 'WCHzr4V-ApU',
      title: 'Video Tutorial 5',
      thumbnail: 'https://img.youtube.com/vi/WCHzr4V-ApU/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=WCHzr4V-ApU&t=391s',
    },
    {
      id: 'AIxtpTsp2Yc',
      title: 'Video Tutorial 6',
      thumbnail: 'https://img.youtube.com/vi/AIxtpTsp2Yc/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=AIxtpTsp2Yc&t=156s',
    },
  ], []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  }, [videos.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  }, [videos.length]);

  const visibleVideos = useMemo(() => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(videos[(currentSlide + i) % videos.length]);
    }
    return visible;
  }, [currentSlide, videos]);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          {/* Header with subscriber count */}
          <div className="text-center mb-16">
            {/* Subscriber count highlight */}
            <div className="flex justify-center mb-6">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur-2xl opacity-30" />
                <div className="relative bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 rounded-3xl shadow-2xl">
                  <p className="text-4xl md:text-5xl font-black text-white">1.5K+</p>
                  <p className="text-sm md:text-base text-red-100 font-semibold mt-1">Iscritti</p>
                </div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Unisciti alla Nostra Community
            </h2>

            {/* Description */}
            <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
              Entra a far parte della nostra community e scopri il modello AI Agency con Federico,
              co-founder e full stack developer di Biorigeneral Informatics. Guarda i nostri video tutorial
              su YouTube per apprendere come integriamo l'intelligenza artificiale nei nostri progetti
              di sviluppo software e consulenza specializzata.
            </p>
          </div>
        </ScrollAnimation>

        {/* Videos Slider */}
        <div className="relative mt-16">
          <ScrollAnimation>
            <div className="flex items-center justify-center gap-4">
              {/* Previous button */}
              <button
                onClick={prevSlide}
                className="absolute left-0 z-10 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-900 dark:text-white"
                aria-label="Previous video"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Videos grid */}
              <div className="w-full px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {visibleVideos.map((video, index) => (
                    <VideoCard
                      key={video.id}
                      video={video}
                      index={index}
                      isCenter={index === 1}
                      onSelect={setSelectedVideo}
                    />
                  ))}
                </div>
              </div>

              {/* Next button */}
              <button
                onClick={nextSlide}
                className="absolute right-0 z-10 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-900 dark:text-white"
                aria-label="Next video"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Slider indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? 'w-8 h-3 bg-red-500'
                      : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          </ScrollAnimation>

          {/* CTA Button */}
          <div className="flex justify-center mt-12">
            <a
              href="https://www.youtube.com/@biorigeneral-informatics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Iscriviti al Canale
            </a>
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors"
              >
                <X size={24} className="text-white" />
              </button>

              {/* YouTube iframe */}
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default YouTubeCommunity;
