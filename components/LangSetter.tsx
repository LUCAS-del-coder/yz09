'use client';

import { useEffect } from 'react';

interface LangSetterProps {
  locale: string;
}

export default function LangSetter({ locale }: LangSetterProps) {
  useEffect(() => {
    const lang = locale === 'my' ? 'my' : 'en';
    
    // Update html lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', lang);
    }
  }, [locale]);

  return null;
}
