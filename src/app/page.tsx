import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Programs } from "@/components/programs"
import { About } from "@/components/about"
import { Campus } from "@/components/campus"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Programs />
        <About />
        <Campus />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
