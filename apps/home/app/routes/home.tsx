import type { Route } from "./+types/home"
import { HomePage } from "~/page/home/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "멋쟁이사자처럼 신한대 | LIKELION SHINHAN" },
    { name: "description", content: "신한대학교 멋쟁이사자처럼 - 대학생들이 함께 성장하는 IT 창업 동아리" },
  ];
}

export default function Home() {
  return <HomePage />;
}
