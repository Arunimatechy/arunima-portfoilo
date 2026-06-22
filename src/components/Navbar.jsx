export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="font-bold text-xl">
          Arunima S
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}