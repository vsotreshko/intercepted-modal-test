"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { homeLink } from "./links";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  // if (!pathname.endsWith("login") && !pathname.endsWith("register")) {
  //   return null; // Don't render the modal if not on the intercepted route
  // }

  // useEffect(() => {
  //   if (!dialogRef.current?.open) {
  //     dialogRef.current?.showModal();
  //   }
  // }, []);

  function onDismiss() {
    router.push(homeLink);
  }

  return createPortal(
    <div className="modal-backdrop">
      <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
        {children}
        <button onClick={onDismiss} className="close-button" />
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
