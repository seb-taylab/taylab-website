
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", 
        isScrolled ? "bg-white shadow-sm" : "bg-[#0A1A2F]"
      )} 
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/7d120ee6-3614-4b75-9c35-716d54490d67.png" 
                alt="Taylab Logo" 
                className={cn("h-8 w-auto", isScrolled ? "" : "brightness-0 invert")} 
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Our Framework
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/framework" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">The 9 Virtues</div>
                          <p className="text-sm text-gray-500">Explore our character-driven leadership model</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/superpower-gate" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Super-Power Gate</div>
                          <p className="text-sm text-gray-500">Unlock your leadership potential</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/case-studies" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Case Studies</div>
                          <p className="text-sm text-gray-500">See our framework in action</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    For Families
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/families/children" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Ages 6-12</div>
                          <p className="text-sm text-gray-500">Planting the seeds of virtue</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/families/teens" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Ages 13-18</div>
                          <p className="text-sm text-gray-500">Awakening the architect</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    For Institutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/institutions/schools" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Schools</div>
                          <p className="text-sm text-gray-500">Virtue-enhanced transcripts</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/institutions/organizations" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Impact Organizations</div>
                          <p className="text-sm text-gray-500">Legacy leader fellowships</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    The Taylab Method
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/method/process" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Process</div>
                          <p className="text-sm text-gray-500">Our three-step development system</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/method/assessments" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Assessments</div>
                          <p className="text-sm text-gray-500">How we measure virtue growth</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/manifesto">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Manifesto
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        "md:hidden transition-all duration-300 overflow-hidden w-full", 
        isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className={cn("px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-sm", isScrolled ? "bg-white" : "bg-[#0A1A2F]")}>
          <div className="block">
            <button 
              onClick={e => {
                e.preventDefault();
                const submenu = e.currentTarget.nextElementSibling;
                if (submenu) {
                  submenu.classList.toggle('hidden');
                }
              }} 
              className={cn(
                "flex w-full justify-between items-center px-3 py-2 rounded-md", 
                isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900"
              )}
            >
              <span>Our Framework</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            
            <div className="hidden ml-4 mt-1 space-y-1">
              <Link 
                to="/framework" 
                className={cn(
                  "block px-3 py-2 rounded-md", 
                  isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900"
                )}
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                The 9 Virtues
              </Link>
              <Link 
                to="/superpower-gate" 
                className={cn(
                  "block px-3 py-2 rounded-md", 
                  isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900"
                )}
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                Super-Power Gate
              </Link>
              <Link 
                to="/case-studies" 
                className={cn(
                  "block px-3 py-2 rounded-md", 
                  isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900"
                )}
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                Case Studies
              </Link>
            </div>
          </div>
          
          {/* More mobile menu items would go here, following the same pattern */}
          <Link 
            to="/manifesto" 
            className={cn(
              "block px-3 py-2 rounded-md", 
              isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900"
            )}
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Manifesto
          </Link>
          
          <Link 
            to="/contact" 
            className={cn(
              "block px-3 py-2 rounded-md", 
              isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900"
            )}
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
