import User from "./User.js";
import Conversation from "./Conversation.js";


// const lele = new User("lele");
// const morgs = new User("morgs");
// const conv = new Conversation();
// const currentUser = lele;
// conv.addUsers([lele, morgs]);

// lele.sendMessage(conv, "Coucou", currentUser);
// morgs.sendMessage(conv, "Hello tu m'as manqué", currentUser);


// Utilisateurs
const lele = new User("lele");
const morgs = new User("morgs");
const trist = new User("trist");

// Conversations
const conv1 = new Conversation();
const conv2 = new Conversation();

// Configuration des conversations
conv1.addUsers([lele, morgs]);
conv2.addUsers([lele, trist]);

// Ajout de messages factices à conv1
lele.sendMessage(conv1, "Coucou morgs!", lele);
morgs.sendMessage(conv1, "Salut lele! Comment ça va?", lele);

// Ajout de messages factices à conv2
lele.sendMessage(conv2, "Hello trist!", lele);
trist.sendMessage(conv2, "Hey lele! Tout va bien?", lele);

// Initialisation de la conversation actuelle
let currentConversation = conv1;

// Fonction pour changer la conversation affichée
function switchConversation(newConv) {
  currentConversation = newConv;
  document.querySelector(".conversation").innerHTML = ""; // Nettoyer l'affichage actuel
  currentConversation.messages.forEach(message => message.display(lele)); // Afficher les messages de la nouvelle conversation
}

// Création de l'interface de sélection de conversation
function createConversationSwitcher() {
  const switcher = document.createElement("div");
  switcher.className = "switcher";

  const btnConv1 = document.createElement("button");
  btnConv1.textContent = "Conversation 1";
  btnConv1.onclick = () => switchConversation(conv1);

  const btnConv2 = document.createElement("button");
  btnConv2.textContent = "Conversation 2";
  btnConv2.onclick = () => switchConversation(conv2);

  switcher.appendChild(btnConv1);
  switcher.appendChild(btnConv2);

  document.body.insertBefore(switcher, document.body.firstChild);
}

// Appel des fonctions pour initialiser l'interface
createConversationSwitcher();
switchConversation(conv1); // Définir la conversation initiale
