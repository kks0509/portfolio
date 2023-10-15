import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: '92212702 구경섭',
    description: `현재 next.js 웹사이트 제작 관련 공부중.`,
    image: '/avatar.png',
    type: 'website',
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />

        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
