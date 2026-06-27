import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/conditions-generales")({
    component: ConditionsGenerales,
});

function ConditionsGenerales() {
    return (
        <SiteLayout>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
                <h1 className="text-3xl md:text-5xl font-display font-bold text-navy mb-10">Conditions Générales</h1>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                    <p>
                        <strong>1. Objet</strong><br />
                        Les présentes Conditions Générales régissent l'utilisation du site de DIRECT INSURANCE SA ainsi que la souscription et la gestion de vos contrats d'assurance par notre intermédiaire.
                    </p>

                    <p>
                        <strong>2. Rôle du Courtier</strong><br />
                        En tant que courtier en assurances (Agrément MINFI N°03/038/CF/A), DIRECT INSURANCE agit en tant que mandataire de ses clients. Nous avons pour mission de vous conseiller, de négocier pour vous les meilleures garanties, et de vous assister dans la gestion de vos sinistres.
                    </p>

                    <p>
                        <strong>3. Informations précontractuelles</strong><br />
                        Préalablement à toute souscription, un devis clair et détaillé vous est remis. Il vous appartient de lire attentivement les Conditions Spécifiques des produits d'assurance proposés, lesquelles prévalent sur toute autre garantie.
                    </p>

                    <p>
                        <strong>4. Tarifs et Paiement</strong><br />
                        Les primes d'assurance sont fixées par les compagnies d'assurance. Leur règlement est une condition de prise d'effet des garanties selon les modalités prévues à chaque contrat (Loi CIMA).
                    </p>

                    <p>
                        <strong>5. Loi applicable et juridiction compétente</strong><br />
                        Les présentes conditions sont soumises à la loi camerounaise et au Code CIMA. Tout litige relatif à leur interprétation ou à leur exécution relève des tribunaux compétents de la République du Cameroun.
                    </p>
                </div>
            </div>
        </SiteLayout>
    );
}
