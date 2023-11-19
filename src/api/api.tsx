export const API_ROUTES = {
    BASE_URL: 'https://partners.every.org',
    SEARCH: (cause: string) => `/v0.2/search/${cause}/?apiKey=${import.meta.env.VITE_REACT_APP_EVERY_ORG_API_KEY}&take=9`,
    NONPROFIT: (slug: string) => `/v0.2/nonprofit/${slug}/?apiKey=${import.meta.env.VITE_REACT_APP_EVERY_ORG_API_KEY}`,
};

export const axiosConfig = {
    headers: {

        'Authorization': `Bearer ${import.meta.env.VITE_REACT_APP_EVERY_ORG_API_KEY}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Content-Type': 'application/json',
    },
};
