
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      className="relative w-full max-w-[100vw] min-h-[85vh] flex flex-col items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative w-full min-h-[85vh] overflow-hidden">
        {/* Split-screen background */}
        <div className="absolute inset-0 w-full h-full flex">
          {/* Left side: Chaotic, blurry world */}
          <div className="w-1/2 h-full bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-opacity-40 bg-black">
              <img 
                src="/lovable-uploads/cf8966e3-de0d-445f-9fbd-ee6c48daa7ff.png" 
                alt="Chaotic world" 
                className="w-full h-full object-cover opacity-60 blur-sm"
              />
            </div>
          </div>
          
          {/* Right side: Focused young leader */}
          <div className="w-1/2 h-full bg-[#0A1A2F] relative overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/lovable-uploads/48e540e5-6a25-44e4-b3f7-80f3bfc2777a.png" 
                alt="Focused leader" 
                className="w-full h-full object-cover opacity-90" 
              />
              
              {/* Virtue grid overlay */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-20">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="border border-[#D4AF37]"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 px-6">
          <div className="max-w-5xl text-center">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight"
            >
              The Future Belongs to the Disciplined
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Taylab equips the next generation with the virtues to lead—not just succeed.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Link to="/framework" className="px-8 py-4 bg-[#D4AF37] text-[#0A1A2F] font-bold rounded-md hover:bg-opacity-90 transition-all flex items-center justify-center group max-w-md mx-auto">
                Explore the Virtue-Talent System
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modern monastic tagline */}
      <div className="w-full bg-white py-16 text-center">
        <p className="text-2xl md:text-3xl font-playfair text-[#0A1A2F] max-w-4xl mx-auto px-6">
          "True leadership isn't taught. It's cultivated."
        </p>
      </div>
    </motion.div>
  );
};

export default Hero;
