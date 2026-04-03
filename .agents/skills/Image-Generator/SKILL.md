---
name: image-generator
description: >
  Generates 3 coordinated AI prompts for scroll-stopping video content: (1) clean product/object
  shot on pure white background at 16:9, (2) exploded/deconstructed version of the same object,
  and (3) a video transition that animates between assembled and deconstructed states. Works with
  any AI image generator (Midjourney, Flux, DALL-E, etc.) and any video model (Runway, Kling,
  Pika, Higgsfield, etc.). Delivers via a premium HTML page with tabbed navigation, one-click
  copy buttons, and confetti animation. Trigger when the user says "image generator", "scroll-stop
  prompt", "deconstruction prompt", "exploded view prompt", "product animation prompt", "asset
  prompts", or asks for prompts to create scroll-stopping video content from object imagery.
---

# Image Generator — Scroll-Stop Prompt Creator

You generate a coordinated set of **3 prompts** that work together to produce scroll-stopping
video content: a clean product shot on white, its deconstructed/exploded version, and a video
transition between them.

After generating the prompts, you deliver them in a beautiful HTML page with tabbed navigation,
one-click copy buttons, and confetti animation — so the user can instantly copy-paste each prompt
into their AI tool of choice.

---

## The Process

### Step 1: Confirm the Object

Ask the user what object or subject they want prompts for (if not already specified).

**Good scroll-stop subjects include:**
- Tech products — laptops, phones, headphones, cameras, drones
- Fashion/luxury — shoes, watches, bags, sunglasses
- Vehicles — cars, bikes, motorcycles
- Food & beverages — smoothies, cocktails, plated dishes
- Services/transformations — before/after states (e.g., dirty-to-clean pool, renovation, makeover)
- Any product with interesting internal components or dramatic visual states

Default to **laptop** if the user doesn't specify.

**Important:** Determine whether the object is a **product with internal components** (use deconstruction/exploded view) or a **transformation/service** (use before/after states). This changes how Prompts A, B, and C are written.

---

### Step 2: Generate Prompt A — The Hero Shot

This is the clean, hero image. **Always on pure white background.**

**For products (deconstruction approach):**

```
PROMPT A — ASSEMBLED SHOT

Professional product photography of a [OBJECT] centered in frame, shot from a [ANGLE] angle.
Clean white background (#FFFFFF), soft studio lighting with subtle shadows beneath the object.
The [OBJECT] is pristine, brand-new, fully assembled and complete.

Photorealistic rendering, 16:9 aspect ratio, product catalog quality. Sharp focus across the
entire object, subtle reflections on glossy surfaces. Minimal, elegant, Apple-style product
photography. No text, no logos, no other objects in frame.

Shot on Phase One IQ4 150MP, 120mm macro lens, f/8, studio strobe lighting with large softbox
above and white bounce cards on sides. Ultra-sharp detail, 8K quality downsampled to 4K.
```

**For transformations (before/after approach):**

```
PROMPT A — "BEFORE" STATE

Professional photography of a [OBJECT IN BEFORE STATE] centered in frame, shot from a [ANGLE]
angle. Clean white background (#FFFFFF) or white void environment extending to infinity.
[Describe the "before" state in vivid detail — textures, colors, condition, mood].

Photorealistic rendering, 16:9 aspect ratio. [Add state-specific details: grime, wear, mess,
disrepair, etc.]. Dramatic but clean composition — the subject is the only thing in frame.

Shot on Phase One IQ4 150MP, 120mm macro lens, f/8, studio strobe lighting. Ultra-sharp detail.
```

**Customize for the specific object:**
- Adjust camera angle (3/4 view works best for most products)
- Add material-specific details (brushed aluminum, matte plastic, leather texture, water droplets, etc.)
- Specify the exact state (laptop closed vs open, watch face visible, pool water color, etc.)
- **Keep it on white** — this is critical for the scroll-stop website build and clean video transitions

---

### Step 3: Generate Prompt B — The Transformed/Deconstructed Shot

**For products (exploded view):**

