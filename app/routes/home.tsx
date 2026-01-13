import type { Route } from "./+types/home";
import { Login } from "~/login/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Crawlies Browser Game" },
    { name: "description", content: "Login page for the Crawlies browser game!" },
  ];
}

export default function Home() {
  return <Login />;
}
