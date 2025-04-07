import {
  Users,
  MessageSquare,
  Calendar,
  Video,
  Star,
  Shield,
} from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "AI-Based Matching",
      description:
        "Get connected with ideal skill-swap partners through our intelligent matching system.",
    },
    {
      icon: MessageSquare,
      title: "Real-time Chat",
      description:
        "Talk instantly with your partners using our built-in chat system.",
    },
    {
      icon: Video,
      title: "Video Sessions",
      description:
        "Host live video calls for a more personal and effective exchange.",
    },
    {
      icon: Calendar,
      title: "Easy Scheduling",
      description:
        "Coordinate sessions easily with our flexible scheduling tools.",
    },
    {
      icon: Star,
      title: "Community & Reviews",
      description:
        "Grow your reputation through community feedback and ratings.",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description:
        "Your privacy and data are safeguarded with top-tier security.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Features That Empower Your Learning
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Everything you need to exchange skills effectively and build meaningful connections.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border shadow-sm bg-background hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-primary to-blue-500 mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
