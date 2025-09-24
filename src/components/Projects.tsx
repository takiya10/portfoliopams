import React from "react";
import { ExternalLink, Github } from "lucide-react";

type Item = {
  id: number;
  title: string;
  description: string;
  image: string;     // url gambar (boleh external)
  tech: string[];
  github?: string;
  demo?: string;
};

const items: Item[] = [
  {
    id: 1,
    title: "Landing Page Affilate",
    description:
      "Solusi marketing untuk affilate shopee dan yang lain.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    tech: ["TypeScript", "JavaScript", "TailWind", "Vite"],
    github: "https://github.com/takiya10/ladingpage",
    demo: "https://github.com/takiya10/ladingpage",
  },
  {
    id: 2,
    title: "Mini Shop",
    description:
      "Automation — Flask + JSON-based Selenium E2E ",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
    tech: ["Bootstrap 5", "Flask", "Tailwind CSS", "Python"],
    github: "https://github.com/takiya10/mini-shop-flask-selenium-json-e2e",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "Dashboard Cuaca",
    description:
      "Dashboard cuaca interaktif dengan visualisasi data dan prakiraan berbasis lokasi.",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    tech: ["React", "D3.js", "Weather API"],
    github: "https://github.com/",
    demo: "https://demo.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800">Proyek</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-3" />
          <p className="mt-4 text-slate-600">
            Beberapa karya yang pernah saya kerjakan.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article
              key={p.id}
              className="group rounded-2xl overflow-hidden bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300 transition"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 ring-1 ring-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-900 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Repo
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
