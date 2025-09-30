import Link from "next/link"
import { GraduationCap, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8" />
              <span className="text-2xl font-bold">UPTMA</span>
            </div>
            <p className="text-sm text-accent-foreground/80 leading-relaxed">
              Universidad Politécnica Territorial del Medio Ambiente. Formando el futuro de Venezuela.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Programas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Ingeniería Ambiental
                </Link>
              </li>
              <li>
                <Link href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Ingeniería en Informática
                </Link>
              </li>
              <li>
                <Link href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Administración
                </Link>
              </li>
              <li>
                <Link href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Gestión Ambiental
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Universidad</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#nosotros"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#campus"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Campus
                </Link>
              </li>
              <li>
                <Link href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Admisiones
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-sm text-accent-foreground/80">
          <p>&copy; {new Date().getFullYear()} UPTMA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
