import React from 'react';

export default function PolicyTableHead() {
  return (
    <thead className="h-12 bg-gray-700 text-sm uppercase text-gray-300 md:text-base">
      <tr>
        <th scope="col" className="font-medium md:pl-10">
          Asset
        </th>
        <th scope="col" className="hidden font-medium lg:table-cell">
          Start Date
        </th>
        <th scope="col" className="font-medium">
          End Date
        </th>
        <th scope="col" className="hidden font-medium lg:table-cell">
          Asset Price
        </th>
        <th scope="col" className="hidden font-medium lg:table-cell">
          Premium Paid
        </th>
        <th scope="col" className="font-medium">
          Cover
        </th>
        <th scope="col" className="font-medium">
          Status
        </th>
      </tr>
    </thead>
  );
}
