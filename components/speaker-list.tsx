import { FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";
import { speakers } from "@/lib/speaker-data";

export function SpeakerList() {
  return (
    <div className="px-4 py-6 space-y-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight">
          Speakers
        </h1>
        <p className="text-sm text-neutral-500 mt-1">
          Voices shaping the future
        </p>
      </div>

      {/* Grid / List */}
      <div className="grid grid-cols-1 gap-4">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="bg-white rounded-2xl border border-neutral-200/80 p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          >
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-neutral-100 shrink-0 overflow-hidden border border-neutral-200">
                {speaker.imageUrl ? (
                  <img
                    src={speaker.imageUrl}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-neutral-400 font-semibold text-xl">
                    {speaker.name.charAt(0)}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-neutral-900 truncate">
                  {speaker.name}
                </h3>
                <p className="text-sm font-medium text-red-600 mb-2 truncate">
                  {speaker.headline}
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  {speaker.bio}
                </p>

                {/* Social Links */}
                {speaker.socials && (
                  <div className="flex gap-3">
                    {speaker.socials.twitter && (
                      <a href={speaker.socials.twitter} className="text-neutral-400 hover:text-sky-500 transition-colors">
                        <FaTwitter className="w-4 h-4" />
                      </a>
                    )}
                    {speaker.socials.linkedin && (
                      <a href={speaker.socials.linkedin} className="text-neutral-400 hover:text-blue-700 transition-colors">
                        <FaLinkedin className="w-4 h-4" />
                      </a>
                    )}
                    {speaker.socials.website && (
                      <a href={speaker.socials.website} className="text-neutral-400 hover:text-neutral-900 transition-colors">
                        <FaGlobe className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}