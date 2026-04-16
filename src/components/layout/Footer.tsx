function Footer() {
  return (
    <footer className="text-center pt-10 pb-6 space-y-2 border-t border-slate-100">
      <p className="text-base text-slate-500 font-medium">
        Weather data provided by{" "}
        <a
          href="https://open-meteo.com/"
          target="_blank"
          rel="noreferrer"
          className="text-sky-500 hover:underline"
        >
          Open-Meteo
        </a>
      </p>
      <p className="text-base text-slate-400">
        © 2026 Designed & Built by{" "}
        <a
          href="https://github.com/chieh0225"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-slate-900 hover:text-sky-500 transition-colors"
        >
          Chieh
        </a>
      </p>
    </footer>
  );
}

export default Footer;
