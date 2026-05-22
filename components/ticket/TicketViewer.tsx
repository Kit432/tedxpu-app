"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const CLOSE_DISTANCE = 64;
const EXIT_DELAY = 320;

export function TicketViewer() {
  const router = useRouter();
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const startYRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const pointerMovedRef = useRef(false);

  function closeTicket() {
    if (isExiting) {
      return;
    }

    setIsExiting(true);
    window.setTimeout(() => {
      router.push("/");
    }, EXIT_DELAY);
  }

  function handlePointerDown(event: React.PointerEvent<HTMLButtonElement>) {
    if (isExiting) {
      return;
    }

    startYRef.current = event.clientY;
    pointerMovedRef.current = false;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLButtonElement>) {
    if (!isDragging || isExiting) {
      return;
    }

    const distance = Math.max(0, event.clientY - startYRef.current);

    if (distance > 6) {
      pointerMovedRef.current = true;
    }

    dragOffsetRef.current = distance;
    setDragOffset(distance);
  }

  function handlePointerEnd() {
    if (!isDragging || isExiting) {
      return;
    }

    setIsDragging(false);

    if (dragOffsetRef.current >= CLOSE_DISTANCE) {
      closeTicket();
      return;
    }

    dragOffsetRef.current = 0;
    setDragOffset(0);
  }

  function handleClick() {
    if (pointerMovedRef.current) {
      window.setTimeout(() => {
        pointerMovedRef.current = false;
      }, 0);
      return;
    }

    closeTicket();
  }

  return (
    <div
      className={[
        "animate-ticket-slide-up relative mx-auto flex w-full max-w-[380px] justify-center",
        isDragging ? "transition-none" : "transition-transform duration-200 ease-out",
        isExiting ? "animate-ticket-slide-down" : "",
      ].join(" ")}
      style={dragOffset > 0 && !isExiting ? { transform: `translateY(${dragOffset}px)` } : undefined}
    >
      <Image
        src="/ticket/ticket.svg"
        alt="TEDx Panteion University Sensorium ticket"
        width={380}
        height={760}
        className="h-auto w-full select-none"
        draggable={false}
      />
      <button
        type="button"
        aria-label="Close ticket"
        className="absolute left-0 top-0 h-[28%] w-full cursor-pointer touch-none bg-transparent"
        onClick={handleClick}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
      />
    </div>
  );
}
