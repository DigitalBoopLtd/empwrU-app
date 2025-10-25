import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Calculate typing duration based on message length
 * Simulates natural reading/typing speed
 */
export function calculateTypingTime(message) {
  const words = message.split(' ').length;
  const baseTime = 800; // minimum pause
  const timePerWord = 200; // ~300 words/min = 200ms per word
  const maxTime = 4000; // cap at 4 seconds for very long messages
  
  return Math.min(baseTime + (words * timePerWord), maxTime);
}

/**
 * Calculate pause duration after user response
 */
export function calculateResponsePause() {
  return 600; // brief pause to feel natural
}
