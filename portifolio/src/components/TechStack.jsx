import techIcons from '../data/techIcons';

export default function Technologies() {
  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-2xl font-semibold mb-4 text-sky-700">Sobre Mim</h2>
      <p className="mb-6 text-lg">
        Sou um desenvolvedor júnior apaixonado por tecnologia e qualidade de software. Tenho experiência com tecnologias modernas focadas em desenvolvimento web.
      </p>

      <h3 className="text-xl font-semibold mb-4 text-sky-700">Tecnologias que utilizo:</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {Object.entries(techIcons).map(([tech, icon], index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-3 flex flex-col items-center text-center text-xs font-medium border border-rose-100 hover:shadow-lg transition"
          >
            <img src={icon} alt={tech} className="w-8 h-8 mb-2" />
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}
