#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════
# 828 v2-Final Archive Script
# Run from the theme root folder:
#   /Users/danny/Local Sites/828-marketing-solutions/app/public/wp-content/themes/828_marketing_solutions/
#
# What this does:
#   1. Creates /archive/ inside the theme
#   2. Moves the 10 v1 templates into it
#   3. Backs up v1 src files (CSS + React components) into /archive/src-v1/
#   4. Reminds you to depublish WP pages BEFORE the swap goes live
# ═══════════════════════════════════════════════════════════════════════════

set -e

echo "🗂  Creating /archive/ folder..."
mkdir -p archive

echo "📦 Moving v1 PHP templates to /archive/..."
for f in home-template.php about-us-template.php services-template.php contact-template.php \
         industry-report-template.php brand-identity-template.php website-seo-template.php \
         social-media-management-template.php paid-advertisement-template.php pitch-deck-template.php; do
  if [ -f "$f" ]; then
    mv "$f" archive/
    echo "  ✓ $f"
  else
    echo "  - $f (not found, skipping)"
  fi
done

echo ""
echo "🎨 Backing up v1 source files (CSS + JS components)..."
mkdir -p archive/src-v1
[ -f src/index.css ]               && cp src/index.css               archive/src-v1/index.css.v1.bak                && echo "  ✓ src/index.css backed up"
[ -f src/index.js ]                && cp src/index.js                archive/src-v1/index.js.v1.bak                 && echo "  ✓ src/index.js backed up"
[ -f src/scripts/Navbar.js ]       && cp src/scripts/Navbar.js       archive/src-v1/Navbar.js.v1.bak                && echo "  ✓ Navbar.js backed up"
[ -f src/scripts/Footer.js ]       && cp src/scripts/Footer.js       archive/src-v1/Footer.js.v1.bak                && echo "  ✓ Footer.js backed up"
[ -f src/scripts/ContactForm.js ]  && cp src/scripts/ContactForm.js  archive/src-v1/ContactForm.js.v1.bak           && echo "  ✓ ContactForm.js backed up"

echo ""
echo "✅ Archive complete."
echo ""
echo "═══════════════════════════════════════════════════════════════════════"
echo "  NEXT STEPS"
echo "═══════════════════════════════════════════════════════════════════════"
echo ""
echo "  1. In WP Admin → Pages, set status to DRAFT for:"
echo "     - About Us, Services, Contact"
echo "     - All 6 service pages (Industry Report, Brand Identity, etc.)"
echo ""
echo "  2. Create the /fonts/ folder in the theme root and add:"
echo "     - Helvetica-Regular.woff2  (+ .ttf if you have it)"
echo "     - Helvetica-Bold.woff2     (+ .ttf if you have it)"
echo "     - Nebulica-Regular.woff2   (+ .ttf if you have it)"
echo "     - Nebulica-Medium.woff2    (+ .ttf if you have it)"
echo ""
echo "  3. Replace these files in the theme:"
echo "     - src/index.css           (paste new index.css)"
echo "     - src/index.js            (paste new index.js)"
echo "     - src/scripts/Navbar.js   (paste new Navbar.js)"
echo "     - src/scripts/Footer.js   (paste new Footer.js)"
echo "     - header.php              (paste new header.php)"
echo "     - footer.php              (paste new footer.php)"
echo "     - functions.php           (paste new functions.php)"
echo "     - home-template.php       (paste new home-template.php)"
echo ""
echo "  4. Delete: src/scripts/ContactForm.js (no longer used)"
echo ""
echo "  5. Run: npm run build"
echo ""
echo "  6. Hard refresh the home page (Cmd+Shift+R)"
echo ""
echo "═══════════════════════════════════════════════════════════════════════"