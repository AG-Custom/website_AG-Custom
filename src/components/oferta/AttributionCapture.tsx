"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/whatsapp";

/** Guarda a origem do anúncio (UTM, fbclid, gclid) para o código da mensagem do WhatsApp. */
export function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
