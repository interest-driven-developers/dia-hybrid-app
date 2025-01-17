import Script from 'next/script';
import 'tailwindcss/tailwind.css';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import '../styles/global.css';
import '../styles/variables.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import AuthSession from './api/auth/AuthSession';
import { UseSession } from '@/utils/session';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DIA | 개발자 면접 도우미',
  description: 'DIA는 개발자 면접을 위한 면접 질문과 답변을 제공합니다.',
  viewport: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className="font-Pretendard">
        <AuthSession>
          <App>{children}</App>
        </AuthSession>
        <div id="modal-root"></div>
      </body>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.2.3/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script noModule src="https://unpkg.com/ionicons@5.2.3/dist/ionicons/ionicons.js"></Script>
    </html>
  );
}

// AppShell would root component for all pages
const App = dynamic(() => import('./AppShell'), {
  ssr: false,
});
