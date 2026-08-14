import Script from "next/script"

import { BOOKING_URL } from "@/lib/booking"

const calLink = "gokul-fameix/aulukya-fire-safety-client-consultation-meeting"

export function CalInline() {
  return (
    <>
      <div
        id="my-cal-inline"
        className="h-[720px] w-full overflow-auto rounded-2xl bg-white sm:h-[760px]"
      />
      <noscript>
        <p className="py-6 text-center">
          JavaScript is required to show the calendar. You can instead{" "}
          <a
            className="font-semibold text-primary underline"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            book your free consultation on Cal.com
          </a>
          .
        </p>
      </noscript>
      <Script id="cal-inline-init" strategy="afterInteractive">
        {`
          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://cal.id/embed-link/embed.js", "init");
          Cal("init", "default", {origin:"https://cal.id"});
          Cal.ns["default"]("inline", {
            elementOrSelector:"#my-cal-inline",
            config: {"layout":"month_view"},
            calLink: "${calLink}",
          });
          Cal.ns["default"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#007ee5"},"dark":{"cal-brand":"#fafafa"}},"hideEventTypeDetails":false,"layout":"month_view"});
        `}
      </Script>
    </>
  )
}
