export const MAKE_BURGER_PATTERN = 'MAKE_BURGER';

export interface MakeBurgerPayload {
  customer: string;
  patties: number;
  retryCount?: number;
}

export const MAKE_BURGER_SUCCESS_PATTERN = 'MAKE_BURGER_SUCCESS';

export interface MakeBurgerSuccessPayload {
  customer: string;
}

export const MAKE_BURGER_FAILURE_PATTERN = 'MAKE_BURGER_FAILURE';

export interface MakeBurgerFailurePayload {
  customer: string;
}
