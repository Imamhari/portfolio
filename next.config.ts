import { type NextConfig } from 'next'
import withBundleAnalyzer from '@next/bundle-analyzer'

const isAnalyze = process.env.ANALYZE === 'true'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // ...config lainmu
}

export default withBundleAnalyzer({
  enabled: isAnalyze,
})(nextConfig)
