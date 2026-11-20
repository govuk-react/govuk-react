import * as React from 'react';
import { Children, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import type { ComponentProps, ReactNode } from 'react';
import * as Primitives from '@govuk-react/primitives/disclosure';
import * as Markup from 'govuk-frontend-react/service-navigation';

/*
 * govuk-frontend-react's ServiceNavigation markup, with the menu button from
 * @govuk-react/primitives. As in govuk-frontend, the navigation collapses behind the button
 * below tablet width. Without JavaScript the navigation is always shown and the button hidden,
 * unless you use `DetailsMenu`, which works without JavaScript.
 */

export {
  Root,
  WidthContainer,
  Container,
  ServiceName,
  Link,
  Text,
  Item,
  ActiveFallback,
  ItemComposite,
  type RootProps,
  type WidthContainerProps,
  type ContainerProps,
  type ServiceNameProps,
  type LinkProps,
  type TextProps,
  type ItemProps,
  type ActiveFallbackProps,
  type ItemCompositeProps,
} from 'govuk-frontend-react/service-navigation';

/** govuk-frontend's tablet breakpoint, from which the navigation is always shown. */
const tablet = '(min-width: 40.0625em)';

export { Wrapper, type WrapperProps } from 'govuk-frontend-react/service-navigation';

type MenuState = {
  /** Whether the menu is open below tablet width, to control it once hydrated, such as to close it after navigating. */
  open?: boolean;
  /** Called when the user opens or closes the menu. */
  onOpenChange?: (open: boolean) => void;
};

export type MenuProps = Omit<Primitives.RootProps, 'media' | 'defaultOpen'> & MenuState;

/**
 * govuk-frontend's menu: inside `Wrapper`, around `Toggle` and `List`. Below tablet width the
 * button shows and hides the list once JavaScript runs. Without JavaScript the list is always
 * shown and the button hidden.
 */
export function Menu({ style, ...props }: MenuProps) {
  // Takes no space, so govuk-frontend's styles still apply to the button and list.
  return <Primitives.Root media={tablet} style={{ display: 'contents', ...style }} {...props} />;
}

export type ToggleProps = Markup.ToggleProps;

/** The menu button, inside `Menu`. Hidden from tablet width up, and without JavaScript. */
export function Toggle(props: ToggleProps) {
  return (
    <Primitives.Toggle asChild>
      <Markup.Toggle {...props} />
    </Primitives.Toggle>
  );
}

const detailsClass = 'govuk-react-service-navigation__details';

export type DetailsMenuProps = Omit<ComponentProps<'details'>, 'open'> & MenuState;

/**
 * A menu that works without JavaScript: a native `details`, inside `Wrapper`, around `Summary`
 * and `List`. Below tablet width the summary shows and hides the list. From tablet width the list
 * shows where the browser supports `::details-content` (Chrome and Edge 131, Safari 18.4,
 * Firefox 143), and stays behind the menu where it doesn't.
 *
 * Check it with your users' assistive technology before choosing it over `Menu`. GOV.UK's audits
 * of the Details component found VoiceOver doesn't convey a `summary`'s state on iOS before 17,
 * and Dragon voice control can have trouble opening one.
 *
 * @see https://github.com/alphagov/govuk-design-system/issues/4030
 * @see https://github.com/alphagov/govuk-frontend/issues/5310
 */
export function DetailsMenu({ open, onOpenChange, onToggle, className, children, ...props }: DetailsMenuProps) {
  const details = useRef<HTMLDetailsElement>(null);
  const onOpenChangeRef = useRef(onOpenChange);
  useEffect(() => {
    onOpenChangeRef.current = onOpenChange;
  });
  // A menu opened before hydration is reported, rather than left out of step with `open`.
  const initialOpen = useRef(open);
  useEffect(() => {
    const node = details.current;
    if (node && initialOpen.current !== undefined && node.open !== initialOpen.current) {
      onOpenChangeRef.current?.(node.open);
    }
  }, []);
  return (
    <details
      ref={details}
      className={clsx(detailsClass, className)}
      open={open}
      onToggle={(event) => {
        onToggle?.(event);
        if (event.currentTarget.open !== open) onOpenChange?.(event.currentTarget.open);
      }}
      // The user can open it before hydration.
      suppressHydrationWarning
      {...props}
    >
      {children}
    </details>
  );
}

export type SummaryProps = ComponentProps<'summary'>;

/** The menu button of `DetailsMenu`. Hidden from tablet width up, where the browser can show the list. */
export function Summary({ className, children = 'Menu', ...props }: SummaryProps) {
  return (
    <summary className={clsx('govuk-service-navigation__toggle', className)} {...props}>
      {children}
    </summary>
  );
}

export type ListProps = Markup.ListProps;

/** The navigation list, inside `Menu` or `DetailsMenu`, or straight inside `Wrapper` with no menu. */
export function List(props: ListProps) {
  return (
    <Primitives.Content asChild>
      <Markup.List {...props} />
    </Primitives.Content>
  );
}

export type CompositeProps = Markup.CompositeProps & MenuState;

type MenuRenderer = (props: MenuState & { menuButtonText?: string; children: ReactNode }) => ReactNode;

function render(
  {
    serviceName,
    serviceHref,
    navigationLabel,
    menuButtonText,
    collapseNavigationOnMobile,
    open,
    onOpenChange,
    as,
    items,
    children,
    ...props
  }: CompositeProps,
  renderMenu: MenuRenderer
) {
  const list = items
    ? items.map((item, index) => <Markup.ItemComposite key={index} {...item} />)
    : Children.toArray(children);
  const collapse = collapseNavigationOnMobile ?? list.length > 1;
  const hasServiceName = hasContent(serviceName);
  return (
    <Markup.Root as={as ?? (hasServiceName ? 'section' : 'div')} {...props}>
      <Markup.WidthContainer>
        <Markup.Container>
          {hasServiceName && (
            <Markup.ServiceName>
              {serviceHref ? (
                <Markup.Link href={serviceHref}>{serviceName}</Markup.Link>
              ) : (
                <Markup.Text>{serviceName}</Markup.Text>
              )}
            </Markup.ServiceName>
          )}
          {list.length > 0 && (
            <Markup.Wrapper aria-label={navigationLabel || menuButtonText || 'Menu'}>
              {collapse ? (
                renderMenu({ open, onOpenChange, menuButtonText, children: <List>{list}</List> })
              ) : (
                <List>{list}</List>
              )}
            </Markup.Wrapper>
          )}
        </Markup.Container>
      </Markup.WidthContainer>
    </Markup.Root>
  );
}

/**
 * Service navigation helps users understand that they’re using your service and lets them navigate around your service.
 *
 * Children are `ItemComposite`s. The menu is govuk-frontend's: without JavaScript the
 * navigation is always shown.
 *
 * @see https://design-system.service.gov.uk/components/service-navigation/
 */
export function Composite(props: CompositeProps) {
  return render(props, ({ menuButtonText, children, ...menu }) => (
    <Menu {...menu}>
      <Toggle>{menuButtonText}</Toggle>
      {children}
    </Menu>
  ));
}

/**
 * Service navigation helps users understand that they’re using your service and lets them navigate around your service.
 *
 * Children are `ItemComposite`s. The menu is a `DetailsMenu`, which works without JavaScript but
 * has screen reader and voice control caveats: see `DetailsMenu`.
 *
 * @see https://design-system.service.gov.uk/components/service-navigation/
 */
export function DetailsComposite(props: CompositeProps) {
  return render(props, ({ menuButtonText, children, ...menu }) => (
    <DetailsMenu {...menu}>
      <Summary>{menuButtonText}</Summary>
      {children}
    </DetailsMenu>
  ));
}

// As govuk-frontend-react decides whether there is a service name.
function hasContent(node: ReactNode): boolean {
  if (node === null || node === undefined || node === false || node === true || node === '') return false;
  if (Array.isArray(node)) return node.some(hasContent);
  return true;
}
