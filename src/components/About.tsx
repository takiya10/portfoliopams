import { Code, Palette, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import profile from "@/assets/profile.jpeg";

type Feature = {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
};

const features: Feature[] = [
  {
    icon: <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    titleKey: "about.features.cleanCode.title",
    descriptionKey: "about.features.cleanCode.description",
  },
  {
    icon: <Palette className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    titleKey: "about.features.creativeDesign.title",
    descriptionKey: "about.features.creativeDesign.description",
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
    titleKey: "about.features.performance.title",
    descriptionKey: "about.features.performance.description",
  },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white">{t('about.title')}</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-3 mb-6" />
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {t('about.intro')}
          </p>
        </div>

        {/* Content */}
        <div className="grid items-start gap-5 md:gap-6 lg:gap-8 md:grid-cols-12">
          {/* Foto */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="relative mx-auto md:mx-0 w-[clamp(160px,28vw,320px)]">
              <img
                src={profile}
                alt={t('hero.name')}
                className="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl ring-1 ring-black/5 dark:ring-white/10"
                loading="lazy"
                sizes="(min-width:1024px) 28vw, (min-width:640px) 40vw, 70vw"
              />
              {/* dekor tipis */}
              <div className="pointer-events-none absolute -z-10 -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl" />
            </div>
          </div>

          {/* Teks */}
          <div className="md:col-span-7 order-1 md:order-2">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
              {t('about.journey')}
            </h3>
            <div className="mt-4 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>{t('about.paragraph1')}</p>
              <p>{t('about.paragraph2')}</p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-6 max-w-md">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                <div className="text-slate-500 dark:text-slate-400 text-sm">{t('about.projectsCompleted')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-slate-500 dark:text-slate-400 text-sm">{t('about.yearsExperience')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm hover:shadow-md dark:shadow-slate-900/50 transition-shadow duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">{f.icon}</div>
              <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                {t(f.titleKey)}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t(f.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
