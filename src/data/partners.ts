import { assets } from "@/lib/assets";

export type PartnerType = "assureur" | "réassureur";

export interface Partner {
    name: string;
    type: PartnerType;
    logoUrl: string;
    website?: string;
}

const pLogos = [
    assets.partners.logoD2,
    assets.partners.logoD3,
    assets.partners.logoD4,
    assets.partners.logoD5,
    assets.partners.logoSunu,
    assets.partners.logoD18
];

export const partners: Partner[] = [
    ...Array.from({ length: 9 }).map((_, i) => ({
        name: `Assureur ${i + 1}`,
        type: "assureur" as PartnerType,
        logoUrl: pLogos[i % pLogos.length],
    })),
    ...Array.from({ length: 5 }).map((_, i) => ({
        name: `Réassureur ${i + 1}`,
        type: "réassureur" as PartnerType,
        logoUrl: pLogos[(i + 3) % pLogos.length],
    }))
];
