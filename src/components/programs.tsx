import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MotionDiv } from "./motion"

export function Programs() {
  return (
    <section id="programas" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <MotionDiv
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
          </MotionDiv>
          <MotionDiv
            className="relative h-[800px] lg:h-[800px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              width={800}
              height={800}
              src="/imagen2.png"
              alt="Campus UPTMA"
              className="rounded-lg object-cover w-full h-full shadow-2xl"
            />
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
