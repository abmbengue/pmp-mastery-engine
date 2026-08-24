import type { CompactLesson } from "./compact";

export type PmpLesson = CompactLesson & {
  situation?: {
    scenarioFr: string;
    scenarioEn: string;
    problemFr?: string;
    problemEn?: string;
    bestActionFr: string;
    bestActionEn: string;
  };
};
