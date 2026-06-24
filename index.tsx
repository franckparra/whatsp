import { Smartphone, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="w-20 h-20 rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-6 border border-green-400/30">
          <Smartphone className="w-10 h-10 text-green-400" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">
          Whats Personas
        </h1>
        <p className="text-green-200/80 text-sm mb-8 leading-relaxed">
          Chat com personas sintéticas. Adicione à tela inicial do celular para acessar como um app com a foto da persona como ícone.
        </p>

        <a
          href="/maria.html"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-green-600/30"
        >
          <span>Maria Clara</span>
          <ExternalLink className="w-4 h-4" />
        </a>

        <p className="text-green-300/50 text-xs mt-6">
          Abra no celular para testar o botão "📱 Instalar"
        </p>
      </div>
    </div>
  );
};

export default Index;