import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <strong className="text-3xl text-pink-500">404</strong>
      <p className="text-lg leading-relaxed tracking-wide text-gray-700">
        Ah não, essa página não foi encontrada em nossa aplicação.
      </p>
      <Link to="/" className="bg-pink-500 text-white rounded-xl px-6 py-2 text-xs hover:brightness-90 transition-all">Voltar</Link>
    </div>
  );
}
