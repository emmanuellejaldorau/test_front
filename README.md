## Ennoncé du test
A partir des api disponibles sur le site [data.culture.gouv.fr][1] vous devrez créer un dashboard permettant de visualiser et interpréter les données disponibles sur les musées. Ce Dashboard sera divisé en deux grandes parties : la première concernant les musées en général et la seconde spécifique à la nuit des musées de 2018. Les éléments qui doivent y figurer sont les suivants:

✌ = élément requis
👌 = élément bonus

### Pour la partie liste des musées
- ✌ Liste des musées avec pour chacun les informations principales
  + 👌 Avec une recherche par ville
  + 👌 Avec un système de pagination
- ✌ Une page pour chaque musée avec les informations détaillés accessible depuis la liste
  + 👌 Avec un graph représentant l'évolution de la fréquentation

### Pour la partie nuit des musées 2018
- ✌ Un Graph sur le nombre d'événements par villes, par régions, et par départements
- ✌ Une carte de la france avec les événements placés dessus
  + 👌 Avec un système de choix de la langue

### Autre
+ ✌ Utiliser des styled components
+ ✌ Utiliser des functionnal components et des hooks
+ 👌 Mettre en place des tests
+ 👌 Utiliser TypeScript

## A savoir
Le but de ce test et de pouvoir cerner votre niveau sur l'environement React. Des points clef comme la qualité du code, la gestion des données, l'architecture de vos fichiers et de vos components seront pris en compte. Le design que vous choisirez et la lisibilité de vos graphiques seront aussi des éléments différenciants.

Vous êtes libre d'étendre le test pour inclure d'autres librairies / éléments que vous connaissez et qui ne sont pas couvert par l'état actuel du test.

Pour l'affichage des graphiques, nous vous recommendons d'utiliser les librairies [chart.js][2] et [chartjs-chart-geo][3] mais vous êtes libre de vous diriger vers une autre si elle vous semble plus pertinante.

Bonne chance !

[1]: https://data.culture.gouv.fr/explore/?refine.theme=Mus%C3%A9es&sort=modified
[2]: https://github.com/chartjs/Chart.js
[3]: https://github.com/sgratzl/chartjs-chart-geo
