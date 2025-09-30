import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Programs() {
  return (
    <section id="programas" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Nuestros Programas Académicos
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Universidad Politécnica Territorial del Medio Ambiente. Formando profesionales comprometidos con la
              excelencia académica y el desarrollo sostenible.
            </p>
            <div className="flex justify-center flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base">
                <Link href="#programas">
                  Explorar Programas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base bg-transparent">
                <Link href="/portal">Portal Estudiantes</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px]">
            <img
              src="/modern-university-campus.png"
              alt="Campus UPTMA"
              className="rounded-lg object-cover w-full h-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
