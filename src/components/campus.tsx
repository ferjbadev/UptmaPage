import { Card, CardContent } from "@/components/ui/card"
import { MotionDiv } from "./motion"

const facilities = [
  {
    title: "Aulas con Profesores cheveres",
    description: "Acceso a miles de recursos académicos y bases de datos especializadas",
    image: "/imagen7.jpg",
  },
  {
    title: "Clases con maestros Jedi",
    description: "Instalaciones equipadas con el poder de la fuerza",
    image: "/imagen5.jpg",
  },
  {
    title: "Campus Conectado",
    description: "WiFi de alta velocidad en todas las áreas del campus",
    image: "/imagen7.png",
  },
  {
    title: "Áreas Comunes",
    description: "Espacios diseñados para el estudio y la convivencia estudiantil",
    image: "/imagen4.png",
  },
]

export function Campus() {
  return (
    <section id="campus" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <MotionDiv
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Nuestras Instalaciones</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Un campus moderno diseñado para potenciar tu aprendizaje y desarrollo profesional
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => {
            return (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className="relative h-48">
                    <img
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3 text-center">
                    <h3 className="text-xl font-semibold text-foreground">{facility.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{facility.description}</p>
                  </CardContent>
                </Card>
              </MotionDiv>
            )
          })}
        </div>
      </div>
    </section>
  )
}
