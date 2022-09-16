import nextJest from "next/jest";

// Sync object
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  modulePathIgnorePatterns: ["cypress"],
  moduleNameMapper: {
    "^@/contexts/(.*)$": "<rootDir>/src/contexts/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/data/(.*)$": "<rootDir>/src/data/$1",
    "^@/mocks/(.*)$": "<rootDir>/src/mocks/$1",
    "^@/hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@/services/(.*)$": "<rootDir>/src/services/$1",
    "^@/utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@/store/(.*)$": "<rootDir>/src/store/$1",
    "^@/types/(.*)$": "<rootDir>/src/types/$1",
    "^@/configs/(.*)$": "<rootDir>/src/configs/$1",

    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/atoms/(.*)$": "<rootDir>/src/components/atoms/$1",
    "^@/molecules/(.*)$": "<rootDir>/src/components/molecules/$1",
    "^@/organisms/(.*)$": "<rootDir>/src/components/organisms/$1",
    "^@/templates/(.*)$": "<rootDir>/src/components/templates/$1",
    "^@/layouts/(.*)$": "<rootDir>/src/components/layouts/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
