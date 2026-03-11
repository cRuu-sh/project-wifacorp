'use client';

import { useState, useEffect } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import "./globals.css";

// Import JSON langsung dari folder messages
import idMessages from '../messages/id.json';
import enMessages from '../messages/en.json';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState<string>('id');
  const [messages, setMessages] = useState<any>(idMessages);

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') || 'id';
    setLocale(savedLocale);

    if (savedLocale === 'en') {
      setMessages(enMessages);
    } else {
      setMessages(idMessages);
    }
  }, []);

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}