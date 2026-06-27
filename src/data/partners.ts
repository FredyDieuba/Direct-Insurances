export type PartnerType = "assureur" | "réassureur";

export interface Partner {
    name: string;
    type: PartnerType;
    logoUrl: string;
    website?: string;
}

export const partners: Partner[] = [
    // Assureurs
    {
        name: "Assureur 1",
        type: "assureur",
        logoUrl: "../src/assets/img/logo/assureurs/download (2).png",
    },
    {
        name: "Assureur 2",
        type: "assureur",
        logoUrl: "../src/assets/img/logo/assureurs/download (2).png",
    },
    {
        name: "Assureur 3",
        type: "assureur",
        logoUrl: "../src/assets/img/logo/assureurs/download (2).png",
    },
    {
        name: "Assureur 4",
        type: "assureur",
        logoUrl: "../src/assets/img/logo/assureurs/download (2).png",
    },
    {
        name: "Assureur 5",
        type: "assureur",
        logoUrl: "../src/assets/img/logo/assureurs/download (2).png",
    },
    {
        name: "Assureur 6",
        type: "assureur",
        logoUrl: "../src/assets/img/logo/assureurs/download (2).png",
    },
    {
        name: "Assureur 7",
        type: "assureur",
        logoUrl: "../src/assets/img/logo/assureurs/download (2).png",
    },
    {
        name: "Assureur 8",
        type: "assureur",
        logoUrl: "../src/assets/img/logo/assureurs/download (2).png",
    },
    {
        name: "Assureur 9",
        type: "assureur",
        logoUrl: "../src/assets/img/logo/assureurs/download (2).png",
    },

    // Réassureurs
    {
        name: "Réassureur 1",
        type: "réassureur",
        logoUrl: "../src/assets/img/logo/assureurs/download (2).png",
    },
    {
        name: "Réassureur 2",
        type: "réassureur",
        logoUrl: "../src/assets/img/logo/assureurs/download (2).png",
    },
    {
        name: "Réassureur 3",
        type: "réassureur",
        logoUrl: "../src/assets/img/logo/assureurs/download (2).png",
    },
    {
        name: "Réassureur 4",
        type: "réassureur",
        logoUrl: "../src/assets/img/logo/assureurs/download (2).png",
    },
    {
        name: "Réassureur 5",
        type: "réassureur",
        logoUrl: "../src/assets/img/logo/assureurs/download (2).png",
    },
];
