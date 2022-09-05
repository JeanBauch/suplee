export type StatusButtonStep = "current" | "done" | "disable";

export type StepsPurchase = "cartShopping" | "identification" | "payment" | "conclusion";

export type TabStepCarShopping = {
  stepTitle: string,
  status: StatusButtonStep,
  cod: StepsPurchase
};
