"use client";

import { useHandleRedirectResult } from "@/lib/auth";

export default function RedirectHandler() {
  useHandleRedirectResult();
  return null;
}
