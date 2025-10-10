import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 border-t border-slate-800 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/takiya10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 dark:bg-slate-900 rounded-full hover:bg-slate-700 dark:hover:bg-slate-800 transition-colors duration-200 hover:scale-110 transform"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/0xpamungkas/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 dark:bg-slate-900 rounded-full hover:bg-slate-700 dark:hover:bg-slate-800 transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ngkass.bhadick@gmail.com"
              className="p-3 bg-slate-800 dark:bg-slate-900 rounded-full hover:bg-slate-700 dark:hover:bg-slate-800 transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="border-t border-slate-800 dark:border-slate-900 pt-8">
            <p className="text-slate-400 dark:text-slate-500 flex items-center justify-center space-x-2">
              <span>{t('footer.madeWith')}</span>
              <Heart size={16} className="text-red-500 dark:text-red-400" />
              <span>{t('footer.by')}</span>
            </p>
            <p className="text-slate-500 dark:text-slate-600 mt-2">
              {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
