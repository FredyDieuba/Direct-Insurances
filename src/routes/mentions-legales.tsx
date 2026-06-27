import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/mentions-legales")({
    component: MentionsLegales,
});

function MentionsLegales() {
    return (
        <SiteLayout>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
                <h1 className="text-3xl md:text-5xl font-display font-bold text-navy mb-10">Mentions Légales</h1>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                    <p>
                        <strong>Éditeur du site :</strong><br />
                        DIRECT INSURANCE SA<br />
                        Société Anonyme avec Conseil d'Administration au capital social de 100 000 000 FCFA<br />
                        Siège social : Nouvelle Route Bastos, à côté de Tradex avant Air France, Yaoundé, Cameroun.<br />
                        RCCM : YAOUNDE N° RC / YAO / 2002 / B / 217<br />
                        Agrément MINFI : N°03/038/CF/A du 21 Mars 2003
                    </p>

                    <p>
                        <strong>Directeur de la publication :</strong><br />
                        Direction Générale de DIRECT INSURANCE SA.
                    </p>

                    <p>
                        <strong>Hébergement :</strong><br />
                        Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133 Walnut, CA 91789, USA.
                    </p>

                    <p>
                        <strong>Propriété Intellectuelle :</strong><br />
                        L'ensemble de ce site relève de la législation sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                    </p>

                    <p>
                        <strong>Responsabilité :</strong><br />
                        DIRECT INSURANCE SA s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
                    </p>
                </div>
            </div>
        </SiteLayout>
    );
}
