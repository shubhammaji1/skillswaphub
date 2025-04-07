import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Graphic Designer",
      content:
        "SkillSwapHub helped me improve my coding skills by connecting me with a developer who wanted to learn design. It's a win-win exchange that saved us both money and built a great friendship.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      content:
        "I've been teaching programming and learning photography through SkillSwapHub. The platform makes scheduling and video sessions so easy, and I've made meaningful connections with people around the world.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Language Teacher",
      content:
        "As a language teacher, I found SkillSwapHub to be the perfect platform to exchange my Spanish knowledge for piano lessons. The matching algorithm is impressively accurate!",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            What Our Users Say
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
            Join thousands of people already exchanging skills on SkillSwapHub.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-xl border bg-background shadow-sm hover:shadow-md transition"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/50 shadow-sm">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
