import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
      <h1 className="gap-2.5 self-stretch px-7 py-3 text-2xl text-black whitespace-nowrap bg-white rounded-2xl border border-solid border-zinc-400 min-h-[58px] max-md:px-5">
        Inventory
      </h1>
      <div className="flex gap-3 items-center">
        <button className="flex flex-col justify-center items-center self-stretch px-4 my-auto rounded-2xl bg-zinc-100 h-[57px] min-h-[56px] w-[57px]" aria-label="Notifications">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/96d2ecc26cdf1ee463b9e19d0837782158f8a343437593135cc70312be14a96b?placeholderIfAbsent=true&apiKey=66c4452a061e4e4eaa882fbb2cf298ce" alt="" className="object-contain aspect-square w-[27px]" />
        </button>
        <button className="flex flex-col justify-center items-center self-stretch pr-4 pl-4 my-auto rounded-2xl bg-zinc-100 h-[57px] min-h-[56px] w-[57px]" aria-label="Messages">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1db68dfa5f4b0dd5b3d36e6b9579d5feac380dd6b5d9fd5f267124d8b066c3f0?placeholderIfAbsent=true&apiKey=66c4452a061e4e4eaa882fbb2cf298ce" alt="" className="object-contain w-6 aspect-square" />
        </button>
        <div className="flex flex-col justify-center self-stretch px-2.5 py-1 my-auto text-sm font-semibold tracking-normal leading-6 uppercase bg-gray-200 rounded-2xl min-h-[56px] w-[206px]">
          <div className="flex gap-5 justify-between items-center w-full">
            <div className="flex gap-6 items-center self-stretch my-auto">
              <div className="flex gap-3 items-start self-stretch my-auto">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3ac481578c8d75c6c401349f0d81dfd84beb9e08d6dccd53c19eb2a135f8271?placeholderIfAbsent=true&apiKey=66c4452a061e4e4eaa882fbb2cf298ce" alt="John Doe profile" className="object-contain shrink-0 w-12 aspect-square" />
                <div className="flex flex-col">
                  <div className="text-indigo-500">John Doe</div>
                  <div className="text-neutral-700">Admin</div>
                </div>
              </div>
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e8f6d6a7883fdd525834daf152334a82b91a98e5b48abffee7c6a2509bcf0bf?placeholderIfAbsent=true&apiKey=66c4452a061e4e4eaa882fbb2cf298ce" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[33px]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;