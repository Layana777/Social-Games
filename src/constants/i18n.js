import { I18n } from 'i18n-js';
import { I18nManager } from 'react-native';

// Import translations
const translations = {
  ar: {
    // App navigation
    home: 'الرئيسية',
    games: 'الألعاب',
    settings: 'الإعدادات',
    
    // Common actions
    play: 'العب الآن',
    back: 'رجوع',
    next: 'التالي',
    cancel: 'إلغاء',
    confirm: 'تأكيد',
    
    // Game names
    baraAlSalfa: 'بارا السلفا',
    game1: 'اللعبة الأولى',
    game2: 'اللعبة الثانية',
    guessingGame: 'لعبة التخمين',
    
    // Common phrases
    welcome: 'أهلاً وسهلاً',
    whoIsTheBest: 'من هو الأفضل؟',
    enjoyWithFriends: 'استمتع بألعاب اجتماعية ممتعة مع الأصدقاء والعائلة',
    featuredGames: 'الألعاب المميزة',
    allGames: 'جميع الألعاب المتاحة',
    viewAllGames: 'عرض جميع الألعاب',
    
    // Game descriptions
    gameDescriptions: {
      baraAlSalfa: 'لعبة ممتعة للأصدقاء والعائلة',
      game1: 'لعبة رائعة للجميع',
      game2: 'تحدى أصدقائك في هذه اللعبة',
      guessingGame: 'اختبر معرفتك وذكائك',
    },
    
    // Player counts
    players: 'لاعبين',
    details: 'التفاصيل',
  },
  en: {
    // Fallback English translations
    home: 'Home',
    games: 'Games',
    whoIsTheBest: 'Who is the best?',
    play: 'Play Now',
  }
};

// Configure i18n
const i18n = new I18n(translations);

// Set default locale to Arabic
i18n.defaultLocale = 'ar';
i18n.locale = 'ar';

// Enable fallbacks
i18n.enableFallback = true;

// Configure RTL
i18n.isRTL = I18nManager.isRTL;

export default i18n;