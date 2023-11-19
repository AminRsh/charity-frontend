
export interface ListState {
    "description": string,
    "ein": string,
    "name": string,
    "profileUrl": string,
    "logoUrl": string,
    "coverImageUrl": string,
    "logoCloudinaryId": string,
    "matchedTerms": string [],
    "slug": string,
    "location": string,
    "websiteUrl": string,
    "tags": string []
}

export interface CardProps {
    "cover": string,
    "logo": string,
    "name": string,
    "slug": string,
    "location": string,
    "id": string
}

export interface NteeCodeMeaning {
    majorMeaning: string;
}

export interface Nonprofit {
    "name": string,
    "descriptionLong": string,
    "locationAddress": string,
    "description": string,
    "primarySlug": string,
    "logoUrl": string,
    "nteeCodeMeaning": NteeCodeMeaning,
    "websiteUrl": string,
    "coverImageUrl": string,
    "profileUrl": string
    
}

export type NonprofitTag = {
    id: string;
    tagName: string;
    causeCategory: string;
    title: string;
    tagImageCloudinaryId: string;
    tagUrl: string;
    tagImageUrl: string;
  }[];

