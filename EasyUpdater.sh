#!/bin/bash

git add .

if git diff --cached --quiet; then
    echo "Nothing to commit."
    read -p "Press Enter to exit..."
    exit 0
fi

read -p "Commit Message: " MESSAGE

TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")

if [ -z "$MESSAGE" ]; then
    COMMIT="Update - $TIMESTAMP"
else
    COMMIT="$MESSAGE - $TIMESTAMP"
fi

git commit -m "$COMMIT"
git push

echo
echo "Done!"