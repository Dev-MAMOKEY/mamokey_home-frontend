import { Button, TextArea, TextInput } from "@mamokey/ui";

export function ApplyPage() {
  const checkboxClasses = "size-4 shrink-0 accent-blue-500";

  return (
    <div className="flex min-h-screen flex-col bg-pure-white dark:bg-dark-bg">
      {/* Header */}
      <div className="relative overflow-hidden px-5 pb-16 pt-8 md:pb-20 md:pt-16">
        <div className="absolute -right-1/4 -top-1/3 h-[60vw] w-[60vw] rounded-full bg-blue-200/70 blur-[100px] dark:bg-blue-800/20" aria-hidden="true" />
        <div className="relative mx-auto max-w-170">
          <p className="animate-fade-up font-label-2 mb-4 tracking-[0.2em] text-gray-500 uppercase dark:text-gray-600">Application</p>
          <h1 className="animate-fade-up font-title-2 text-black dark:text-white" style={{ animationDelay: "0.1s" }}>14기 아기사자 지원서</h1>
          <p className="animate-fade-up font-body-2 mt-3 text-gray-600 dark:text-gray-400" style={{ animationDelay: "0.2s" }}>
            멋쟁이사자처럼 신한대와 함께 성장할 아기사자를 모집합니다.
          </p>
        </div>
      </div>

      {/* Form */}
      <section className="mx-auto flex w-full max-w-170 flex-col gap-14 px-5 pb-20 md:gap-16 md:px-0">
        <div className="h-px bg-gray-200 dark:bg-gray-800" />

        {/* 파트 선택 */}
        <fieldset className="flex flex-col gap-5">
          <legend className="font-title-4 text-black dark:text-white">지원 파트를 선택해주세요.</legend>
          <div className="mt-1 flex flex-col gap-3">
            <label className="font-body-2 flex cursor-pointer items-center gap-3 text-gray-700 dark:text-gray-300">
              <input type="checkbox" name="part" value="pm-design" className={checkboxClasses} />
              기획/디자인
            </label>
            <label className="font-body-2 flex cursor-pointer items-center gap-3 text-gray-700 dark:text-gray-300">
              <input type="checkbox" name="part" value="frontend" className={checkboxClasses} />
              프론트엔드
            </label>
            <label className="font-body-2 flex cursor-pointer items-center gap-3 text-gray-700 dark:text-gray-300">
              <input type="checkbox" name="part" value="backend" className={checkboxClasses} />
              백엔드
            </label>
          </div>
        </fieldset>

        {/* 활동 경험 */}
        <fieldset className="flex flex-col gap-5">
          <legend className="font-title-4 text-black dark:text-white">
            IT 관련 활동 경험이 있으신가요?
          </legend>
          <div className="mt-1 flex flex-col gap-3">
            <label className="font-body-2 flex cursor-pointer items-center gap-3 text-gray-700 dark:text-gray-300">
              <input type="radio" name="experience" value="yes" className={checkboxClasses} />
              네, 있습니다.
            </label>
            <label className="font-body-2 flex cursor-pointer items-center gap-3 text-gray-700 dark:text-gray-300">
              <input type="radio" name="experience" value="no" className={checkboxClasses} />
              아니요, 없습니다.
            </label>
          </div>
        </fieldset>

        {/* 기대 가치 */}
        <fieldset className="flex flex-col gap-5">
          <legend className="font-title-4 text-black dark:text-white">
            멋쟁이사자처럼에서 기대하는 가치는 무엇인가요?
          </legend>
          <div className="mt-1 flex flex-col gap-3">
            <label className="font-body-2 flex cursor-pointer items-center gap-3 text-gray-700 dark:text-gray-300">
              <input type="checkbox" name="value" value="growth" className={checkboxClasses} />
              성장
            </label>
            <label className="font-body-2 flex cursor-pointer items-center gap-3 text-gray-700 dark:text-gray-300">
              <input type="checkbox" name="value" value="networking" className={checkboxClasses} />
              네트워킹
            </label>
            <label className="font-body-2 flex cursor-pointer items-center gap-3 text-gray-700 dark:text-gray-300">
              <input type="checkbox" name="value" value="portfolio" className={checkboxClasses} />
              포트폴리오
            </label>
            <label className="font-body-2 flex cursor-pointer items-center gap-3 text-gray-700 dark:text-gray-300">
              <input type="checkbox" name="value" value="experience" className={checkboxClasses} />
              경험
            </label>
          </div>
        </fieldset>

        <div className="h-px bg-gray-200 dark:bg-gray-800" />

        {/* 경험/성장 */}
        <div className="flex flex-col gap-4">
          <label htmlFor="growth" className="font-title-4 text-black dark:text-white">
            본인의 경험과 성장 과정을 자유롭게 서술해주세요.
          </label>
          <TextArea
            id="growth"
            name="growth"
            rows={6}
            placeholder="내용을 입력해주세요…"
          />
        </div>

        {/* 협업 경험 */}
        <div className="flex flex-col gap-4">
          <label htmlFor="collaboration" className="font-title-4 text-black dark:text-white">
            팀 프로젝트 또는 협업 경험에 대해 서술해주세요.
          </label>
          <TextArea
            id="collaboration"
            name="collaboration"
            rows={6}
            placeholder="내용을 입력해주세요…"
          />
        </div>

        {/* 지원 동기 */}
        <div className="flex flex-col gap-4">
          <label htmlFor="motivation" className="font-title-4 text-black dark:text-white">
            멋쟁이사자처럼 신한대에 지원하게 된 동기를 서술해주세요.
          </label>
          <TextArea
            id="motivation"
            name="motivation"
            rows={6}
            placeholder="내용을 입력해주세요…"
          />
        </div>

        <div className="h-px bg-gray-200 dark:bg-gray-800" />

        {/* 개인정보 */}
        <div className="flex flex-col gap-6">
          <h3 className="font-title-4 text-black dark:text-white">개인정보</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <div className="flex flex-col gap-2.5">
              <label htmlFor="applicant-name" className="font-label-2 text-gray-600 dark:text-gray-400">이름</label>
              <TextInput
                id="applicant-name"
                name="applicant-name"
                autoComplete="name"
                placeholder="이름을 입력해주세요…"
                // className={inputClasses}
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="department" className="font-label-2 font-medium text-gray-600 dark:text-gray-400">학과</label>
              <TextInput
                id="department"
                name="department"
                readOnly
                placeholder="사이버캠퍼스에서 불러오는 중…"
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="student-id" className="font-label-2 font-medium text-gray-600 dark:text-gray-400">학번</label>
              <TextInput
                id="student-id"
                name="student-id"
                readOnly
                placeholder="사이버캠퍼스에서 불러오는 중…"
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="grade" className="font-label-2 font-medium text-gray-600 dark:text-gray-400">학년</label>
              <select
                id="grade"
                name="grade"
                defaultValue=""
                className="w-full appearance-none rounded-[12.75px] bg-gray-100 px-3.5 py-[10.5px] font-label-2 text-black outline-none dark:bg-gray-900 dark:text-gray-50"
              >
                <option value="" disabled>학년을 선택해주세요…</option>
                <option value="1">1학년</option>
                <option value="2">2학년</option>
                <option value="3">3학년</option>
                <option value="4+">4학년 이상</option>
              </select>
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="phone" className="font-label-2 font-medium text-gray-600 dark:text-gray-400">핸드폰</label>
              <TextInput
                id="phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="010-0000-0000"
                // className={inputClasses}
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="email" className="font-label-2 font-medium text-gray-600 dark:text-gray-400">이메일</label>
              <TextInput
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                spellCheck={false}
                placeholder="example@email.com"
                // className={inputClasses}
              />
            </div>
          </div>
        </div>

        {/* 개인정보 처리 방침 */}
        <div className="flex flex-col gap-4">
          <h3 className="font-title-4 text-black dark:text-white">개인정보 처리 방침</h3>
          <div className="font-body-2 max-h-50 overflow-y-auto rounded-lg border border-gray-200 p-4 text-gray-500 dark:border-gray-900 dark:text-white md:p-5">
            <p>
              멋쟁이사자처럼 신한대는 지원자의 개인정보를 모집 및 선발 목적으로만
              수집·이용하며, 목적 달성 후 즉시 파기합니다. 수집 항목: 이름, 학과,
              연락처, 이메일. 개인정보 제공에 동의하지 않을 권리가 있으나, 미동의
              시 지원이 제한됩니다.
            </p>
          </div>
          <label className="font-body-2 flex cursor-pointer items-center gap-3 text-gray-700 dark:text-gray-300">
            <input type="checkbox" name="privacy" className={checkboxClasses} />
            개인정보 수집 및 이용에 동의합니다.
          </label>
        </div>

        {/* 제출 버튼 */}
        <Button
          type="submit"
          className="w-full bg-blue-500 py-4 text-pure-white transition-colors duration-200 hover:bg-blue-600"
        >
          지원서 제출하기
        </Button>
      </section>
    </div>
  );
}