import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import logo from '@/assets/empwrU-logomark-white.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
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
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#mission" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#approach" className="text-foreground hover:text-primary transition-colors">
            Approach
          </Link>
          <Button asChild>
            <Link href="#hero">Join Waitlist</Link>
          </Button>
        </div>

        {/* Mobile menu - simplified for MVP */}
        <div className="md:hidden flex items-center gap-2">
          <Button asChild size="sm">
            <Link href="#hero">Join Waitlist</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

