#Installation

- Cloner le repository depuis GitHub.
- Installer Node.js et npm.
- Ouvrir un terminal dans le dossier cloné.
- Installer les dépendances avec la commande : npm install


#Configuration

Aller dans le fichier config.js et configurer la connexion à la base de données avec les informations de votre propre base de données.


#Utilisation

- Ouvrir un terminal dans le dossier cloné.
- Lancer le serveur avec la commande : node app.js
- Accéder aux différentes routes en utilisant l'URL suivante : http://localhost:3000


# Les routes disponibles sont les suivantes :

## /brands

Cette route renvoie toutes les marques de téléphones disponibles dans la base de données.

Exemple : http://localhost:3000/brands


## /devices

Cette route renvoie tous les téléphones disponibles dans la base de données.

Exemple : http://localhost:3000/devices


## /devices/:brand

Cette route renvoie tous les téléphones de la marque spécifiée dans l'URL. Le nom de la marque doit être en minuscules.

Exemple : http://localhost:3000/devices/samsung


## /devices/:brand/:limit

Cette route renvoie un nombre limité de téléphones de la marque spécifiée dans l'URL. Le nom de la marque doit être en minuscules. Le nombre de téléphones à renvoyer doit être spécifié dans l'URL.

Exemple : http://localhost:3000/devices/samsung/5


## /devicesDetail

Cette route renvoie tous les détails de tous les téléphones disponibles dans la base de données.

Exemple : http://localhost:3000/devicesDetail


## /devicesDetail/:title

Cette route renvoie tous les détails du téléphone dont le titre est spécifié dans l'URL. Le titre doit être en minuscules et peut contenir des espaces.

Exemple : http://localhost:3000/devicesDetail/galaxy%20s21%20ultra


#Arrêt

Pour arrêter le serveur, utiliser le raccourci Ctrl+C dans le terminal où le serveur est en cours d'exécution.
