import React from 'react';
import styled, { ThemeProvider } from "styled-components"
import theme from "./theme/";
import "./theme/baseline.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
  max-width: 1280px;
  margin: auto;
`

const Box = styled.div`
  display: flex;
  flex: 1;
  border-radius: 5px;
  background: white;
  height: 100vh
  flex-direction: column;
  white-space: pre-line;
  padding: 5px;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box>
          <code>
            {`
              À l’aide de l’API github, vous devrez réaliser une datavisualisation sur les issues du repository microsoft/vscode, à partir d’une base de projet que nous vous aurons fourni.

              Voici les consignes:

              Vous aurez 3 stats à afficher (deux sont des graphiques, nous vous conseillons l’utilisation de la librairie chartjs.org):

              Un graphique en barre vertical permettant de comparer le nombre d’utilisations des labels sur les issues.

              \tUn graphique ligne permettant de suivre l’évolution du nombre d’issues actives dans le temps (Bonus: Ajout de date picker permettant de visualiser les données sur une période sélectionnée).

              \tUne liste des créateurs d’issues sur ce répo classé par nombre d’issues ouvertes (Bonus: barre de recherche permettant de trouver un utilisateur par son nom).

              Chaque point listé au dessus devra être sur un onglet/composant indépendant accessible via une route
              Comme dit dans le point précédant, l’application devra implémenter un react router.

              Vous aurez carte blanche sur le design du projet ! N'hésitez pas à tout modifier.

              Une fois terminé vous devrez héberger votre réalisation sur un repository github et nous envoyer son lien. Toute fonctionnalité supplémentaire est la bienvenue. Nous vous laissons une semaine pour nous renvoyer le test.

              Bonne chance !
            `}
          </code>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
