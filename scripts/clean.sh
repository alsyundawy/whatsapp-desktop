#!/bin/bash

source ./scripts/constants.sh

rm -rf "${DIST_DIR:?}"/* 2>/dev/null || true
rm -rf "${OUTPUT_DIR:?}"/* 2>/dev/null || true
rm -rf "${RELEASES_DIR:?}"/* 2>/dev/null || true

mkdir -p "$DIST_DIR"
mkdir -p "$OUTPUT_DIR"
mkdir -p "$RELEASES_DIR"
