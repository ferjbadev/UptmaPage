import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, FileText, User, LogOut } from "lucide-react"
import Link from "next/link"

const subjects = [
  { name: "Cálculo I", grade: 18, credits: 4, status: "Aprobada" },
  { name: "Química General", grade: 16, credits: 4, status: "Aprobada" },
  { name: "Introducción a la Ingeniería", grade: 19, credits: 3, status: "Aprobada" },
  { name: "Física I", grade: 15, credits: 4, status: "Aprobada" },
  { name: "Programación I", grade: 17, credits: 4, status: "Aprobada" },
]

const currentSubjects = [
  { name: "Cálculo II", schedule: "Lun-Mie 8:00-10:00", professor: "Dr. García" },
  { name: "Física II", schedule: "Mar-Jue 10:00-12:00", professor: "Dra. Martínez" },
  { name: "Programación II", schedule: "Lun-Mie 2:00-4:00", professor: "Ing. Rodríguez" },
  { name: "Ecología", schedule: "Vie 8:00-12:00", professor: "Dra. López" },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">UPTMA</span>
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Juan Pérez</span>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/portal">
                  <LogOut className="h-5 w-5" />
                  <span className="sr-only">Cerrar sesión</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Portal del Estudiante</h1>
          <p className="text-muted-foreground">Bienvenido, Juan Pérez - Ingeniería Ambiental</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Promedio General</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">17.0</div>
              <p className="text-xs text-muted-foreground">Escala 1-20</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Créditos Aprobados</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">45</div>
              <p className="text-xs text-muted-foreground">De 180 totales</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Semestre Actual</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">3ro</div>
              <p className="text-xs text-muted-foreground">2024-1</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Materias Actuales</CardTitle>
              <CardDescription>Semestre 2024-1</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentSubjects.map((subject, index) => (
                  <div
                    key={index}
                    className="flex flex-col space-y-1 pb-4 border-b border-border last:border-0 last:pb-0"
                  >
                    <div className="font-semibold text-foreground">{subject.name}</div>
                    <div className="text-sm text-muted-foreground">{subject.schedule}</div>
                    <div className="text-sm text-muted-foreground">{subject.professor}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historial de Calificaciones</CardTitle>
              <CardDescription>Materias aprobadas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subjects.map((subject, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between pb-4 border-b border-border last:border-0 last:pb-0"
                  >
                    <div className="space-y-1">
                      <div className="font-semibold text-foreground">{subject.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {subject.credits} créditos • {subject.status}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary">{subject.grade}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
