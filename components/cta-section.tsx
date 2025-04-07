import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-blue-50 via-white to-indigo-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 drop-shadow-md">
              Ready to Start Exchanging Skills?
            </h2>
            <p className="max-w-2xl text-lg md:text-xl text-gray-600 mx-auto">
              Join our vibrant community and unlock a new world of collaborative learning.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/signup">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-tr from-primary to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:brightness-105 transition"
              >
                Sign Up Now
              </Button>
            </Link>
            <Link href="/explore">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 transition"
              >
                Explore Skills
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
