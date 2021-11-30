import { __DO_NOT_USE_THIS_OR_YOU_WILL_BE_FIRED } from "@remix-run/react";
import { render as rtlRender } from "@testing-library/react";

type UI = Parameters<typeof rtlRender>[0];
type Options = Parameters<typeof rtlRender>[1];

let { RemixEntryContext } = __DO_NOT_USE_THIS_OR_YOU_WILL_BE_FIRED;

function render(ui: UI, options: Options) {
  function Wrapper({ children }: { children: React.ReactElement }) {
    return (
      <RemixEntryContext.Provider
        value={{
          matches,
          manifest,
          componentDidCatchEmulator: clientState,
          routeModules,
          serverHandoffString,
          clientRoutes,
          routeData: loaderData,
          actionData,
          transitionManager
        }}
      >
        {children}
      </RemixEntryContext.Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from "@testing-library/react";

// override render
export { render };
