import React, { useRef } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { 
  Code2, 
  FileCode, 
  Cpu, 
  Database, 
  GitBranch, 
  Cloud, 
  Server,
  Brain,
  BarChart,
  Code,
  Monitor
} from 'lucide-react';
import image from './assets/f1.jpg';

function App() {
  const sections = useRef<{ [key: string]: HTMLDivElement | null }>({
    home: null,
    about: null,
    education: null,
    experience: null,
    projects: null,
    skills: null,
    contact: null,
  });

  const scrollToSection = (sectionName: string) => {
    sections.current[sectionName]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navegación */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">Marco López</span>
            <div className="hidden md:flex space-x-8">
              {Object.keys(sections.current).map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-600 hover:text-blue-600 capitalize"
                >
                  {section === 'home' ? 'Inicio' : section === 'about' ? 'Sobre mí' : section === 'education' ? 'Educación' : section === 'experience' ? 'Experiencia' : section === 'projects' ? 'Proyectos' : 'Contacto'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Sección de Inicio */}
      <section 
        ref={(el) => sections.current.home = el}
        className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src={image}
              alt="Marco López"
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-4xl font-bold mb-4">¡Bienvenido a mi portafolio!</h1>
            <p className="text-xl text-gray-600 mb-6">
              Soy Marco López, un apasionado desarrollador de software dedicado a crear soluciones innovadoras y funcionales.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Explora mi trabajo, proyectos y habilidades en esta página. Estoy comprometido con el aprendizaje continuo y siempre abierto a nuevas oportunidades para colaborar.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <Linkedin size={32} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                <Github size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Educación */}
      <section
        ref={(el) => sections.current.education = el}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Mi Educación</h2>
          <div className="space-y-8">
            <div className="education-item">
              <h3 className="text-2xl font-semibold">Universidad Técnica de Ambato - FISEI</h3>
              <p>Graduado como Ingeniero en Software</p>
              <img src="https://github.com/MarcoLopez2020/marco-lopez/blob/main/Downloads/marco-lopez/src/assets/uta.jpg" alt="Logo UTA" className="education-image" />
            </div>
            <div className="education-item">
              <h3 className="text-2xl font-semibold">Participaciones en Congresos</h3>
              <p>Certificado de Asistencia</p>
              <img src="https://github.com/MarcoLopez2020/marco-lopez/blob/main/Downloads/marco-lopez/src/assets/c2.jpg" alt="Certificado Asistencia" className="education-image" />
              <p>Certificado de Culminación</p>
              <img src="https://github.com/MarcoLopez2020/marco-lopez/blob/main/Downloads/marco-lopez/src/assets/c2.jpg" alt="Certificado Culminación" className="education-image" />
            </div>
            <div className="education-item">
              <h3 className="text-2xl font-semibold">Cursos Adicionales</h3>
              <p>Cursé un curso de Técnico en Business Analytics</p>
              <img src="https://github.com/MarcoLopez2020/marco-lopez/blob/main/Downloads/marco-lopez/src/assets/c1.jpg" alt="Certificado Business Analytics" className="education-image" />
              <p>Cursé un curso de Curador de Datos</p>
              <img src="https://github.com/MarcoLopez2020/marco-lopez/blob/main/Downloads/marco-lopez/src/assets/c3.jpg" alt="Certificado Curador de Datos" className="education-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Sobre mí */}
      <section 
        ref={(el) => sections.current.about = el}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Sobre Mí</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              ¡Hola! Soy Marco López, un desarrollador de software apasionado por la tecnología y la innovación. Me especializo en crear soluciones prácticas que abordan problemas reales utilizando tecnologías modernas como Python, React y Flask.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Mi misión es diseñar aplicaciones de alto impacto que no solo sean funcionales, sino también intuitivas y eficientes. Estoy constantemente aprendiendo nuevas herramientas y metodologías para estar a la vanguardia en el desarrollo de software.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              En mi tiempo libre, me gusta explorar nuevas tecnologías, colaborar en proyectos interesantes y compartir conocimiento con otros desarrolladores.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Experiencia */}
      <section 
        ref={(el) => sections.current.experience = el}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Experiencia</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Experiencia FISEI */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Departamento de Administración de Redes - FISEI</h3>
              <p className="text-gray-600 mb-4">Febrero 2024 - Julio 2024 | Universidad Técnica de Ambato</p>
              <img src="https://github.com/MarcoLopez2020/marco-lopez/blob/main/Downloads/marco-lopez/src/assets/fisei.png" alt="FISEI Logo" className="w-40 mb-4"/>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Realicé una revisión integral de la red, inspeccionando y documentando el estado de routers y switches.</li>
                <li>Mantuve computadores y otros equipos de hardware.</li>
                <li>Diseñé, mantuve y mejoré aplicaciones web.</li>
                <li>Realicé un inventario detallado de los activos de la institución.</li>
                <li>Coordiné la entrega de informes detallados sobre las actividades realizadas.</li>
              </ul>
            </div>

            {/* Experiencia GAD Santa Rosa */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">GAD de Santa Rosa - Desarrollador de Sistema de Facturación</h3>
              <p className="text-gray-600 mb-4">Septiembre 2024 - Febrero 2025</p>
              <img src="https://github.com/MarcoLopez2020/marco-lopez/blob/main/Downloads/marco-lopez/src/assets/gad.png" alt="GAD Logo" className="w-40 mb-4"/>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Diseñé y desarrollé un sistema de facturación para GAD de Santa Rosa, optimizando la gestión de datos fiscales.</li>
                <li>Automatización de la generación de reportes y facturación en línea.</li>
                <li>Mejoré la infraestructura de la base de datos para un manejo más eficiente de la información.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Proyectos */}
      <section 
        ref={(el) => sections.current.projects = el}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Proyectos</h2>
          <div className="space-y-8">
            {/* Proyecto 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Sistema de Gestión de Proyectos</h3>
              <p className="text-gray-600 mb-4">Desarrollado con React y Node.js</p>
              <p className="text-lg text-gray-600 mb-6">
                Un sistema integral para la gestión de proyectos dentro de una empresa, con capacidades de asignación de tareas, visualización de avances y reportes.
              </p>
            </div>
            {/* Proyecto 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Aplicación de Gestión de Inventarios</h3>
              <p className="text-gray-600 mb-4">Desarrollado con Python y Flask</p>
              <p className="text-lg text-gray-600 mb-6">
                Esta aplicación permite realizar un seguimiento del inventario de productos, con funciones para agregar, editar, eliminar y consultar productos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section
        ref={(el) => sections.current.contact = el}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Contacto</h2>
          <div className="max-w-lg mx-auto">
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-semibold">Correo Electrónico</label>
              <input 
                type="email" 
                id="email"
                className="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="alucardooxd@gmail.com"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
