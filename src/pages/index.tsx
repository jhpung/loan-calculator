import { css } from '@emotion/css';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);

  const onClick = () => {
    setLoading((loading) => !loading);
  };

  return (
    <>
      <Head>
        <title>대출계산기</title>
        <meta name="description" content="대출이자를 쉽게 계산해보세요!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button css></button>
    </>
  );
}
