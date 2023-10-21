import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function PageNotFound() {
  const navigate = useNavigate()
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <strong className="text-3xl text-pink-500">404</strong>
      <p className="text-lg leading-relaxed tracking-wide text-gray-700">
        Ah não, essa página não foi encontrada em nossa aplicação.
      </p>
      <Button onClick={() => navigate(-1)} size="small">Voltar</Button>
    </div>
  );
}
