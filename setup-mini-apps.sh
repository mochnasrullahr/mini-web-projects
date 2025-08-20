#!/bin/bash

# Daftar mini apps
apps=("flashcard-app" "counter-app" "todo-app" "weather-app" "calculator-app" "notes-app" "quiz-app")

# Boilerplate HTML
boilerplate='
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{APP_NAME}}</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="app">
    <h1>{{APP_NAME}}</h1>
    <p>Welcome to {{APP_NAME}}!</p>
  </div>

  <script src="script.js"></script>
</body>
</html>
'

# Buat folder + file
for app in "${apps[@]}"; do
  mkdir -p "$app"
  echo "${boilerplate//\{\{APP_NAME\}\}/$app}" > "$app/index.html"
  touch "$app/style.css"
  touch "$app/script.js"
done

echo "✅ Semua mini apps sudah dibuat!"
