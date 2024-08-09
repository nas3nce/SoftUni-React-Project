export const BaseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3030' //development environment
    : 'https://api-vty45d27ma-lm.a.run.app'; //production environment