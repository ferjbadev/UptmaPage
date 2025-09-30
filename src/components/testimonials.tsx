import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { SimpleAvatar } from "@/components/ui/simple-avatar"

const testimonials = [
  {
    name: "María González",
    program: "Ingeniería Ambiental",
    image: "/professional-woman-portrait.png",
    quote:
      "UPTMA me brindó las herramientas necesarias para desarrollarme profesionalmente. Hoy trabajo en proyectos de conservación ambiental que impactan positivamente a mi comunidad.",
  },
  {
    name: "Carlos Rodríguez",
    program: "Ingeniería en Informática",
    image: "/professional-man-portrait.png",
    quote:
      "La calidad académica y el apoyo de los profesores fueron fundamentales en mi formación. Ahora lidero un equipo de desarrollo en una empresa tecnológica internacional.",
  },
  {
    name: "Ana Martínez",
    program: "Administración",
    image: "/professional-woman-smiling.png",
    quote:
      "Los conocimientos adquiridos en UPTMA me permitieron emprender mi propio negocio. La universidad no solo forma profesionales, forma líderes con visión social.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Historias de Éxito</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conoce las experiencias de nuestros egresados que están transformando el mundo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="flex justify-center">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>
                <p className="text-muted-foreground leading-relaxed">{testimonial.quote}</p>
                <div className="flex flex-col items-center gap-2 pt-4">
                  <SimpleAvatar 
                    src={testimonial.image} 
                    fallback={testimonial.name.split(" ").map(n => n[0]).join("")} 
                    className="mx-auto"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.program}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
