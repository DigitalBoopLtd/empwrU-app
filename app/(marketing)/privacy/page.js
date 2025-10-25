import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - empwrU',
  description: 'empwrU privacy policy and data practices',
};

export default function PrivacyPage() {
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
          <h1 className="text-5xl font-black mb-8 text-foreground">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-xl mb-6 text-foreground/70">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Your Privacy Matters</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                empwrU is built with privacy at its core. All your data stays on your device. 
                We don't collect, store, or share any personal information.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">What We Don't Collect</h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-foreground/80">
                <li>No personal information</li>
                <li>No goals or habits data</li>
                <li>No chat history</li>
                <li>No tracking or analytics</li>
                <li>No cookies (except essential ones for functionality)</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Local Storage Only</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                All your data is stored locally on your device using browser storage. 
                If you clear your browser data, your empwrU data will be deleted. We have no 
                access to this data, and it never leaves your device.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Your Control</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                You are in complete control of your data. You can:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-foreground/80">
                <li>Delete all your data at any time from the app settings</li>
                <li>Export your data for backup purposes</li>
                <li>Use the app without creating an account</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Third-Party Services</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                empwrU does not use third-party analytics, advertising, or tracking services. 
                Your experience is completely private.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Questions?</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                If you have any questions about our privacy practices, please contact us.
              </p>
            </div>
            
            <div className="bg-muted p-6 rounded-2xl mt-12">
              <p className="text-sm text-foreground/60">
                <em>Note: This is a placeholder privacy policy for preview/alpha purposes. 
                A comprehensive privacy policy will be added before public launch.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

