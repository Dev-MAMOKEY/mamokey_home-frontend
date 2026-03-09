import type { Route } from "./+types/apply"
import { ApplyPage } from "~/page/apply/apply";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "지원하기 | 멋쟁이사자처럼 신한대" },
    { name: "description", content: "멋쟁이사자처럼 신한대 14기 아기사자 지원서" },
  ];
}

export default function Apply() {
  return <ApplyPage />;
}
