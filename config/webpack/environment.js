const { environment } = require('@rails/webpacker')

const path = require('path')

const customConfig = {
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '..', '..', 'app/javascript/src'),
      '@utils': path.resolve(__dirname, '..', '..', 'app/javascript/src/utils'),
    }
  }
}

// Add the following to use .env files (old)
// const webpack = require('webpack')
// const dotenv = require('dotenv')
// const dotenvFiles = [
//   `.env.${process.env.NODE_ENV}.local`,
//   '.env.local',
//   `.env.${process.env.NODE_ENV}`,
//   '.env'
// ]
// dotenvFiles.forEach((dotenvFile) => {
//   dotenv.config({ path: dotenvFile, silent: true })
// })
// environment.plugins.prepend('Environment', new webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(process.env))))
// ---- end

// Add this to choose which .env variables to expose to the frontend (new)
const webpack = require('webpack')
environment.plugins.prepend(
  "Environment",
  new webpack.EnvironmentPlugin(
    JSON.parse(
      JSON.stringify({
        STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
        URL: process.env.URL
      })
    )
  )
);
// ---- end

environment.config.merge(customConfig);



module.exports = environment
