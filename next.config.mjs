/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_CALENDAR_ID_PUBLIC: process.env.GOOGLE_CALENDAR_ID_PUBLIC,
  },
};

export default nextConfig;
