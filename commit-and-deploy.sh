#!/bin/bash

# Solicitar el mensaje de commit
echo "Introduce el mensaje de commit:"
read commit_message

# Añadir todos los cambios al índice de Git
git add .

# Realizar el commit con el mensaje proporcionado
git commit -m "$commit_message"

# Ejecutar el script de despliegue
npm run deploy