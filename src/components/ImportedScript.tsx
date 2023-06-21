import Script from 'next/script';
import React from 'react';

export default function ImportedScript({ srcs }: any) {
  return srcs.map((src: string, srcIndex: number) => (
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script
      strategy="afterInteractive"
      // async={false}
      key={`script-${srcIndex}`}
      src={src}
    />
  ));
}
