# Guide : Comment gérer les images sur votre site

Voici comment ajouter, retirer ou remplacer des images sur votre site.

## 1. Gestion de la Galerie

Les images de la galerie sont gérées dans le fichier **`script.js`**.

### Pour RETIRER une image de la galerie :
1. Ouvrez le fichier `script.js`.
2. Cherchez la liste qui commence par `const rawImages = [`.
3. Trouvez la ligne qui correspond à votre image, par exemple :
   ```javascript
   { src: 'HOM 1.jpg', cat: 'Homme' },
   ```
4. Effacez simplement cette ligne entière.
5. Sauvegardez le fichier.

### Pour REMPLACER une image dans la galerie :
1. Mettez votre nouvelle photo dans le dossier `img/` (ex: `NOUVEAU.jpg`).
2. Ouvrez `script.js`.
3. Trouvez la ligne de l'ancienne image.
4. Changez juste le nom entre les guillemets :
   ```javascript
   // Avant
   { src: 'ANCIEN.jpg', cat: 'Homme' },
   
   // Après
   { src: 'NOUVEAU.jpg', cat: 'Homme' },
   ```

## 2. Changer l'Arrière-plan (Accueil)

L'image de fond est gérée dans **`style.css`**.

1. Ouvrez `style.css`.
2. Cherchez (CTRL+F) `.hero::before`.
3. Repérez la ligne `background: ... url('img/ATTELIER.jpg')...`.
4. Remplacez `ATTELIER.jpg` par le nom de votre nouvelle image.

## 3. Important

*   **Noms des fichiers** : Attention aux majuscules et minuscules ! `photo.jpg` n'est pas pareil que `PHOTO.JPG`. Utilisez toujours le nom exact.
*   **Dossier Images** : Assurez-vous que les fichiers images (.jpg, .png) sont bien présents dans votre dossier `img` sur votre ordinateur.
