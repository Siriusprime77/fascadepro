import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'de', name: 'DE' },
  { code: 'en', name: 'EN' },
  { code: 'fr', name: 'FR' },
  { code: 'es', name: 'ES' }
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`px-2 py-1 rounded ${
            i18n.language === lang.code
              ? 'bg-red-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
}