import { Award, Users, Globe, Target } from "lucide-react"
import Image from "next/image"
import { MotionDiv } from "./motion"

const stats = [
  { icon: Users, value: "5,000+", label: "Estudiantes" },
  { icon: Award, value: "25+", label: "Años de Experiencia" },
  { icon: Globe, value: "15+", label: "Convenios Internacionales" },
  { icon: Target, value: "95%", label: "Empleabilidad" },
]

export function About() {
  return (
    <section id="nosotros" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <MotionDiv
            className="relative h-[400px] lg:h-[500px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              width={500}
              height={500}
              src="/imagen3.png"
              alt="Estudiantes UPTMA"
              className="rounded-lg object-cover w-full h-full shadow-xl"
            />
          </MotionDiv>

          <MotionDiv
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl text-center font-bold">Sobre UPTMA</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed text-pretty">
              La Universidad Politécnica Territorial del Medio Ambiente es una institución comprometida con la formación
              integral de profesionales capaces de enfrentar los retos del siglo XXI.
            </p>
            <p className="text-lg text-muted-foreground text-center leading-relaxed text-pretty">
              Nuestra misión es proporcionar educación de calidad, promover la investigación y contribuir al desarrollo
              sostenible de nuestra región y país.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="space-y-2 text-center sm:text-left">
                    <div className="flex justify-center sm:justify-start">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
