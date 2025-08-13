const locales = {
  en: {
    SHARE_LOCATION_BTN: "📍 Share My Location",
    MENU_SETTINGS: "⚙️ Settings",
    MENU_DONATE: "❤️ Donate",
    MENU_HELP: "❓ Help",
    // PRAYER_TIMES_TODAY: "Today's Prayer Times:",
    FETCHING_PRAYER_TIMES: "Fetching today's prayer times for you...",
    PRAYER_TIMES_FETCH_ERROR:
      "Sorry, I couldn't fetch the prayer times for that location right now.",

    // For the text handler (city search)
    CITY_NOT_FOUND:
      "City not found. Please check the spelling or try a larger nearby city.",

    // For the settings inline keyboard header
    SETTINGS_HEADER: "User Settings:",
    PRAYERS: {
      Fajr: "Fajr",
      Dhuhr: "Dhuhr",
      Asr: "Asr",
      Maghrib: "Maghrib",
      Isha: "Isha",
    },
    HELP_MSG:
      "This bot sends daily prayer time notifications.\n\n- Use /start to set your language and location.\n- Use the menu for other options.",
    WELCOME:
      "Assalamu alaikum! I can provide prayer times for your location.\n\nFirst, please choose your language:",
    CHOOSE_LANG: "Please choose your language:",
    LANG_UPDATED:
      "Language updated to English. 🇬🇧\n\nNow, please share your location to get started.",
    SHARE_LOCATION_PROMPT: `📱 **On Mobile:** Use the "Share My Location" button. Please make sure to turn on your location\n💻 **On Desktop:** Simply type the name of your city.`,
    LOCATION_SAVED:
      "✅ Your location has been saved! I will send daily reminders.\n\nHere's what else you can do:",
    LOCATION_SET_TO: (city) =>
      `✅ Location set to "${city}". I will send daily reminders.\n\nHere's what else you can do:`,
    PRAYER_TIMES_TODAY: "Today's Prayer Times:",
    DONATE_MSG:
      "Thank you for considering a donation! 🙏\n\nThis project is run by volunteers. Your support helps cover server costs.\n\n**Bank:** International Bank of Code\n**Account:** 123-456-7890",
    // --- ADD THESE NEW KEYS ---

    // For the Settings Inline Keyboard Buttons
    SETTINGS_BTN_PAUSE_LABEL: "⏸️ Pause Notifications",
    SETTINGS_BTN_RESUME_LABEL: "▶️ Resume Notifications",
    SETTINGS_BTN_DELETE_LABEL: "🗑️ Delete My Data",

    // For the pop-up confirmation messages (answerCbQuery)
    NOTIFY_PAUSED_CONFIRM: "Notifications paused.",
    NOTIFY_RESUMED_CONFIRM: "Notifications resumed.",
    DATA_DELETED_CONFIRM: "Your data has been deleted.",

    // --- RENAME YOUR EXISTING KEYS for clarity ---
    // The text that the main message edits to after action
    NOTIFICATIONS_PAUSED: "Notifications are now paused.",
    NOTIFICATIONS_RESUMED: "Notifications are now active!",
    DATA_DELETED:
      "All your data has been deleted. Send a new location to start again.",
    MENU_FEEDBACK: "📝 Feedback",
    SETTINGS_BTN_BACK: "« Back to Main Menu",
    MAIN_MENU_PROMPT: "What would you like to do next?",
    FEEDBACK_PROMPT:
      "We would love to hear your feedback! Please click the button below to open a chat with our feedback bot.",
    FEEDBACK_BTN_LABEL: "📝 Provide Feedback",
  },
  // Amharic
  am: {
    SHARE_LOCATION_BTN: "📍 አካባቢዬን አጋራ",
    MENU_SETTINGS: "⚙️ ቅንብሮች",
    MENU_DONATE: "❤️ ይለግሱ",
    MENU_HELP: "❓ እገዛ",
    FETCHING_PRAYER_TIMES: "የዛሬውን የሰላት ሰዓታት በመፈለግ ላይ ነው...",
    PRAYER_TIMES_FETCH_ERROR: "ይቅርታ፣ ለዚያ አካባቢ የሰላት ሰዓታትን ማግኘት አልቻልኩም።",
    CITY_NOT_FOUND:
      "ከተማው አልተገኘም። እባክዎ የፊደል ገለጻውን ያረጋግጡ ወይም በአቅራቢያ ያለ ትልቅ ከተማ ይሞክሩ።",
    SETTINGS_HEADER: "የተጠቃሚ ቅንብሮች:",
    PRAYERS: {
      Fajr: "ፈጅር",
      Dhuhr: "ዙሁር",
      Asr: "አስር",
      Maghrib: "መግሪብ",
      Isha: "ኢሻ",
    },
    HELP_MSG:
      "ይህ ቦት በየቀኑ የሰላት ሰዓት ማሳወቂያዎችን ይልካል።\n\n- ቋንቋዎን እና አካባቢዎን ለማስተካከል /start ይጠቀሙ።\n- ለሌሎች አማራጮች ዝርዝሩን ይጠቀሙ።",
    WELCOME:
      "አሰላሙ አለይኩም! ለአካባቢዎ የሰላት ሰዓታትን ማቅረብ እችላለሁ።\n\nበመጀመሪያ፣ እባክዎ ቋንቋዎን ይምረጡ:",
    CHOOSE_LANG: "እባክዎ ቋንቋዎን ይምረጡ:",
    LANG_UPDATED: "ቋንቋ ወደ አማርኛ ተቀይሯል። 🇪🇹\n\nአሁን፣ ለመጀመር እባክዎ አካባቢዎን ያጋሩ።",
    SHARE_LOCATION_PROMPT:
      '📱 **በሞባይል ላይ:** "አካባቢዬን አጋራ" የሚለውን ቁልፍ ይጠቀሙ። እባክዎ አካባቢዎን (Location/GPS) ማንቃትዎን ያረጋግጡ።\n💻 **በኮምፒውተር ላይ:** በቀላሉ የከተማዎን ስም ይጻፉ።',
    LOCATION_SAVED:
      "✅ አካባቢዎ ተቀምጧል! በየቀኑ ማሳሰቢያዎችን እልካለሁ።\n\nሌሎች ማድረግ የሚችሏቸው ነገሮች እነሆ:",
    LOCATION_SET_TO: (city) =>
      `✅ አካባቢዎ ወደ "${city}" ተቀናብሯል። በየቀኑ ማሳሰቢያዎችን እልካለሁ።\n\nሌሎች ማድረግ የሚችሏቸው ነገሮች እነሆ:`,
    PRAYER_TIMES_TODAY: "የዛሬው የሰላት ሰዓታት:",
    DONATE_MSG:
      "ለልገሳ ስላሰቡ እናመሰግናለን! 🕌\n\nይህ ፕሮጀክት በበጎ ፈቃደኞች የሚሰራ ነው። የእርስዎ ድጋፍ የአገልጋይ ወጪዎችን ለመሸፈን ይረዳል።\n\n**ባንክ:** አለም አቀፍ የኮድ ባንክ\n**አካውንት:** 123-456-7890",
    SETTINGS_BTN_PAUSE_LABEL: "⏸️ ማሳወቂያዎችን አቁም",
    SETTINGS_BTN_RESUME_LABEL: "▶️ ማሳወቂያዎችን አስቀጥል",
    SETTINGS_BTN_DELETE_LABEL: "🗑️ መረጃዬን ሰርዝ",
    NOTIFY_PAUSED_CONFIRM: "ማሳወቂያዎች ቆመዋል።",
    NOTIFY_RESUMED_CONFIRM: "ማሳወቂያዎች እንደገና ጀምረዋል።",
    DATA_DELETED_CONFIRM: "የእርስዎ መረጃ ተሰርዟል።",
    NOTIFICATIONS_PAUSED: "ማሳወቂያዎች አሁን ቆመዋል።",
    NOTIFICATIONS_RESUMED: "ማሳወቂያዎች አሁን ንቁ ናቸው!",
    DATA_DELETED: "ሁሉም መረጃዎ ተሰርዟል። እንደገና ለመጀመር አዲስ አካባቢ ይላኩ።",
    MENU_FEEDBACK: "📝 አስተያየት",
    SETTINGS_BTN_BACK: "« ወደ ዋናው ዝርዝር ተመለስ",
    MAIN_MENU_PROMPT: "በመቀጠል ምን ማድረግ ይፈልጋሉ?",
    FEEDBACK_PROMPT:
      "አስተያየትዎን መስማት እንወዳለን! ከአስተያየት መቀበያ ቦታችን ጋር ለመወያየት ከታች ያለውን ቁልፍ ይጫኑ።",
    FEEDBACK_BTN_LABEL: "📝 አስተያየት ይስጡ",
  },
  om: {
    SHARE_LOCATION_BTN: "📍 Iddoo Koo Qoodi",
    MENU_SETTINGS: "⚙️ Qindeeffamoota",
    MENU_DONATE: "❤️ Gumaacha",
    MENU_HELP: "❓ Gargaarsa",
    FETCHING_PRAYER_TIMES: "Yeroo salaataa kan har'aa siif barbaadaa jira...",
    PRAYER_TIMES_FETCH_ERROR:
      "Dhiifama, amma yeroo salaataa iddoo sanaa fiduu hin dandeenye.",
    CITY_NOT_FOUND:
      "Magaalaan hin argamne. Maaloo qubeessa isaa sirreessi yookiin magaalaa guddaa dhiyoo jiru yaali.",
    SETTINGS_HEADER: "Qindeeffamoota Fayyadamaa:",
    PRAYERS: {
      Fajr: "Fajrii",
      Dhuhr: "Zuhrii",
      Asr: "Asrii",
      Maghrib: "Magriiba",
      Isha: "Ishaa'ii",
    },
    HELP_MSG:
      "Boottiin kun guyyaa guyyaan beeksisa yeroo salaataa erga.\n\n- Afaan fi iddoo kee saaguuf /start fayyadami.\n- Filannoowwan birootiif baafata fayyadami.",
    WELCOME:
      "Assalamu aleykum! Ani yeroo salaataa iddoo keetii siif kennuu nan danda'a.\n\n dura, Maaloo afaan keessan filadhaa:",
    CHOOSE_LANG: "Maaloo afaan keessan filadhaa:",
    LANG_UPDATED:
      "Afaan gara Oromiffaatti jijjiirameera. 🇪🇹\n\nAmma, jalqabuuf maaloo iddoo kee qoodi.",
    SHARE_LOCATION_PROMPT:
      '📱 **Moobayilarratti:** Qabduu "Iddoo Koo Qoodi" jedhu fayyadami. Maaloo iddoo keessan (Location/GPS) banamuu isaa mirkaneessaa.\n💻 **Deeskitooppiirratti:** Maqaa magaalaa keetii barreessi.',
    LOCATION_SAVED:
      "✅ Iddoon kee kuufameera! Guyyaa guyyaan yaadachiisa nan erga.\n\nKunoo wantoota biroo gochuu dandeessu:",
    LOCATION_SET_TO: (city) =>
      `✅ Iddoon kee gara "${city}"tti qindaa'eera. Guyyaa guyyaan yaadachiisa nan erga.\n\nKunoo wantoota biroo gochuu dandeessu:`,
    PRAYER_TIMES_TODAY: "Yeroo Salaataa Kan Har'aa:",
    DONATE_MSG:
      "Gumaacha gochuuf yaaduu keessaniif galatoomaa! 🕌\n\nProojektiin kun tola ooltotaan hojjetama. Deeggarsi keessan baasii sarvarii uwwisuuf gargaara.\n\n**Baankii:** Baankii Koodii Idil-addunyaa\n**Herrega:** 123-456-7890",
    SETTINGS_BTN_PAUSE_LABEL: "⏸️ Beeksisoota Dhaabi",
    SETTINGS_BTN_RESUME_LABEL: "▶️ Beeksisoota Itti Fufi",
    SETTINGS_BTN_DELETE_LABEL: "🗑️ Odeeffannoo Koo Haqi",
    NOTIFY_PAUSED_CONFIRM: "Beeksisoonni dhaabbataniiru.",
    NOTIFY_RESUMED_CONFIRM: "Beeksisoonni deebi'anii eegalaniiru.",
    DATA_DELETED_CONFIRM: "Odeeffannoon kee haqameera.",
    NOTIFICATIONS_PAUSED: "Beeksisoonni amma dhaabbataniiru.",
    NOTIFICATIONS_RESUMED: "Beeksisoonni amma hojechaa jiru!",
    DATA_DELETED:
      "Odeeffannoon kee hundi haqameera. Irra deebi'ee jalqabuuf iddoo haaraa ergi.",
    MENU_FEEDBACK: "📝 Yaada",
    SETTINGS_BTN_BACK: "« Gara Baafata Guddaatti Deebi'i",
    MAIN_MENU_PROMPT: "Itti aansuun maal gochuu barbaadda?",
    FEEDBACK_PROMPT:
      "Yaada keessan dhaga'uu ni jaallanna! Boottii yaada keenya waliin haasa'uuf qabduu armaan gadii cuqaasi.",
    FEEDBACK_BTN_LABEL: "📝 Yaada Kenni",
  },
  ti: {
    SHARE_LOCATION_BTN: "📍 ቦታይ ኣካፍል",
    MENU_SETTINGS: "⚙️ መዳለዋት",
    MENU_DONATE: "❤️ ልገሳ",
    MENU_HELP: "❓ ሓገዝ",
    FETCHING_PRAYER_TIMES: "ናይ ሎሚ ናይ ሰላት ግዝያት ይድለ ኣሎ...",
    PRAYER_TIMES_FETCH_ERROR: "ይቕሬታ፣ ሕጂ ነቲ ቦታ ናይ ሰላት ግዝያት ክረክብ ኣይከኣልኩን።",
    CITY_NOT_FOUND:
      "ከተማ ኣይተረኽበን። በጃኻ ንፊደላት ኣረጋግጽ ወይ ድማ ኣብ ቀረባ እትርከብ ዓባይ ከተማ ፍተን።",
    SETTINGS_HEADER: "መዳለዋት ተጠቃሚ:",
    PRAYERS: {
      Fajr: "ፈጅር",
      Dhuhr: "ዙሁር",
      Asr: "ዓስር",
      Maghrib: "መግሪብ",
      Isha: "ዒሻ",
    },
    HELP_MSG:
      "እዚ ቦት መዓልታዊ ናይ ሰላት ግዜ መፍለጢታት ይልእኽ።\n\n- ቋንቋኻን ቦታኻን ንምድላው /start ተጠቐም።\n- ንኻልኦት ኣማራጺታት ነቲ ዝርዝር ተጠቐም።",
    WELCOME:
      "ኣሰላሙ ዓለይኩም! ናይ ቦታኹም ናይ ሰላት ግዝያት ክህብ እኽእል እየ።\n\nመጀመርታ፣ በጃኹም ቋንቋኹም ምረጹ:",
    CHOOSE_LANG: "በጃኹም ቋንቋኹም ምረጹ:",
    LANG_UPDATED: "ቋንቋ ናብ ትግርኛ ተቐይሩ። 🇪🇷\n\nሕጂ፣ ንምጅማር በጃኻ ቦታኻ ኣካፍል።",
    SHARE_LOCATION_PROMPT:
      '📱 **ኣብ ሞባይል:** ነታ "ቦታይ ኣካፍል" እትብል መላግቦ ተጠቐም። በጃኹም ናይ ቦታኹም (Location/GPS) ምውላዕኹም ኣረጋግጹ።\n💻 **ኣብ ኮምፒተር:** ስም ከተማኻ ጽሓፍ።',
    LOCATION_SAVED:
      "✅ ቦታኻ ተመዝጊቡ ኣሎ! መዓልታዊ መዘኻኸሪታት ክሰድ እየ።\n\nእንሆ ካልኦት ክትገብሮም ትኽእል ነገራት:",
    LOCATION_SET_TO: (city) =>
      `✅ ቦታኻ ናብ "${city}" ተዳልዩ ኣሎ። መዓልታዊ መዘኻኸሪታት ክሰድ እየ።\n\nእንሆ ካልኦት ክትገብሮም ትኽእል ነገራት:`,
    PRAYER_TIMES_TODAY: "ናይ ሎሚ ናይ ሰላት ግዝያት:",
    DONATE_MSG:
      "ንልገሳ ስለዝሓሰብኩም ነመስግን! 🕌\n\nእዚ ፕሮጀክት ብወለንተኛታት ዝካየድ እዩ። ደገፍኩም ወጻኢታት ሰርቨር ንምሽፋን ይሕግዝ።\n\n**ባንኪ:** ኣህጉራዊ ባንኪ ኮድ\n**ሕሳብ:** 123-456-7890",
    SETTINGS_BTN_PAUSE_LABEL: "⏸️ መፍለጢታት ደው ኣብል",
    SETTINGS_BTN_RESUME_LABEL: "▶️ መፍለጢታት ቀጽል",
    SETTINGS_BTN_DELETE_LABEL: "🗑️ ዳታይ ሰርዝ",
    NOTIFY_PAUSED_CONFIRM: "መፍለጢታት ደው ኢሎም ኣለዉ።",
    NOTIFY_RESUMED_CONFIRM: "መፍለጢታት ዳግማይ ጀሚሮም ኣለዉ።",
    DATA_DELETED_CONFIRM: "ዳታኻ ተሰሪዙ ኣሎ።",
    NOTIFICATIONS_PAUSED: "መፍለጢታት ሕጂ ደው ኢሎም ኣለዉ።",
    NOTIFICATIONS_RESUMED: "መፍለጢታት ሕጂ ንቑሓት እዮም!",
    DATA_DELETED: "ኩሉ ዳታኻ ተሰሪዙ ኣሎ። እንደገና ንምጅማር ሓድሽ ቦታ ስደድ።",
    MENU_FEEDBACK: "📝 ርእይቶ",
    SETTINGS_BTN_BACK: "« ናብ ቀንዲ ዝርዝር ተመለስ",
    MAIN_MENU_PROMPT: "ቀጺልካ እንታይ ክትገብር ትደሊ?",
    FEEDBACK_PROMPT:
      "ርእይቶኹም ክንሰምዕ ንፈቱ! ምስ ናይ ርእይቶ ቦትና ንምዝርራብ ነታ ኣብ ታሕቲ ዘላ መላግቦ ጠውቕ።",
    FEEDBACK_BTN_LABEL: "📝 ርእይቶ ሃብ",
  },
  ar: {
    SHARE_LOCATION_BTN: "📍 مشاركة موقعي",
    MENU_SETTINGS: "⚙️ الإعدادات",
    MENU_DONATE: "❤️ تبرع",
    MENU_HELP: "❓ مساعدة",
    FETCHING_PRAYER_TIMES: "جاري جلب أوقات الصلاة لليوم...",
    PRAYER_TIMES_FETCH_ERROR:
      "عذراً، لم أتمكن من جلب أوقات الصلاة لهذا الموقع الآن.",
    CITY_NOT_FOUND:
      "لم يتم العثور على المدينة. يرجى التحقق من الإملاء أو تجربة مدينة أكبر مجاورة.",
    SETTINGS_HEADER: "إعدادات المستخدم:",
    PRAYERS: {
      Fajr: "الفجر",
      Dhuhr: "الظهر",
      Asr: "العصر",
      Maghrib: "المغرب",
      Isha: "العشاء",
    },
    HELP_MSG:
      "يقوم هذا البوت بإرسال إشعارات يومية بأوقات الصلاة.\n\n- استخدم /start لتعيين لغتك وموقعك.\n- استخدم القائمة للخيارات الأخرى.",
    WELCOME:
      "السلام عليكم! يمكنني توفير أوقات الصلاة لموقعك.\n\nأولاً، الرجاء اختيار لغتك:",
    CHOOSE_LANG: "الرجاء اختيار لغتك:",
    LANG_UPDATED:
      "تم تحديث اللغة إلى العربية. 🇸🇦\n\nالآن، يرجى مشاركة موقعك للبدء.",
    SHARE_LOCATION_PROMPT:
      '📱 **على الجوال:** استخدم زر "مشاركة موقعي". يرجى التأكد من تشغيل خدمة تحديد الموقع (GPS).\n💻 **على سطح المكتب:** ببساطة اكتب اسم مدينتك.',
    LOCATION_SAVED:
      "✅ تم حفظ موقعك! سأرسل تذكيرات يومية.\n\nإليك ما يمكنك فعله أيضاً:",
    LOCATION_SET_TO: (city) =>
      `✅ تم تعيين الموقع إلى "${city}". سأرسل تذكيرات يومية.\n\nإليك ما يمكنك فعله أيضاً:`,
    PRAYER_TIMES_TODAY: "أوقات الصلاة لليوم:",
    DONATE_MSG:
      "شكراً لك على التفكير في التبرع! 🕌\n\nهذا المشروع يديره متطوعون. دعمك يساعد في تغطية تكاليف الخادم.\n\n**البنك:** بنك الكود الدولي\n**الحساب:** 123-456-7890",
    SETTINGS_BTN_PAUSE_LABEL: "⏸️ إيقاف الإشعارات مؤقتاً",
    SETTINGS_BTN_RESUME_LABEL: "▶️ استئناف الإشعارات",
    SETTINGS_BTN_DELETE_LABEL: "🗑️ حذف بياناتي",
    NOTIFY_PAUSED_CONFIRM: "تم إيقاف الإشعارات مؤقتاً.",
    NOTIFY_RESUMED_CONFIRM: "تم استئناف الإشعارات.",
    DATA_DELETED_CONFIRM: "تم حذف بياناتك.",
    NOTIFICATIONS_PAUSED: "الإشعارات متوقفة الآن.",
    NOTIFICATIONS_RESUMED: "الإشعارات نشطة الآن!",
    DATA_DELETED: "تم حذف جميع بياناتك. أرسل موقعاً جديداً للبدء مرة أخرى.",
    MENU_FEEDBACK: "📝 إرسال ملاحظات",
    SETTINGS_BTN_BACK: "« العودة إلى القائمة الرئيسية",
    MAIN_MENU_PROMPT: "ماذا تود أن تفعل الآن؟",
    FEEDBACK_PROMPT:
      "يسعدنا سماع ملاحظاتك! يرجى النقر على الزر أدناه لفتح محادثة مع بوت الملاحظات الخاص بنا.",
    FEEDBACK_BTN_LABEL: "📝 تقديم ملاحظات",
  },
  aa: {
    SHARE_LOCATION_BTN: "📍 Yi Baxa Qoodi",
    MENU_SETTINGS: "⚙️ Seeco",
    MENU_DONATE: "❤️ Gaco",
    MENU_HELP: "❓ Gargaarsa",
    FETCHING_PRAYER_TIMES: "Assaaro Salat wakti siif Baxa le...",
    PRAYER_TIMES_FETCH_ERROR: "Dooqa, Ahak wakti Salat he kalek maacisse.",
    CITY_NOT_FOUND:
      "Magaala mayan Geyne. Fayxi qube esserri yookin magaalá gudde yaali.",
    SETTINGS_HEADER: "Isticmaalé seeco:",
    PRAYERS: {
      Fajr: "Fajri",
      Dhuhr: "Duhri",
      Asr: "Asri",
      Maghrib: "Magrib",
      Isha: "Isha",
    },
    HELP_MSG:
      "Ah Bot kulli ayro salat wakti oobisah siih ruubah.\n\n- Isi af kee baxah saaguh /start isticmal.\n- Gersi dooritih menu isticmal.",
    WELCOME:
      "Assalamu aleykum! Anu siinik salat wakti Baxah siinih aceemih dudah.\n\nFossemak, Fayxi isi af doorita:",
    CHOOSE_LANG: "Fayxi isi af doorita:",
    LANG_UPDATED:
      "Af Qafarafah geytime. 🇩🇯\n\nAhak, Abak Fayxi isi BAXA qoodi.",
    SHARE_LOCATION_PROMPT:
      '📱 **Mobiilil:** "BAXA qoodi" button isticmal. Fayxi isi BAXA (Location/GPS) daffeytem kassiis.\n💻 **Desktopal:** Magaala magac caddi ukutub.',
    LOCATION_SAVED:
      "✅ Isi BAXA daffeynime! Kulli ayro kassiisinuh siih ruubah.\n\nTonnah gactah tanim:",
    LOCATION_SET_TO: (city) =>
      `✅ BAXA "${city}" ilah qindeenime. Kulli ayro kassiisinuh siih ruubah.\n\nTonnah gactah tanim:`,
    PRAYER_TIMES_TODAY: "Assaaro Salat Wakti:",
    DONATE_MSG:
      "Gacoh fakarsiteemih galato! 🕌\n\nAh project Tola-oole marih abah. Siinih dooqah server masruufuh maqarru.\n\n**Bank:** Bankih Codeh Addunya\n**Hisab:** 123-456-7890",
    SETTINGS_BTN_PAUSE_LABEL: "⏸️ Oobisah ruqsus",
    SETTINGS_BTN_RESUME_LABEL: "▶️ Oobisah idig gibdi",
    SETTINGS_BTN_DELETE_LABEL: "🗑️ Yi xog he",
    NOTIFY_PAUSED_CONFIRM: "Oobisah ruqsumte.",
    NOTIFY_RESUMED_CONFIRM: "Oobisah diggi ittime.",
    DATA_DELETED_CONFIRM: "Isi xog heebinte.",
    NOTIFICATIONS_PAUSED: "Oobisah Ahak ruqsumte.",
    NOTIFICATIONS_RESUMED: "Oobisah Ahak gacta le!",
    DATA_DELETED: "Isi xog inkih heebinte. Diggi abak cusub BAXA ruub.",
    MENU_FEEDBACK: "📝 Yaada",
    SETTINGS_BTN_BACK: "« Diggi it Main Menul",
    MAIN_MENU_PROMPT: "Ahak wadirih ma abtam faxxa?",
    FEEDBACK_PROMPT:
      "Isiinik yaada akminuh nanna. Ni yaada-bottoh fayxi button torki.",
    FEEDBACK_BTN_LABEL: "📝 Yaada acuy",
  },
  so: {
    SHARE_LOCATION_BTN: "📍 La wadaag Goobteyda",
    MENU_SETTINGS: "⚙️ Dejinta",
    MENU_DONATE: "❤️ Ku deeq",
    MENU_HELP: "❓ Caawimaad",
    FETCHING_PRAYER_TIMES:
      "Waxaan kuu raadinayaa waqtiyada salaadda ee maanta...",
    PRAYER_TIMES_FETCH_ERROR:
      "Waan ka xumahay, hadda ma aanan awoodin inaan keeno waqtiyada salaadda ee goobtaas.",
    CITY_NOT_FOUND:
      "Magaalada lama helin. Fadlan hubi higaada ama isku day magaalo weyn oo u dhow.",
    SETTINGS_HEADER: "Dejinta Isticmaalaha:",
    PRAYERS: {
      Fajr: "Fajar",
      Dhuhr: "Duhur",
      Asr: "Casar",
      Maghrib: "Maqrib",
      Isha: "Cishe",
    },
    HELP_MSG:
      "Bootkani wuxuu soo diraa ogeysiisyo maalinle ah oo ku saabsan waqtiga salaadda.\n\n- Isticmaal /start si aad u dejiso luqaddaada iyo goobtaada.\n- Isticmaal liiska doorashooyinka kale.",
    WELCOME:
      "As-salamu calaykum! Waxaan ku siin karaa waqtiyada salaadda ee goobtaada.\n\nUgu horreyn, fadlan luqaddaada dooro:",
    CHOOSE_LANG: "Fadlan luqaddaada dooro:",
    LANG_UPDATED:
      "Luqadda waxaa loo beddelay Soomaali. 🇸🇴\n\nHadda, fadlan nala wadaag goobtaada si aad u bilowdo.",
    SHARE_LOCATION_PROMPT:
      '📱 **Mobilka:** Isticmaal badhanka "La wadaag Goobteyda". Fadlan hubi in goobtaada (Location/GPS) ay shidan tahay.\n💻 **Kumbuyuutarka:** Kaliya ku qor magaca magaaladaada.',
    LOCATION_SAVED:
      "✅ Goobtaada waa la keydiyay! Waxaan soo diri doonaa xusuusin maalinle ah.\n\nWaxyaabaha kale ee aad sameyn karto waa kuwan:",
    LOCATION_SET_TO: (city) =>
      `✅ Goobta waxaa loo dejiyay "${city}". Waxaan soo diri doonaa xusuusin maalinle ah.\n\nWaxyaabaha kale ee aad sameyn karto waa kuwan:`,
    PRAYER_TIMES_TODAY: "Waqtiyada Salaadda ee Maanta:",
    DONATE_MSG:
      "Waad ku mahadsan tahay tixgelinta deeqda! 🕌\n\nMashruucan waxaa wada mutadawiciin. Taageeradaadu waxay caawinaysaa inay daboosho kharashka server-ka.\n\n**Bangiga:** Bangiga Caalamiga ee Koodka\n**Akoon:** 123-456-7890",
    SETTINGS_BTN_PAUSE_LABEL: "⏸️ Hakad geli Ogeysiisyada",
    SETTINGS_BTN_RESUME_LABEL: "▶️ Dib u bilow Ogeysiisyada",
    SETTINGS_BTN_DELETE_LABEL: "🗑️ Tirtir Xogteyda",
    NOTIFY_PAUSED_CONFIRM: "Ogeysiisyada waa la hakiyay.",
    NOTIFY_RESUMED_CONFIRM: "Ogeysiisyada dib ayaa loo bilaabay.",
    DATA_DELETED_CONFIRM: "Xogtaada waa la tirtiray.",
    NOTIFICATIONS_PAUSED: "Ogeysiisyadu hadda way hakadanyihiin.",
    NOTIFICATIONS_RESUMED: "Ogeysiisyadu hadda way shaqeynayaan!",
    DATA_DELETED:
      "Dhammaan xogtaadii waa la tirtiray. Soo dir goob cusub si aad mar kale u bilowdo.",
    MENU_FEEDBACK: "📝 Fikrad dhiibasho",
    SETTINGS_BTN_BACK: "« Ku noqo Liiska Guud",
    MAIN_MENU_PROMPT: "Maxaad jeclaan lahayd inaad sameyso xiga?",
    FEEDBACK_PROMPT:
      "Waan jeclaan lahayn inaan maqalno fikraddaada! Fadlan guji badhanka hoose si aad u furto wada-hadal aad la yeelato bootka fikradaha.",
    FEEDBACK_BTN_LABEL: "📝 Fikrad dhiibo",
  },
  tr: {
    SHARE_LOCATION_BTN: "📍 Konumumu Paylaş",
    MENU_SETTINGS: "⚙️ Ayarlar",
    MENU_DONATE: "❤️ Bağış Yap",
    MENU_HELP: "❓ Yardım",
    FETCHING_PRAYER_TIMES: "Bugünün namaz vakitleri sizin için getiriliyor...",
    PRAYER_TIMES_FETCH_ERROR:
      "Üzgünüm, bu konum için namaz vakitlerini şu anda getiremedim.",
    CITY_NOT_FOUND:
      "Şehir bulunamadı. Lütfen yazımı kontrol edin veya yakındaki daha büyük bir şehri deneyin.",
    SETTINGS_HEADER: "Kullanıcı Ayarları:",
    PRAYERS: {
      Fajr: "İmsak",
      Dhuhr: "Öğle",
      Asr: "İkindi",
      Maghrib: "Akşam",
      Isha: "Yatsı",
    },
    HELP_MSG:
      "Bu bot günlük namaz vakti bildirimleri gönderir.\n\n- Dilinizi ve konumunuzu ayarlamak için /start komutunu kullanın.\n- Diğer seçenekler için menüyü kullanın.",
    WELCOME:
      "Esselamu aleyküm! Konumunuz için namaz vakitlerini sağlayabilirim.\n\nÖncelikle, lütfen dilinizi seçin:",
    CHOOSE_LANG: "Lütfen dilinizi seçin:",
    LANG_UPDATED:
      "Dil Türkçe olarak güncellendi. 🇹🇷\n\nŞimdi, başlamak için lütfen konumunuzu paylaşın.",
    SHARE_LOCATION_PROMPT:
      '📱 **Mobilde:** "Konumumu Paylaş" düğmesini kullanın.Lütfen konumunuzun (GPS) açık olduğundan emin olun.\n💻 **Masaüstünde:** Sadece şehrinizin adını yazın.',
    LOCATION_SAVED:
      "✅ Konumunuz kaydedildi! Günlük hatırlatıcılar göndereceğim.\n\nİşte yapabileceğiniz diğer şeyler:",
    LOCATION_SET_TO: (city) =>
      `✅ Konum "${city}" olarak ayarlandı. Günlük hatırlatıcılar göndereceğim.\n\nİşte yapabileceğiniz diğer şeyler:`,
    PRAYER_TIMES_TODAY: "Bugünün Namaz Vakitleri:",
    DONATE_MSG:
      "Bağış yapmayı düşündüğünüz için teşekkür ederiz! 🕌\n\nBu proje gönüllüler tarafından yürütülmektedir. Desteğiniz sunucu maliyetlerini karşılamaya yardımcı olur.\n\n**Banka:** Uluslararası Kod Bankası\n**Hesap:** 123-456-7890",
    SETTINGS_BTN_PAUSE_LABEL: "⏸️ Bildirimleri Duraklat",
    SETTINGS_BTN_RESUME_LABEL: "▶️ Bildirimlere Devam Et",
    SETTINGS_BTN_DELETE_LABEL: "🗑️ Verilerimi Sil",
    NOTIFY_PAUSED_CONFIRM: "Bildirimler duraklatıldı.",
    NOTIFY_RESUMED_CONFIRM: "Bildirimler yeniden aktif.",
    DATA_DELETED_CONFIRM: "Verileriniz silindi.",
    NOTIFICATIONS_PAUSED: "Bildirimler şimdi duraklatıldı.",
    NOTIFICATIONS_RESUMED: "Bildirimler şimdi aktif!",
    DATA_DELETED:
      "Tüm verileriniz silindi. Tekrar başlamak için yeni bir konum gönderin.",
    MENU_FEEDBACK: "📝 Geri Bildirim",
    SETTINGS_BTN_BACK: "« Ana Menüye Dön",
    MAIN_MENU_PROMPT: "Sırada ne yapmak istersiniz?",
    FEEDBACK_PROMPT:
      "Geri bildiriminizi duymak isteriz! Geri bildirim botumuzla sohbet başlatmak için lütfen aşağıdaki düğmeye tıklayın.",
    FEEDBACK_BTN_LABEL: "📝 Geri Bildirimde Bulun",
  },
  ur: {
    SHARE_LOCATION_BTN: "📍 میرا مقام شیئر کریں",
    MENU_SETTINGS: "⚙️ سیٹنگز",
    MENU_DONATE: "❤️ عطیہ کریں",
    MENU_HELP: "❓ مدد",
    FETCHING_PRAYER_TIMES:
      "آج کے نماز کے اوقات آپ کے لیے حاصل کیے جا رہے ہیں...",
    PRAYER_TIMES_FETCH_ERROR:
      "معذرت، میں اس وقت اس مقام کے لیے نماز کے اوقات حاصل نہیں کر سکا۔",
    CITY_NOT_FOUND:
      "شہر نہیں ملا۔ براہ کرم ہجے چیک کریں یا قریبی بڑے شہر کو آزمائیں۔",
    SETTINGS_HEADER: "صارف کی سیٹنگز:",
    PRAYERS: {
      Fajr: "فجر",
      Dhuhr: "ظہر",
      Asr: "عصر",
      Maghrib: "مغرب",
      Isha: "عشاء",
    },
    HELP_MSG:
      "یہ بوٹ روزانہ نماز کے اوقات کے اطلاعات بھیجتا ہے۔\n\n- اپنی زبان اور مقام متعین کرنے کے لیے /start استعمال کریں۔\n- دیگر اختیارات کے لیے مینو استعمال کریں۔",
    WELCOME:
      "السلام علیکم! میں آپ کے مقام کے لیے نماز کے اوقات فراہم کر سکتا ہوں۔\n\nسب سے پہلے، براہ کرم اپنی زبان منتخب کریں:",
    CHOOSE_LANG: "براہ کرم اپنی زبان منتخب کریں:",
    LANG_UPDATED:
      "زبان اردو میں تبدیل ہو گئی ہے۔ 🇵🇰\n\nاب، شروع کرنے کے لیے براہ کرم اپنا مقام شیئر کریں۔",
    SHARE_LOCATION_PROMPT:
      '📱 **موبائل پر:** "میرا مقام شیئر کریں" کا بٹن استعمال کریں۔ براہ کرم یقینی بنائیں کہ آپ کی لوکیشن (GPS) آن ہے\n💻 **ڈیسک ٹاپ پر:** بس اپنے شہر کا نام ٹائپ کریں۔',
    LOCATION_SAVED:
      "✅ آپ کا مقام محفوظ ہو گیا ہے! میں روزانہ یاد دہانیاں بھیجوں گا۔\n\nیہاں کچھ اور چیزیں ہیں جو آپ کر سکتے ہیں:",
    LOCATION_SET_TO: (city) =>
      `✅ مقام "${city}" پر متعین ہو گیا ہے۔ میں روزانہ یاد دہانیاں بھیجوں گا۔\n\nیہاں کچھ اور چیزیں ہیں جو آپ کر سکتے ہیں:`,
    PRAYER_TIMES_TODAY: "آج کے نماز کے اوقات:",
    DONATE_MSG:
      "عطیہ پر غور کرنے کے لیے آپ کا شکریہ! 🕌\n\nیہ پروجیکٹ رضاکاروں کے ذریعے چلایا جاتا ہے۔ آپ کی حمایت سرور کے اخراجات کو پورا کرنے میں مدد کرتی ہے۔\n\n**بینک:** انٹرنیشنل بینک آف کوڈ\n**اکاؤنٹ:** 123-456-7890",
    SETTINGS_BTN_PAUSE_LABEL: "⏸️ اطلاعات روکیں",
    SETTINGS_BTN_RESUME_LABEL: "▶️ اطلاعات دوبارہ شروع کریں",
    SETTINGS_BTN_DELETE_LABEL: "🗑️ میرا ڈیٹا حذف کریں",
    NOTIFY_PAUSED_CONFIRM: "اطلاعات روک دی گئی ہیں۔",
    NOTIFY_RESUMED_CONFIRM: "اطلاعات دوبارہ شروع ہو گئی ہیں۔",
    DATA_DELETED_CONFIRM: "آپ کا ڈیٹا حذف کر دیا گیا ہے۔",
    NOTIFICATIONS_PAUSED: "اطلاعات اب روک دی گئی ہیں۔",
    NOTIFICATIONS_RESUMED: "اطلاعات اب فعال ہیں!",
    DATA_DELETED:
      "آپ کا تمام ڈیٹا حذف کر دیا گیا ہے۔ دوبارہ شروع کرنے کے لیے نیا مقام بھیجیں۔",
    MENU_FEEDBACK: "📝 رائے دیں",
    SETTINGS_BTN_BACK: "« مرکزی مینو پر واپس",
    MAIN_MENU_PROMPT: "آپ آگے کیا کرنا چاہیں گے؟",
    FEEDBACK_PROMPT:
      "ہمیں آپ کی رائے سن کر خوشی ہوگی! ہمارے فیڈ بیک بوٹ کے ساتھ چیٹ کھولنے کے لیے نیچے دیے گئے بٹن پر کلک کریں۔",
    FEEDBACK_BTN_LABEL: "📝 رائے فراہم کریں",
  },
  hi: {
    MENU_SETTINGS: "⚙️ सेटिंग्स",
    MENU_DONATE: "❤️ दान करें",
    MENU_HELP: "❓ मदद",
    FETCHING_PRAYER_TIMES: "आपके लिए आज की नमाज़ का समय लाया जा रहा है...",
    PRAYER_TIMES_FETCH_ERROR:
      "क्षमा करें, मैं अभी उस स्थान के लिए नमाज़ का समय नहीं ला सका।",
    CITY_NOT_FOUND:
      "शहर नहीं मिला। कृपया वर्तनी जांचें या पास के किसी बड़े शहर का प्रयास करें।",
    SETTINGS_HEADER: "उपयोगकर्ता सेटिंग्स:",
    PRAYERS: {
      Fajr: "फ़ज्र",
      Dhuhr: "ज़ुहर",
      Asr: "असर",
      Maghrib: "मग़रिब",
      Isha: "ईशा",
    },
    HELP_MSG:
      "यह बॉट दैनिक नमाज़ के समय की सूचनाएं भेजता है।\n\n- अपनी भाषा और स्थान सेट करने के लिए /start का उपयोग करें।\n- अन्य विकल्पों के लिए मेनू का उपयोग करें।",
    WELCOME:
      "अस्सलामु अलैकुम! मैं आपके स्थान के लिए नमाज़ का समय प्रदान कर सकता हूँ।\n\nसबसे पहले, कृपया अपनी भाषा चुनें:",
    CHOOSE_LANG: "कृपया अपनी भाषा चुनें:",
    LANG_UPDATED:
      "भाषा हिंदी में अपडेट हो गई है। 🇮🇳\n\nअब, शुरू करने के लिए कृपया अपना स्थान साझा करें।",
    SHARE_LOCATION_PROMPT:
      '📱 **मोबाइल पर:** "मेरा स्थान साझा करें" बटन का उपयोग करें। कृपया सुनिश्चित करें कि आपकी लोकेशन (GPS) चालू है।\n💻 **डेस्कटॉप पर:** बस अपने शहर का नाम टाइप करें।',
    LOCATION_SAVED:
      "✅ आपका स्थान सहेज लिया गया है! मैं दैनिक अनुस्मारक भेजूंगा।\n\nयहाँ और भी कुछ है जो आप कर सकते हैं:",
    LOCATION_SET_TO: (city) =>
      `✅ स्थान "${city}" पर सेट हो गया है। मैं दैनिक अनुस्मारक भेजूंगा।\n\nयहाँ और भी कुछ है जो आप कर सकते हैं:`,
    PRAYER_TIMES_TODAY: "आज की नमाज़ का समय:",
    DONATE_MSG:
      "दान पर विचार करने के लिए धन्यवाद! 🕌\n\nयह परियोजना स्वयंसेवकों द्वारा चलाई जाती है। आपका समर्थन सर्वर लागत को कवर करने में मदद करता है।\n\n**बैंक:** इंटरनेशनल बैंक ऑफ कोड\n**खाता:** 123-456-7890",
    SETTINGS_BTN_PAUSE_LABEL: "⏸️ सूचनाएं रोकें",
    SETTINGS_BTN_RESUME_LABEL: "▶️ सूचनाएं फिर से शुरू करें",
    SETTINGS_BTN_DELETE_LABEL: "🗑️ मेरा डेटा हटाएं",
    NOTIFY_PAUSED_CONFIRM: "सूचनाएं रोक दी गई हैं।",
    NOTIFY_RESUMED_CONFIRM: "सूचनाएं फिर से शुरू हो गई हैं।",
    DATA_DELETED_CONFIRM: "आपका डेटा हटा दिया गया है।",
    NOTIFICATIONS_PAUSED: "सूचनाएं अब रुकी हुई हैं।",
    NOTIFICATIONS_RESUMED: "सूचनाएं अब सक्रिय हैं!",
    DATA_DELETED:
      "आपका सारा डेटा हटा दिया गया है। फिर से शुरू करने के लिए एक नया स्थान भेजें।",
    MENU_FEEDBACK: "📝 प्रतिक्रिया",
    SETTINGS_BTN_BACK: "« मुख्य मेनू पर वापस जाएं",
    MAIN_MENU_PROMPT: "आप आगे क्या करना चाहेंगे?",
    FEEDBACK_PROMPT:
      "हमें आपकी प्रतिक्रिया सुनना अच्छा लगेगा! हमारे फीडबैक बॉट के साथ चैट खोलने के लिए कृपया नीचे दिए गए बटन पर क्लिक करें।",
    FEEDBACK_BTN_LABEL: "📝 प्रतिक्रिया दें",
  },
  ru: {
    MENU_SETTINGS: "⚙️ Настройки",
    MENU_DONATE: "❤️ Пожертвовать",
    MENU_HELP: "❓ Помощь",
    FETCHING_PRAYER_TIMES: "Получаю время намаза на сегодня...",
    PRAYER_TIMES_FETCH_ERROR:
      "К сожалению, не удалось получить время намаза для этого места.",
    CITY_NOT_FOUND:
      "Город не найден. Пожалуйста, проверьте написание или попробуйте найти ближайший крупный город.",
    SETTINGS_HEADER: "Настройки пользователя:",
    PRAYERS: {
      Fajr: "Фаджр",
      Dhuhr: "Зухр",
      Asr: "Аср",
      Maghrib: "Магриб",
      Isha: "Иша",
    },
    HELP_MSG:
      "Этот бот отправляет ежедневные уведомления о времени намаза.\n\n- Используйте /start, чтобы установить язык и местоположение.\n- Используйте меню для других опций.",
    WELCOME:
      "Ассаляму алейкум! Я могу предоставить время намаза для вашего местоположения.\n\nСначала, пожалуйста, выберите ваш язык:",
    CHOOSE_LANG: "Пожалуйста, выберите ваш язык:",
    LANG_UPDATED:
      "Язык обновлен на русский. 🇷🇺\n\nТеперь, пожалуйста, поделитесь вашим местоположением, чтобы начать.",
    SHARE_LOCATION_PROMPT:
      '📱 **На мобильном:** Используйте кнопку "Поделиться местоположением". Пожалуйста, убедитесь, что геолокация (GPS) включена.\n💻 **На компьютере:** Просто введите название вашего города.',
    LOCATION_SAVED:
      "✅ Ваше местоположение сохранено! Я буду отправлять ежедневные напоминания.\n\nЧто еще вы можете сделать:",
    LOCATION_SET_TO: (city) =>
      `✅ Местоположение установлено на "${city}". Я буду отправлять ежедневные напоминания.\n\nЧто еще вы можете сделать:`,
    PRAYER_TIMES_TODAY: "Время намаза на сегодня:",
    DONATE_MSG:
      "Спасибо, что решили сделать пожертвование! 🕌\n\nЭтот проект поддерживается волонтерами. Ваша поддержка помогает покрыть расходы на сервер.\n\n**Банк:** Международный Банк Кода\n**Счет:** 123-456-7890",
    SETTINGS_BTN_PAUSE_LABEL: "⏸️ Приостановить уведомления",
    SETTINGS_BTN_RESUME_LABEL: "▶️ Возобновить уведомления",
    SETTINGS_BTN_DELETE_LABEL: "🗑️ Удалить мои данные",
    NOTIFY_PAUSED_CONFIRM: "Уведомления приостановлены.",
    NOTIFY_RESUMED_CONFIRM: "Уведомления возобновлены.",
    DATA_DELETED_CONFIRM: "Ваши данные были удалены.",
    NOTIFICATIONS_PAUSED: "Уведомления теперь приостановлены.",
    NOTIFICATIONS_RESUMED: "Уведомления снова активны!",
    DATA_DELETED:
      "Все ваши данные были удалены. Отправьте новое местоположение, чтобы начать снова.",
    MENU_FEEDBACK: "📝 Обратная связь",
    SETTINGS_BTN_BACK: "« Назад в главное меню",
    MAIN_MENU_PROMPT: "Что бы вы хотели сделать дальше?",
    FEEDBACK_PROMPT:
      "Мы будем рады услышать ваш отзыв! Пожалуйста, нажмите кнопку ниже, чтобы начать чат с нашим ботом для отзывов.",
    FEEDBACK_BTN_LABEL: "📝 Оставить отзыв",
    SHARE_LOCATION_BTN: "📍 Поделиться местоположением",
  },
  id: {
    MENU_SETTINGS: "⚙️ Pengaturan",
    MENU_DONATE: "❤️ Donasi",
    MENU_HELP: "❓ Bantuan",
    FETCHING_PRAYER_TIMES: "Mengambil waktu sholat hari ini untuk Anda...",
    PRAYER_TIMES_FETCH_ERROR:
      "Maaf, saya tidak dapat mengambil waktu sholat untuk lokasi tersebut saat ini.",
    CITY_NOT_FOUND:
      "Kota tidak ditemukan. Silakan periksa ejaan atau coba kota besar terdekat.",
    SETTINGS_HEADER: "Pengaturan Pengguna:",
    PRAYERS: {
      Fajr: "Subuh",
      Dhuhr: "Zuhur",
      Asr: "Asar",
      Maghrib: "Magrib",
      Isha: "Isya",
    },
    HELP_MSG:
      "Bot ini mengirimkan notifikasi waktu sholat harian.\n\n- Gunakan /start untuk mengatur bahasa dan lokasi Anda.\n- Gunakan menu untuk opsi lainnya.",
    WELCOME:
      "Assalamualaikum! Saya dapat memberikan waktu sholat untuk lokasi Anda.\n\nPertama, silakan pilih bahasa Anda:",
    CHOOSE_LANG: "Silakan pilih bahasa Anda:",
    LANG_UPDATED:
      "Bahasa diubah ke Bahasa Indonesia. 🇮🇩\n\nSekarang, silakan bagikan lokasi Anda untuk memulai.",
    SHARE_LOCATION_PROMPT:
      '📱 **Di Ponsel:** Gunakan tombol "Bagikan Lokasi Saya". Mohon pastikan layanan lokasi (GPS) Anda aktif.\n💻 **Di Desktop:** Cukup ketik nama kota Anda.',
    LOCATION_SAVED:
      "✅ Lokasi Anda telah disimpan! Saya akan mengirim pengingat harian.\n\nBerikut hal lain yang bisa Anda lakukan:",
    LOCATION_SET_TO: (city) =>
      `✅ Lokasi diatur ke "${city}". Saya akan mengirim pengingat harian.\n\nBerikut hal lain yang bisa Anda lakukan:`,
    PRAYER_TIMES_TODAY: "Waktu Sholat Hari Ini:",
    DONATE_MSG:
      "Terima kasih telah mempertimbangkan untuk berdonasi! 🕌\n\nProyek ini dijalankan oleh sukarelawan. Dukungan Anda membantu menutupi biaya server.\n\n**Bank:** Bank Internasional Kode\n**Rekening:** 123-456-7890",
    SETTINGS_BTN_PAUSE_LABEL: "⏸️ Jeda Notifikasi",
    SETTINGS_BTN_RESUME_LABEL: "▶️ Lanjutkan Notifikasi",
    SETTINGS_BTN_DELETE_LABEL: "🗑️ Hapus Data Saya",
    NOTIFY_PAUSED_CONFIRM: "Notifikasi dijeda.",
    NOTIFY_RESUMED_CONFIRM: "Notifikasi dilanjutkan.",
    DATA_DELETED_CONFIRM: "Data Anda telah dihapus.",
    NOTIFICATIONS_PAUSED: "Notifikasi sekarang dijeda.",
    NOTIFICATIONS_RESUMED: "Notifikasi sekarang aktif!",
    DATA_DELETED:
      "Semua data Anda telah dihapus. Kirim lokasi baru untuk memulai lagi.",
    MENU_FEEDBACK: "📝 Umpan Balik",
    SETTINGS_BTN_BACK: "« Kembali ke Menu Utama",
    MAIN_MENU_PROMPT: "Apa yang ingin Anda lakukan selanjutnya?",
    FEEDBACK_PROMPT:
      "Kami ingin mendengar umpan balik Anda! Silakan klik tombol di bawah untuk membuka obrolan dengan bot umpan balik kami.",
    FEEDBACK_BTN_LABEL: "📝 Berikan Umpan Balik",
    SHARE_LOCATION_BTN: "📍 Bagikan Lokasi Saya",
  },
  uz: {
    MENU_SETTINGS: "⚙️ Sozlamalar",
    MENU_DONATE: "❤️ Hayriya",
    MENU_HELP: "❓ Yordam",
    FETCHING_PRAYER_TIMES: "Bugungi namoz vaqtlari olinmoqda...",
    PRAYER_TIMES_FETCH_ERROR:
      "Kechirasiz, hozirda bu joy uchun namoz vaqtlarini ololmadim.",
    CITY_NOT_FOUND:
      "Shahar topilmadi. Iltimos, imloni tekshiring yoki yaqinroqdagi yirik shaharni sinab ko'ring.",
    SETTINGS_HEADER: "Foydalanuvchi sozlamalari:",
    PRAYERS: {
      Fajr: "Bomdod",
      Dhuhr: "Peshin",
      Asr: "Asr",
      Maghrib: "Shom",
      Isha: "Hufton",
    },
    HELP_MSG:
      "Bu bot har kuni namoz vaqtlari haqida bildirishnomalar yuboradi.\n\n- Tilingizni va joylashuvingizni o'rnatish uchun /start-dan foydalaning.\n- Boshqa variantlar uchun menyudan foydalaning.",
    WELCOME:
      "Assalomu alaykum! Men sizning joylashuvingiz uchun namoz vaqtlarini taqdim eta olaman.\n\nAvvalambor, iltimos, tilingizni tanlang:",
    CHOOSE_LANG: "Iltimos, tilingizni tanlang:",
    LANG_UPDATED:
      "Til o'zbek tiliga o'zgartirildi. 🇺🇿\n\nEndi, boshlash uchun joylashuvingizni ulashing.",
    SHARE_LOCATION_PROMPT:
      '📱 **Mobilda:** "Joylashuvimni ulashish" tugmasidan foydalaning. Mohon pastikan layanan lokasi (GPS) Anda aktif.\n💻 **Kompyuterda:** Shahringiz nomini yozing.',
    LOCATION_SAVED:
      "✅ Joylashuvingiz saqlandi! Men har kuni eslatmalar yuboraman.\n\nQuyida siz qila oladigan boshqa amallar:",
    LOCATION_SET_TO: (city) =>
      `✅ Joylashuv "${city}" ga o'rnatildi. Men har kuni eslatmalar yuboraman.\n\nQuyida siz qila oladigan boshqa amallar:`,
    PRAYER_TIMES_TODAY: "Bugungi namoz vaqtlari:",
    DONATE_MSG:
      "Hayriya qilishni o'ylaganingiz uchun tashakkur! 🕌\n\nBu loyiha ko'ngillilar tomonidan yuritiladi. Sizning qo'llab-quvvatlashingiz server xarajatlarini qoplashga yordam beradi.\n\n**Bank:** Xalqaro Kod Banki\n**Hisob raqam:** 123-456-7890",
    SETTINGS_BTN_PAUSE_LABEL: "⏸️ Bildirishnomalarni to'xtatish",
    SETTINGS_BTN_RESUME_LABEL: "▶️ Bildirishnomalarni davom ettirish",
    SETTINGS_BTN_DELETE_LABEL: "🗑️ Ma'lumotlarimni o'chirish",
    NOTIFY_PAUSED_CONFIRM: "Bildirishnomalar to'xtatildi.",
    NOTIFY_RESUMED_CONFIRM: "Bildirishnomalar qayta ishga tushirildi.",
    DATA_DELETED_CONFIRM: "Sizning ma'lumotlaringiz o'chirildi.",
    NOTIFICATIONS_PAUSED: "Bildirishnomalar hozir to'xtatilgan.",
    NOTIFICATIONS_RESUMED: "Bildirishnomalar endi faol!",
    DATA_DELETED:
      "Barcha ma'lumotlaringiz o'chirildi. Qaytadan boshlash uchun yangi joylashuv yuboring.",
    MENU_FEEDBACK: "📝 Fikr-mulohaza",
    SETTINGS_BTN_BACK: "« Bosh menyuga qaytish",
    MAIN_MENU_PROMPT: "Keyin nima qilishni xohlaysiz?",
    FEEDBACK_PROMPT:
      "Sizning fikr-mulohazangizni eshitishdan mamnun bo'lardik! Fikr-mulohaza botimiz bilan suhbat ochish uchun quyidagi tugmani bosing.",
    FEEDBACK_BTN_LABEL: "📝 Fikr-mulohaza qoldirish",
    SHARE_LOCATION_BTN: "📍 Joylashuvimni ulashish",
  },
  pt: {
    MENU_SETTINGS: "⚙️ Configurações",
    MENU_DONATE: "❤️ Doar",
    MENU_HELP: "❓ Ajuda",
    FETCHING_PRAYER_TIMES:
      "Buscando os horários de oração de hoje para você...",
    PRAYER_TIMES_FETCH_ERROR:
      "Desculpe, não consegui buscar os horários de oração para esse local agora.",
    CITY_NOT_FOUND:
      "Cidade não encontrada. Verifique a ortografia ou tente uma cidade maior próxima.",
    SETTINGS_HEADER: "Configurações do Usuário:",
    PRAYERS: {
      Fajr: "Fajr",
      Dhuhr: "Dhuhr",
      Asr: "Asr",
      Maghrib: "Maghrib",
      Isha: "Isha",
    },
    HELP_MSG:
      "Este bot envia notificações diárias dos horários de oração.\n\n- Use /start para definir seu idioma e localização.\n- Use o menu para outras opções.",
    WELCOME:
      "As-salamu alaikum! Eu posso fornecer os horários de oração para a sua localização.\n\nPrimeiro, por favor, escolha o seu idioma:",
    CHOOSE_LANG: "Por favor, escolha o seu idioma:",
    LANG_UPDATED:
      "Idioma atualizado para Português. 🇧🇷\n\nAgora, por favor, compartilhe sua localização para começar.",
    SHARE_LOCATION_PROMPT:
      '📱 **No Celular:** Use o botão "Compartilhar Minha Localização". Por favor, certifique-se de que sua localização (GPS) está ativada.\n💻 **No Computador:** Simplesmente digite o nome da sua cidade.',
    LOCATION_SAVED:
      "✅ Sua localização foi salva! Enviarei lembretes diários.\n\nVeja o que mais você pode fazer:",
    LOCATION_SET_TO: (city) =>
      `✅ Localização definida para "${city}". Enviarei lembretes diários.\n\nVeja o que mais você pode fazer:`,
    PRAYER_TIMES_TODAY: "Horários de Oração de Hoje:",
    DONATE_MSG:
      "Obrigado por considerar uma doação! 🕌\n\nEste projeto é administrado por voluntários. Seu apoio ajuda a cobrir os custos do servidor.\n\n**Banco:** Banco Internacional do Código\n**Conta:** 123-456-7890",
    SETTINGS_BTN_PAUSE_LABEL: "⏸️ Pausar Notificações",
    SETTINGS_BTN_RESUME_LABEL: "▶️ Retomar Notificações",
    SETTINGS_BTN_DELETE_LABEL: "🗑️ Excluir Meus Dados",
    NOTIFY_PAUSED_CONFIRM: "Notificações pausadas.",
    NOTIFY_RESUMED_CONFIRM: "Notificações retomadas.",
    DATA_DELETED_CONFIRM: "Seus dados foram excluídos.",
    NOTIFICATIONS_PAUSED: "As notificações estão pausadas.",
    NOTIFICATIONS_RESUMED: "As notificações estão ativas!",
    DATA_DELETED:
      "Todos os seus dados foram excluídos. Envie uma nova localização para começar de novo.",
    MENU_FEEDBACK: "📝 Feedback",
    SETTINGS_BTN_BACK: "« Voltar ao Menu Principal",
    MAIN_MENU_PROMPT: "O que você gostaria de fazer a seguir?",
    FEEDBACK_PROMPT:
      "Adoraríamos ouvir seu feedback! Por favor, clique no botão abaixo para abrir um chat com nosso bot de feedback.",
    FEEDBACK_BTN_LABEL: "📝 Fornecer Feedback",
    SHARE_LOCATION_BTN: "📍 Compartilhar Minha Localização",
  },
  fa: {
    MENU_SETTINGS: "⚙️ تنظیمات",
    MENU_DONATE: "❤️ حمایت مالی",
    MENU_HELP: "❓ راهنما",
    FETCHING_PRAYER_TIMES: "در حال دریافت اوقات شرعی امروز برای شما...",
    PRAYER_TIMES_FETCH_ERROR:
      "متاسفانه، در حال حاضر نتوانستم اوقات شرعی آن منطقه را دریافت کنم.",
    CITY_NOT_FOUND:
      "شهر یافت نشد. لطفاً املا را بررسی کنید یا شهر بزرگ‌تری در نزدیکی را امتحان کنید.",
    SETTINGS_HEADER: "تنظیمات کاربر:",
    PRAYERS: {
      Fajr: "فجر",
      Dhuhr: "ظهر",
      Asr: "عصر",
      Maghrib: "مغرب",
      Isha: "عشاء",
    },
    HELP_MSG:
      "این ربات اعلان‌های روزانه اوقات شرعی را ارسال می‌کند.\n\n- برای تنظیم زبان و موقعیت مکانی خود از /start استفاده کنید.\n- برای گزینه‌های دیگر از منو استفاده کنید.",
    WELCOME:
      "السلام علیکم! من می‌توانم اوقات شرعی را برای موقعیت مکانی شما ارائه دهم.\n\nابتدا، لطفاً زبان خود را انتخاب کنید:",
    CHOOSE_LANG: "لطفاً زبان خود را انتخاب کنید:",
    LANG_UPDATED:
      "زبان به فارسی تغییر کرد. 🇮🇷\n\nاکنون، برای شروع لطفاً موقعیت مکانی خود را به اشتراک بگذارید.",
    SHARE_LOCATION_PROMPT:
      "📱 **در موبایل:** از دکمه «اشتراک‌گذاری موقعیت مکانی من» استفاده کنید. طفاً اطمینان حاصل کنید که موقعیت مکانی (GPS) شما روشن است\n💻 **در دسکتاپ:** به سادگی نام شهر خود را تایپ کنید.",
    LOCATION_SAVED:
      "✅ موقعیت مکانی شما ذخیره شد! من یادآوری‌های روزانه ارسال خواهم کرد.\n\nکارهای دیگری که می‌توانید انجام دهید:",
    LOCATION_SET_TO: (city) =>
      `✅ موقعیت مکانی روی «${city}» تنظیم شد. من یادآوری‌های روزانه ارسال خواهم کرد.\n\nکارهای دیگری که می‌توانید انجام دهید:`,
    PRAYER_TIMES_TODAY: "اوقات شرعی امروز:",
    DONATE_MSG:
      "از اینکه به حمایت مالی فکر کردید سپاسگزاریم! 🕌\n\nاین پروژه توسط داوطلبان اداره می‌شود. حمایت شما به پوشش هزینه‌های سرور کمک می‌کند.\n\n**بانک:** بانک بین‌المللی کد\n**حساب:** 123-456-7890",
    SETTINGS_BTN_PAUSE_LABEL: "⏸️ توقف موقت اعلان‌ها",
    SETTINGS_BTN_RESUME_LABEL: "▶️ ادامه اعلان‌ها",
    SETTINGS_BTN_DELETE_LABEL: "🗑️ حذف داده‌های من",
    NOTIFY_PAUSED_CONFIRM: "اعلان‌ها متوقف شدند.",
    NOTIFY_RESUMED_CONFIRM: "اعلان‌ها از سر گرفته شدند.",
    DATA_DELETED_CONFIRM: "داده‌های شما حذف شد.",
    NOTIFICATIONS_PAUSED: "اعلان‌ها در حال حاضر متوقف هستند.",
    NOTIFICATIONS_RESUMED: "اعلان‌ها اکنون فعال هستند!",
    DATA_DELETED:
      "تمام داده‌های شما حذف شده است. برای شروع مجدد، یک موقعیت مکانی جدید ارسال کنید.",
    MENU_FEEDBACK: "📝 بازخورد",
    SETTINGS_BTN_BACK: "« بازگشت به منوی اصلی",
    MAIN_MENU_PROMPT: "در ادامه مایل به انجام چه کاری هستید؟",
    FEEDBACK_PROMPT:
      "خوشحال می‌شویم بازخورد شما را بشنویم! لطفاً روی دکمه زیر کلیک کنید تا یک چت با ربات بازخورد ما باز شود.",
    FEEDBACK_BTN_LABEL: "📝 ارائه بازخورد",
    SHARE_LOCATION_BTN: "📍 اشتراک‌گذاری موقعیت مکانی من",
  },
  ms: {
    MENU_SETTINGS: "⚙️ Tetapan",
    MENU_DONATE: "❤️ Derma",
    MENU_HELP: "❓ Bantuan",
    FETCHING_PRAYER_TIMES:
      "Sedang mendapatkan waktu solat hari ini untuk anda...",
    PRAYER_TIMES_FETCH_ERROR:
      "Maaf, saya tidak dapat mendapatkan waktu solat untuk lokasi itu pada masa ini.",
    CITY_NOT_FOUND:
      "Bandar tidak dijumpai. Sila semak ejaan atau cuba bandar besar yang berdekatan.",
    SETTINGS_HEADER: "Tetapan Pengguna:",
    PRAYERS: {
      Fajr: "Subuh",
      Dhuhr: "Zohor",
      Asr: "Asar",
      Maghrib: "Maghrib",
      Isha: "Isyak",
    },
    HELP_MSG:
      "Bot ini menghantar pemberitahuan waktu solat harian.\n\n- Gunakan /start untuk menetapkan bahasa dan lokasi anda.\n- Gunakan menu untuk pilihan lain.",
    WELCOME:
      "Assalamualaikum! Saya boleh memberikan waktu solat untuk lokasi anda.\n\nPertama, sila pilih bahasa anda:",
    CHOOSE_LANG: "Sila pilih bahasa anda:",
    LANG_UPDATED:
      "Bahasa ditukar kepada Bahasa Melayu. 🇲🇾\n\nSekarang, sila kongsi lokasi anda untuk bermula.",
    SHARE_LOCATION_PROMPT:
      '📱 **Di Telefon Bimbit:** Guna butang "Kongsi Lokasi Saya". Sila pastikan perkhidmatan lokasi (GPS) anda diaktifkan.\n💻 **Di Desktop:** Hanya taip nama bandar anda.',
    LOCATION_SAVED:
      "✅ Lokasi anda telah disimpan! Saya akan menghantar peringatan harian.\n\nBerikut adalah perkara lain yang boleh anda lakukan:",
    LOCATION_SET_TO: (city) =>
      `✅ Lokasi ditetapkan kepada "${city}". Saya akan menghantar peringatan harian.\n\nBerikut adalah perkara lain yang boleh anda lakukan:`,
    PRAYER_TIMES_TODAY: "Waktu Solat Hari Ini:",
    DONATE_MSG:
      "Terima kasih kerana mempertimbangkan untuk menderma! 🕌\n\nProjek ini dijalankan oleh sukarelawan. Sokongan anda membantu menampung kos pelayan.\n\n**Bank:** Bank Antarabangsa Kod\n**Akaun:** 123-456-7890",
    SETTINGS_BTN_PAUSE_LABEL: "⏸️ Jeda Pemberitahuan",
    SETTINGS_BTN_RESUME_LABEL: "▶️ Sambung Semula Pemberitahuan",
    SETTINGS_BTN_DELETE_LABEL: "🗑️ Padam Data Saya",
    NOTIFY_PAUSED_CONFIRM: "Pemberitahuan dijeda.",
    NOTIFY_RESUMED_CONFIRM: "Pemberitahuan disambung semula.",
    DATA_DELETED_CONFIRM: "Data anda telah dipadam.",
    NOTIFICATIONS_PAUSED: "Pemberitahuan kini dijeda.",
    NOTIFICATIONS_RESUMED: "Pemberitahuan kini aktif!",
    DATA_DELETED:
      "Semua data anda telah dipadam. Hantar lokasi baharu untuk bermula semula.",
    MENU_FEEDBACK: "📝 Maklum Balas",
    SETTINGS_BTN_BACK: "« Kembali ke Menu Utama",
    MAIN_MENU_PROMPT: "Apa yang anda ingin lakukan seterusnya?",
    FEEDBACK_PROMPT:
      "Kami ingin mendengar maklum balas anda! Sila klik butang di bawah untuk membuka sembang dengan bot maklum balas kami.",
    FEEDBACK_BTN_LABEL: "📝 Beri Maklum Balas",
    SHARE_LOCATION_BTN: "📍 Kongsi Lokasi Saya",
  },
  uk: {
    MENU_SETTINGS: "⚙️ Налаштування",
    MENU_DONATE: "❤️ Пожертвувати",
    MENU_HELP: "❓ Допомога",
    FETCHING_PRAYER_TIMES: "Отримую час намазу на сьогодні...",
    PRAYER_TIMES_FETCH_ERROR:
      "На жаль, не вдалося отримати час намазу для цього місця.",
    CITY_NOT_FOUND:
      "Місто не знайдено. Будь ласка, перевірте написання або спробуйте знайти найближче велике місто.",
    SETTINGS_HEADER: "Налаштування користувача:",
    PRAYERS: {
      Fajr: "Фаджр",
      Dhuhr: "Зухр",
      Asr: "Аср",
      Maghrib: "Магріб",
      Isha: "Іша",
    },
    HELP_MSG:
      "Цей бот надсилає щоденні сповіщення про час намазу.\n\n- Використовуйте /start, щоб встановити мову та місцезнаходження.\n- Використовуйте меню для інших опцій.",
    WELCOME:
      "Ассаляму алейкум! Я можу надати час намазу для вашого місцезнаходження.\n\nСпочатку, будь ласка, оберіть вашу мову:",
    CHOOSE_LANG: "Будь ласка, оберіть вашу мову:",
    LANG_UPDATED:
      "Мову оновлено на українську. 🇺🇦\n\nТепер, будь ласка, поділіться вашим місцезнаходженням, щоб почати.",
    SHARE_LOCATION_PROMPT:
      '📱 **На мобільному:** Використовуйте кнопку "Поділитися місцезнаходженням".Будь ласка, переконайтеся, що геолокація (GPS) увімкнена.\n💻 **На комп\'ютері:** Просто введіть назву вашого міста.',
    LOCATION_SAVED:
      "✅ Ваше місцезнаходження збережено! Я надсилатиму щоденні нагадування.\n\nЩо ще ви можете зробити:",
    LOCATION_SET_TO: (city) =>
      `✅ Місцезнаходження встановлено на "${city}". Я надсилатиму щоденні нагадування.\n\nЩо ще ви можете зробити:`,
    PRAYER_TIMES_TODAY: "Час намазу на сьогодні:",
    DONATE_MSG:
      "Дякуємо, що вирішили зробити пожертву! 🕌\n\nЦей проект підтримується волонтерами. Ваша підтримка допомагає покрити витрати на сервер.\n\n**Банк:** Міжнародний Банк Коду\n**Рахунок:** 123-456-7890",
    SETTINGS_BTN_PAUSE_LABEL: "⏸️ Призупинити сповіщення",
    SETTINGS_BTN_RESUME_LABEL: "▶️ Відновити сповіщення",
    SETTINGS_BTN_DELETE_LABEL: "🗑️ Видалити мої дані",
    NOTIFY_PAUSED_CONFIRM: "Сповіщення призупинено.",
    NOTIFY_RESUMED_CONFIRM: "Сповіщення відновлено.",
    DATA_DELETED_CONFIRM: "Ваші дані було видалено.",
    NOTIFICATIONS_PAUSED: "Сповіщення тепер призупинені.",
    NOTIFICATIONS_RESUMED: "Сповіщення знову активні!",
    DATA_DELETED:
      "Усі ваші дані було видалено. Надішліть нове місцезнаходження, щоб почати знову.",
    MENU_FEEDBACK: "📝 Зворотний зв'язок",
    SETTINGS_BTN_BACK: "« Назад до головного меню",
    MAIN_MENU_PROMPT: "Що б ви хотіли зробити далі?",
    FEEDBACK_PROMPT:
      "Ми будемо раді почути ваш відгук! Будь ласка, натисніть кнопку нижче, щоб розпочати чат з нашим ботом для відгуків.",
    FEEDBACK_BTN_LABEL: "📝 Залишити відгук",
    SHARE_LOCATION_BTN: "📍 Поділитися місцезнаходженням",
  },
  it: {
    MENU_SETTINGS: "⚙️ Impostazioni",
    MENU_DONATE: "❤️ Dona",
    MENU_HELP: "❓ Aiuto",
    FETCHING_PRAYER_TIMES: "Recupero gli orari di preghiera di oggi per te...",
    PRAYER_TIMES_FETCH_ERROR:
      "Spiacente, non sono riuscito a recuperare gli orari di preghiera per quella località.",
    CITY_NOT_FOUND:
      "Città non trovata. Controlla l'ortografia o prova una città più grande nelle vicinanze.",
    SETTINGS_HEADER: "Impostazioni Utente:",
    PRAYERS: {
      Fajr: "Fajr",
      Dhuhr: "Dhuhr",
      Asr: "Asr",
      Maghrib: "Maghrib",
      Isha: "Isha",
    },
    HELP_MSG:
      "Questo bot invia notifiche giornaliere sugli orari di preghiera.\n\n- Usa /start per impostare la tua lingua e la tua località.\n- Usa il menu per altre opzioni.",
    WELCOME:
      "As-salamu alaikum! Posso fornire gli orari di preghiera per la tua località.\n\nPer prima cosa, scegli la tua lingua:",
    CHOOSE_LANG: "Per favore, scegli la tua lingua:",
    LANG_UPDATED:
      "Lingua aggiornata in italiano. 🇮🇹\n\nOra, per favore, condividi la tua posizione per iniziare.",
    SHARE_LOCATION_PROMPT:
      '📱 **Su Mobile:** Usa il pulsante "Condividi la mia posizione". Per favore, assicurati che la tua posizione (GPS) sia attiva.\n💻 **Su Desktop:** Scrivi semplicemente il nome della tua città.',
    LOCATION_SAVED:
      "✅ La tua posizione è stata salvata! Invierò promemoria giornalieri.\n\nEcco cos'altro puoi fare:",
    LOCATION_SET_TO: (city) =>
      `✅ Posizione impostata su "${city}". Invierò promemoria giornalieri.\n\nEcco cos'altro puoi fare:`,
    PRAYER_TIMES_TODAY: "Orari di Preghiera di Oggi:",
    DONATE_MSG:
      "Grazie per aver considerato una donazione! 🕌\n\nQuesto progetto è gestito da volontari. Il tuo supporto aiuta a coprire i costi del server.\n\n**Banca:** Banca Internazionale del Codice\n**Conto:** 123-456-7890",
    SETTINGS_BTN_PAUSE_LABEL: "⏸️ Metti in pausa le notifiche",
    SETTINGS_BTN_RESUME_LABEL: "▶️ Riprendi le notifiche",
    SETTINGS_BTN_DELETE_LABEL: "🗑️ Elimina i miei dati",
    NOTIFY_PAUSED_CONFIRM: "Notifiche messe in pausa.",
    NOTIFY_RESUMED_CONFIRM: "Notifiche riprese.",
    DATA_DELETED_CONFIRM: "I tuoi dati sono stati eliminati.",
    NOTIFICATIONS_PAUSED: "Le notifiche sono ora in pausa.",
    NOTIFICATIONS_RESUMED: "Le notifiche sono ora attive!",
    DATA_DELETED:
      "Tutti i tuoi dati sono stati eliminati. Invia una nuova posizione per ricominciare.",
    MENU_FEEDBACK: "📝 Feedback",
    SETTINGS_BTN_BACK: "« Torna al menu principale",
    MAIN_MENU_PROMPT: "Cosa vorresti fare adesso?",
    FEEDBACK_PROMPT:
      "Ci piacerebbe molto sentire il tuo feedback! Clicca il pulsante qui sotto per avviare una chat con il nostro bot per i feedback.",
    FEEDBACK_BTN_LABEL: "📝 Lascia un feedback",
    SHARE_LOCATION_BTN: "📍 Condividi la mia posizione",
  },
};

function t(language_code, key, ...args) {
  const lang = locales[language_code] || locales.en;
  let text = lang[key];
  if (text === undefined) {
    text = locales.en[key];
  }
  if (text === undefined) {
    console.error(`Missing translation key: ${key}`);
    return `[${key}]`; // This is safe, it's a string.
  }
  if (typeof text === "function") {
    return text(...args);
  }
  return text;
}

module.exports = { t, locales };