# Verification — 17 October 2026

## Current revision: compact studio opening

- Removed all sticky hero, room background, scene-toggle, and room-transition elements/styles. No architectural-room request is made by the revised page.
- Desktop hero: 820 px in a 1000 px viewport, reduced from 1750 px. Compact mobile hero: 568 px in a 568 px viewport. Standard mobile hero: 770 px in an 844 px viewport. No horizontal overflow in the inspected layouts.
- Wheel scrolling directly over the rendered chair moved the page 500 px and the hero to -500 px, confirming normal document flow and no input capture.
- Inline presentation has no camera controls. Full interaction is explicitly opened through the 3D viewer.
- The leather-and-wood chair and stone-and-metal table load from their new local GLB files. New `?modelo=atelier` and existing `?modelo=mesa` links open the corresponding upgraded models.
- The hero uses a bounded turntable oscillation (±0.18 radians) around the front presentation angle. Pause stops the angle; reduced-motion mode removes automatic motion and its pause control.
- Supersampled posters, collection/store images, credits, source notes, and the social cover updated.
- Production build and TypeScript validation pass. Final axe WCAG 2 A/AA and 2.1 AA scan reports zero violations after the entrance animation. Healthy production browser session reports no runtime errors.

## Initial redesign checks (historical hero behaviour below)


The final source was compiled with `npm run build`. The production server is available locally at http://127.0.0.1:3001.

Verified:

- Production compilation and TypeScript validation pass; `git diff --check` passes.
- All five public pages, the social cover, room background, and both showcased GLB files return HTTP 200.
- Desktop (1440 × 1000), tablet (768 × 1024), mobile (390 × 844), and compact mobile (320 × 568) layouts inspected. No horizontal overflow; mobile hero fits the initial viewport.
- Hero rotation responds to dragging (camera theta changed from -0.489 to -1.623 radians); real material variants switch.
- Studio/room controls and scroll transition work. Reduced-motion mode removes the extended sticky sequence.
- Both showcased models load. A deliberately aborted table request displays an error, and retry recovers using a fresh model URL.
- Model query links open the correct model. Desktop AR action generates a local QR code. Escape closes the QR panel before closing the viewer. Closing the viewer restores focus to its opener.
- Mobile navigation, process expansion, and FAQ expansion work.
- Browser validation blocks an incomplete contact form before any request. A mocked provider failure preserves field values and permits retry. A mocked success shows the confirmation and focuses it. No real enquiry was sent.
- Analytics is absent before consent. Accepting enables its event hook; choosing essentials afterwards makes that hook cancel events. Preferences can be reopened from the footer.
- axe-core 4.14.0, WCAG 2 A/AA and WCAG 2.1 AA rule sets: zero violations in the final homepage scan after the entrance animation completed. This is an automated scan, not a claim of comprehensive accessibility conformance.
- Healthy production browser session reports no runtime errors.

Not verified externally: Web3Forms mailbox delivery, deployed hosting configuration, and physical-phone camera/AR behaviour. The contact provider configuration is preserved from the original repository. AR availability depends on the actual device/browser and HTTPS.
