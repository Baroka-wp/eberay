'use client';

import { Home, Clock, Users, Star, BookOpen, Brain, Target, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

const subjects = [
    {
        title: "Mathématiques",
        description: "Du CP à la Terminale, renforcez vos bases et excellez dans cette matière fondamentale",
        levels: "CP - Terminale",
        icon: "🔢",
        features: ["Algèbre", "Géométrie", "Analyse", "Statistiques"]
    },
    {
        title: "Sciences Physiques",
        description: "Physique-Chimie adaptée à votre niveau avec expériences et applications pratiques",
        levels: "4ème - Terminale",
        icon: "⚡",
        features: ["Mécanique", "Thermodynamique", "Chimie", "Électricité"]
    },
    {
        title: "Français",
        description: "Maîtrisez la langue française, l'expression écrite et la littérature",
        levels: "CP - Terminale",
        icon: "📚",
        features: ["Grammaire", "Orthographe", "Littérature", "Expression"]
    },
    {
        title: "Langues Vivantes",
        description: "Anglais, Espagnol, Allemand - Progressez rapidement avec nos méthodes",
        levels: "6ème - Terminale",
        icon: "🌍",
        features: ["Conversation", "Grammaire", "Vocabulaire", "Culture"]
    },
    {
        title: "Histoire-Géographie",
        description: "Développez votre culture générale et votre sens de l'analyse",
        levels: "6ème - Terminale",
        icon: "🗺️",
        features: ["Histoire", "Géographie", "Géopolitique", "Méthologie"]
    },
    {
        title: "SVT",
        description: "Sciences de la Vie et de la Terre pour comprendre le monde vivant",
        levels: "6ème - Terminale",
        icon: "🧬",
        features: ["Biologie", "Géologie", "Écologie", "Évolution"]
    }
];

const advantages = [
    {
        title: "Cours personnalisés",
        description: "Un enseignement adapté au rythme et aux besoins spécifiques de chaque élève",
        icon: <Target className="h-6 w-6" />
    },
    {
        title: "Professeurs qualifiés",
        description: "Nos enseignants sont diplômés et expérimentés dans leur domaine",
        icon: <Users className="h-6 w-6" />
    },
    {
        title: "Flexibilité horaire",
        description: "Choisissez vos créneaux selon votre emploi du temps",
        icon: <Clock className="h-6 w-6" />
    },
    {
        title: "Suivi régulier",
        description: "Un bilan régulier des progrès avec les parents et l'élève",
        icon: <CheckCircle className="h-6 w-6" />
    }
];

const methodology = [
    {
        step: "01",
        title: "Évaluation gratuite",
        description: "Nous évaluons le niveau de l'élève et définissons ses objectifs"
    },
    {
        step: "02",
        title: "Sélection du professeur",
        description: "Nous trouvons le professeur idéal selon le profil et les besoins"
    },
    {
        step: "03",
        title: "Planning personnalisé",
        description: "Nous établissons un planning flexible adapté à vos contraintes"
    },
    {
        step: "04",
        title: "Suivi des progrès",
        description: "Nous suivons l'évolution et ajustons la méthode si nécessaire"
    }
];

const stats = [
    {
        number: "500+",
        label: "Élèves accompagnés",
        icon: <Users className="h-6 w-6" />
    },
    {
        number: "150+",
        label: "Professeurs qualifiés",
        icon: <BookOpen className="h-6 w-6" />
    },
    {
        number: "95%",
        label: "Taux de satisfaction",
        icon: <Star className="h-6 w-6" />
    },
    {
        number: "24h",
        label: "Délai de réponse",
        icon: <Clock className="h-6 w-6" />
    }
];

export default function CoursADomicilePage() {
    return (
        <div className="bg-background pt-16">
            {/* Hero Section */}
            <section className="section">
                <div className="container-apple">
                    <div className="grid-apple-2 items-center gap-12">
                        <div className="text-center md:text-left">
                            <div className="mb-6 flex justify-center md:justify-start">
                                <div className="rounded-full bg-accent p-4">
                                    <Home className="h-8 w-8 text-white" />
                                </div>
                            </div>
                            <h1 className="mb-6 font-display text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl">
                                Cours à domicile
                            </h1>
                            <p className="max-w-2xl text-lg text-text-subtle md:text-xl mb-8">
                                Des cours particuliers de qualité dans le confort de votre foyer.
                                Nos professeurs expérimentés s'adaptent à votre rythme pour garantir votre réussite.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                                <button className="btn btn-primary">
                                    Demander un devis gratuit
                                </button>
                                <button className="btn btn-secondary">
                                    Découvrir nos matières
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="aspect-square w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="/assets/img_2.jpeg"
                                    alt="Cours à domicile personnalisés"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-sm bg-hover-bg">
                <div className="container-apple">
                    <div className="grid-apple-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="card p-6 text-center"
                            >
                                <div className="mb-4 flex justify-center">
                                    <div className="rounded-lg bg-accent p-3">
                                        <div className="text-white">
                                            {stat.icon}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2 text-2xl font-semibold text-accent">{stat.number}</div>
                                <div className="text-sm text-text-subtle">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="section">
                <div className="container-apple">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
                            Pourquoi choisir nos cours à domicile ?
                        </h2>
                        <p className="mx-auto max-w-2xl text-text-subtle">
                            Découvrez tous les avantages de l'enseignement personnalisé à domicile
                        </p>
                    </div>

                    <div className="grid-apple-3 gap-8">
                        <div className="col-span-3 md:col-span-2 space-y-6">
                            {advantages.map((advantage, index) => (
                                <div
                                    key={advantage.title}
                                    className="card-glass p-6 flex items-start gap-4"
                                >
                                    <div className="rounded-lg bg-accent p-3 flex-shrink-0">
                                        <div className="text-white">
                                            {advantage.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 font-semibold text-foreground">{advantage.title}</h3>
                                        <p className="text-text-subtle">{advantage.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="col-span-3 md:col-span-1 flex items-center justify-center">
                            <div className="aspect-square w-full max-w-sm rounded-2xl overflow-hidden shadow-lg">
                                                                <img 
                                    src="/assets/img_7.jpeg" 
                                    alt="Avantages de l'enseignement personnalisé" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subjects Section */}
            <section className="section bg-hover-bg">
                <div className="container-apple">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
                            Nos matières proposées
                        </h2>
                        <p className="text-text-subtle">
                            Un large choix de matières adaptées à tous les niveaux scolaires
                        </p>
                    </div>

                    <div className="grid-apple-3">
                        {subjects.map((subject) => (
                            <div
                                key={subject.title}
                                className="card-glass interactive-card overflow-hidden"
                            >
                                <div className="aspect-video overflow-hidden border-b border-border relative">
                                    <img
                                        src={`/assets/img_${(subjects.indexOf(subject) % 8) + 1}.jpeg`}
                                        alt={`Cours de ${subject.title}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <div className="text-4xl mb-2">{subject.icon}</div>
                                            <p className="text-xs font-medium">Niveaux {subject.levels}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="mb-3 font-semibold text-foreground">{subject.title}</h3>
                                    <p className="mb-4 text-text-subtle">{subject.description}</p>

                                    <div className="mb-4">
                                        <p className="text-sm font-medium text-foreground mb-2">Programme inclus :</p>
                                        <div className="flex flex-wrap gap-2">
                                            {subject.features.map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="btn btn-primary w-full text-sm">
                                        En savoir plus
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="section">
                <div className="container-apple">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
                            Notre méthode en 4 étapes
                        </h2>
                        <p className="text-text-subtle">
                            Un processus simple et efficace pour garantir votre réussite
                        </p>
                    </div>

                    <div className="grid-apple-2 gap-8">
                        {methodology.map((step, index) => (
                            <div
                                key={step.step}
                                className="card-glass p-6 relative"
                            >
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                                    {step.step}
                                </div>
                                <div className="ml-6">
                                    <h3 className="mb-3 font-semibold text-foreground">{step.title}</h3>
                                    <p className="text-text-subtle">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-hover-bg">
                <div className="container-apple">
                    <div className="grid-apple-2 items-center gap-12">
                        <div className="card-glass p-12 text-center md:text-left">
                            <h2 className="mb-4 font-display text-2xl font-semibold text-foreground md:text-3xl">
                                Prêt à commencer vos cours à domicile ?
                            </h2>
                            <p className="mb-8 text-text-subtle">
                                Contactez-nous dès aujourd'hui pour une évaluation gratuite et trouvons ensemble
                                le professeur parfait pour votre réussite scolaire.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                                <button className="btn btn-primary">
                                    <Phone className="mr-2 h-4 w-4" />
                                    Appelez-nous maintenant
                                </button>
                                <button className="btn btn-secondary">
                                    <Mail className="mr-2 h-4 w-4" />
                                    Demande de rappel
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="aspect-square w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
                                                                <img 
                                    src="/assets/img_6.jpeg" 
                                    alt="Étudiant motivé prêt à réussir" 
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