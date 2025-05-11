
import { MessageSquare } from 'lucide-react';
import { useState } from 'react';

const FloatingContactButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <button
      className="fixed bottom-8 right-8 bg-[#D4AF37] text-[#0A1A2F] w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:shadow-xl z-50 overflow-hidden group"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Contact us"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <MessageSquare 
          className={`transition-all ${isHovered ? 'scale-0' : 'scale-100'}`} 
          size={24} 
        />
        <span 
          className={`whitespace-nowrap absolute transition-all text-sm font-semibold ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
        >
          Contact Us
        </span>
      </div>
    </button>
  );
};

export default FloatingContactButton;
