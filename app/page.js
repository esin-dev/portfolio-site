export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      <header className="border-b border-zinc-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Emmanuel Esin</h1>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            <a href="#about" className="hover:text-black transition">About</a>
            <a href="#skills" className="hover:text-black transition">Skills</a>
            <a href="#projects" className="hover:text-black transition">Projects</a>
            <a href="#contact" className="hover:text-black transition">Contact</a>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500 mb-4">
            Junior Frontend Developer
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            I design and build responsive web experiences.
          </h2>

          <p className="text-zinc-600 text-lg leading-8 mb-8 max-w-xl">
            I’m an entry-level software developer passionate about creating clean, responsive, and user-friendly websites. I enjoy turning ideas into interactive digital experiences while continuously improving my frontend and full-stack development skills.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-zinc-300 px-6 py-3 rounded-xl font-medium hover:bg-zinc-100 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="bg-zinc-100 rounded-3xl p-10 border border-zinc-200 shadow-sm">
          <div className="space-y-8">
            <div>
              <p className="text-zinc-500 text-sm mb-2">Current Focus</p>
              <h3 className="text-3xl font-bold leading-snug">
                Responsive Frontend Development
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl p-6 border border-zinc-200">
                <h4 className="text-3xl font-bold mb-2">10+</h4>
                <p className="text-zinc-500 text-sm">Frontend projects completed</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-zinc-200">
                <h4 className="text-3xl font-bold mb-2">3+</h4>
                <p className="text-zinc-500 text-sm">Years of coding experience</p>
              </div>
            </div>

            <div>
              <p className="text-zinc-500 text-sm mb-4">Core Technologies</p>

              <div className="flex flex-wrap gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Tailwind CSS",
                  "Node.js",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-white border border-zinc-200 px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500 mb-4">
            About Me
          </p>

          <h2 className="text-4xl font-bold mb-10">
            A developer who enjoys creating simple and functional interfaces.
          </h2>

          <div className="space-y-6 text-zinc-600 text-lg leading-8 max-w-4xl">
            <p>
              My interest in web development started with curiosity about how modern websites work and how user interfaces are built. Since then, I’ve spent time learning frontend technologies and building projects that helped improve both my technical and problem-solving skills.
            </p>

            <p>
              I enjoy working with HTML, CSS, JavaScript, and React to create responsive layouts and interactive web applications. I’m also comfortable consuming APIs, working with Git, and understanding how frontend and backend systems connect together.
            </p>

            <p>
              Right now, I’m looking for opportunities where I can contribute to real projects, collaborate with experienced developers, and continue growing as a software engineer.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="border-t border-zinc-200 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500 mb-4">
            Technical Skills
          </p>

          <h2 className="text-4xl font-bold mb-12">
            Technologies I work with.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Node.js",
              "Python",
              "Git & GitHub",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white border border-zinc-200 rounded-2xl p-6 text-center font-medium hover:-translate-y-1 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500 mb-4">
            Projects
          </p>

          <h2 className="text-4xl font-bold mb-12">
            Some projects I’ve worked on.
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Portfolio Website",
                description:
                  "Designed and developed a responsive personal portfolio website to showcase projects, technical skills, and contact information.",
              },
              {
                title: "Task Management App",
                description:
                  "Built a responsive task management application with authentication, task tracking, and API integration.",
              },
              {
                title: "Responsive Landing Page",
                description:
                  "Created a modern landing page optimized for mobile and desktop viewing using clean UI principles.",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="bg-white border border-zinc-200 rounded-3xl p-8 hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-zinc-600 leading-7">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-zinc-200 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500 mb-4">
            Contact
          </p>

          <h2 className="text-5xl font-bold mb-8">
            Let’s connect.
          </h2>

          <p className="text-zinc-600 text-lg leading-8 mb-10 max-w-2xl">
            I’m currently open to internship opportunities, frontend development roles, and collaborative projects.
          </p>

          <div className="space-y-4 text-lg">
            <p>esinemmanuel934@gmail.com</p>
            <p>GitHub</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 py-8 px-6 text-center text-zinc-500 text-sm">
        © 2026 Emmanuel Esin. Designed and developed by me.
      </footer>
    </div>
  );
}
