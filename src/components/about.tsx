import { Award, Users, Globe, Target } from "lucide-react"
import Image from "next/image"

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
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              width={500}
              height={500}
              src="/imagen3.png"
              alt="Estudiantes UPTMA"
              className="rounded-lg object-cover w-full h-full shadow-xl"
            />
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Sobre UPTMA</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              La Universidad Politécnica Territorial del Medio Ambiente es una institución comprometida con la formación
              integral de profesionales capaces de enfrentar los retos del siglo XXI.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Nuestra misión es proporcionar educación de calidad, promover la investigación y contribuir al desarrollo
              sostenible de nuestra región y país.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="space-y-2">
                    <Icon className="h-8 w-8 text-primary" />
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
