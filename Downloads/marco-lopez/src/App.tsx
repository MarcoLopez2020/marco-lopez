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
import fiseiImage from './assets/fisei.png';
import gadSantaRosaImage from './assets/gad-santa-rosa-logo.png';
import santoLicorImage from './assets/gad-santa-rosa-logo.png';

function App() {
  const sections = useRef<{ [key: string]: HTMLDivElement | null }>({
    home: null,
    about: null,
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
      {/* Navigation */}
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
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
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
          </div>
        </div>
      </section>

      {/* About Section */}
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

     {/* Experience Section */}
<section 
  ref={(el) => sections.current.experience = el}
  className="py-20 bg-gray-50"
>
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12 text-center">Experiencia</h2>
    <div className="max-w-4xl mx-auto space-y-12">
      {/* FISEI Experience */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-2">Departamento de Administración de Redes - FISEI</h3>
        <p className="text-gray-600 mb-4">Febrero 2024 - Julio 2024 | Universidad Técnica de Ambato</p>
        <img src={fiseiImage} alt="FISEI Logo" className="w-40 mb-4"/>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Realicé una revisión integral de la red, inspeccionando y documentando el estado de routers y switches.</li>
          <li>Mantuve computadores y otros equipos de hardware.</li>
          <li>Diseñé, mantuve y mejoré aplicaciones web.</li>
          <li>Realicé un inventario detallado de los activos de la institución.</li>
          <li>Coordiné la entrega de informes detallados sobre las actividades realizadas.</li>
        </ul>
      </div>

      {/* GAD Santa Rosa Experience */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-2">GAD de Santa Rosa - Desarrollador de Sistema de Facturación</h3>
        <p className="text-gray-600 mb-4">Septiembre 2024 - Febrero 2025</p>
        <img src={gadSantaRosaImage} alt="GAD Santa Rosa Logo" className="w-40 mb-4"/>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Desarrollé un sistema de facturación completo utilizando PHP y HTML.</li>
          <li>Implementé integración con la API del SRI.</li>
          <li>Desarrollé funcionalidades para creación de facturas electrónicas y seguimiento de pagos.</li>
          <li>Colaboré en la integración con herramientas de gestión interna.</li>
        </ul>
      </div>

      {/* Santo Licor Experience */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-2">Santo Licor - Desarrollador de Modelos de Machine Learning</h3>
        <p className="text-gray-600 mb-4">Febrero 2024 - Julio 2024</p>
        <img src={santoLicorImage} alt="Santo Licor Logo" className="w-40 mb-4"/>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Desarrollé y entrené modelos de redes neuronales para predicción de ventas.</li>
          <li>Implementé técnicas de preprocesamiento de datos y validación cruzada.</li>
          <li>Optimicé estrategias de inventario y promoción.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Projects Section */}
<section 
  ref={(el) => sections.current.projects = el}
  className="py-20 bg-white"
>
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12 text-center">Proyectos</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-3">CI-CD DAS</h3>
        <p className="text-gray-600 mb-4">Pruebas de integración continua y despliegue continuo.</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">HTML</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">JavaScript</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">CI/CD</span>
        </div>
        <a href="https://github.com/MarcoLopez2020/CI-CD_DAS" target="_blank" className="text-blue-500 mt-4 inline-block">Ver Proyecto</a>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-3">Introducción a TresJS</h3>
        <p className="text-gray-600 mb-4">Introducción a proyectos en 3D con TresJS.</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">JavaScript</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">Three.js</span>
        </div>
        <a href="https://github.com/MarcoLopez2020/intro_tresJS" target="_blank" className="text-blue-500 mt-4 inline-block">Ver Proyecto</a>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-3">Reconocimiento Facial IA</h3>
        <p className="text-gray-600 mb-4">Proyecto de reconocimiento facial basado en IA.</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">Python</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">OpenCV</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">Machine Learning</span>
        </div>
        <a href="https://github.com/MarcoLopez2020/reconocimiento_facial_IA" target="_blank" className="text-blue-500 mt-4 inline-block">Ver Proyecto</a>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-3">Mercury</h3>
        <p className="text-gray-600 mb-4">Sistema desarrollado en Node.js para la gestión de proyectos.</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">Node.js</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">JavaScript</span>
        </div>
        <a href="https://github.com/SebasTix02/Mercury" target="_blank" className="text-blue-500 mt-4 inline-block">Ver Proyecto</a>
      </div>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section 
        ref={(el) => sections.current.skills = el}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Habilidades</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <Code2 size={40} className="text-blue-600 mb-2" />
                <span>Python</span>
              </div>
              <div className="flex flex-col items-center">
                <FileCode size={40} className="text-orange-600 mb-2" />
                <span>HTML5</span>
              </div>
              <div className="flex flex-col items-center">
                <Cpu size={40} className="text-blue-500 mb-2" />
                <span>CSS3</span>
              </div>
              <div className="flex flex-col items-center">
                <Database size={40} className="text-green-600 mb-2" />
                <span>MySQL/PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center">
                <Brain size={40} className="text-purple-600 mb-2" />
                <span>Machine Learning</span>
              </div>
              <div className="flex flex-col items-center">
                <GitBranch size={40} className="text-gray-700 mb-2" />
                <span>Git</span>
              </div>
              <div className="flex flex-col items-center">
                <Cloud size={40} className="text-blue-400 mb-2" />
                <span>AWS</span>
              </div>
              <div className="flex flex-col items-center">
                <Server size={40} className="text-purple-500 mb-2" />
                <span>Heroku</span>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Frameworks y Librerías</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Django', 'Flask', 'Bootstrap', 'Keras', 'TensorFlow', 'PyTorch', 'NumPy', 'Pandas'].map((framework) => (
                  <div key={framework} className="bg-white p-3 rounded-lg shadow-sm text-center">
                    {framework}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={(el) => sections.current.contact = el}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Contacto</h2>
          <div className="max-w-2xl mx-auto flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="text-gray-600" size={24} />
              <a href="alucardooxd@gmail.com" className="text-blue-600 hover:text-blue-800">
               alucardooxd@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-gray-600" size={24} />
              <a href="tel:+593123456789" className="text-blue-600 hover:text-blue-800">
                +593 12 345 6789
              </a>
            </div>
            <div className="flex space-x-6">
              <a href="www.linkedin.com/in/marco-lópez-98736b163" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <Linkedin size={32} />
              </a>
              <a href="https://github.com/MarcoLopez2020" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                <Github size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
