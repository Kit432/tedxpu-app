import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-19 shrink-0 items-center px-5 pt-[env(safe-area-inset-top)]">
      <Link
        href="/"
        aria-label="TEDx Panteion University Sensorium home"
        className="flex w-full items-center justify-start gap-4"
      >
        <img
          src="/logos/tedxpu.svg"
          alt="TEDx Panteion University"
          className="h-11 w-auto shrink-0"
        />

        <img
          src="/logos/sensorium.svg"
          alt="Sensorium"
          className="h-13 w-auto shrink-0"
        />
      </Link>
    </header>
  );
}