/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                protocol:'https',
                hostname:'ci.encar.com',
                pathname:'**'
            },
            {
                protocol:'http',
                hostname:'dzqerse1lankl.cloudfront.net',
                pathname:'**'
            }
        ]
    }
}

module.exports = nextConfig
