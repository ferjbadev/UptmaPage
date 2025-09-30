import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MotionDiv } from "./motion"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-5 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <MotionDiv
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl text-center lg:text-7xl font-bold text-balance leading-tight">
              Transforma tu futuro en <span className="text-primary">UPTMA</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-center text-pretty leading-relaxed">
              Universidad Politécnica Territorial del Medio Ambiente. Formando profesionales comprometidos con la
              excelencia académica y el desarrollo sostenible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </MotionDiv>
          <MotionDiv
            className="relative h-[400px] lg:h-[500px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              width={500}
              height={500}
              src="/imagen1.png"
              alt="Campus UPTMA"
              className="rounded-lg object-cover w-full h-full shadow-2xl"
            />
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