```
PROMPT B — DECONSTRUCTED / EXPLODED VIEW

Professional exploded-view product photography of a [OBJECT], deconstructed into its individual
components, all floating in space against a clean white background (#FFFFFF).

Every internal component is visible and separated: [LIST 8-15 SPECIFIC COMPONENTS].
Each piece floats with even spacing, maintaining the general spatial relationship of where
they sit in the assembled product. The arrangement follows a vertical or diagonal explosion axis.

Soft studio lighting with subtle shadows on each floating piece. Components are pristine and
detailed — you can see textures, screws, ribbon cables, circuit traces. The overall composition
maintains the silhouette/outline of the original object.

Photorealistic rendering, 16:9 aspect ratio, technical illustration meets product photography.
Shot on Phase One IQ4 150MP, focus-stacked for sharpness across all floating elements.
Same lighting setup as the assembled shot for visual continuity.
```

**For transformations (after state):**

```
PROMPT B — "AFTER" STATE

Professional photography of a [OBJECT IN AFTER STATE] centered in frame, shot from the SAME
angle as Prompt A. Clean white background (#FFFFFF) or white void environment.
[Describe the "after" state in vivid detail — pristine, transformed, elevated].

The transformation should be dramatic and unmistakable. Same subject, same angle, completely
different condition. [Add state-specific details: gleaming surfaces, vibrant colors, perfection].

Photorealistic rendering, 16:9 aspect ratio. Same lighting, same camera position as Prompt A —
only the subject's state has changed. This visual continuity is essential for the video transition.
```

**Component lists for common products:**

- **Laptop:** Aluminum unibody shell, LCD display panel with ribbon cable, keyboard deck, trackpad module with haptic engine, battery cells, logic board with visible chips, SSD module, fan assembly with heat pipe, speaker modules (L+R), hinge mechanism, bottom case, rubber feet and screws, WiFi antenna array, camera module
- **Phone:** Glass back panel, battery, OLED display, logic board, camera module array, SIM tray, speaker grille, Taptic engine, USB-C port assembly, antenna bands, frame/chassis, face ID sensor, wireless charging coil
- **Shoe:** Outer sole, midsole cushioning, insole, upper mesh/leather panels, tongue, laces, heel counter, toe cap, eyelets, stitching thread, branding elements
- **Food/beverages:** Use "explosion" style — glass shatters, liquid erupts, ingredients fly outward in a freeze-frame. List every ingredient, garnish, ice cube, glass shard, liquid splash. Emphasize high-speed photography style (1/10000s freeze).

For other objects, research and list 8-15 real internal components or transformation details.

---

### Step 4: Generate Prompt C — The Video Transition

```
PROMPT C — VIDEO TRANSITION (Start Frame -> End Frame)

START FRAME: [Describe Prompt A's final image — the assembled/before state on white background]

END FRAME: [Describe Prompt B's final image — the deconstructed/after state on white background]

TRANSITION: Smooth, satisfying [deconstruction/transformation] animation. The [object] begins
[in start state] and still. After a brief pause (0.5s), [describe the specific motion]:

[FOR PRODUCTS]: Pieces begin to separate — starting from the outer shell and progressively
revealing inner components. Each piece lifts and floats outward along clean, deliberate paths.
Movement is eased (slow-in, slow-out) with slight rotations on individual pieces to reveal
their 3D form. The separation happens over 2-3 seconds in a cascading sequence, not all at once.
Final floating arrangement holds for 1 second.

[FOR TRANSFORMATIONS]: The transformation happens progressively — [describe the specific
visual change: color shifting, grime dissolving, surfaces becoming pristine, etc.]. The change
sweeps across the subject in a satisfying reveal. Movement is smooth and deliberate.

STYLE: Photorealistic, white background throughout, consistent studio lighting. No camera
movement — locked-off tripod shot. The only motion is the [deconstruction/transformation].
Satisfying, ASMR-like precision. Think Apple product reveal meets engineering visualization.

DURATION: 5-6 seconds total.
ASPECT RATIO: 16:9
QUALITY: High fidelity, smooth 24fps or higher, no artifacts.
```

