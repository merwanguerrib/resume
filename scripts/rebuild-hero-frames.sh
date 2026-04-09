#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <video-path> [fps] [desktop-width] [mobile-width] [desktop-jpeg-quality] [mobile-jpeg-quality]"
  echo "Example: $0 ./assets/source/hero.mp4 24 2560 1280 3 4"
  exit 1
fi

VIDEO_PATH="$1"
FPS="${2:-24}"
DESKTOP_WIDTH="${3:-2560}"
MOBILE_WIDTH="${4:-1280}"
DESKTOP_QUALITY="${5:-3}"
MOBILE_QUALITY="${6:-4}"
DESKTOP_OUTPUT_DIR="public/assets/hero-scroll/frames-desktop"
MOBILE_OUTPUT_DIR="public/assets/hero-scroll/frames"

if [[ ! -f "$VIDEO_PATH" ]]; then
  echo "Video not found: $VIDEO_PATH"
  exit 1
fi

mkdir -p "$DESKTOP_OUTPUT_DIR" "$MOBILE_OUTPUT_DIR"
rm -f "$DESKTOP_OUTPUT_DIR"/frame_*.jpg "$MOBILE_OUTPUT_DIR"/frame_*.jpg

echo "Extracting desktop 2K frames from: $VIDEO_PATH"
echo "Desktop output: $DESKTOP_OUTPUT_DIR/frame_%04d.jpg"

ffmpeg -y \
  -i "$VIDEO_PATH" \
  -vf "fps=${FPS},scale=${DESKTOP_WIDTH}:-2:flags=lanczos,unsharp=5:5:0.7:3:3:0.0" \
  -q:v "${DESKTOP_QUALITY}" \
  "$DESKTOP_OUTPUT_DIR/frame_%04d.jpg"

echo "Extracting mobile fallback frames from: $VIDEO_PATH"
echo "Mobile output: $MOBILE_OUTPUT_DIR/frame_%04d.jpg"

ffmpeg -y \
  -i "$VIDEO_PATH" \
  -vf "fps=${FPS},scale=${MOBILE_WIDTH}:-2:flags=lanczos,unsharp=3:3:0.4:3:3:0.0" \
  -q:v "${MOBILE_QUALITY}" \
  "$MOBILE_OUTPUT_DIR/frame_%04d.jpg"

DESKTOP_FRAME_COUNT="$(find "$DESKTOP_OUTPUT_DIR" -name 'frame_*.jpg' | wc -l | tr -d ' ')"
MOBILE_FRAME_COUNT="$(find "$MOBILE_OUTPUT_DIR" -name 'frame_*.jpg' | wc -l | tr -d ' ')"
DESKTOP_FIRST_FRAME="$(find "$DESKTOP_OUTPUT_DIR" -name 'frame_*.jpg' | sort | head -n 1)"
MOBILE_FIRST_FRAME="$(find "$MOBILE_OUTPUT_DIR" -name 'frame_*.jpg' | sort | head -n 1)"

echo "Done."
echo "Desktop frames: ${DESKTOP_FRAME_COUNT}"
echo "Mobile frames: ${MOBILE_FRAME_COUNT}"
if [[ -n "${DESKTOP_FIRST_FRAME}" ]]; then
  sips -g pixelWidth -g pixelHeight "$DESKTOP_FIRST_FRAME"
fi
if [[ -n "${MOBILE_FIRST_FRAME}" ]]; then
  sips -g pixelWidth -g pixelHeight "$MOBILE_FIRST_FRAME"
fi
