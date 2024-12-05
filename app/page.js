import Nav from "./components/Nav";
import UrlGenerator from "./components/UrlGenerator";

export default function Home() {
  return (
    <main className="bg-slate-100 px-2 overflow-x-hidden flex items-center justify-center">
      <div className="w-[500px] h-fit rounded-lg bg-white flex flex-col items-center justify-start">
        <Nav />
        <UrlGenerator />
      </div>
      <p className="absolute bottom-5 font-medium text-xs">Built by Accama</p>
    </main>
  );
}
