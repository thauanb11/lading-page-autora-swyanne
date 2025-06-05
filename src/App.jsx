// ... (seu código anterior)

function App() {
  return (
    // Fundo com gradiente azul e roxo e texto branco
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Navbar com fundo semi-transparente */}
      <nav className="p-6 flex justify-between items-center bg-white bg-opacity-10 backdrop-blur-md shadow-lg">
        <div className="text-2xl font-bold">Swyanne Rodriguez</div>
        <ul className="flex space-x-6">
          {/* Links com hover para cinza claro */}
          <li>
            <a href="#" className="hover:text-gray-200 transition duration-300">
              Início
            </a>
          </li>
          {/* ... outros links */}
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-20 px-4">
        {/* Título azul escuro (mas como o pai é branco, não seria visível, a não ser que o pai não fosse text-white) */}
        <h1 className="text-6xl font-extrabold mb-4 leading-tight">
          Sua Solução Incrível Está Aqui!
        </h1>
        {/* Botão com fundo branco e texto azul primário */}
        <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-blue-100 transition duration-300 transform hover:scale-105">
          Comece Agora!
        </button>
      </header>

      {/* Seção de Recursos */}
      <section className="py-16 px-4 bg-white bg-opacity-20 backdrop-blur-md">
        {/* Título com cor branca */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Recursos Poderosos
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-30 p-6 rounded-lg shadow-xl text-center">
            {/* Título com cor branca */}
            <h3 className="text-2xl font-bold mb-2">Fácil de Usar</h3>
            {/* Parágrafo com texto branco semi-transparente */}
            <p className="text-lg opacity-90">
              Interface intuitiva para todos os usuários.
            </p>
          </div>
          {/* ... outros recursos */}
        </div>
      </section>

      {/* Footer com texto branco semi-transparente */}
      <footer className="p-6 text-center text-white text-opacity-80">
        &copy; 2025 Autora Swyanne Rodriguez. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
