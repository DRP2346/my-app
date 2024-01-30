module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  rules: {
    // Add your custom ESLint rules here

    // Example rules:
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for prop type checking
    'no-unused-vars': 'warn', // Warn about unused variables (can be error if needed)
    'jsx-a11y/anchor-is-valid': 'off', // Disable anchor tag validation for Next.js Link
    'import/no-anonymous-default-export': 'off', // Allow anonymous default exports
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
};
