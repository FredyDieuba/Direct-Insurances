import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/politique-de-confidentialite")({
    component: PolitiqueConfidentialite,
});

function PolitiqueConfidentialite() {
    return (
        <SiteLayout>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
                <h1 className="text-3xl md:text-5xl font-display font-bold text-navy mb-10">Politique de Confidentialité</h1>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                    <p>
                        <strong>1. Collecte des données personnelles</strong><br />
                        Dans le cadre de son activité de courtage, DIRECT INSURANCE SA est amenée à collecter et traiter certaines de vos données à caractère personnel, notamment lors d'une demande de devis, de la souscription d'un contrat ou de la gestion d'un sinistre.
                    </p>

                    <p>
                        <strong>2. Utilisation des données</strong><br />
                        Vos données sont traitées pour :
                        <ul className="list-disc pl-5 mt-2">
                            <li>L'établissement et la présentation d'offres d'assurance</li>
                            <li>La passation, la gestion et l'exécution des contrats</li>
                            <li>L'élaboration de statistiques et études actuarielles</li>
                            <li>Le respect de nos obligations légales et réglementaires (ex: lutte contre le blanchiment)</li>
                        </ul>
                    </p>

                    <p>
                        <strong>3. Sécurité et confidentialité</strong><br />
                        Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour assurer la sécurité et la confidentialité de vos données personnelles, empêchant ainsi qu'elles ne soient endommagées, effacées ou que des tiers non autorisés y aient accès.
                    </p>

                    <p>
                        <strong>4. Durée de conservation</strong><br />
                        Vos données sont conservées pour la durée stricte nécessaire à la gestion de la relation commerciale et à l'exécution de vos contrats, augmentée du délai de prescription légale ou réglementaire.
                    </p>

                    <p>
                        <strong>5. Vos droits</strong><br />
                        Vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données. Pour exercer ces droits, vous pouvez nous contacter par email à directinsurance2002@yahoo.fr, ou par courrier au siège social.
                    </p>
                </div>
            </div>
        </SiteLayout>
    );
}
