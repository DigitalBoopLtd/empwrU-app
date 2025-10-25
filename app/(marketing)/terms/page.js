import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - empwrU',
  description: 'empwrU terms of service',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple header */}
      <header className="border-b border-border py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            empwrU
          </Link>
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            Back to Home
          </Link>
        </div>
      </header>

      <div className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-black mb-8 text-foreground">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-xl mb-6 text-foreground/70">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Acceptance of Terms</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                By using empwrU, you agree to these terms of service. If you don't agree, 
                please don't use the app.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Use of Service</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                empwrU is provided as-is for personal use. You may use the app to support 
                your personal growth and wellbeing. The service is free to use and does not 
                require account creation.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Disclaimer</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                empwrU is not a substitute for professional medical, psychological, or 
                therapeutic advice. If you need professional help, please consult a 
                qualified healthcare provider. The app is designed to support personal 
                reflection and habit building, not to diagnose or treat any condition.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Intellectual Property</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                All content, features, and functionality of empwrU are owned by empwrU 
                and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Limitation of Liability</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                empwrU is provided "as is" without warranties of any kind. We are not liable 
                for any damages arising from your use of the app.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Changes to Terms</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We may update these terms from time to time. Continued use of empwrU 
                constitutes acceptance of updated terms. We will notify users of any 
                material changes.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Contact</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                If you have questions about these terms, please contact us through our 
                support channels.
              </p>
            </div>
            
            <div className="bg-muted p-6 rounded-2xl mt-12">
              <p className="text-sm text-foreground/60">
                <em>Note: This is a placeholder terms of service for preview/alpha purposes. 
                Comprehensive terms will be added before public launch.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

