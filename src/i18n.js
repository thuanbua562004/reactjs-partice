// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { Children } from 'react';

// File ngôn ngữ
const resources = {
  English: {
    translation: {
      login: "Login",
      sigin: "Sigin",
      children:"Children",
      donate: "Donate Now",
      home: "Home",
      about:"About",
      cause: "Causes",
      even: "Event",
      blog: "Blogs",
      contact: "Contact",
      setting: "Setting",
      lan: "Language",
      support: "Support",
      mode: "Mode",
      titleIntro: "Let’s be Kind for ",
      subtitle: "High Quality Charity Theme in Envato Market. You Can Satisfied Yourself By Helping.",
      watch: "Watch Our Video",
      what: "What We Do?",
      titleCause: "We Are In A Mission To Help The Helpless",
      cleanWater: "Clean Water",
      lorem: "Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.",
      titleHelp: "We Are In A Mission To Help The Helpless",
      learn: "Learn More",
      titleImg: "Ensure Education for every poor children",
    },
  },
  Vietnam: {
    translation: {
      login: "Đăng nhập",
      sigin: "Đăng kí",
      donate: "Hãy quyên góp ngay",
      home: "Trang chủ",
      about:"Về chúng tôi",
      cause: "Các nguyên nhân",
      even: "Sự kiện",
      blog: "Blogs",
      contact: "Liên hệ",
      setting: "Cài đặt",
      lan: "Ngôn ngữ",
      support: "Hỗ trợ",
      mode: "Chế độ",
      titleIntro: "Hãy nhân ái với ",
      children:"Trẻ em",
      subtitle: "Chủ đề từ thiện chất lượng cao trên Envato Market. Bạn có thể thỏa mãn bản thân bằng cách giúp đỡ.",
      watch: "Xem video của chúng tôi",
      what: "Chúng tôi làm gì?",
      titleCause: "Chúng tôi đang trong một sứ mệnh giúp đỡ những người không may mắn",
      cleanWater: "Nước sạch",
      lorem: "Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.",
      titleHelp: "Chúng tôi đang trong một sứ mệnh giúp đỡ những người không may mắn",
      learn: "Tìm hiểu thêm",
      titleImg: "Đảm bảo giáo dục cho mọi trẻ em nghèo",
    },
  },
};


i18n
  .use(LanguageDetector) // tự động phát hiện ngôn ngữ
  .use(initReactI18next) // kết nối với React
  .init({
    resources,
    fallbackLng: 'en', // nếu không phát hiện được thì dùng tiếng Anh
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
