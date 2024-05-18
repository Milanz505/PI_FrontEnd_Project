import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-bold">Pagina inicial</h1>
      <nav>
        <Link href={"/home/cadastro"}>Acesse o portal</Link>
      </nav>
    </main>
  );
}
