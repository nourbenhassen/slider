# Tacotax - Test technique Front
## Sommaire
1. Objectif
2. Techno
3. Spécificités
4. Images
5. Server
6. Prérequis

## Objectif :
L'objectif est de créer un formulaire (appelé slider) présentant 3 slides à partir des données fournies par l'api.

Description du slider :

* 3 slides
* Un bouton next pour arriver à la prochaine slide
* Un bouton prev pour arriver à la slide précédente
* Une progress bar présentant l'avancée du slider

(voir images pour design)

## Techno :
Le slider est à réaliser avec React.js.
L'intégration se fera avec au choix : Sass ou styled-component.

## Spécificités :
### slider
* On ne peut accéder à la prochaine slide que si une valeur à été sélectionné sur la slide courante
* Si on retourne à une slide précédente la valeur déjà entrée précédemment est sélectionnée/entrée et non pas vide

### bouton
* Le bouton next n'est pas présent sur la dernière slide, un bouton submit le remplace
* Le bouton prev n'est pas présent pour la première slide

### Progress bar
* À la dernière slide la valeur de la progress bar n'est pas 100% (environ 90%)

### Input
* Si on clique sur next sans avoir saisi de valeur un message d'erreur s'affiche demandant de remplir la donnée

## Images :
### Slider première slide
![Rendu du slider](./images_description/rendu_slider_slide_1.png)

### Slider première slide error
![Rendu du slider error](./images_description/rendu_slider_slide_1_error.png)

### Slider première slide validate
![Rendu du slider validate](./images_description/rendu_slider_slide_1_validate.png)

### Slider seconde slide
![Rendu du slider 2](./images_description/rendu_slider_slide_2.png)

### Slider seconde slide error
![Rendu du slider 2](./images_description/rendu_slider_slide_2_error.png)

### Troisième slide ressemble à la deuxième

### Submit
Le submit affiche les données qui ont été saisies


## Server :
Un serveur à lancer en local fourni les données du slider.
Des slides pourront éventuellement être rajoutées aux données.

Celui-ci vous fournit le call à faire sur `http://localhost:9888/api/questionnaire`

### Installation
```
	yarn / npm i
```

### Lancer le server
```
	yarn server / npm run server
```

## Prérequis
* Node
# test-technique-front
# test-technique-front
# test-technique-front
# test-technique-front
