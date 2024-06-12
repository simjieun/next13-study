/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                protocol:'https',
                hostname:'ci.encar.com',
                pathname:'**'
            }
        ]
    }
}

module.exports = nextConfig
