import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started with skill exchanges",
      features: [
        "Basic skill matching",
        "Up to 5 active skill exchanges",
        "Text chat with matches",
        "Community access (read-only)",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "per month",
      description: "Enhanced features for serious skill exchangers",
      features: [
        "Advanced AI-based matching",
        "Unlimited skill exchanges",
        "Video calls with matches",
        "Full community access",
        "Verified profile badge",
        "Priority support",
      ],
      cta: "Upgrade Now",
      popular: true,
    },
    {
      name: "Teams",
      price: "$49.99",
      period: "per month",
      description: "For organizations and learning groups",
      features: [
        "All Premium features",
        "Team management dashboard",
        "Group skill sessions",
        "Analytics and reporting",
        "Custom branding",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

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

      <main className="flex-1">
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple, Transparent Pricing
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that's right for your skill exchange journey
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {plans.map((plan, index) => (
                <Card key={index} className={`flex flex-col ${plan.popular ? "border-primary shadow-md" : ""}`}>
                  {plan.popular && (
                    <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground ml-1">{plan.period}</span>}
                    </div>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                      <Link href={plan.name === "Teams" ? "/contact" : "/signup"}>{plan.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto grid gap-6">
                <div className="text-left">
                  <h3 className="font-medium mb-2">Can I cancel my subscription at any time?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can cancel your subscription at any time. Your premium features will remain active until
                    the end of your billing period.
                  </p>
                </div>
                <div className="text-left">
                  <h3 className="font-medium mb-2">What payment methods do you accept?</h3>
                  <p className="text-muted-foreground">We accept all major credit cards, PayPal, and Apple Pay.</p>
                </div>
                <div className="text-left">
                  <h3 className="font-medium mb-2">Is there a free trial for Premium?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer a 14-day free trial for our Premium plan so you can experience all the features before
                    committing.
                  </p>
                </div>
                <div className="text-left">
                  <h3 className="font-medium mb-2">What's the difference between Free and Premium?</h3>
                  <p className="text-muted-foreground">
                    Premium offers advanced matching algorithms, unlimited skill exchanges, video calls, and priority
                    support, while Free provides basic functionality to get started.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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

