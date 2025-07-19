'use client';

import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Users, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
    {
        title: "Téléphone",
        value: "+33 1 23 45 67 89",
        description: "Lundi au Vendredi, 8h-19h",
        icon: <Phone className="h-6 w-6" />
    },
    {
        title: "Email",
        value: "contact@e-beyray.fr",
        description: "Réponse sous 24h",
        icon: <Mail className="h-6 w-6" />
    },
    {
        title: "Adresse",
        value: "123 Avenue de l'Éducation",
        description: "75001 Paris, France",
        icon: <MapPin className="h-6 w-6" />
    },
    {
        title: "Horaires",
        value: "8h00 - 19h00",
        description: "Du lundi au vendredi",
        icon: <Clock className="h-6 w-6" />
    }
];

const faqItems = [
    {
        question: "Comment se déroule le premier cours ?",
        answer: "Le premier cours est une évaluation gratuite de 30 minutes où nous identifions les besoins de l'élève et définissons un plan personnalisé."
    },
    {
        question: "Quels sont vos tarifs ?",
        answer: "Nos tarifs varient selon le niveau et la matière. Contactez-nous pour un devis personnalisé gratuit."
    },
    {
        question: "Comment choisissez-vous les professeurs ?",
        answer: "Tous nos professeurs sont diplômés, expérimentés et sélectionnés selon leur expertise pédagogique et leur capacité d'adaptation."
    },
    {
        question: "Peut-on changer de professeur ?",
        answer: "Oui, si le courant ne passe pas avec le professeur, nous pouvons en proposer un autre sans frais supplémentaires."
    }
];

