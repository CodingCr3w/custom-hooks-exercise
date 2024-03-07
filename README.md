# Custom Hooks - Exercice

Dans cette app, nous avons simulé une page web classique découpée en sections.
Lorsque l'utilisateur a scrollé jusqu'en bas de la page, on lui affiche un bouton
pour revenir en haut de page _(le classique)_.

On affiche également une petite bulle pour lui suggérer un autre page à visiter.
Celle-ci s'affiche aussi lorsque l'utilisateur a scrollé en bas de page, mais avec
un décalage _("offset")_ de 1000px, de sorte qu'elle s'affiche avant le bouton.

Pour ce mécanisme de montrer ou cacher des éléments en fonction de la position du scroll,
on utilise plusieurs choses :

- **Du state** pour savoir si, à un instant _t_, l'utilisateur est en bas de page ou pas
- **Un effet** pour souscrire à l'évènement "scroll" et mettre à jour le state en fonction de la position de ce dernier
- **Un helper** qui nous retourne `true` si la page a été scrollée entièrement, qui prend en argument un offset facultatif de 200px par défaut)

## Objectif

Actuellement, la logique décrite ci-dessus est dupliquée dans les composants `ScrollTopButton`
et `Suggestion`. La seule chose qui change entre les deux, c'est l'offset à utiliser au
moment de la vérification sur la position du scroll.

L'objectif est de **créer un custom hook** pour mutualiser cette logique. Voici par exemple à quoi `ScrollTopButton` pourrait ressembler en utilisant le hook :

```ts
export default function ScrollTopButton() {
  const atBottom = useIsAtBottom()

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // return ...
}
```

## Fichiers à modifier

Les composants à modifier une fois votre hook créé sont les suivants :

- `src/components/ScrollTopButton.tsx`
- `src/components/Suggestion.tsx`

Vous pouvez choisir le nom et la signature que vous trouvez la plus appropriée pour le custom hook. Généralement, on place les hooks d'utilité globale au projet dans `src/hooks/`.

## Lancer l'exercice

Pour faire tourner le code de l'exercice, placez vous dans le répertoire de votre choix avec un terminal et lancez les commandes suivantes :

```sh
git clone https://github.com/CodingCr3w/custom-hooks-exercise.git
cd custom-hooks-exercise
npm install
npm run dev
```

Vérifiez bien que tout fonctionne après avoir fait l'exercice 😉

Bon courage !
