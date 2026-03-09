import type { Route } from "./+types/recruit"
import { RecruitPage } from "~/page/recruit/recruit";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "모집 안내 | 멋쟁이사자처럼 신한대" },
    { name: "description", content: "멋쟁이사자처럼 신한대 14기 아기사자 모집 안내" },
  ];
}

export default function Recruit() {
  return <RecruitPage />;
}