const services = [
    {
        title: "Soutien scolaire",
        description: "Remise à niveau et consolidation des acquis",
        icon: "📚"
    },
    {
        title: "Cours particuliers",
        description: "Accompagnement personnalisé toutes matières",
        icon: "🎯"
    },
    {
        title: "Préparation aux examens",
        description: "Brevet, Baccalauréat, concours",
        icon: "🏆"
    },
    {
        title: "Aide aux devoirs",
        description: "Accompagnement quotidien et méthodologie",
        icon: "✏️"
    }
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        telephone: '',
        niveau: '',
        matiere: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulation d'envoi du formulaire
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Votre message a été envoyé avec succès ! Nous vous recontacterons rapidement.');
            setFormData({
                nom: '',
                email: '',
                telephone: '',
                niveau: '',
                matiere: '',
                message: ''
            });
        }, 2000);
    };

    return (
        <div className="bg-background pt-16">
            {/* Hero Section */}
            <section className="section">
                <div className="container-apple">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="mb-6 flex justify-center">
                            <div className="rounded-full bg-accent p-4">
                                <MessageCircle className="h-8 w-8 text-white" />
                            </div>
                        </div>
                        <h1 className="mb-6 font-display text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl">
                            Contactez-nous
                        </h1>
                        <p className="text-lg text-text-subtle md:text-xl">
                            Une question ? Un besoin spécifique ? Notre équipe est là pour vous accompagner
                            dans votre projet éducatif. Contactez-nous pour un devis gratuit.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="section-sm bg-hover-bg">
                <div className="container-apple">
                    <div className="grid-apple-4">
                        {contactInfo.map((info) => (
                            <div
                                key={info.title}
                                className="card p-6 text-center"
                            >
                                <div className="mb-4 flex justify-center">
                                    <div className="rounded-lg bg-accent p-3">
                                        <div className="text-white">
                                            {info.icon}
                                        </div>
                                    </div>
                                </div>
                                <h3 className="mb-2 font-semibold text-foreground">{info.title}</h3>
                                <div className="mb-1 text-accent font-medium">{info.value}</div>
                                <div className="text-sm text-text-subtle">{info.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="section">
                <div className="container-apple">
                    <div className="grid-apple-2 gap-12">
                        {/* Contact Form */}
                        <div className="card-glass p-8">
                            <h2 className="mb-6 font-display text-2xl font-semibold text-foreground">
                                Demande de contact
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid-apple-2 gap-4">
                                    <div>
                                        <label htmlFor="nom" className="block text-sm font-medium text-foreground mb-2">
                                            Nom complet *
                                        </label>
                                        <input
                                            type="text"
                                            id="nom"
                                            name="nom"
                                            value={formData.nom}
                                            onChange={handleInputChange}
                                            required
                                            className="input"
                                            placeholder="Votre nom"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="input"
                                            placeholder="votre.email@exemple.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid-apple-2 gap-4">
                                    <div>
                                        <label htmlFor="telephone" className="block text-sm font-medium text-foreground mb-2">
                                            Téléphone
                                        </label>
                                        <input
                                            type="tel"
                                            id="telephone"
                                            name="telephone"
                                            value={formData.telephone}
                                            onChange={handleInputChange}
                                            className="input"
                                            placeholder="06 12 34 56 78"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="niveau" className="block text-sm font-medium text-foreground mb-2">
                                            Niveau scolaire
                                        </label>
                                        <select
                                            id="niveau"
                                            name="niveau"
                                            value={formData.niveau}
                                            onChange={handleInputChange}
                                            className="input"
                                        >
                                            <option value="">Sélectionnez un niveau</option>
                                            <option value="primaire">Primaire (CP-CM2)</option>
                                            <option value="college">Collège (6ème-3ème)</option>
                                            <option value="lycee">Lycée (2nde-Terminale)</option>
                                            <option value="superieur">Enseignement supérieur</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="matiere" className="block text-sm font-medium text-foreground mb-2">
                                        Matière(s) souhaitée(s)
                                    </label>
                                    <input
                                        type="text"
                                        id="matiere"
                                        name="matiere"
                                        value={formData.matiere}
                                        onChange={handleInputChange}
                                        className="input"
                                        placeholder="Mathématiques, Français, Physique..."
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="input resize-none"
                                        placeholder="Décrivez-nous vos besoins et objectifs..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-primary w-full"
                                >
                                    {isSubmitting ? (
                                        "Envoi en cours..."
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" />
                                            Envoyer ma demande
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Services & Map */}
                        <div className="space-y-8">
                            {/* Services */}
                            <div className="card-glass p-6">
                                <h3 className="mb-4 font-semibold text-foreground">Nos services</h3>
                                <div className="mb-6 aspect-video rounded-lg overflow-hidden">
                                    <img
                                        src="/assets/img_1.jpeg"
                                        alt="Nos services éducatifs"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="space-y-4">
                                    {services.map((service) => (
                                        <div key={service.title} className="flex items-start gap-3">
                                            <div className="text-2xl">{service.icon}</div>
                                            <div>
                                                <h4 className="font-medium text-foreground">{service.title}</h4>
                                                <p className="text-sm text-text-subtle">{service.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="card-glass p-6">
                                <h3 className="mb-4 font-semibold text-foreground">Notre localisation</h3>
                                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                                    <img
                                        src="/assets/img_4.jpeg"
                                        alt="Notre centre de formation à Paris"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section bg-hover-bg">
                <div className="container-apple">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
                            Questions fréquentes
                        </h2>
                        <p className="text-text-subtle">
                            Retrouvez les réponses aux questions les plus courantes
                        </p>
                    </div>

                    <div className="grid-apple-2 gap-6">
                        {faqItems.map((item, index) => (
                            <div key={index} className="card-glass p-6">
                                <h3 className="mb-3 font-semibold text-foreground flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                    {item.question}
                                </h3>
                                <p className="text-text-subtle ml-7">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container-apple">
                    <div className="grid-apple-2 items-center gap-12">
                        <div className="card-glass p-12 text-center md:text-left">
                            <h2 className="mb-4 font-display text-2xl font-semibold text-foreground md:text-3xl">
                                Prêt à commencer ?
                            </h2>
                            <p className="mb-8 text-text-subtle">
                                Rejoignez les centaines de familles qui nous font confiance pour
                                l'accompagnement scolaire de leurs enfants.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                                <button className="btn btn-primary">
                                    <Phone className="mr-2 h-4 w-4" />
                                    Appelez-nous maintenant
                                </button>
                                <button className="btn btn-secondary">
                                    <Users className="mr-2 h-4 w-4" />
                                    Évaluation gratuite
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="aspect-square w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="/assets/img_8.jpeg"
                                    alt="Famille satisfaite de nos services"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 