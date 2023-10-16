import React, { useState } from 'react';

export default function LatestCode({ repositories }) {
  const [repos] = useState(repositories);

  return (
    <section className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900 pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20">
        {repos &&
          repos.map((latestRepo, idx) => (
            <GithubRepoCard latestRepo={latestRepo} key="idx" />
          ))}
      </div>
    </section>
  );
}
