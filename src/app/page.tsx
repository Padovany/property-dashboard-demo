import { redirect } from "next/navigation";

export default function Home() {
  // In this demo, our home page is the dashboard, but we could add a landing page here, with property info and configuration, etc.
  redirect("/dashboard");
}
