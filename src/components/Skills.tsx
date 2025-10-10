import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.categories.frontend'),
      skills: [
        { name: "React", level: 60 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      title: t('skills.categories.backend'),
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Python", level: 70 },
        { name: "PostgreSQL", level: 60 },
        { name: "MongoDB", level: 60 }
      ]
    },
    {
      title: t('skills.categories.tools'),
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 60 },
        { name: "AWS", level: 75 },
        { name: "Figma", level: 60 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('skills.title')}</h2>
          <div className="w-20 h-1 bg-blue-500 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-slate-300 dark:text-slate-400 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-800 dark:bg-slate-900 p-8 rounded-xl border border-slate-700 dark:border-slate-800">
              <h3 className="text-xl font-semibold mb-6 text-blue-400 dark:text-blue-300">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-200 dark:text-slate-300">{skill.name}</span>
                      <span className="text-slate-400 dark:text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 dark:bg-slate-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
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
            <div className="bg-slate-800 dark:bg-slate-900 p-6 rounded-xl border border-slate-700 dark:border-slate-800">
              <div className="text-3xl font-bold text-blue-400 dark:text-blue-300 mb-2">10+</div>
              <div className="text-slate-300 dark:text-slate-400">{t('skills.stats.projects')}</div>
            </div>
            <div className="bg-slate-800 dark:bg-slate-900 p-6 rounded-xl border border-slate-700 dark:border-slate-800">
              <div className="text-3xl font-bold text-purple-400 dark:text-purple-300 mb-2">5+</div>
              <div className="text-slate-300 dark:text-slate-400">{t('skills.stats.years')}</div>
            </div>
            <div className="bg-slate-800 dark:bg-slate-900 p-6 rounded-xl border border-slate-700 dark:border-slate-800">
              <div className="text-3xl font-bold text-green-400 dark:text-green-300 mb-2">10+</div>
              <div className="text-slate-300 dark:text-slate-400">{t('skills.stats.clients')}</div>
            </div>
            <div className="bg-slate-800 dark:bg-slate-900 p-6 rounded-xl border border-slate-700 dark:border-slate-800">
              <div className="text-3xl font-bold text-yellow-400 dark:text-yellow-300 mb-2">15+</div>
              <div className="text-slate-300 dark:text-slate-400">{t('skills.stats.technologies')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
