#!/bin/bash
set -euo pipefail

source ./scripts/constants.sh

if ! command -v alien &> /dev/null; then
    echo "alien command not found. Please install alien (sudo apt install -y alien rpm fakeroot) to build RPM packages."
    exit 1
fi

mkdir -p "$RELEASES_DIR"

shopt -s nullglob
DEB_FILES=("$RELEASES_DIR"/*.deb)

if [ ${#DEB_FILES[@]} -eq 0 ]; then
    echo "No .deb packages found in $RELEASES_DIR. Building Linux DEB packages first..."
    npm run build:linux
    npm run build:linux32
    npm run build:linuxarmv7l
    DEB_FILES=("$RELEASES_DIR"/*.deb)
fi

echo "Converting .deb packages to .rpm..."
for DEB_FILE in "${DEB_FILES[@]}"; do
    echo "Processing $DEB_FILE..."
    if command -v fakeroot &> /dev/null; then
        fakeroot alien --to-rpm --keep-version "$DEB_FILE"
    else
        alien --to-rpm --keep-version "$DEB_FILE"
    fi
done

RPM_FILES=(*.rpm)
if [ ${#RPM_FILES[@]} -gt 0 ]; then
    mv *.rpm "$RELEASES_DIR/"
    echo "Successfully generated RPM packages in $RELEASES_DIR:"
    ls -la "$RELEASES_DIR"/*.rpm
else
    echo "Warning: No .rpm files were generated."
fi
