# Clause Bright

{

  "section": "hero",

  "background": "#140009",

  "container": {

    "desktop": {

      "maxWidth": "1224px",

      "border": "1px solid #4d0020",

      "borderSides": ["left", "right"],

      "marginX": "auto"

    },

    "mobile": {

      "maxWidth": "100%",

      "edgeInset": "8px",

      "border": "1px solid #4d0020"

    }

  },

  "navbar": {

    "height": { "desktop": "96px", "mobile": "64px" },

    "paddingX": { "desktop": "96px", "mobile": "16px" },

    "background": "transparent (over image at top of page)",

    "border": { "bottom": "1px solid #4d0020" },

    "logo": {

      "text": "Clause",

      "superscript": "LF",

      "color": "#ecebd8",

      "fontFamily": "sans-serif (grotesk)",

      "fontWeight": 700,

      "fontSize": { "desktop": "20px", "mobile": "18px" }

    },

    "links": {

      "items": ["HOME", "SERVICES", "ABOUT US", "NEWS", "OFFICES"],

      "fontFamily": "sans-serif (grotesk)",

      "fontSize": "13px",

      "letterSpacing": "0.08em",

      "textTransform": "uppercase",

      "color": "#ecebd8",

      "gap": "40px",

      "visibleOnScroll": {

        "addButton": "BOOK A CONSULT",

        "buttonStyle": "outlined, border 1px solid #eb006a, text #ecebd8, uppercase, small arrow icon right"

      }

    },

    "mobile": {

      "collapsedIcon": "hamburger (3 lines)",

      "openState": {

        "overlay": true,

        "overlayBackground": "rgba(20,0,9,0.95) over hero image",

        "linkAlignment": "right",

        "linkStack": "vertical",

        "linkGap": "28px",

        "lastItem": { "text": "BOOK A CONSULT", "style": "bold, same color, no button box" },

        "divider": { "color": "#eb006a or #4d0020", "thickness": "1px", "marginY": "16px" },

        "pinnedHeaderRow": "logo left + close (X) icon right, repeats below divider",

        "closeIcon": "X, replaces hamburger"

      }

    }

  },

  "layout": {

    "type": "grid",

    "columns": { "desktop": "2, roughly 50/50 (image col ~798px / text col ~576px within 1224 container? verify against real crop)", "mobile": "1 (stacked)" },

    "columnGap": { "desktop": "0px (image bleeds to divider line)", "mobile": "0px" },

    "verticalDivider": { "desktop": "1px solid #4d0020 between image col and text col" }

  },

  "image": {

    "src": "placeholder - lawyer handshake photo, warm dark tones",

    "position": "left column, desktop",

    "fit": "cover",

    "bleed": "edge-to-edge, no padding, touches container border + divider",

    "aspectRatio": { "desktop": "~0.8 (portrait)", "mobile": "~1:1 to 4:5" },

    "mobileWidth": "100vw minus 8px edge inset, no 16px content padding applied to image"

  },

  "content": {

    "column": "right, desktop / below image, mobile",

    "paddingX": { "desktop": "96px from container right edge, ~64-80px from divider", "mobile": "16px" },

    "verticalAlign": "center (desktop)",

    "eyebrow": null,

    "heading": {

      "text": "Practical law for modern companies",

      "lineBreaks": "manual: 'Practical law' / 'for modern' / 'companies' (desktop); 'Practical law for' / 'modern companies' (mobile)",

      "fontFamily": "Ancizar Serif (or Fraunces/Newsreader fallback)",

      "fontWeight": 400,

      "color": "#f2ede0",

      "fontSize": { "desktop": "64px", "mobile": "34px" },

      "lineHeight": "1.05",

      "letterSpacing": "0",

      "maxWidth": { "desktop": "460px", "mobile": "100%" }

    },

    "subheading": {

      "text": "Scaling companies need simple rules and strong documents. Clause delivers with steady communication and clean execution.",

      "fontFamily": "sans-serif (grotesk)",

      "fontWeight": 400,

      "color": "#ecebd8",

      "opacity": 0.72,

      "fontSize": { "desktop": "17px", "mobile": "15px" },

      "lineHeight": "1.5",

      "maxWidth": { "desktop": "430px", "mobile": "100%" },

      "marginTop": { "desktop": "24px", "mobile": "16px" }

    },

    "decorativePattern": {

      "type": "zigzag/chevron texture graphic",

      "color": "#4d0020 tone on #140009 bg",

      "position": "directly above CTA button box",

      "width": { "desktop": "~460px, irregular jagged top edge", "mobile": "split into 2 shorter blocks" },

      "marginTop": { "desktop": "64px", "mobile": "40px" }

    },

    "ctaBox": {

      "border": "1px solid #4d0020",

      "cornerTicks": { "style": "small pink dot at each corner", "color": "#eb006a", "size": "4px" },

      "paddingInside": "8px (button sits inset within the bordered box)",

      "button": {

        "text": "BOOK A CONSULT",

        "background": "#eb006a",

        "textColor": "#140009 (dark, on pink)",

        "fontWeight": 700,

        "fontSize": "13px",

        "letterSpacing": "0.08em",

        "textTransform": "uppercase",

        "icon": "right-pointing arrow, thin line style",

        "width": "100% of ctaBox",

        "height": { "desktop": "56px", "mobile": "52px" },

        "hover": "slight scale or opacity shift on the arrow icon (needs confirmation)"

      }

    }

  },

  "scrollIndicator": {

    "type": "single dot, fixed position",

    "color": "#eb006a",

    "position": "fixed right edge, vertically centered on current section",

    "visibility": "persists across all homepage sections, moves down as user scrolls",

    "note": "cosmetic scroll progress marker - can implement as simple fixed dot per section anchor"

  },

  "excludeFromBuild": ["REMIX FOR FREE badge", "Made in Framer badge"]

}

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://clause-bright-pro.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7842f2ef-52e4-41a9-8bc2-3a320cf479a7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
