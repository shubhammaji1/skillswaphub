import { CheckCircle } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description:
        "Sign up and list the skills you can teach and the skills you want to learn.",
    },
    {
      number: "02",
      title: "Get Matched",
      description:
        "Our AI system will find people who are looking for your skills and can teach what you want to learn.",
    },
    {
      number: "03",
      title: "Schedule Sessions",
      description:
        "Arrange convenient times for your skill exchange sessions using our scheduling tool.",
    },
    {
      number: "04",
      title: "Exchange Skills",
      description:
        "Teach and learn through our platform using chat, video calls, or in-person meetings.",
    },
    {
      number: "05",
      title: "Rate & Review",
      description:
        "After each session, leave feedback to help build a trusted community.",
    },
  ]

  return (
    <section id ="how-it-works" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            How SkillSwapHub Works
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
            A simple, step-by-step process to start exchanging skills and knowledge.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 md:space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row items-start md:items-center gap-4 p-6 rounded-xl border bg-background shadow-sm transition hover:shadow-md hover:scale-[1.01]"
            >
              {/* Number Circle */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-primary to-blue-500 text-white font-semibold text-sm">
                {step.number}
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>

              {/* Icon */}
              <CheckCircle className="hidden md:block h-6 w-6 text-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
