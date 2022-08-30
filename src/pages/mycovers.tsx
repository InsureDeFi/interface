import { NextPage } from 'next';
import React from 'react';

import PolicyTableBody from '@components/PolicyTable/PolicyTableBody';
import PolicyTableHead from '@components/PolicyTable/PolicyTableHead';
import PageLayout from '@components/PageLayout/PageLayout';

const MyCovers: NextPage = () => {
  return (
    <PageLayout title="My Covers | Insure">
      <div className="relative w-full select-none shadow-md sm:rounded-lg">
        <table className="h-full w-full table-auto overflow-hidden rounded-2xl text-center text-gray-400 md:text-left">
          <PolicyTableHead />
          <PolicyTableBody />
        </table>
      </div>
    </PageLayout>
  );
};

export default MyCovers;
