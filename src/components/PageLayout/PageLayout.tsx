import Head from 'next/head';
import React, { Fragment } from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function PageLayout({ title, children }: Props) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </Fragment>
  );
}
