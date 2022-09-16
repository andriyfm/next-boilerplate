import "@testing-library/jest-dom/extend-expect";
import mockRouter from "next-router-mock";

import "whatwg-fetch";
import { mswServer as server } from "./src/mocks/mswServer";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/dist/client/router", () => require("next-router-mock"));

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  mockRouter.setCurrentUrl("/initial");
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
