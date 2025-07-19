// File: app/api/contact/route.ts
// Purpose: API pour l'envoi d'emails de contact via Mailjet
// Dependencies: next/server, node-mailjet
// Sections:
// 1. Configuration et types
// 2. Initialisation de Mailjet
// 3. Fonction POST pour traiter les demandes
// 4. Fonction GET pour les informations

import { NextRequest, NextResponse } from 'next/server';
import Mailjet from 'node-mailjet';

// Interface pour les données du formulaire
interface ContactFormData {
  nom: string;
  email: string;
  telephone?: string;
  niveau?: string;
  matiere?: string;
  message?: string;
}

// Configuration pour l'envoi d'email
const EMAIL_CONFIG = {
  adminEmail: process.env.ADMIN_EMAIL || 'birotori@gmail.com',
  fromEmail: process.env.FROM_EMAIL || 'pilot@mailjet.com', // Adresse Mailjet vérifiée par défaut
  fromName: process.env.FROM_NAME || 'E-BEYRAY Contact',
  subject: 'Nouvelle demande de contact - E-BEYRAY'
};

// Initialisation de Mailjet
const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY || '',
  apiSecret: process.env.MAILJET_API_SECRET || ''
});

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();

    // Validation des données requises
    if (!formData.nom || !formData.email) {
      return NextResponse.json(
        { error: 'Le nom et l\'email sont obligatoires' },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    // Préparer le contenu de l'email en HTML
    const emailContentHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; border-bottom: 3px solid #007bff; padding-bottom: 15px; margin-bottom: 25px;">
            Nouvelle demande de contact - E-BEYRAY
          </h2>
          
          <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2196f3;">
            <h3 style="color: #1976d2; margin-top: 0; margin-bottom: 15px;">Informations du client :</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Nom :</td>
                <td style="padding: 8px 0; color: #333;">${formData.nom}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Email :</td>
                <td style="padding: 8px 0;"><a href="mailto:${formData.email}" style="color: #007bff; text-decoration: none;">${formData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Téléphone :</td>
                <td style="padding: 8px 0; color: #333;">${formData.telephone || 'Non renseigné'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Niveau :</td>
                <td style="padding: 8px 0; color: #333;">${formData.niveau || 'Non renseigné'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Matière(s) :</td>
                <td style="padding: 8px 0; color: #333;">${formData.matiere || 'Non renseigné'}</td>
              </tr>
            </table>
          </div>
          
          ${formData.message ? `
          <div style="background-color: #fff3e0; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ff9800;">
            <h4 style="color: #f57c00; margin-top: 0; margin-bottom: 10px;">Message :</h4>
            <p style="margin: 0; line-height: 1.6; color: #333; font-style: italic;">"${formData.message}"</p>
          </div>
          ` : ''}
          
          <div style="border-top: 2px solid #e0e0e0; padding-top: 20px; margin-top: 30px; font-size: 14px; color: #666;">
            <p style="margin: 5px 0;">📧 Cette demande a été envoyée depuis le site <strong>E-BEYRAY</strong></p>
            <p style="margin: 5px 0;">🕒 Date : <strong>${new Date().toLocaleString('fr-FR')}</strong></p>
            <p style="margin: 15px 0 5px 0; font-weight: bold; color: #007bff;">
              💬 Répondez directement à ${formData.email} pour contacter le client.
            </p>
          </div>
        </div>
      </div>
    `;

    // Préparer le contenu texte (fallback)
    const emailContentText = `
Nouvelle demande de contact - E-BEYRAY

Informations du client :
- Nom : ${formData.nom}
- Email : ${formData.email}
- Téléphone : ${formData.telephone || 'Non renseigné'}
- Niveau scolaire : ${formData.niveau || 'Non renseigné'}
- Matière(s) : ${formData.matiere || 'Non renseigné'}

${formData.message ? `Message : ${formData.message}` : ''}

---
Cette demande a été envoyée depuis le site E-BEYRAY le ${new Date().toLocaleString('fr-FR')}
Répondez directement à ${formData.email} pour contacter le client.
    `;

    // Vérifier que les clés Mailjet sont configurées
    const hasApiKey = process.env.MAILJET_API_KEY && process.env.MAILJET_API_KEY.trim() !== '';
    const hasSecret = process.env.MAILJET_API_SECRET && process.env.MAILJET_API_SECRET.trim() !== '';
    
    if (!hasApiKey || !hasSecret) {
      console.error('❌ Clés Mailjet non configurées dans les variables d\'environnement');
      
      // Log pour debug en mode développement
      console.log('📧 Email à envoyer (mode debug - configurez Mailjet):', {
        to: EMAIL_CONFIG.adminEmail,
        subject: EMAIL_CONFIG.subject,
        from: EMAIL_CONFIG.fromEmail,
        replyTo: formData.email,
        content: emailContentText
      });
      
      return NextResponse.json({
        success: true,
        message: 'Votre demande a été reçue ! (Mode développement - configurez les clés Mailjet pour l\'envoi réel)',
        timestamp: new Date().toISOString(),
        debug: true
      });
    }

    try {
      // Envoi de l'email avec Mailjet
      console.log('🚀 Tentative d\'envoi Mailjet...');
      console.log('📧 Configuration:', {
        from: EMAIL_CONFIG.fromEmail,
        to: EMAIL_CONFIG.adminEmail,
        subject: EMAIL_CONFIG.subject
      });
      
      const result = await mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: EMAIL_CONFIG.fromEmail,
                Name: EMAIL_CONFIG.fromName
              },
              To: [
                {
                  Email: EMAIL_CONFIG.adminEmail,
                  Name: "E-BEYRAY Admin"
                }
              ],
              Subject: EMAIL_CONFIG.subject,
              TextPart: emailContentText,
              HTMLPart: emailContentHtml,
              ReplyTo: {
                Email: formData.email,
                Name: formData.nom
              },
              CustomID: `contact-${Date.now()}`,
              Headers: {
                'X-Contact-Source': 'E-BEYRAY-Website',
                'X-Contact-Type': 'Contact-Form'
              }
            }
          ]
        } as any);

      console.log('✅ Réponse Mailjet complète:', JSON.stringify(result.body, null, 2));

      // Vérification de la réponse
      const messages = (result.body as any).Messages || [];
      if (messages.length === 0) {
        throw new Error('Aucun message dans la réponse Mailjet');
      }

      const firstMessage = messages[0];
      if (firstMessage.Status !== 'success') {
        throw new Error(`Status Mailjet: ${firstMessage.Status}`);
      }

      const messageId = firstMessage.To?.[0]?.MessageID;
      if (!messageId) {
        throw new Error('Pas de MessageID dans la réponse Mailjet');
      }

      // Log détaillé pour diagnostic
      console.log('📧 Détails de l\'envoi :');
      console.log('- Message ID:', messageId);
      console.log('- Status:', firstMessage.Status);
      console.log('- Destinataire:', EMAIL_CONFIG.adminEmail);
      console.log('- Expéditeur:', EMAIL_CONFIG.fromEmail);
      console.log('- Heure envoi:', new Date().toISOString());
      console.log('⚠️  Vérifiez :');
      console.log('  1. Le dossier SPAM de', EMAIL_CONFIG.adminEmail);
      console.log('  2. Votre dashboard Mailjet : https://app.mailjet.com/stats');
      console.log('  3. Attendez 2-3 minutes pour la synchronisation');

      return NextResponse.json({
        success: true,
        message: 'Votre demande a été envoyée avec succès ! Nous vous recontacterons rapidement.',
        timestamp: new Date().toISOString(),
        messageId: messageId,
        debug: {
          to: EMAIL_CONFIG.adminEmail,
          from: EMAIL_CONFIG.fromEmail,
          status: firstMessage.Status,
          checkSpam: `Vérifiez le dossier SPAM de ${EMAIL_CONFIG.adminEmail}`,
          mailjetDashboard: 'https://app.mailjet.com/stats',
          fullResponse: result.body
        }
      });

    } catch (emailError: any) {
      console.error('❌ Erreur détaillée lors de l\'envoi Mailjet:');
      console.error('- Message:', emailError.message);
      console.error('- Stack:', emailError.stack);
      console.error('- Erreur complète:', emailError);
      
      return NextResponse.json(
        { 
          error: 'Erreur lors de l\'envoi de l\'email via Mailjet.',
          details: emailError.message || 'Erreur Mailjet inconnue',
          contact: EMAIL_CONFIG.adminEmail,
          debug: {
            errorType: emailError.constructor.name,
            originalError: emailError.toString()
          }
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('❌ Erreur dans l\'API contact:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

export async function GET() {
  const hasApiKey = process.env.MAILJET_API_KEY && process.env.MAILJET_API_KEY.trim() !== '';
  const hasSecret = process.env.MAILJET_API_SECRET && process.env.MAILJET_API_SECRET.trim() !== '';
  const isConfigured = hasApiKey && hasSecret;
  
  let connectionTest = null;
  
  // Test de connexion Mailjet si les clés sont présentes
  if (isConfigured) {
    try {
      const testMailjet = new Mailjet({
        apiKey: process.env.MAILJET_API_KEY || '',
        apiSecret: process.env.MAILJET_API_SECRET || ''
      });
      
      // Test simple : récupérer les informations du compte
      const result = await testMailjet.get('user').request();
      const resultBody = result.body as any;
      connectionTest = {
        valid: true,
        accountEmail: resultBody.Data?.[0]?.Email || 'Compte valide',
        message: 'Connexion Mailjet réussie'
      };
    } catch (error: any) {
      connectionTest = {
        valid: false,
        error: error.message || 'Erreur inconnue',
        message: 'Échec de connexion Mailjet - Vérifiez vos clés API'
      };
    }
  }
  
  return NextResponse.json({
    message: 'API Contact - Mailjet configuré pour l\'envoi d\'emails',
    status: 'API fonctionnelle',
    emailMethod: 'Mailjet',
    configured: isConfigured,
    connectionTest,
    documentation: 'Configurez MAILJET_API_KEY et MAILJET_API_SECRET dans .env.local',
    debug: {
      hasApiKey: !!hasApiKey,
      hasSecret: !!hasSecret,
      apiKeyPreview: hasApiKey ? `${process.env.MAILJET_API_KEY?.substring(0, 6)}...` : 'Non défini',
      secretPreview: hasSecret ? `${process.env.MAILJET_API_SECRET?.substring(0, 6)}...` : 'Non défini'
    }
  });
} 