import Image from 'next/image';
import { Button } from '@/components/ui/button';
import logo from '@/assets/empwrU-logomark-white.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-sunrise flex items-center justify-center p-2">
            <Image 
              src={logo} 
              alt="empwrU" 
              width={24} 
              height={24}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <span className="text-2xl font-bold text-primary">empwrU</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#mission" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#approach" className="text-foreground hover:text-primary transition-colors">
            Approach
          </a>
          <Button asChild>
            <a href="#hero">Join Waitlist</a>
          </Button>
        </div>

        {/* Mobile menu - simplified for MVP */}
        <div className="md:hidden flex items-center gap-2">
          <Button asChild size="sm">
            <a href="#hero">Join Waitlist</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}

