import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 60 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Python", level: 70 },
        { name: "PostgreSQL", level: 60 },
        { name: "MongoDB", level: 60 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 60 },
        { name: "AWS", level: 75 },
        { name: "Figma", level: 60 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            I'm constantly learning and improving my skills. Here are the technologies I work with regularly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-slate-300">Proyek</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-slate-300">Tahun</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
              <div className="text-slate-300">Klien</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-slate-300">Teknologi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}