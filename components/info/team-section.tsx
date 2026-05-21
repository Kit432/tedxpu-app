import Image from "next/image";
import { teamGroups } from "@/lib/info-data";

const posterLayouts = [
  {
    frame: "w-[78%] -rotate-7",
    caption: "ml-4 max-w-[78%]",
    spacing: "pt-1",
  },
  {
    frame: "ml-auto w-[82%] rotate-6",
    caption: "ml-auto mr-2 max-w-[82%]",
    spacing: "mt-8",
  },
  {
    frame: "w-[92%] -rotate-5",
    caption: "ml-2 max-w-[88%]",
    spacing: "mt-12",
  },
  {
    frame: "ml-auto w-[90%] rotate-4",
    caption: "ml-auto mr-1 max-w-[90%]",
    spacing: "mt-10",
  },
  {
    frame: "w-[84%] -rotate-4",
    caption: "ml-3 max-w-[84%]",
    spacing: "mt-10",
  },
  {
    frame: "ml-auto w-[88%] rotate-5",
    caption: "ml-auto max-w-[88%]",
    spacing: "mt-10",
  },
];

export function TeamSection() {
  return (
    <section className="overflow-hidden px-6 pb-24 pt-3">
      <h2 className="mb-4 text-[26px] font-semibold leading-none tracking-normal text-black">
        Meet the Team
      </h2>

      <div className="space-y-1">
        {teamGroups.map((group, index) => {
          const layout = posterLayouts[index % posterLayouts.length];

          return (
            <article key={group.slug} className={layout.spacing}>
              <div className={`relative aspect-[1.42/1] ${layout.frame}`}>
                <Image
                  src={group.image}
                  alt={`${group.name} photo group`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 430px) 360px, 390px"
                  priority={index < 2}
                />
              </div>

              <div className={`mt-2 text-[11px] leading-snug text-black ${layout.caption}`}>
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
