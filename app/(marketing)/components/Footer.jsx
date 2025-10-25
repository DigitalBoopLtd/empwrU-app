import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/empwrU-logomark-white.png';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-foreground text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-sunrise flex items-center justify-center p-2">
                <Image 
                  src={logo} 
                  alt="empwrU" 
                  width={24} 
                  height={24}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold">empwrU</h3>
            </div>
            <p className="text-white/70">
              Growth begins with U — real words, real women, real change.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#mission" className="text-white/70 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#approach" className="text-white/70 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <Link href="/get-started" className="text-white/70 hover:text-white transition-colors">
                  Get Started
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-white/70 hover:text-white transition-colors">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Waitlist Signup */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-xl font-bold mb-2">Join the Waitlist</h4>
            <p className="text-white/70 mb-4">
              Be the first to know when empwrU launches
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 mt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} empwrU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

