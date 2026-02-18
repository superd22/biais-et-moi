// Field values and display names for the identity form
// Centralized for easy maintenance

export const SEXE_OPTIONS = [
  { value: "homme", label: "Homme" },
  { value: "femme", label: "Femme" },
  { value: "autre", label: "Autre" },
  { value: "prefere-ne-pas-repondre", label: "Je préfère ne pas répondre" },
] as const;

export const AGE_OPTIONS = [
  { value: "18-25", label: "18-25 ans" },
  { value: "26-35", label: "26-35 ans" },
  { value: "36-45", label: "36-45 ans" },
  { value: "46-55", label: "46-55 ans" },
  { value: "56-65", label: "56-65 ans" },
  { value: "66-75", label: "66-75 ans" },
  { value: "76+", label: "76 ans et plus" },
] as const;

export const PROFESSION_OPTIONS = [
  { value: "medecin", label: "Médecin" },
  { value: "ide", label: "IDE (Infirmier Diplômé d'État)" },
  { value: "as", label: "AS (Aide-Soignant)" },
  { value: "autre", label: "Autre" },
  { value: "prefere-ne-pas-repondre", label: "Je préfère ne pas répondre" },
] as const;

export const TYPE_POSTE_OPTIONS = [
  { value: "externe", label: "Externe" },
  { value: "interne", label: "Interne" },
  { value: "medecin-senior", label: "Médecin sénior" },
  { value: "prefere-ne-pas-repondre", label: "Je préfère ne pas répondre" },
] as const;

export const STRUCTURE_OPTIONS = [
  { value: "etablissement-de-sante", label: "Etablissement de santé" },
  { value: "clinique-privee", label: "Clinique privée" },
  { value: "maison-sante", label: "Maison de santé" },
  { value: "prefere-ne-pas-repondre", label: "Je préfère ne pas répondre" },
] as const;

export const REGIONS = [
  "Auvergne-Rhône-Alpes",
  "Bourgogne-Franche-Comté",
  "Bretagne",
  "Centre-Val de Loire",
  "Corse",
  "Grand Est",
  "Hauts-de-France",
  "Île-de-France",
  "Normandie",
  "Nouvelle-Aquitaine",
  "Occitanie",
  "Pays de la Loire",
  "Provence-Alpes-Côte d'Azur",
  "Guadeloupe",
  "Martinique",
  "Guyane",
  "La Réunion",
  "Mayotte",
] as const;

export const ORIGINE_ETHNIQUE_OPTIONS = [
  { value: "non-caucasien", label: "Non caucasien" },
  { value: "caucasien", label: "Caucasien" },
  { value: "prefere-ne-pas-repondre", label: "Je préfère ne pas répondre" },
] as const;
