"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { homeLink } from "./links";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";

export function Modal({ children, preventClose }: { children: React.ReactNode; preventClose?: boolean }) {
  const router = useRouter();

  const handleOpenChange = () => {
    if (preventClose) return;
    router.push(homeLink);
  };

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogContent
        className={cn(preventClose && "[&>button]:hidden")}
        onInteractOutside={(e) => {
          if (preventClose) {
            e.preventDefault();
          }
        }}
      >
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  );
}
