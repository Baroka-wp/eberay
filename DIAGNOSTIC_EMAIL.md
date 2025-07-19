# 🔍 Diagnostic des problèmes d'email - Mailjet

## 📧 **Email envoyé mais pas reçu ?**

Si l'API répond "success" mais vous ne recevez pas l'email, suivez ce diagnostic :

## ✅ **1. Vérifications immédiates**

### Vérifiez vos SPAMS
- 📂 **Gmail** : Onglet "Spam" ou "Courriers indésirables"
- 📂 **Outlook** : Dossier "Courrier indésirable"
- 📂 **Yahoo** : Dossier "Spam"

### Vérifiez votre dashboard Mailjet
1. Allez sur [https://app.mailjet.com/stats](https://app.mailjet.com/stats)
2. Vérifiez les statistiques d'envoi
3. Regardez les "Delivery Reports"

## 🔧 **2. Test de diagnostic**

Testez avec cette commande :

```bash
curl -X POST http://localhost:3000/api/contact \
-H "Content-Type: application/json" \
-d '{
  "nom": "Test Diagnostic",
  "email": "votre-email@gmail.com",
  "telephone": "0123456789",
  "message": "Test de diagnostic Mailjet"
}'
```

Si la réponse contient `"success": true` et un `messageId`, l'email a été envoyé.

## 🚨 **3. Problèmes courants et solutions**

### ❌ **Problème : Adresse expéditeur non vérifiée**

**Symptôme :** Email dans les spams ou non livré

**Solution :**
1. Dans Mailjet, allez sur **Account Settings** > **Sender domains & addresses**
2. Ajoutez et vérifiez votre domaine
3. Utilisez une adresse du domaine vérifié comme `FROM_EMAIL`

### ❌ **Problème : Gmail bloque les emails**

**Symptôme :** Emails non reçus sur Gmail

**Solutions :**
- Utilisez `pilot@mailjet.com` comme adresse d'envoi (déjà fait)
- Ou configurez SPF/DKIM pour votre domaine

### ❌ **Problème : Réputation IP/domaine**

**Symptôme :** Emails systématiquement en spam

**Solutions :**
- Réchauffez votre réputation avec des petits volumes d'abord
- Évitez les mots-clés spam dans le contenu
- Utilisez une vraie adresse de réponse

## 🔍 **4. Debug avancé**

### Logs détaillés
Regardez la console de votre serveur Node.js pour ces informations :
```
📧 Détails de l'envoi :
- Message ID: 123456789
- Status: success
- Destinataire: votre-email@gmail.com
- Expéditeur: pilot@mailjet.com
```

### API de statut Mailjet
Vous pouvez vérifier le statut d'un email avec son Message ID :
```bash
curl -X GET "https://api.mailjet.com/v3/REST/message/{MESSAGE_ID}" \
-u "VOTRE_API_KEY:VOTRE_SECRET_KEY"
```

## ⚡ **5. Solutions rapides**

### Option A : Utilisez une autre adresse de test
```bash
# Variables d'environnement
ADMIN_EMAIL=votre-autre-email@yahoo.com
FROM_EMAIL=pilot@mailjet.com
```

### Option B : Testez avec un autre fournisseur
Testez avec une adresse Outlook ou Yahoo au lieu de Gmail.

### Option C : Configuration minimale qui fonctionne
```bash
# Dans .env.local
MAILJET_API_KEY=votre_api_key
MAILJET_API_SECRET=votre_secret_key
ADMIN_EMAIL=birotori@gmail.com
FROM_EMAIL=pilot@mailjet.com
FROM_NAME=E-BEYRAY Contact
```

## 📊 **6. Monitoring en temps réel**

### Dans le dashboard Mailjet, surveillez :
- **Sent** : Emails envoyés
- **Delivered** : Emails livrés
- **Opened** : Emails ouverts
- **Bounced** : Emails rejetés
- **Spam** : Emails marqués spam

### Alertes importantes :
- 🟢 **Delivered** = Email arrivé dans la boîte
- 🟡 **Soft Bounce** = Problème temporaire (boîte pleine)
- 🔴 **Hard Bounce** = Adresse invalide
- 🟠 **Spam** = Marqué comme spam par le destinataire

## 🛠️ **7. Test complet**

1. **Envoyez un email test** depuis le formulaire
2. **Vérifiez immédiatement** :
   - Console serveur pour les logs
   - Dashboard Mailjet
   - Dossier spam de votre email
3. **Attendez 5-10 minutes** (délai possible)
4. **Si toujours rien** : changez l'adresse destinataire

## 💡 **8. Conseils pour améliorer la délivrabilité**

1. **Domaine vérifié** : Configurez SPF/DKIM
2. **Contenu propre** : Évitez les mots spam
3. **Volume progressif** : Commencez petit
4. **Reputation** : Surveillez vos métriques
5. **Authentification** : Utilisez DMARC

---

💡 **Besoin d'aide immédiate ?**
- Vérifiez d'abord votre dossier SPAM
- Consultez [Mailjet Status](https://status.mailjet.com/)
- Contactez le support Mailjet si problème persistant 