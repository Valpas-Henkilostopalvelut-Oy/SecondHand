import type { LazyEvaluation } from "../models";

export interface EvaluationFormProps {
  name: string;
  email: string;
  phone: string;
  categoria: string;
  type: string;
  description: string;
  images: File[];
}
export interface EvaluationProps {
  isLoading: boolean;
  isError: boolean;
  error: string | null | undefined;
  data: LazyEvaluation[] | [];
}
