import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="z-30 flex h-[clamp(58px,10dvh,74px)] shrink-0 items-center overflow-visible px-[clamp(14px,4vw,22px)] pt-[env(safe-area-inset-top)]">
      <Link
        href="/"
        aria-label="TEDx Panteion University Sensorium home"
        className="flex w-full min-w-0 items-center gap-[clamp(18px,2.8vw,14px)] overflow-visible"
      >
        <Image
          src="/logos/tedxpu.svg"
          alt="TEDx Panteion University"
          width={180}
          height={48}
          className="h-[clamp(48px,5vw,25px)] max-w-[58%] shrink-0 object-contain"
          draggable={false}
        />

        <Image
          src="/logos/sensorium.svg"
          alt="Sensorium"
          width={180}
          height={50}
          className="h-auto max-h-[clamp(34px,11vw,50px)] min-w-0 flex-1 object-contain object-left"
          draggable={false}
        />
      </Link>
    </header>
  );
}
