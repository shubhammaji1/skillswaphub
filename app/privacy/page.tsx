import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              SkillSwapHub
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/explore" className="text-sm font-medium hover:text-primary">
              Explore
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="/community" className="text-sm font-medium hover:text-primary">
              Community
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container py-10">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4 text-gray-700">
          At SkillSwapHub, your privacy is a top priority. This Privacy Policy outlines how we collect,
          use, and protect your personal information.
        </p>
        <p className="mb-4 text-gray-700">
          We only collect data necessary for providing and improving your experience on our platform.
          Your data is never sold or shared with third parties without your consent.
        </p>
        <p className="mb-4 text-gray-700">
          If you have any questions or concerns about our privacy practices, please contact our support team.
        </p>
      </main>

      {/* Footer */}
      <footer className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SkillSwapHub. All rights reserved.
      </footer>
    </div>
  );
}
