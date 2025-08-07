export default function Contact() {
  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-2xl font-semibold mb-4 text-sky-700">Contato</h2>
      <p className="mb-6 text-lg">
        Fique à vontade para entrar em contato comigo por e-mail ou pelas redes sociais abaixo:
      </p>
      <ul className="space-y-3 text-base">
        <li>Email: <span className="text-rose-600">gustavo.silva@email.com</span></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/gustavosilvamartins" className="text-blue-600 underline">linkedin.com/in/gustavosilvamartins</a></li>
        <li>GitHub: <a href="https://github.com/gustavosilvamartins" className="text-blue-600 underline">github.com/gustavosilvamartins</a></li>
      </ul>
    </section>
  );
}
