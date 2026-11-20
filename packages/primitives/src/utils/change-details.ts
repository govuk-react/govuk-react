/** What a change handler is told about a change, as its second argument. */
export type ChangeDetails = {
  /**
   * The user made this change before React hydrated, so it's reported once hydrated, with only
   * the state they left and not each step. When controlled, the primitive goes back to the prop
   * unless you adopt the change.
   */
  beforeHydration: boolean;
};

export const live: ChangeDetails = { beforeHydration: false };
export const early: ChangeDetails = { beforeHydration: true };
