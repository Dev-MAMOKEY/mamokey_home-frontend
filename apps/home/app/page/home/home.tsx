import { Link } from "react-router";

import { Button, SectionHeader } from "@mamokey/ui";

import { HeroLogo } from "./(components)/HeroLogo";
import { WithUsCard } from "./(components)/WithUsCard";
import { NewsCard } from "./(components)/NewsCard";

export function HomePage() {
  return (
    <div className="flex flex-col bg-pure-white dark:bg-dark-bg">
      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-5 md:min-h-[calc(100vh-5rem)]">
        {/* Blurred h logo - top left */}
        <HeroLogo
          className="pointer-events-none absolute -rotate-17 -left-[5%] top-[10%] w-[clamp(200px,30vw,400px)] blur-[clamp(30px,4vw,50px)] fill-blue-100 dark:fill-blue-600 dark:opacity-50 sm:-left-[3%] sm:top-[12%]"
        />
        {/* Blurred h logo - bottom right */}
        <HeroLogo
          className="pointer-events-none absolute rotate-[17.5deg] -right-[3%] bottom-[5%] w-[clamp(220px,32vw,450px)] blur-[clamp(30px,4vw,50px)] fill-blue-100 dark:fill-blue-600 dark:opacity-50 sm:-right-[1%] sm:bottom-[8%]"
        />
        <div className="relative flex flex-col items-center gap-6 md:gap-8">
          <h1 className="animate-fade-up font-title-1 text-center text-black dark:text-white">
            LIKELION
            <br />
            SHINHAN
          </h1>
          <p className="animate-fade-up font-body-1 max-w-md lg:max-w-xl text-center text-gray-700 dark:text-gray-400" style={{ animationDelay: "0.1s" }}>
            멋쟁이사자처럼 대학과 함께 서비스를 만들어내고
            <br />
            성장하고 싶은분들이라면, 주저하지 말고 지원해주세요!
          </p>
          <Link to="/apply">
            <Button className="bg-blue-500 text-pure-white transition-colors duration-200 hover:bg-blue-600 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              14기 아기사자 지원하기
            </Button>
          </Link>
        </div>
      </section>


      {/* Intro */}
      <section className="bg-blue-400 dark:bg-blue-700 px-5 py-20 md:px-12 md:py-28 lg:px-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:gap-16 lg:gap-24">
          <div className="flex flex-1 flex-col gap-6">
            <SectionHeader
              icon
              title="LikeLion.Univ"
              subtitle="멋쟁이사자처럼 대학"
              className="text-white dark:text-pure-white"
            />
            <p className="font-body-2 max-w-md text-gray-300 dark:text-gray-200">
              전국 81개 대학교가 참여하는 국내 최대 규모의 대학 연합 IT 창업 동아리입니다.
              <br />
              웹 기획·디자인, 프론트엔드, 백엔드 개발을 배워 자신만의 서비스를 만들 수 있도록 돕습니다.
            </p>
          </div>
          <div className="w-full shrink-0 md:w-1/2">
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src="/images/intro.png"
                alt="멋쟁이사자처럼 소개"
                width={600}
                height={338}
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* With Us */}
      <section className="px-5 py-20 md:px-12 md:py-28 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 md:mb-16">
            <SectionHeader
              icon
              title="With Us"
              subtitle="우리와 함께해요"
              className="text-blue-400"
            />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
            <WithUsCard
              imageSrc="/images/with-us-1.png"
              title="학교별 스터디"
              description="각 학교에서 진행되는 트랙별 자율 스터디를 통해, 아이디어를 현실화할 수 있는 실전 역량을 쌓아갑니다."
            />
            <WithUsCard
              imageSrc="/images/with-us-2.png"
              title="아이디어톤"
              description="창의적인 아이디어를 기획하고 프로토타입으로 실현 가능성을 검증하는 아이디어 실현의 출발점입니다."
            />
            <WithUsCard
              imageSrc="/images/with-us-3.png"
              title="중앙 해커톤"
              description="한 달 간의 개발 기간을 거쳐 서비스를 직접 구현하고 배포하는, 전국 최대 규모의 해커톤 행사입니다."
            />
            <WithUsCard
              imageSrc="/images/with-us-4.png"
              title="연합/기업 해커톤"
              description="대학 간 경계를 허무는 연합 해커톤 기획과 기업 솔루션 개발로 더 넓은 세상을 경험합니다."
            />
          </div>
        </div>
      </section>

      {/* News */}
      <section className="bg-gray-50 py-20 dark:bg-dark-bg-alt md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-12 lg:px-24">
          <div className="mb-12 md:mb-16">
            <SectionHeader
              icon
              title="News"
              subtitle="새로운 소식"
              className="text-blue-400"
            />
          </div>
        </div>
        <div className="scrollbar-hide flex gap-5 overflow-x-auto px-5 md:gap-6 md:px-12 lg:px-24">
          <NewsCard imageSrc="/images/news-1.png" alt="뉴스 1" />
          <NewsCard imageSrc="/images/news-2.png" alt="뉴스 2" />
          <NewsCard imageSrc="/images/news-3.png" alt="뉴스 3" />
          <NewsCard imageSrc="/images/news-4.png" alt="뉴스 4" />
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center gap-6 bg-blue-400 dark:bg-blue-700 px-5 py-20 md:gap-8 md:py-28">
        <h2 className="font-title-2 text-center text-pure-white text-pretty">
          함께 만들어갈
          <br />
          다음 이야기의 주인공
        </h2>
        <Link to="/apply">
          <Button className="bg-white dark:bg-pure-white text-blue-400 dark:text-blue-700 transition-colors duration-200 hover:bg-gray-100">
            14기 아기사자 지원하기
          </Button>
        </Link>
      </section>
    </div>
  );
}
