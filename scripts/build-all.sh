#!/bin/bash

npm run clean
npm run build:win
npm run build:winarm64
npm run build:osx
npm run build:osxm1
npm run build:linux
npm run build:linux32
npm run build:linuxarmv7l
if command -v alien &> /dev/null; then
    npm run build:rpm
fi

