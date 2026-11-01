/* =====================================================================
   CONFIGURAZIONE DELL'APP "Conto comune F&G"
   È l'unico file da modificare. Segui il passo 5 della guida.
   ===================================================================== */

/* 1) Sostituisci le righe da "const firebaseConfig = {" fino a "};"
      con quelle che ti mostra Firebase (Impostazioni progetto → Le tue app). */
const firebaseConfig = {
  apiKey: "INCOLLA-QUI",
  authDomain: "INCOLLA-QUI",
  projectId: "INCOLLA-QUI",
  storageBucket: "INCOLLA-QUI",
  messagingSenderId: "INCOLLA-QUI",
  appId: "INCOLLA-QUI"
};

/* 2) Chi può entrare. Deve coincidere con le regole di Firestore (file firestore.rules). */
const accesso = {
  modifica: ["franz.delfa@gmail.com"],   // registra, importa, chiude i mesi
  lettura: ["giada1915@gmail.com"]       // vede tutto, non modifica
};

/* Non toccare sotto questa riga */
window.FIREBASE_CONFIG = firebaseConfig;
window.ACCESSO = accesso;
