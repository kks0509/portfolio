import React from 'react';

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-8xl font-bold py-20 text-center md:text-left">
          Team
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-5 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Left Content */}
          <div className="inline-flex flex-col">
            <img src="/p1.jpg" alt="Your Image" width={250} height={200} />
            <br />
            <br />
            <img src="/p2.png" alt="Your Image" width={250} height={200} />
            <br />
            <br />
            <img src="/p3.jpg" alt="Your Image" width={250} height={200} />
            <br />
            <br />
            <img src="/p4.jpg" alt="Your Image" width={250} height={200} />
            <br />
            <br />
            <img src="/p5.png" alt="Your Image" width={250} height={200} />
            <br />
            <img src="/pp.png" alt="Your Image" width={2000} height={200} />
          </div>

          {/* Right Content (Comments) */}
          <div className="md:col-span-2">
            <div className="text-xl text-gray-700 dark:text-gray-300">
              <h2>92212893 안서진 </h2>
              <h1>조장 / Front-end 개발자</h1>
              <br />
              <br />
              <p>PPT 제작, 총괄</p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="text-xl text-gray-700 dark:text-gray-300">
              <h2>92212702 구경섭</h2>
              <h1>조원 / Front-end 개발자</h1>
              <br />
              <br />
              <p>웹사이트 구조 구상</p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="text-xl text-gray-700 dark:text-gray-300">
              <h2>92213134 최중건</h2>
              <h1>조원 / Back-end 개발자</h1>
              <br />
              <br />
              <p>3D 모듈 아이디어, 참고 웹사이트 선정</p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="text-xl text-gray-700 dark:text-gray-300">
              <h2>92213017 안서진</h2>
              <h1>조장 / Back-end 개발자</h1>
              <br />
              <br />
              <p>게시판, 리뷰 아이디어 제출</p>
              <br />
              <br />
            </div>
            <div className="text-xl text-gray-700 dark:text-gray-300">
              <br />
              <br />

              <br />
              <h2>조원 / Back-end 개발자</h2>
              <h1>91812543 송명석 </h1>
              <br />
              <br />
              <p>
                아이디어 제시, 의견 통합
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
