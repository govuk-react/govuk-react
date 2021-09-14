// This lib is effectively a port of govuk-frontend's visually-hidden sass helpers
// Tracking:
// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/helpers/_visually-hidden.scss

function visuallyHidden({ important: isImportant = true, focusable: isFocusable = false } = {}): {
  [key: string]: string | { [key: string]: string };
} {
  const important = isImportant ? ' !important' : '';
  return {
    position: `absolute${important}`,

    width: `1px${important}`,
    height: `1px${important}`,
    margin: `0${important}`,

    overflow: `hidden${important}`,
    clip: `rect(0 0 0 0)${important}`,
    clipPath: `inset(50%)${important}`,

    border: `0${important}`,

    whiteSpace: `nowrap${important}`,
    ...(isFocusable
      ? {
          '&:active,&:focus': {
            position: `static${important}`,

            width: `auto${important}`,
            height: `auto${important}`,
            margin: `inherit${important}`,

            overflow: `visible${important}`,
            clip: `auto${important}`,
            clipPath: `none${important}`,

            whiteSpace: `inherit${important}`,
          },
        }
      : {
          padding: `0${important}`,
        }),
  };
}

function focusable({ important = true } = {}): {
  [key: string]:
    | string
    | {
        [key: string]: string;
      };
} {
  return visuallyHidden({ important, focusable: true });
}

visuallyHidden.focusable = focusable;

export default visuallyHidden;
export { focusable };
