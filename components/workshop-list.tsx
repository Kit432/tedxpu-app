"use client"; // Required because we have an onClick handler for the button

import { Users, MapPin, Clock, User } from "lucide-react";
import { workshops } from "@/lib/workshop-data";

export function WorkshopList() {
  const handleRegister = (workshopId: string) => {
    // PHASE 3: This is where the Supabase SQL transaction will fire
    console.log(`Triggering Supabase registration for workshop: ${workshopId}`);
    alert("Database integration pending in Phase 3.");
  };

  return (
    <div className="px-4 py-6 space-y-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight">
          Workshops
        </h1>
        <p className="text-sm text-neutral-500 mt-1">
          Reserve your seat for interactive sessions
        </p>
      </div>

      {/* Grid / List */}
      <div className="grid grid-cols-1 gap-4">
        {workshops.map((workshop) => {
          const isFull = workshop.registeredCount >= workshop.capacity;
          const seatsLeft = workshop.capacity - workshop.registeredCount;

          return (
            <div
              key={workshop.id}
              className="bg-white rounded-2xl border border-neutral-200/80 p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col"
            >
              <h3 className="text-lg font-semibold text-neutral-900 leading-snug mb-2">
                {workshop.title}
              </h3>
              
              <p className="text-sm text-neutral-600 leading-relaxed mb-4 flex-1">
                {workshop.description}
              </p>

              {/* Metadata */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center text-sm text-neutral-500">
                  <User className="w-4 h-4 mr-2 text-neutral-400" />
                  {workshop.instructor}
                </div>
                <div className="flex items-center text-sm text-neutral-500">
                  <Clock className="w-4 h-4 mr-2 text-neutral-400" />
                  {workshop.time}
                </div>
                <div className="flex items-center text-sm text-neutral-500">
                  <MapPin className="w-4 h-4 mr-2 text-neutral-400" />
                  {workshop.location}
                </div>
              </div>

              {/* Capacity & Action */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between mt-auto">
                <div className="flex items-center text-sm">
                  <Users className={`w-4 h-4 mr-1.5 ${isFull ? 'text-red-500' : 'text-emerald-500'}`} />
                  <span className={`font-medium ${isFull ? 'text-red-600' : 'text-emerald-600'}`}>
                    {isFull ? "Workshop Full" : `${seatsLeft} seats left`}
                  </span>
                  <span className="text-neutral-400 ml-1 text-xs">
                    ({workshop.registeredCount}/{workshop.capacity})
                  </span>
                </div>

                <button
                  //onClick={() => handleRegister(workshop.id)}
                  disabled={isFull}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    isFull
                      ? "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                      : "bg-neutral-900 text-white hover:bg-neutral-800 active:scale-95 shadow-sm"
                  }`}
                >
                  {isFull ? "Closed" : "Register"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}