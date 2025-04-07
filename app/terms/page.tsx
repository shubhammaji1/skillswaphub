import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
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
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

          <div className="prose prose-sm max-w-none">
            <p>Last Updated: February 28, 2025</p>

            <h2>1. Introduction</h2>
            <p>
              Welcome to SkillSwapHub. These Terms of Service ("Terms") govern your access to and use of the
              SkillSwapHub website, mobile application, and services (collectively, the "Service"). By accessing or
              using the Service, you agree to be bound by these Terms.
            </p>

            <h2>2. Definitions</h2>
            <p>"User" refers to any individual who accesses or uses the Service.</p>
            <p>
              "Content" refers to any information, text, graphics, photos, or other materials uploaded, downloaded, or
              appearing on the Service.
            </p>

            <h2>3. Eligibility</h2>
            <p>
              You must be at least 18 years old to use the Service. By using the Service, you represent and warrant that
              you are at least 18 years old and have the legal capacity to enter into these Terms.
            </p>

            <h2>4. User Accounts</h2>
            <p>
              To access certain features of the Service, you may be required to create an account. You are responsible
              for maintaining the confidentiality of your account credentials and for all activities that occur under
              your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h2>5. User Conduct</h2>
            <p>You agree not to engage in any of the following prohibited activities:</p>
            <ul>
              <li>Violating any applicable laws or regulations</li>
              <li>Infringing on the intellectual property rights of others</li>
              <li>Harassing, threatening, or intimidating other users</li>
              <li>Posting or sharing inappropriate, offensive, or harmful content</li>
              <li>Attempting to disrupt or compromise the security of the Service</li>
              <li>Using the Service for any illegal or unauthorized purpose</li>
            </ul>

            <h2>6. Skill Exchange</h2>
            <p>
              SkillSwapHub facilitates skill exchanges between users. We do not guarantee the quality, safety, or
              legality of the skills offered or the accuracy of user profiles. Users are solely responsible for their
              interactions with other users and for the content they share during skill exchanges.
            </p>

            <h2>7. Content</h2>
            <p>
              You retain ownership of any Content you submit to the Service. By submitting Content, you grant us a
              worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and
              distribute such Content in connection with the Service.
            </p>

            <h2>8. Privacy</h2>
            <p>
              Our Privacy Policy, available at{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                skillswaphub.com/privacy
              </Link>
              , describes how we collect, use, and share your personal information. By using the Service, you consent to
              the collection and use of your information as described in the Privacy Policy.
            </p>

            <h2>9. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the Service at any time, with or without
              cause, and with or without notice. Upon termination, your right to use the Service will immediately cease.
            </p>

            <h2>10. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
              IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h2>11. Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL SKILLSWAPHUB BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR THE
              SERVICE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE.
            </p>

            <h2>12. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. If we make material changes, we will notify you through the Service
              or by other means. Your continued use of the Service after the changes take effect constitutes your
              acceptance of the modified Terms.
            </p>

            <h2>13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California,
              without regard to its conflict of law provisions.
            </p>

            <h2>14. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:support@skillswaphub.com" className="text-primary hover:underline">
                support@skillswaphub.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t py-6 md:py-10">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-lg">SkillSwapHub</span>
            <p className="text-sm text-muted-foreground">Exchange skills, grow together. © 2025</p>
          </div>
          <div className="flex gap-8">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

