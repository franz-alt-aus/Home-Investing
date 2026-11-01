/* =====================================================================
   CONFIGURAZIONE DELL'APP "Conto comune F&G"
   È l'unico file da modificare. Segui il passo 5 della guida.
   ===================================================================== */

/* 1) Sostituisci le righe da "const firebaseConfig = {" fino a "};"
      con quelle che ti mostra Firebase (Impostazioni progetto → Le tue app). */
const firebaseConfig = {
  apiKey: "AIzaSyAOZAP4mOS9c88t9DlegM1aeNiUsh4Eqn4",
  authDomain: "conto-comune-fgj26.firebaseapp.com",
  projectId: "conto-comune-fgj26",
  storageBucket: "conto-comune-fgj26.firebasestorage.app",
  messagingSenderId: "486573899367",
  appId: "1:486573899367:web:1a7609da304e7a9cd9dec2",
  measurementId: "G-C43CSR50CB"
};

/* 2) Chi può entrare. Deve coincidere con le regole di Firestore (file firestore.rules). */
const accesso = {
  modifica: ["franz.delfa@gmail.com"],   // registra, importa, chiude i mesi
  lettura: ["giada1915@gmail.com"]       // vede tutto, non modifica
};

/* Non toccare sotto questa riga */
window.FIREBASE_CONFIG = firebaseConfig;
window.ACCESSO = accesso;
