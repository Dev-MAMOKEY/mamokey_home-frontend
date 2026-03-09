import { Link } from "react-router";

import { Button, SectionHeader } from "@mamokey/ui";

import { TargetItem } from "./(components)/TargetItem";
import { PartCard } from "./(components)/PartCard";
import { ScheduleCard } from "./(components)/ScheduleCard";
import { ActivityPlanCard } from "./(components)/ActivityPlanCard";

export function RecruitPage() {
  return (
    <div className="flex flex-col bg-pure-white dark:bg-dark-bg">
      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-5 md:min-h-[calc(100vh-5rem)]">
        <img
          src="/images/hero-bg.png"
          className="absolute w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="relative flex flex-col items-center gap-6 md:gap-8">
          <h1 className="animate-fade-up font-title-1 text-center text-black dark:text-white">
            RECRUIT
          </h1>
          <p className="animate-fade-up font-body-1 max-w-md lg:max-w-xl text-center text-gray-700 dark:text-gray-400" style={{ animationDelay: "0.1s" }}>
            멋사신한과 함께할 아기사자를 모집합니다!
          </p>
          <Link to="/apply" className="text-pure-white">
            <Button className="bg-blue-500 transition-colors duration-200 hover:bg-blue-600 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              지원하기
            </Button>
          </Link>
        </div>
      </section>

      {/* Target */}
      <section className="px-5 py-20 md:px-12 md:py-28 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 md:mb-16">
            <SectionHeader
              icon
              title="Target"
              subtitle="이런 분들을 찾고 있어요"
              className="text-blue-700 dark:text-blue-400"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-5">
            <TargetItem
              step="01"
              title="모든 학번"
              description="전공, 학번에 상관없이 누구나 지원 가능합니다."
            />
            <TargetItem
              step="02"
              title="수료 조건"
              description="출석률 80% 이상, 과제 제출 필수입니다."
            />
            <TargetItem
              step="03"
              title="오프라인 모임"
              description="매주 오프라인 정기 모임에 참여해야 합니다."
            />
          </div>
        </div>
      </section>

      {/* Part */}
      <section className="bg-gray-50 px-5 py-20 dark:bg-dark-bg-alt md:px-12 md:py-28 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 md:mb-16">
            <SectionHeader
              icon
              title="Part"
              subtitle="세 가지 파트로 운영돼요"
              className="text-blue-700 dark:text-blue-400"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-5">
            <PartCard title="기획/디자인" subtitle="PM / Designer" />
            <PartCard title="프론트엔드" subtitle="Frontend" />
            <PartCard title="백엔드" subtitle="Backend" />
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="px-5 py-20 md:px-12 md:py-28 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 md:mb-16">
            <SectionHeader
              icon
              title="Schedule"
              subtitle="모집 일정을 확인하세요"
              className="text-blue-700 dark:text-blue-400"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
            <ScheduleCard step="01" title="서류 지원" date="03.01 ~ 03.14" />
            <ScheduleCard step="02" title="1차 합격 발표" date="03.17" />
            <ScheduleCard step="03" title="면접" date="03.19 ~ 03.21" />
            <ScheduleCard step="04" title="합격자 발표" date="03.24" />
          </div>
        </div>
      </section>

      {/* Activity Plan */}
      <section className="bg-gray-50 px-5 py-20 dark:bg-dark-bg-alt md:px-12 md:py-28 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 md:mb-16">
            <SectionHeader
              icon
              title="Activity Plan"
              subtitle="함께할 여정을 미리 살펴보세요"
              className="text-blue-700 dark:text-blue-400"
            />
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-lg border border-gray-200 dark:border-gray-900 md:block">
            <div className="flex flex-col">
              <div className="flex">
                <ActivityPlanCard label="월" variant="header" />
                <ActivityPlanCard label="활동 내용" variant="header" />
                <ActivityPlanCard label="비고" variant="header" />
              </div>
              <div className="flex">
                <ActivityPlanCard label="3월" variant="primary" />
                <ActivityPlanCard label="OT 및 팀 빌딩" variant="secondary" />
                <ActivityPlanCard label="" variant="secondary" />
              </div>
              <div className="flex">
                <ActivityPlanCard label="4월" variant="primary" />
                <ActivityPlanCard label="파트별 스터디" variant="secondary" />
                <ActivityPlanCard label="아이디어톤" variant="secondary" />
              </div>
              <div className="flex">
                <ActivityPlanCard label="5월" variant="primary" />
                <ActivityPlanCard label="파트별 스터디" variant="secondary" />
                <ActivityPlanCard label="중앙 해커톤" variant="secondary" />
              </div>
            </div>
          </div>

          {/* Mobile card layout */}
          <div className="flex flex-col gap-4 md:hidden">
            <div className="flex flex-col gap-3 rounded-lg border border-gray-200 p-5 dark:border-gray-900">
              <span className="font-title-4 text-blue-700 dark:text-blue-300">3월</span>
              <p className="font-body-2 text-gray-700 dark:text-gray-300">OT 및 팀 빌딩</p>
            </div>
            <div className="flex flex-col gap-3 rounded-lg border border-gray-200 p-5 dark:border-gray-900">
              <span className="font-title-4 text-blue-700 dark:text-blue-300">4월</span>
              <p className="font-body-2 text-gray-700 dark:text-gray-300">파트별 스터디</p>
              <span className="font-label-2 inline-block self-start rounded-full bg-blue-50 px-3 py-1 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">아이디어톤</span>
            </div>
            <div className="flex flex-col gap-3 rounded-lg border border-gray-200 p-5 dark:border-gray-900">
              <span className="font-title-4 text-blue-700 dark:text-blue-300">5월</span>
              <p className="font-body-2 text-gray-700 dark:text-gray-300">파트별 스터디</p>
              <span className="font-label-2 inline-block self-start rounded-full bg-blue-50 px-3 py-1 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">중앙 해커톤</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center gap-6 bg-blue-700 px-5 py-20 md:gap-8 md:py-28">
        <h2 className="font-title-2 text-center text-pure-white text-pretty">
          지금 바로
          <br />
          지원하세요
        </h2>
        <Link to="/apply">
          <Button className="bg-pure-white text-blue-700 transition-colors duration-200 hover:bg-gray-100">
            14기 아기사자 지원하기
          </Button>
        </Link>
      </section>
    </div>
  );
}