
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ms';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

export const translations: Translations = {
  en: {
    "home.title": "Turn Your Scrap Metal Into Cash",
    "home.subtitle": "Malaysia's leading platform for recycling scrap metal. Get instant quotes, schedule pickups, and receive digital payments - all in one place.",
    "home.getQuote": "Get Instant Quote",
    "home.feature1.title": "Easy Recycling",
    "home.feature1.desc": "Simply upload photos of your scrap metal and get an instant quote based on current market rates.",
    "home.feature2.title": "Quick Pickup",
    "home.feature2.desc": "Schedule a convenient pickup time and our team will collect your scrap metal from your location.",
    "home.feature3.title": "Secure Payment",
    "home.feature3.desc": "Receive your payment digitally after successful pickup confirmation. Fast and secure.",
    "quote.title": "Get Your Instant Quote",
    "quote.subtitle": "Upload photos of your scrap metal, get instant quotes, and schedule pickup with digital payments. It's that simple.",
    "pickup.title": "Schedule Your Pickup",
    "pickup.subtitle": "Review your quotation details and schedule a convenient pickup time.",
    "pickup.location": "Pickup Location",
    "pickup.date": "Pickup Date",
    "pickup.time": "Preferred Time",
    "pickup.notes": "Additional Notes",
    "pickup.notes.placeholder": "Any special instructions for pickup?",
    "pickup.summary": "Quotation Summary",
    "common.weight": "Weight",
    "common.metalType": "Metal Type",
    "common.quality": "Quality Grade",
    "common.pricePerKg": "Price per KG",
    "common.total": "Total Amount",
    "common.schedule": "Schedule Pickup",
    "common.payment": "Payment Available After Pickup Confirmation",
    "common.contact": "Contact Support",
    "common.getQuote": "Get Quote",
  },
  ms: {
    "home.title": "Tukar Besi Buruk Anda Kepada Tunai",
    "home.subtitle": "Platform utama Malaysia untuk kitar semula besi buruk. Dapatkan sebut harga segera, jadualkan pengambilan, dan terima pembayaran digital - semuanya dalam satu tempat.",
    "home.getQuote": "Dapatkan Sebut Harga Segera",
    "home.feature1.title": "Kitar Semula Mudah",
    "home.feature1.desc": "Hanya muat naik gambar besi buruk anda dan dapatkan sebut harga segera berdasarkan kadar pasaran semasa.",
    "home.feature2.title": "Pengambilan Segera",
    "home.feature2.desc": "Jadualkan masa pengambilan yang sesuai dan pasukan kami akan mengambil besi buruk anda dari lokasi anda.",
    "home.feature3.title": "Pembayaran Selamat",
    "home.feature3.desc": "Terima pembayaran anda secara digital selepas pengesahan pengambilan. Cepat dan selamat.",
    "quote.title": "Dapatkan Sebut Harga Segera",
    "quote.subtitle": "Muat naik gambar besi buruk anda, dapatkan sebut harga segera, dan jadualkan pengambilan dengan pembayaran digital. Semudah itu.",
    "pickup.title": "Jadualkan Pengambilan Anda",
    "pickup.subtitle": "Semak butiran sebut harga anda dan jadualkan masa pengambilan yang sesuai.",
    "pickup.location": "Lokasi Pengambilan",
    "pickup.date": "Tarikh Pengambilan",
    "pickup.time": "Masa Pilihan",
    "pickup.notes": "Nota Tambahan",
    "pickup.notes.placeholder": "Sebarang arahan khas untuk pengambilan?",
    "pickup.summary": "Ringkasan Sebut Harga",
    "common.weight": "Berat",
    "common.metalType": "Jenis Logam",
    "common.quality": "Gred Kualiti",
    "common.pricePerKg": "Harga setiap KG",
    "common.total": "Jumlah Keseluruhan",
    "common.schedule": "Jadual Pengambilan",
    "common.payment": "Pembayaran Tersedia Selepas Pengesahan Pengambilan",
    "common.contact": "Hubungi Sokongan",
    "common.getQuote": "Dapatkan Sebut Harga",
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
