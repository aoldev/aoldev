import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Website?</h2>
        <p className="text-xl mb-8">Start engaging your visitors with AI-powered conversations today.</p>
        <div className="space-x-4">
          <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 transition-transform transform hover:scale-105 focus:scale-105">
            Get Started Free
            </Button>
          <Button size="lg" variant="outline" className="bg-white text-purple-600 hover:bg-gray-100 transition-transform transform hover:scale-105 focus:scale-105">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}

