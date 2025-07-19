# 🚀 Déploiement E-BEYRAY sur Vercel

Guide complet pour déployer votre projet E-BEYRAY sur Vercel avec Mailjet fonctionnel.

## 📋 **Prérequis**

- ✅ Compte GitHub avec votre code
- ✅ Compte Vercel (gratuit)
- ✅ Clés API Mailjet fonctionnelles
- ✅ Projet E-BEYRAY prêt

## 🛠️ **Étape 1 : Préparer le projet**

### Vérifier les fichiers nécessaires

```bash
# Vérifier que ces fichiers existent
ls -la next.config.js package.json tailwind.config.ts
```

### Créer/vérifier le fichier .vercelignore

```bash
# Créer le fichier .vercelignore
echo "# Vercel ignore
.env.local
.env
node_modules
.next
.git
*.log" > .vercelignore
```

### Test de build local

```bash
# Tester la compilation
npm run build
```

## 🔗 **Étape 2 : Pousser sur GitHub**

```bash
# Initialiser git si pas déjà fait
git init

# Ajouter tous les fichiers
git add .

# Commit
git commit -m "feat: projet E-BEYRAY prêt pour production avec Mailjet"

# Ajouter le remote (remplacez par votre repo)
git remote add origin https://github.com/votre-username/e-beyray.git

# Pousser
git push -u origin main
```

## ☁️ **Étape 3 : Déployer sur Vercel**

### Option A : Via le site Vercel

1. Allez sur [https://vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Cliquez sur **"New Project"**
4. Sélectionnez votre repository **e-beyray**
5. Laissez les paramètres par défaut :
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next
6. Cliquez sur **"Deploy"**

### Option B : Via CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Suivre les prompts :
# ? Set up and deploy "~/path/to/E-BEYRAY"? [Y/n] y
# ? Which scope do you want to deploy to? [Your Account]
# ? Link to existing project? [y/N] n
# ? What's your project's name? e-beyray
# ? In which directory is your code located? ./
```

## 🔧 **Étape 4 : Configurer les variables d'environnement**

### Dans le dashboard Vercel :

1. Allez dans votre projet sur [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Cliquez sur **Settings** > **Environment Variables**
3. Ajoutez ces variables :

```bash
# Configuration Mailjet (OBLIGATOIRE)
MAILJET_API_KEY=your_mailjet_api_key
MAILJET_API_SECRET=your_mailjet_secret_key

# Configuration emails
ADMIN_EMAIL=groupesavoirplus@gmail.com
FROM_EMAIL=pilot@mailjet.com
FROM_NAME=E-BEYRAY Contact

# Base URL (pour les redirections)
NEXT_PUBLIC_BASE_URL=https://votre-app.vercel.app
```

### Important :
- ⚠️ **Ne jamais** commiter les vraies clés dans le code
- ✅ Utilisez uniquement les Environment Variables de Vercel
- 🔄 Redéployez après avoir ajouté les variables

## 🌐 **Étape 5 : Configuration production**

### Mettre à jour next.config.js pour la production

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true 
  },
  // Configuration pour Vercel
  async redirects() {
    return [
      {
        source: '/',
        destination: '/contact',
        permanent: false,
      },
    ]
  },
};

module.exports = nextConfig;
```

## ✅ **Étape 6 : Tester le déploiement**

### Vérifier que tout fonctionne :

1. **API de contact** :
   ```bash
   curl https://votre-app.vercel.app/api/contact
   ```

2. **Formulaire de contact** :
   - Allez sur `https://votre-app.vercel.app/contact`
   - Remplissez et envoyez le formulaire
   - Vérifiez vos emails/spams

3. **Logs en temps réel** :
   ```bash
   # Via CLI Vercel
   vercel logs
   ```

## 🔄 **Étape 7 : Redéploiement automatique**

Une fois configuré, chaque push sur GitHub redéploiera automatiquement :

```bash
# Faire des modifications
git add .
git commit -m "update: amélioration du formulaire"
git push

# ➜ Vercel redéploie automatiquement
```

## 🏷️ **Étape 8 : Domaine personnalisé (optionnel)**

### Ajouter votre domaine :

1. Dans Vercel Dashboard > **Settings** > **Domains**
2. Ajouter votre domaine : `www.e-beyray.com`
3. Configurer les DNS selon les instructions Vercel
4. Mettre à jour les variables d'environnement :
   ```bash
   NEXT_PUBLIC_BASE_URL=https://www.e-beyray.com
   ```

## 📧 **Configuration Mailjet pour la production**

### Améliorer la délivrabilité :

1. **Vérifier un domaine** dans Mailjet :
   - Account Settings > Sender domains & addresses
   - Ajouter votre domaine
   - Configurer SPF/DKIM

2. **Mettre à jour FROM_EMAIL** :
   ```bash
   FROM_EMAIL=contact@votre-domaine.com
   ```

## 🔍 **Debugging en production**

### Accéder aux logs :

```bash
# Via CLI
vercel logs --follow

# Ou dans le dashboard Vercel > Functions > View Logs
```

### Tester l'API en production :

```bash
# Test simple
curl https://votre-app.vercel.app/api/contact

# Test complet
curl -X POST https://votre-app.vercel.app/api/contact \
-H "Content-Type: application/json" \
-d '{"nom":"Test Production","email":"test@example.com","message":"Test depuis production"}'
```

## ⚠️ **Points d'attention**

### Limites Vercel (plan gratuit) :
- **100 GB-hours** de computing
- **100 GB** de bande passante
- **10 TB** de edge data transfer

### Limites Mailjet (plan gratuit) :
- **6 000 emails/mois**
- **200 emails/jour**

### Sécurité :
- ✅ Variables d'environnement sécurisées
- ✅ Validation côté serveur
- ✅ Rate limiting (à ajouter si nécessaire)

## 🎯 **Checklist finale**

- [ ] Code pushé sur GitHub
- [ ] Projet déployé sur Vercel
- [ ] Variables d'environnement configurées
- [ ] API de contact testée
- [ ] Formulaire de contact testé
- [ ] Emails reçus et fonctionnels
- [ ] Domaine configuré (si applicable)
- [ ] Monitoring activé

## 🆘 **Dépannage**

### Erreurs communes :

**❌ Build failed**
```bash
# Vérifier localement
npm run build
npm run start
```

**❌ Environment variables**
- Vérifier l'orthographe exacte
- Redéployer après modification
- Tester avec `vercel env ls`

**❌ Mailjet errors**
- Vérifier les clés API
- Tester la connexion avec curl
- Vérifier les quotas

---

💡 **Besoin d'aide ?**
- [Documentation Vercel](https://vercel.com/docs)
- [Support Vercel](https://vercel.com/support)
- [Mailjet Docs](https://dev.mailjet.com/) 