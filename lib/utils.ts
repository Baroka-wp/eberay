// File: lib/utils.ts
// Purpose: Fonctions utilitaires pour la gestion des classes CSS et autres helpers
// Dependencies: clsx, tailwind-merge
// Sections:
// 1. Fonction cn pour combiner les classes CSS
// 2. Autres utilitaires potentiels

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Fonction pour formater les dates (utilitaire général)
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

// Fonction pour générer un ID aléatoire
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
} 