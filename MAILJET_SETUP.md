# 📧 Configuration Mailjet pour E-BEYRAY

Ce guide vous explique comment configurer Mailjet pour l'envoi d'emails depuis le formulaire de contact.

## 🚀 Étapes de configuration

### 1. Créer un compte Mailjet
1. Allez sur [https://mailjet.com](https://mailjet.com)
2. Créez un compte gratuit (6000 emails/mois gratuits)
3. Connectez-vous à votre dashboard

### 2. Obtenir les clés API
1. Dans le dashboard Mailjet, allez sur **Account Settings** > **Master API Key & Sub API key management**
2. Créez une nouvelle **API Key** ou utilisez celle par défaut
3. Notez votre **API Key** et **Secret Key**

### 3. Vérifier un domaine d'envoi (optionnel mais recommandé)
1. Allez sur **Account Settings** > **Sender domains & addresses**
2. Ajoutez votre domaine (ex: `votre-domaine.com`)
3. Suivez les instructions pour valider via DNS
4. Une fois validé, vous pourrez envoyer depuis `contact@votre-domaine.com`

### 4. Configuration des variables d'environnement

Créez un fichier `.env.local` à la racine de votre projet :

```bash
# Clés API Mailjet (obligatoires)
MAILJET_API_KEY=votre_api_key_mailjet
MAILJET_API_SECRET=votre_secret_key_mailjet

# Configuration des emails
ADMIN_EMAIL=groupesavoirplus@gmail.com
FROM_EMAIL=contact@votre-domaine.com
FROM_NAME=E-BEYRAY Contact
```

**Important :** 
- Remplacez `votre_api_key_mailjet` et `votre_secret_key_mailjet` par vos vraies clés
- Si vous n'avez pas de domaine vérifié, utilisez une adresse Mailjet fournie

## ✅ Test de fonctionnement

1. Relancez votre application : `npm run dev`
2. Testez l'API : `curl http://localhost:3000/api/contact`
3. Vous devriez voir `"configured": true` dans la réponse
4. Remplissez et envoyez le formulaire de contact
5. Vérifiez votre boîte mail pour le message reçu

## 🔧 Configuration avancée

### Template d'email personnalisé
L'email est envoyé avec un template HTML responsive intégré. Pour le personnaliser, modifiez `emailContentHtml` dans `app/api/contact/route.ts`.

### Domaines autorisés
Vous pouvez configurer des domaines autorisés dans votre dashboard Mailjet pour plus de sécurité.

### Webhooks (optionnel)
Configurez des webhooks dans Mailjet pour recevoir des notifications de statut d'envoi.

## 🔒 Sécurité

- ✅ Les clés API sont stockées côté serveur (sécurisé)
- ✅ Validation des données côté serveur
- ✅ Protection contre le spam intégrée à Mailjet
- ✅ Support du DKIM et SPF pour l'authentification

## 📊 Limites du plan gratuit

- **6 000 emails/mois** gratuits
- **200 emails/jour** maximum
- Support par email
- Statistiques de base

## 🔄 Migration depuis EmailJS

Si vous migrez depuis EmailJS :
1. Les données du formulaire restent identiques
2. L'envoi se fait maintenant côté serveur (plus sécurisé)
3. Plus besoin de configuration côté client
4. Meilleure délivrabilité des emails

## 🆘 Dépannage

### Erreur "configured": false
- Vérifiez que `MAILJET_API_KEY` et `MAILJET_API_SECRET` sont dans `.env.local`
- Redémarrez le serveur après modification des variables

### Erreur 401 Unauthorized
- Vérifiez que vos clés API sont correctes
- Assurez-vous qu'elles ne contiennent pas d'espaces

### Erreur de domaine
- Si vous utilisez un domaine personnalisé, vérifiez qu'il est validé
- Sinon, utilisez une adresse fournie par Mailjet

### Mode développement
Si les clés ne sont pas configurées, l'API fonctionne en mode debug et logue l'email dans la console sans l'envoyer.

## 📈 Monitoring

Dans votre dashboard Mailjet, vous pouvez :
- Voir les statistiques d'envoi
- Consulter les logs de livraison
- Gérer les bounces et plaintes
- Suivre l'engagement (ouvertures, clics)

## 🌍 Conformité

Mailjet est conforme :
- **RGPD** (hébergement en Europe)
- **CAN-SPAM Act**
- **CASL** (Canada)

## 💡 Bonnes pratiques

1. **Vérifiez votre domaine** pour améliorer la délivrabilité
2. **Utilisez des emails de réponse valides** 
3. **Surveillez votre réputation** dans le dashboard
4. **Testez vos emails** avant la mise en production

---

💡 **Besoin d'aide ?** 
- [Documentation officielle Mailjet](https://dev.mailjet.com/)
- [Support Mailjet](https://www.mailjet.com/support/)
- [API Reference](https://dev.mailjet.com/email/reference/) 