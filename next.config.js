/** @type {import('next').NextConfig} */
module.exports = {
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['cdn.sanity.io'],
    },
};
