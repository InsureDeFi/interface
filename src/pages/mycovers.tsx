import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import PolicyTableBody from '@components/PolicyTable/PolicyTableBody';
import PolicyTableHead from '@components/PolicyTable/PolicyTableHead';

const MyCovers: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Covers | Insure</title>
      </Head>
      <div className="relative w-full select-none shadow-md sm:rounded-lg">
        <table className="h-full w-full table-auto overflow-hidden rounded-2xl text-left text-gray-400">
          <PolicyTableHead />
          <PolicyTableBody />
        </table>
      </div>
    </>
  );
};

export default MyCovers;
