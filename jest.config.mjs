
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jsdom",

  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.js",
  ],
};

const jestConfig = createJestConfig(
  customJestConfig
);

export default jestConfig;