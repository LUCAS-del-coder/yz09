#!/bin/bash
# Debug script to check if dependencies are installed correctly

echo "Checking if tailwindcss, postcss, and autoprefixer are installed..."
npm list tailwindcss postcss autoprefixer 2>&1 | head -20

echo ""
echo "Checking postcss.config.js..."
cat postcss.config.js

echo ""
echo "Checking tailwind.config.js exists..."
test -f tailwind.config.js && echo "✓ tailwind.config.js exists" || echo "✗ tailwind.config.js missing"

echo ""
echo "Checking app/globals.css..."
head -5 app/globals.css

