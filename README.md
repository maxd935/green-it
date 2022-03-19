# green-it

Projet web : Calcul et comparateur d'indice de fragilité des villes de France \
Comment calculer l'indice de fragilité :
- ACCÈS À L’INFORMATION
- ACCÈS AUX INTERFACES NUMÉRIQUES
- CAPACITÉS D’USAGE DES INTERFACES NUMÉRIQUES
- COMPÉTENCES ADMINISTRATIVES

L’unité fonctionnelle sera : la recherche de l’indice de fragilité d’une commune par rapport à son département et sa
région.

Lien en prod (public) : @@@
Lien en github (public) : https://github.com/jules3198/green-it 

Objectifs
- [x] Créer un site internet qui permet d’obtenir un indice de fragilité numérique
- [x] L’application doit tenir sur une seule page web
- [] L’application doit permettre d’introduire l’indice par un texte explicatif et de le terminer sur une phrase de
conclusion
- [] L’application doit permettre une collecte des résultats agrégés :
    -  [] Pour statistique
    - [] Pour ressortir le résultat plus rapidement si même requête
- [] L’application doit permettre le choix de la commune par son code postal et/ou l’accès à une liste déroulante
- [x] L’utilisateur doit avoir accès aux 4 scores de l’indice, du score global ainsi que de ceux de son département et de
sa région
- [] Le site doit stocker la requête
- [] BONUS : Possibilité par le site de télécharger un pdf de présentation du résultat final
- [] BONUS : Effectuer des tests de montée en charge avec K6. Indiquez les résultats dans le readme.

## Choix des tecnhos
- ReactJS : pourquoi ??
- NodeJS : ???

## Vos scores dans les outils de benchmark d’éco-conception
- https://institutnr.org/outils-ecoconception-accessibilite 
- https://checklists.opquast.com/en/web-quality-assurance/


## Membres de l'équipe
- DAUDÉ Maxime - mdaude2@myges.fr 5 IWJ
- WELLE Guillaume - guillaume.welle.sio@gmail.com 5 IW1
- GABIAM Jules - julesakouete31@gmail.com 5 IW1
- MBOMBO MOKONDA Christ - christmokonda@gmail.com 5 IWJ

## Lancement du projet
Script Shell de lancement du projet, création et éxéution des dockers, éxécuter la ligne de commande, à la racine du projet :
```
./lancement-project-docker.sh
```
Se rendre sur <http://localhost:3000/>