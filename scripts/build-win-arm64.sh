#!/bin/bash

export APP_ARCH="arm64"
export APP_PLATFORM="win32"
export APP_ICON_PATH="assets/win/whatsapp.ico"

./scripts/build-zip.sh
