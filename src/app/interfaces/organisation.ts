import { TextLangaugeOption } from './language';

export interface Organisation {
    id: string;
    slug: string;
    name: string;
    description: string;
    wikifactory: {
        logoUrl: string;
        organisationUrl: string;
    };
}

export interface OrganisationObject {
    id: string;
    slug: string;
    name: string;
    description: TextLangaugeOption[];
    wikifactory: {
        logoUrl: string;
        organisationUrl: string;
    };
}
