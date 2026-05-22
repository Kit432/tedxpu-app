import Image from "next/image";
import { teamGroups } from "@/lib/info-data";

export function TeamSection() {
  return (
    <section className="overflow-hidden px-6 pb-24 pt-3">
      <h2 className="mb-4 text-[26px] font-semibold leading-none tracking-normal text-black">
        Meet the Team
      </h2>

      <div className="space-y-1">
        {teamGroups.map((group, index) => {
          const photoSizes = [
            "w-[calc(100vw-12px)] max-w-[420px]", // Curation
            "w-screen max-w-[600px]",             // Graphics & Design
            "w-screen max-w-[600px]",             // Marketing & IT
            "w-screen max-w-[560px]",             // Experience
            "w-screen max-w-[660px]",             // Speakers
            "w-screen max-w-[560px]",             // Sponsorships
          ];

          const photoSize = photoSizes[index] ?? "w-screen max-w-[520px]";

          return (
            <article
              key={group.slug}
              className={index === 0 ? "pt-1 text-center" : "mt-10 text-center"}
            >
              <div
                className={`relative left-1/2 aspect-[1.42/1] -translate-x-1/2 ${photoSize}`}
              >
                <Image
                  src={group.image}
                  alt={`${group.name} photo group`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 430px) 360px, 390px"
                  priority={index < 2}
                />

                {index === 1 ? (
                  <Image
                    src="/team/pencil.svg"
                    alt=""
                    width={686}
                    height={936}
                    className="absolute bottom-0 right-2 z-10 h-auto w-24"
                  />
                ) : null}

                {index === 0 ? (
                  <Image
                    src="/team/flower.svg"
                    alt=""
                    width={464}
                    height={612}
                    className="absolute -bottom-28 right-2 z-10 h-auto w-34"
                  />
                ) : null}
              </div>

              <div className="mx-auto mt-2 max-w-[88%] text-center text-[11px] leading-snug text-black">
                <p className="font-medium italic">{group.name.toLowerCase()}</p>
                <p className="mt-0.5">
                  {group.members.map((member, memberIndex) => (
                    <span
                      key={member.name}
                      className={member.director ? "font-semibold" : undefined}
                    >
                      {member.name}
                      {memberIndex < group.members.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