**Variations to always offer:**
- **Reverse version** — Start deconstructed/after, end assembled/before (equally compelling)
- **Loop version** — Forward then backward, seamless loop
- **Slow-mo version** — Same animation at 8-10 seconds for cinematic feel

---

### Step 5: Build and Open the HTML Prompt Page

After generating all 3 prompts, deliver them in a premium HTML page. **This is the primary deliverable.**

**How to build it:**

1. Read the HTML template from `assets/prompt-page-template.html` (in this skill's directory)

2. Replace these placeholders with the actual content:
   - `{{OBJECT_NAME}}` — the object name for the page title
   - `{{HEADING_LINE1}}` — first word(s) of the heading
   - `{{HEADING_LINE2}}` — second word(s), displayed faded
   - `{{TAB_A_NAME}}` — name for tab A
   - `{{TAB_A_SHORT}}` — short mobile label for tab A
   - `{{TAB_B_NAME}}` — name for tab B
   - `{{TAB_B_SHORT}}` — short mobile label for tab B
   - `{{PROMPT_A}}` — the full text of Prompt A (plain text, no HTML)
   - `{{PROMPT_B}}` — the full text of Prompt B (plain text, no HTML)
   - `{{PROMPT_C}}` — the full text of Prompt C (plain text, no HTML)

3. **Important**: Escape any `<`, `>`, and `&` characters as HTML entities

4. Write the completed HTML to `prompts.html` in the user's current working directory

5. Open the file in the browser: `open prompts.html` (macOS) or `xdg-open prompts.html` (Linux)

---

### Step 6: Present Prompts in Chat

After building the HTML page, also present the prompts in chat as a fallback:

```
## Your Scroll-Stop Prompt Set: [OBJECT]

### PROMPT A — [Hero Shot / Before State]
[paste into your image generator, set to 16:9]

{prompt A}

---

### PROMPT B — [Deconstructed / After State]
[paste into your image generator, set to 16:9, optionally reference Prompt A's output]

{prompt B}

---

### PROMPT C — Video Transition
[paste into your video model, upload Prompt A as start frame and Prompt B as end frame]

{prompt C}

---

### Recommended Settings
- **Image generator**: 16:9 aspect ratio, highest quality/resolution available
- **Video model**: 16:9, 5-6 seconds, highest quality
- **Tip**: Generate the hero shot first, then reference it when generating the second image
  for visual consistency (same color, lighting, angle)
```

---

## Best Practices

1. **Consistency is key** — Both images must look like the same object. Same materials, colors, lighting direction, camera angle.
2. **White background always** — Pure #FFFFFF, no gradient, no vignette.
3. **Component/detail accuracy matters** — Use real components for products, real transformation details for services.
4. **The video prompt is model-agnostic** — Works in Runway, Kling, Pika, Higgsfield, or any other video model.
5. **Always offer the reverse** — Assembly animations or reverse transformations can be even more compelling.
6. **The HTML page is the primary deliverable** — The chat output is secondary.
7. **Adapt the framework** — Products get deconstruction. Services get before/after. Food gets explosion.

---

## Error Recovery

| Issue | Solution |
|---|---|
| Image gen produces inconsistent lighting | Add "match exact lighting direction and intensity from reference image" to Prompt B |
| Deconstruction looks random | Emphasize "maintain spatial relationships" and "explosion along single axis" |
| Video transition too fast/jerky | Increase duration to 8-10 seconds, emphasize "smooth eased motion" |
| Components don't look realistic | Add specific material descriptions (brushed aluminum, matte black plastic, green PCB) |
| White background isn't pure white | Add "pure white #FFFFFF background, no gradient, no vignette" explicitly |
| Before/after images don't match angle | Copy the exact camera description from Prompt A into Prompt B verbatim |
| HTML page doesn't open | Fall back to `open <filepath>` command |
| Prompt contains HTML special chars | Always escape `<`, `>`, `&` when inserting into the template |
