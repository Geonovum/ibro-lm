#!/bin/bash

# Uitvoeren van het script op Windows (Git Bash):
# 1. Open Git Bash in de hoofdmap van je project:
#    - Open de Windows Verkenner (map-icoon in je taakbalk).
#    - Navigeer naar de map waar jouw project staat.
#    - Klik in de adresbalk bovenin Verkenner en typ bash, gevolgd door Enter.
#    Je krijgt nu een Git Bash-venster dat direct in deze projectmap is gestart.
# 2. (Optioneel) Maak het script uitvoerbaar met:
#      chmod +x update_workflow.sh
#    Op Windows kun je dit meestal overslaan en direct naar stap 3 gaan.
# 3. Voer het script uit met:
#      bash update_workflow.sh
set -e

TEMPLATE_REPO="https://github.com/Geonovum/NL-ReSpec-template"
TEMP_DIR="NL-ReSpec-template-temp"
LOCAL_DIR=$(pwd)

# Clone de template repo
echo "➡️  Clonen van NL-ReSpec-template..."
git clone "$TEMPLATE_REPO" "$TEMP_DIR"

if [ ! -d "$TEMP_DIR" ]; then
  echo "❌ Het clonen van NL-ReSpec-template is mislukt."
  exit 1
fi

# Haal alle remote branches op
echo "🔄 Ophalen van remote branches..."
git fetch --all
BRANCHES=$(git branch -r | grep -v '\->' | sed 's|origin/||' | uniq)

# De tekst die bovenaan README.md moet komen
README_NOTICE=$(cat <<'EOF'
⚠️ Deze repository is automatisch bijgewerkt naar de nieuwste workflow.
Voor vragen, neem contact op met [Linda van den Brink](mailto:l.vandenbrink@geonovum.nl) of [Wilko Quak](mailto:w.quak@geonovum.nl).

Als je een nieuwe publicatie wilt starten, lees dan eerst de instructies in de README van de NL-ReSpec-template:
[https://github.com/Geonovum/NL-ReSpec-template](https://github.com/Geonovum/NL-ReSpec-template).
EOF
)

for BRANCH in $BRANCHES; do
  echo "🔁 Verwerken van branch: $BRANCH"
  git checkout "$BRANCH"
  git pull origin "$BRANCH"

  echo "🧹 Vervangen van .github/workflows..."
  rm -rf .github/workflows
  mkdir -p .github
  cp -R "$TEMP_DIR/.github/workflows" .github/

  # README.md aanpassen
  if [[ -f "README.md" ]]; then
    if ! grep -q "automatisch bijgewerkt naar de nieuwste workflow" README.md; then
      echo -e "$README_NOTICE\n\n$(cat README.md)" > README.md
      echo "📘 README.md aangepast."
    else
      echo "📘 README.md bevat al de melding."
    fi
  else
    echo -e "$README_NOTICE" > README.md
    echo "📘 README.md aangemaakt."
  fi

  if [ -n "$(git status --porcelain)" ]; then
    git add .github/workflows README.md
    git commit -m "Update workflows en README vanuit NL-ReSpec-template"
    git push origin "$BRANCH"
    echo "✅ Branch '$BRANCH' bijgewerkt en gepusht."
  else
    echo "ℹ️  Geen wijzigingen in branch '$BRANCH'."
  fi
done

# Opruimen
rm -rf "$TEMP_DIR"
git checkout main

echo "🎉 Alle branches zijn verwerkt en bijgewerkt."