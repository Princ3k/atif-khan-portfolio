
import React, { useState, useRef, useEffect } from 'react';

const Travel: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const imageRef = useRef<HTMLDivElement>(null);
  const autoRotateTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const travelStories = [
    {
      image: '/images/IMG_1883.jpeg',
      title: 'Desert Solitude',
      description: 'Wadi Rum taught me stillness. Standing in the vastness of the desert, surrounded by towering rock formations, I found clarity. This is where I think about purpose and intention.',
      location: '🏜️ Wadi Rum, Jordan',
      emoji: '🌅'
    },
    {
      image: '/images/IMG_0838.jpeg',
      title: 'Alpine Heights',
      description: 'The Swiss Alps remind me of ambition. Snow-capped peaks, crisp mountain air, and the beauty of nature at its finest. Mountains keep me grounded while pushing me higher.',
      location: '❄️ Swiss Alps',
      emoji: '🏔️'
    },
    {
      image: '/images/IMG_1472.jpeg',
      title: 'Home & Heritage',
      description: 'Pakistan — where it all began. These valleys and mountains shaped who I am. The warmth of the people, the richness of the culture, and the connection to my roots fuel everything I build.',
      location: '🇵🇰 Pakistan',
      emoji: '🏞️'
    }
  ];

  // Auto-rotate carousel every 15 seconds
  useEffect(() => {
    if (isAutoRotating) {
      autoRotateTimeoutRef.current = setTimeout(() => {
        setActiveImage((prev) => (prev + 1) % travelStories.length);
      }, 15000);
    }

    return () => {
      if (autoRotateTimeoutRef.current) {
        clearTimeout(autoRotateTimeoutRef.current);
      }
    };
  }, [activeImage, isAutoRotating, travelStories.length]);

  // Reset auto-rotate when user manually changes image
  const handleImageChange = (index: number) => {
    setActiveImage(index);
    setIsAutoRotating(true);
  };

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      // Swipe left - next image
      setActiveImage((prev) => (prev + 1) % travelStories.length);
      setIsAutoRotating(true);
    }
    if (isRightSwipe) {
      // Swipe right - previous image
      setActiveImage((prev) => (prev - 1 + travelStories.length) % travelStories.length);
      setIsAutoRotating(true);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setActiveImage((prev) => (prev - 1 + travelStories.length) % travelStories.length);
      setIsAutoRotating(true);
    } else if (e.key === 'ArrowRight') {
      setActiveImage((prev) => (prev + 1) % travelStories.length);
      setIsAutoRotating(true);
    }
  };

  return (
    <section id="travel" className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-center space-y-4 sm:space-y-6 max-w-5xl mx-auto">
        <div className="space-y-2 sm:space-y-3">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Travel & Lifestyle
          </h3>
          <p className="text-lg sm:text-xl text-slate-300">
            ✈️ Airports at sunrise. Mountains at dusk. Coffee shops in foreign cities.
          </p>
        </div>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
          Travel keeps me grounded and inspired. Each journey expands my perspective, grounds me in gratitude, and influences how I build meaningful technology. From airports to mountains, every place teaches me something about the world and myself.
        </p>
      </div>

      {/* Featured Image Section */}
      <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Image with Story */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center mb-12 sm:mb-16">
            {/* Image */}
            <div 
              ref={imageRef}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onKeyDown={handleKeyDown}
              className="relative group overflow-hidden rounded-2xl shadow-2xl cursor-grab active:cursor-grabbing"
              tabIndex={0}
              role="region"
              aria-label="Travel image carousel, use arrow keys or swipe to navigate. Images auto-rotate every 15 seconds."
            >
              <img 
                src={travelStories[activeImage].image} 
                alt={travelStories[activeImage].title}
                className="w-full h-64 sm:h-80 md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                <div className="text-white">
                  <p className="text-xs sm:text-sm font-semibold text-blue-300">{travelStories[activeImage].location}</p>
                </div>
              </div>
              
              {/* Swipe indicators for mobile */}
              <div className="absolute inset-0 flex items-center justify-between pointer-events-none md:hidden">
                <div className="text-white/30 text-xl sm:text-2xl ml-3 sm:ml-4">
                  <i className="fas fa-chevron-left"></i>
                </div>
                <div className="text-white/30 text-xl sm:text-2xl mr-3 sm:mr-4">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>

              {/* Auto-rotate indicator */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/50 backdrop-blur-md px-2 py-1.5 sm:px-2.5 sm:py-2 rounded-full flex items-center justify-center text-white text-xs font-medium">
                <i className="fas fa-sync text-xs animate-spin"></i>
              </div>
            </div>

            {/* Story Content */}
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-3">
                <div className="text-4xl sm:text-5xl">{travelStories[activeImage].emoji}</div>
                <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  {travelStories[activeImage].title}
                </h4>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  {travelStories[activeImage].description}
                </p>
              </div>

              {/* Story Navigation Dots */}
              <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4">
                {travelStories.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleImageChange(idx)}
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                      activeImage === idx 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 w-6 sm:w-8' 
                        : 'bg-slate-600 w-1.5 sm:w-2 hover:bg-slate-500'
                    }`}
                    aria-label={`View story ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Travel Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6 border-t border-slate-700">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-blue-400">15+</p>
                  <p className="text-slate-400 text-xs sm:text-sm">Countries</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-indigo-400">50+</p>
                  <p className="text-slate-400 text-xs sm:text-sm">Flights</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-purple-400">📸</p>
                  <p className="text-slate-400 text-xs sm:text-sm">Stories</p>
                </div>
              </div>
            </div>
          </div>

          {/* Travel Gallery */}
          <div className="space-y-4 sm:space-y-6">
            <h5 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <i className="fas fa-images text-blue-400"></i> Gallery
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {travelStories.map((story, idx) => (
                <div 
                  key={idx}
                  onClick={() => handleImageChange(idx)}
                  className={`relative group cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 h-48 sm:h-56 md:h-64 ${
                    activeImage === idx ? 'ring-2 ring-blue-500 scale-105' : 'hover:scale-105'
                  }`}
                >
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3 sm:p-4">
                    <h6 className="text-white font-bold text-base sm:text-lg">{story.title}</h6>
                    <p className="text-slate-300 text-xs sm:text-sm">{story.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Travel Insights */}
      <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Left: Travel Philosophy */}
          <div className="space-y-4 sm:space-y-6">
            <h5 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <i className="fas fa-lightbulb text-yellow-400"></i> Travel Philosophy
            </h5>
            <div className="space-y-2 sm:space-y-4">
              <div className="bg-slate-700/50 border border-slate-600/50 p-3 sm:p-4 rounded-lg">
                <p className="text-blue-300 font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">🧭 Intention Over Tourism</p>
                <p className="text-slate-300 text-xs sm:text-sm">Travel with purpose. Seek connection, not just photos.</p>
              </div>
              <div className="bg-slate-700/50 border border-slate-600/50 p-3 sm:p-4 rounded-lg">
                <p className="text-indigo-300 font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">🤝 Human Connection</p>
                <p className="text-slate-300 text-xs sm:text-sm">Every place teaches me about people and resilience.</p>
              </div>
              <div className="bg-slate-700/50 border border-slate-600/50 p-3 sm:p-4 rounded-lg">
                <p className="text-purple-300 font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">📍 Local Perspective</p>
                <p className="text-slate-300 text-xs sm:text-sm">I build better when I understand diverse perspectives.</p>
              </div>
              <div className="bg-slate-700/50 border border-slate-600/50 p-3 sm:p-4 rounded-lg">
                <p className="text-pink-300 font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">✈️ Reflection & Growth</p>
                <p className="text-slate-300 text-xs sm:text-sm">Airports and mountains are where I think clearest.</p>
              </div>
            </div>
          </div>

          {/* Right: Instagram Integration */}
          <div className="space-y-4 sm:space-y-6">
            <h5 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <i className="fas fa-camera text-pink-400"></i> Follow the Journey
            </h5>
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/50 p-6 sm:p-8 rounded-xl space-y-3 sm:space-y-4 text-center">
              <div className="space-y-1.5 sm:space-y-2">
                <p className="text-slate-300 text-sm sm:text-base">
                  Get daily updates from my travels, projects, and reflections
                </p>
                <p className="text-xs sm:text-sm text-slate-400">
                  Real-time updates from around the world
                </p>
              </div>
              <a 
                href="https://www.instagram.com/_atifkkhan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold text-sm sm:text-base rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <i className="fab fa-instagram text-sm sm:text-base"></i>
                <span>@_atifkkhan</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform text-xs sm:text-sm"></i>
              </a>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4 border-t border-slate-600">
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-pink-400">1.2K+</p>
                  <p className="text-xs text-slate-400">Followers</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-rose-400">300+</p>
                  <p className="text-xs text-slate-400">Posts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 text-center border-t border-slate-700">
        <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
          <p className="text-slate-400 text-sm sm:text-base">Want to explore the world together or discuss travel tech?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white font-bold text-base sm:text-lg rounded-full hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-110 group"
          >
            <span>Let's Connect</span>
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Travel;
