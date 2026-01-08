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

    console.log("Observer aktivní – opakované sledování sekcí.");

    return () => observer.disconnect(); // úklid
  }, []);

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-20 animate-fade-in">
      {/* Hlavička */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <img
          src="/pfp_blackandwhite2.jpg"
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
          <p className="text-sm text-gray-800 max-w">
            Nadšený mladý vývojář se zájmem o tvorbu multiplatformních aplikací. Rád se učím nové technologie a baví mě celý životní cyklus vývoje – od návrhu a programování přes testování a ladění až po nasazení a prezentaci projektu. Během studia na střední škole jsem si oblíbil .NET ekosystém pro jeho univerzálnost a široké možnosti využití.
          </p>
          <div className="flex justify-center sm:justify-start mt-4 space-x-4">
            <a
              href="https://github.com/JanHousa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/github-icon.png"
                alt="GitHub"
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jan-housa-a33ba219b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/linkedIn-icon.png"
                alt="LinkedIn"
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </a>
            <button
              onClick={() => window.print()}
              title="Tisk"
              className="hover:scale-110 transition-transform"
            >
              <img src="/print-icon.png" alt="Tisk" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Vzdělání */}
      <section>
        <h2 className="text-2xl font-semibold border-b pb-1 mb-6 hover:text-blue-600 transition-colors duration-300">
          Vzdělání
        </h2>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <img
              src="/unicorn-logo.jpg"
              alt="Unicorn"
              className="w-12 h-12 rounded shadow-md"
            />
            <div>
              <h3 className="font-semibold">Unicorn University</h3>
              <p>Softwarový vývoj  | 2025 – 2028</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/spse-logo.jpg"
              alt="SPŠSE Liberec"
              className="w-12 h-12 rounded shadow-md"
            />
            <div>
              <h3 className="font-semibold">
                SPŠSE a VOŠ Liberec 1, Masarykova 3
              </h3>
              <p>Informační a komunikační technologie | 2021 – 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pracovní zkušenosti */}
      <section>
        <h2 className="text-2xl font-semibold border-b pb-1 mb-6 hover:text-blue-600 transition-colors duration-300">
          Pracovní zkušenosti
        </h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <img
              src="/avl_logo.jpg"
              alt="ŠKODA AUTO"
              className="w-12 h-12 rounded shadow-md"
            />
            <div>
              <h3 className="font-semibold">AVL Czech Republic s.r.o.</h3>
              <p>Stážista na oddělení vývoje baterií do EV | 2025 prosinec - dnes</p>
              <p className="text-sm text-gray-700">
                V rámci časově flexibilní stáže se seznamuji s vývojem a fungováním automobilového průmyslu z praktické stránky.
                
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <img
              src="/skoda-logo.jpg"
              alt="ŠKODA AUTO"
              className="w-12 h-12 rounded shadow-md"
            />
            <div>
              <h3 className="font-semibold">ŠKODA AUTO a.s.</h3>
              <p>IT povinná praxe na SŠ | 2024 (3 týdny)</p>
              <p className="text-sm text-gray-700">
                Vývoj skriptu pro filtrování a zpracování logovacích souborů.
                Programování VBA maker v Excelu a práce s pokročilými vzorci.
                
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <img
              src="/sklostroj-logo.jpg"
              alt="Sklostroj Turnov"
              className="w-12 h-12 rounded shadow-md"
            />
            <div>
              <h3 className="font-semibold">Sklostroj Turnov CZ, s.r.o.</h3>
              <p>IT povinná praxe na SŠ | 2023 (3 týdny)</p>
              <p className="text-sm text-gray-700">
                Vytvoření WPF nástroje v jazyce C# pro převod e-mailových
                podpisů z Wordu do HTML s podporou více scénářů. 
                Tuto stáž jsem si moc užil, jelikož jsem si uvědomil, jak rychle se člověk dokáže
                zlepšit v programování, když má při sobě zkušeného mentora.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dovednosti */}
      <section>
        <h2 className="text-2xl font-semibold border-b pb-1 mb-4 hover:text-blue-600 transition-colors duration-300">
          Technické dovednosti
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>Tvorba moderních webových aplikací</li>
          <li>Práce v ekosystému .NET (C#, MAUI, WPF, ASP.NET, Blazor)</li>
          <li>Vývoj REST API a implementace SignalR pro realtime komunikaci</li>
          <li>Implementace autentizace a autorizace</li>
          <li>Multiplatformní vývoj aplikací pro Windows, Android a iOS</li>
          <li>Práce s databázemi a SQL (návrh struktury, psaní dotazů, manipulace s daty)</li>
          <li>Základní znalost cloudových službeb Microsoft Azure</li>
          <li>Pokročilá práce s kancelářskými nástroji, zejména Excel</li>
          <li>Microsoft Office aplikace, zejména Excel</li>
          <li>Zkušenosti s programováním Arduino a hardware prototypováním</li>
        </ul>
      </section>

      {/* Certifikáty */}
      <section>
        <h2 className="text-2xl font-semibold border-b pb-1 mb-4 hover:text-blue-600 transition-colors duration-300">
          Certifikáty
        </h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src="/cambridge-logo.png"
              alt="Cambridge certifikát"
              className="w-10 h-10 rounded shadow-md"
            />
            <p>B2 – CAMBRIDGE English</p>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/cisco_logo.jpg"
              alt="Cisco certifikát"
              className="w-10 h-10 rounded shadow-md"
            />
            <p>CCNAv7: Introduction to Networks – Cisco</p>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/cisco_logo.jpg"
              alt="Cisco certifikát"
              className="w-10 h-10 rounded shadow-md"
            />
            <p>CCNA: Switching, Routing, and Wireless Essentials – Cisco</p>
          </div>
        </div>
      </section>



{/* Projekty */}
<section className="print:hidden">
  <h2 className="text-2xl font-semibold border-b pb-1 mb-6 hover:text-blue-600 transition-colors duration-300">
    Projekty
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

    {/* Projekt 1 – B2B */}
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <img
        src="/projekt5.jpg"
        alt="B2B řešení na míru"
        className="w-full aspect-video object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">
          B2B řešení na míru
        </h3>

        <p className="text-sm text-gray-600 mb-3">
          Komplexní řešení pro velkoobchodní prodej zahrnující správu produktů,
          objednávek a zákazníků. Systém se skládá ze dvou aplikací: mobilní
          aplikace v .NET MAUI pro Android a webové administrační části postavené
          na ASP.NET Razor Pages. Projekt není open-source z důvodu obchodního
          tajemství.
        </p>

        <div className="flex flex-wrap gap-2 text-xs">
          <span className="px-2 py-1 rounded-md border bg-blue-50 text-blue-700 border-blue-200">
            .NET
          </span>
          <span className="px-2 py-1 rounded-md border bg-cyan-50 text-cyan-700 border-cyan-200">
            Azure
          </span>
          <span className="px-2 py-1 rounded-md border bg-blue-50 text-blue-700 border-blue-200">
            MAUI
          </span>
          <span className="px-2 py-1 rounded-md border bg-gray-50 text-gray-700 border-gray-200">
            Komerční projekt
          </span>
        </div>
      </div>
    </div>

    {/* Projekt 2 – Kvíz */}
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <img
        src="/projekt1.jpg"
        alt="Multiplatformní kvízová aplikace"
        className="w-full aspect-video object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          Multiplatformní kvízová aplikace
        </h3>

        <p className="text-sm text-gray-600 mb-3">
          Multiplatformní kvízová aplikace inspirovaná platformou Kahoot.
          Uživatelé se mohou účastnit kvízů na různá témata a registrovaní
          uživatelé vytvářet vlastní kvízy. Implementace využívá .NET Blazor,
          SignalR pro real-time komunikaci a SQL databázi hostovanou v Microsoft
          Azure.
        </p>

        <div className="flex flex-wrap gap-2 text-xs">
          <span className="px-2 py-1 rounded-md border bg-blue-50 text-blue-700 border-blue-200">
            .NET
          </span>
          <span className="px-2 py-1 rounded-md border bg-violet-50 text-violet-700 border-violet-200">
            SignalR
          </span>
          <span className="px-2 py-1 rounded-md border bg-cyan-50 text-cyan-700 border-cyan-200">
            Azure
          </span>
          <span className="px-2 py-1 rounded-md border bg-gray-50 text-gray-700 border-gray-200">
            Maturitní práce
          </span>
        </div>
      </div>
    </div>

    {/* Projekt 3 – AutoShortsGenerator */}
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <img
        src="/projekt6.jpg"
        alt="AutoShortsGenerator"
        className="w-full aspect-video object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          AutoShortsGenerator
        </h3>

        <p className="text-sm text-gray-600 mb-3">
          Nástroj, který automaticky generuje krátká videa pro sociální sítě.
          Aplikace sama připraví scénář, namluvení, titulky a sestaví výsledné
          video bez nutnosti ručního zásahu.
        </p>

        <div className="flex flex-wrap gap-2 text-xs">
          <span className="px-2 py-1 rounded-md border bg-blue-50 text-blue-700 border-blue-200">
            C#
          </span>
          <span className="px-2 py-1 rounded-md border bg-orange-50 text-orange-700 border-orange-200">
            OpenAI
          </span>
          <span className="px-2 py-1 rounded-md border bg-pink-50 text-pink-700 border-pink-200">
            FFmpeg
          </span>
        </div>
      </div>
    </div>

    {/* Projekt 4 – Mafia */}
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <img
        src="/mafia.jpg"
        alt="Webová multiplayer karetní hra Mafia"
        className="w-full aspect-video object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          Webová multiplayer karetní hra Mafia
        </h3>

        <p className="text-sm text-gray-600 mb-3">
          Webová karetní hra s mafiánskou tematikou, unikátními rolemi, zbraněmi a
          speciálními schopnostmi. Hráči se zapojují do bitev v reálném čase s
          důrazem na strategii a klam.
        </p>

        <div className="flex flex-wrap gap-2 text-xs">
          <span className="px-2 py-1 rounded-md border bg-green-50 text-green-700 border-green-200">
            JavaScript
          </span>
          <span className="px-2 py-1 rounded-md border bg-violet-50 text-violet-700 border-violet-200">
            Node.js
          </span>
          <span className="px-2 py-1 rounded-md border bg-violet-50 text-violet-700 border-violet-200">
            WebSockets
          </span>
        </div>
      </div>
    </div>

  </div>
</section>



    </main>
  );
}
