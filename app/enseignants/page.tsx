'use client';

import { CheckCircle, Users, Award, Search, BookOpen, Star, Shield } from 'lucide-react';

const qualityPoints = [
    {
        icon: <CheckCircle className="h-6 w-6" />,
        title: "Diplôme requis",
        description: "Titulaires d'un diplôme de niveau bac +2 minimum"
    },
    {
        icon: <Users className="h-6 w-6" />,
        title: "Professeurs expérimentés",
        description: "Professeurs en exercice ou ayant exercé dans un établissement"
    },
    {
        icon: <Shield className="h-6 w-6" />,
        title: "Dossier validé",
        description: "Justificatifs vérifiés par notre équipe pédagogique"
    }
];

const processSteps = [
    {
        number: "01",
        title: "Sélection rigoureuse",
        description: "Nos enseignants sont sélectionnés selon un processus rigoureux et suivis avec soin."
    },
    {
        number: "02",
        title: "Tests de compétences",
        description: "Validation des compétences par des tests de connaissances et évaluation pédagogique."
    },
    {
        number: "03",
        title: "Suivi régulier",
        description: "Évaluation continue pour garantir la qualité et l'adaptation aux besoins de chaque élève."
    }
];

export default function EnseignantsPage() {
    return (
        <div className="bg-background pt-16">
            {/* Hero Section */}
            <section className="section-sm">
                <div className="container-apple">
                    <div className="grid-apple-2 items-center gap-12">
                        <div className="text-center md:text-left">
                            <div className="mb-4 flex justify-center md:justify-start">
                                <div className="rounded-full bg-accent p-4">
                                    <Award className="h-8 w-8 text-white" />
                                </div>
                            </div>
                            <h1 className="mb-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
                                Sélectionnés et suivis avec soin
                            </h1>
                            <p className="max-w-2xl text-lg text-text-subtle">
                                Pas d'étudiants, ni de jeunes diplômés sans expérience.
                            </p>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="aspect-square w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="/assets/img_3.jpeg"
                                    alt="Nos enseignants qualifiés"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Guarantee */}
            <section className="section-sm bg-hover-bg">
                <div className="container-apple">
                    <div className="text-center mb-12">
                        <p className="text-lg font-medium text-foreground mb-2">
                            Nos enseignants sont sélectionnés selon un processus rigoureux et suivis avec soin.
                        </p>
                    </div>

                    <div className="grid-apple-3">
                        {qualityPoints.map((point, index) => (
                            <div
                                key={point.title}
                                className="card p-6 text-center"
                            >
                                <div className="mb-4 flex justify-center">
                                    <div className="rounded-lg bg-accent p-3">
                                        <div className="text-white">
                                            {point.icon}
                                        </div>
                                    </div>
                                </div>
                                <h3 className="mb-2 font-semibold text-foreground">{point.title}</h3>
                                <p className="text-text-subtle">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Our Teachers */}
            <section className="section">
                <div className="container-apple">
                    <div className="grid-apple-2 items-center">
                        <div>
                            <h2 className="mb-6 font-display text-2xl font-semibold text-foreground md:text-3xl">
                                Nos enseignants
                            </h2>
                            <div className="space-y-4 text-text-subtle">
                                <p>
                                    Chez E-BEYRAY, nous sélectionnons rigoureusement nos enseignants en fonction du profil et des besoins de chaque élève. E-BEYRAY dispose d'un réseau de plus de 100 intervenants pédagogues et spécialistes de leur domaine.
                                </p>
                                <p>
                                    Nous prenons soin de sélectionner des enseignants compétents, bienveillants et disponibles pour accompagner l'élève tout le long de la prestation. Notre processus de sélection s'appuie tant sur leur niveau d'études que sur leurs qualités pédagogiques.
                                </p>
                            </div>
                        </div>

                        <div className="card-glass p-8">
                            <div className="mb-6 flex items-center">
                                <div className="mr-4 rounded-lg bg-accent p-3">
                                    <Users className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-2xl font-semibold text-accent">100+</div>
                                    <div className="text-sm text-text-subtle">Enseignants qualifiés</div>
                                </div>
                            </div>
                            <p className="text-text-subtle">
                                Un réseau d'enseignants expérimentés et passionnés, prêts à vous accompagner dans votre réussite.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Selection Process */}
            <section className="section bg-hover-bg">
                <div className="container-apple">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 font-display text-2xl font-semibold text-foreground md:text-3xl">
                            Un recrutement sélectif
                        </h2>
                        <p className="mx-auto max-w-3xl text-text-subtle">
                            Avant de donner des cours avec E-BEYRAY, votre enseignant rencontre notre équipe de recrutement. Nous validons alors ses compétences dans la matière par des tests de connaissances. Ensuite, nous évaluons ses qualités pédagogiques au travers de mises en situation.
                        </p>
                    </div>

                    <div className="grid-apple-3">
                        {processSteps.map((step, index) => (
                            <div
                                key={step.number}
                                className="card p-6"
                            >
                                <div className="mb-4 text-3xl font-bold text-accent">{step.number}</div>
                                <h3 className="mb-3 font-semibold text-foreground">{step.title}</h3>
                                <p className="text-text-subtle">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 card-glass p-8">
                        <p className="mb-4 text-foreground font-medium">Chaque dossier, comprenant une liste de justificatifs (diplômes, casier judiciaire…), est validé par l'équipe pédagogique avant que l'enseignant dispense son premier cours.</p>
                    </div>
                </div>
            </section>

            {/* Continuous Evaluation */}
            <section className="section">
                <div className="container-apple">
                    <div className="grid-apple-2 items-center gap-12">
                        <div className="card-glass p-8">
                            <div className="mb-6 flex items-center">
                                <div className="mr-4 rounded-lg bg-accent p-3">
                                    <Star className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="font-semibold text-foreground">Qualité garantie</h3>
                            </div>
                            <p className="text-text-subtle">
                                Si jamais le courant ne passe pas bien entre l'enseignant et l'élève, dites-le nous ! Nous vous proposerons alors un nouvel enseignant en prenant en compte vos remarques.
                            </p>
                        </div>

                        <div>
                            <h2 className="mb-6 font-display text-2xl font-semibold text-foreground md:text-3xl">
                                Une évaluation régulière
                            </h2>
                            <div className="space-y-4 text-text-subtle">
                                <p>
                                    Nous attachons une grande importance à la qualité de nos cours et de nos enseignants. C'est pourquoi nous vous contacterons régulièrement pour vérifier que progrès, confiance et envie d'apprendre sont bien au rendez-vous.
                                </p>
                                <p>
                                    Si votre enseignant doit améliorer certains points, nous saurons lui passer le message.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Image Section */}
            <section className="section bg-hover-bg">
                <div className="container-apple text-center">
                    <div className="mb-8">
                        <h2 className="mb-4 font-display text-2xl font-semibold text-foreground md:text-3xl">
                            Notre équipe pédagogique
                        </h2>
                        <p className="text-text-subtle">
                            Découvrez les professionnels qui vous accompagnent
                        </p>
                    </div>

                    <div className="mx-auto max-w-4xl">
                        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="/assets/img_5.jpeg"
                                alt="Notre équipe pédagogique experte"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 