import { SetupWorkerApi, rest, setupWorker } from "msw";

import { handlers } from "./handlers";

export const mswWorker: SetupWorkerApi = setupWorker(...handlers);

declare global {
  interface Window {
    msw: unknown;
  }
}

window.msw = {
  worker: mswWorker,
  rest,
};
