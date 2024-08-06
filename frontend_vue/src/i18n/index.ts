import { createI18n } from 'vue-i18n'
import en from './en.json'
import fr from './fr.json'

const messages = {
  en,
  fr
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en', // Set the default locale
  fallbackLocale: 'en', // Fallback locale in case the translation is missing
  messages // Set locale messages
})
