import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Contáctanos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            ¿Tienes preguntas? Estamos aquí para ayudarte en tu camino hacia la educación superior
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nombre Completo
                    </label>
                    <Input id="name" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Correo Electrónico
                    </label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Teléfono
                    </label>
                    <Input id="phone" type="tel" placeholder="+58 412 1234567" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Mensaje
                    </label>
                    <Textarea id="message" placeholder="¿En qué podemos ayudarte?" rows={4} />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Dirección</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Av. Principal, Sector Universitario
                    <br />
                    Ciudad, Estado, Venezuela
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                  <p className="text-muted-foreground">+58 (212) 123-4567</p>
                  <p className="text-muted-foreground">+58 (412) 765-4321</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">info@uptma.edu.ve</p>
                  <p className="text-muted-foreground">admisiones@uptma.edu.ve</p>
                </div>
              </div>
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Horario de Atención</h3>
                <div className="space-y-1 text-sm">
                  <p>Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                  <p>Sábados: 9:00 AM - 1:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
