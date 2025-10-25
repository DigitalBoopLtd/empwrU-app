"use client";
import * as RadixAvatar from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

export function Avatar({ className = "", ...props }) {
  return (
    <RadixAvatar.Root
      className={cn(
        "relative flex h-10 w-10 overflow-hidden rounded-full bg-white/40 backdrop-blur-sm border border-white/60",
        className
      )}
      {...props}
    />
  );
}

export function AvatarImage({ className = "", ...props }) {
  return (
    <RadixAvatar.Image
      className={cn("h-full w-full object-cover", className)}
      {...props}
    />
  );
}

export function AvatarFallback({ className = "", ...props }) {
  return (
    <RadixAvatar.Fallback
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-white/70 text-[#2D1115]",
        className
      )}
      {...props}
    />
  );
}

export default { Avatar, AvatarImage, AvatarFallback };


