import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-evenly p-24">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/vercel.svg"
        alt="vercel Logo"
        width={180}
        height={37}
        priority
      />
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </main>
  );
}
