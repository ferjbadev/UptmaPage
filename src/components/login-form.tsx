import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Transforma tu futuro en <span className="text-primary">UPTMA</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Universidad Politécnica Territorial del Medio Ambiente. Formando profesionales comprometidos con la
              excelencia académica y el desarrollo sostenible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
