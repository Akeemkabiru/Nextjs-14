import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "about",
  description: "This is an about us page",
};

export default function About() {
  return (
    <h1>
      <Link href="/profile">Profile</Link>
    </h1>
  );
}
