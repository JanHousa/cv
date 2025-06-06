import React, { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-scroll");
          } else {
            entry.target.classList.remove("animate-fade-in-scroll");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section.opacity-0").forEach((el) => {
      observer.observe(el);
    });

    console.log("Observer aktivní – sleduje sekce opakovaně.");

    return () => observer.disconnect(); // cleanup
  }, []);

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-20 animate-fade-in">
       {/* Header */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-6 opacity-0">
        <img
          src="/profile-photo2.jpg"
          alt="Jan Housa"
          className="w-32 h-32 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 border-4 border-white"
        />
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-4xl font-bold text-blue-900">Jan Housa</h1>
          <p className="text-lg text-gray-700">Turnov | 19 let</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-600 mb-1">
            <p>📞 608 268 813</p>
            <a
              href="mailto:honzahousa@gmail.com"
              className="text-blue-700 hover:underline"
            >
              ✉️ honzahousa@gmail.com
            </a>
          </div>
          <p className="text-sm text-gray-800 max-w-md">
            Nadšený mladý vývojář se zájmem o tvorbu multiplatformních aplikací. Rád se učím nové technologie a baví mě celý životní cyklus vývoje – od návrhu a programování přes testování a ladění až po nasazení a prezentaci projektu. Během studia na střední škole jsem si oblíbil .NET ekosystém pro jeho univerzálnost a široké možnosti využití.
          </p>
          <div className="flex justify-center sm:justify-start mt-4 space-x-4">
            <a href="https://github.com/JanHousa" target="_blank" rel="noopener noreferrer">
              <img src="/github-icon.png" alt="GitHub" className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/jan-housa-a33ba219b/" target="_blank" rel="noopener noreferrer">
              <img src="/linkedIn-icon.png" alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
            <button onClick={() => window.print()} title="Tisk" className="hover:scale-110 transition-transform">
              <img src="/print-icon.png" alt="Tisk" className="w-6 h-6" />
            </button>
          </div>

        </div>
      </section>

      {/* Education */}
      <section className="opacity-0">
        <h2 className="text-2xl font-semibold border-b pb-1 mb-6 hover:text-blue-600 transition-colors duration-300">Vzdělání</h2>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <img src="/unicorn-logo.jpg" alt="Unicorn" className="w-12 h-12 rounded shadow-md" />
            <div>
              <h3 className="font-semibold">Unicorn Vysoká škola s.r.o.</h3>
              <p>Softwarový vývoj | nástup říjen 2025 (přijat)</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src="/spse-logo.jpg" alt="SPŠSE Liberec" className="w-12 h-12 rounded shadow-md" />
            <div>
              <h3 className="font-semibold">SPŠSE a VOŠ Liberec 1, Masarykova 3</h3>
              <p>Informační a komunikační technologie | 2021 – 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="opacity-0">
        <h2 className="text-2xl font-semibold border-b pb-1 mb-6 hover:text-blue-600 transition-colors duration-300">Praxe</h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <img src="/skoda-logo.jpg" alt="ŠKODA AUTO" className="w-12 h-12 rounded shadow-md" />
            <div>
              <h3 className="font-semibold">ŠKODA AUTO a.s.</h3>
              <p>Praktikant na oddělení projektového řízení | květen 2024 (3 týdny)</p>
              <p className="text-sm text-gray-700">Vývoj skriptu pro filtrování a zpracování logovacích souborů. Programování VBA maker pro Excel a práce s pokročilými vzorci. Tvorba dokumentace k jednotlivým Excel výpočtům a automatizacím. Stylistické úpravy prezentací v PowerPointu. Účast na firemních poradách a projektových schůzkách.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <img src="/sklostroj-logo.jpg" alt="Sklostroj Turnov" className="w-12 h-12 rounded shadow-md" />
            <div>
              <h3 className="font-semibold">Sklostroj Turnov CZ, s.r.o.</h3>
              <p>Praktikant na IT | květen 2023 (3 týdny)</p>
              <p className="text-sm text-gray-700">Vytvoření WPF nástroje v C# pro převod e-mailových podpisů z Wordu do HTML s podporou více scénářů. </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="opacity-0">
        <h2 className="text-2xl font-semibold border-b pb-1 mb-4 hover:text-blue-600 transition-colors duration-300">Technické znalosti</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>Tvorba moderních webových aplikací</li>
          <li>Práce v ekosystému .NET (C#, MAUI, WPF, ASP.NET, Blazor)</li>
          <li>Vývoj REST API a implementace SignalR pro realtime komunikaci</li>
          <li>Implementace autentizace a autorizace</li>
          <li>Multiplatformní vývoj aplikací pro Windows, Android a iOS</li>
          <li>Práce s databázemi a SQL (návrh struktury, psaní dotazů, manipulace s daty)</li>
          <li>Základní znalost cloudových službeb Microsoft Azure</li>
          <li>Microsoft Office aplikace, zejména Excel (včetně maker a vzorců)</li>
        </ul>
      </section>

      {/* Languages */}
      <section className="opacity-0">
        <h2 className="text-2xl font-semibold border-b pb-1 mb-4 hover:text-blue-600 transition-colors duration-300">Certifikáty</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <img src="/cambridge-logo.png" alt="Cambridge Certificate" className="w-10 h-10 rounded shadow-md" />
            <p>B2 - CAMBRIDGE English</p>
          </div>
          <div className="flex items-center space-x-4">
            <img src="/cisco_logo.jpg" alt="Cisco Certificate" className="w-10 h-10 rounded shadow-md" />
            <p>CCNAv7: Introduction to Networks – Cisco</p>
          </div>
        </div>
      </section>

      {/* Driver's License */}
      <section className="opacity-0">
        <h2 className="text-2xl font-semibold border-b pb-1 mb-4 hover:text-blue-600 transition-colors duration-300">Řidičský průkaz</h2>
        <p>Skupina B – osobní auta</p>
      </section>

      {/* Projects */}
      <section className="opacity-0 print:hidden">
        <h2 className="text-2xl font-semibold border-b pb-1 mb-4 hover:text-blue-600 transition-colors duration-300">Projekty</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => window.open("https://github.com/JanHousa/MP2025-Housa-Jan-P4A", "_blank")}>
            <img src="/projekt1.jpg" alt="Projekt 1" className="w-full aspect-video object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Multiplatformní kvízová aplikace</h3>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">.NET</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">SignalR</span>
                <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded">Azure</span>
                <span className="bg-gray-200 text-gray-900 px-2 py-1 rounded">Maturitní práce</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => window.open("https://github.com/JanHousa/ageofwarReact", "_blank")}>
            <img src="/projekt2.jpg" alt="Projekt 2" className="w-full aspect-video object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Webová strategická 2D hra</h3>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded">React</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Typescript</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => window.open("https://github.com/JanHousa/DrinkWaterApp", "_blank")}>
            <img src="/projekt3.jpg" alt="Projekt 3" className="w-full aspect-video object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Mobilní aplikace pro sledování příjmu tekutin</h3>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Kotlin</span>
                <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded">Android Studio</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => window.open("https://github.com/JanHousa/InvoiceQrCodeApp", "_blank")}>
            <img src="/projekt4.jpg" alt="Projekt 4" className="w-full aspect-video object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Generátor QR kódů pro Excel faktury</h3>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">.NET</span>
                <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded">MAUI</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Excel</span>
              </div>
            </div>
          </div>

          {/* Přidej další projekty stejným způsobem */}
        </div>

        
      </section>
    </main>
  );
}
