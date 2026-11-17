import * as React from 'react';
import { Children } from 'react';
import type { ReactNode } from 'react';
import * as Primitives from '@govuk-react/primitives/disclosure';
import * as Markup from 'govuk-frontend-react/service-navigation';

/*
 * govuk-frontend-react's ServiceNavigation markup, with the menu button from
 * @govuk-react/primitives. As in govuk-frontend, the navigation collapses behind the button
 * below tablet width. Without JavaScript the navigation is always shown and the button hidden.
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

export type WrapperProps = Markup.WrapperProps & {
  /** Whether the menu is open below tablet width, to control it once hydrated, such as to close it after navigating. */
  open?: boolean;
  /** Called when the user opens or closes the menu. */
  onOpenChange?: (open: boolean) => void;
};

/** The `nav`, around the menu button and the list. */
export function Wrapper({ open, onOpenChange, children, ...props }: WrapperProps) {
  return (
    <Markup.Wrapper {...props}>
      {/* Takes no space, so govuk-frontend's styles still apply to the button and list. */}
      <Primitives.Root media={tablet} open={open} onOpenChange={onOpenChange} style={{ display: 'contents' }}>
        {children}
      </Primitives.Root>
    </Markup.Wrapper>
  );
}

export type ToggleProps = Markup.ToggleProps;

/** The menu button. Hidden from tablet width up, and without JavaScript. */
export function Toggle(props: ToggleProps) {
  return (
    <Primitives.Toggle asChild>
      <Markup.Toggle {...props} />
    </Primitives.Toggle>
  );
}

export type ListProps = Markup.ListProps;

/** The navigation list, which the menu button shows and hides below tablet width. */
export function List(props: ListProps) {
  return (
    <Primitives.Content asChild>
      <Markup.List {...props} />
    </Primitives.Content>
  );
}

export type CompositeProps = Markup.CompositeProps & Pick<WrapperProps, 'open' | 'onOpenChange'>;

/**
 * Service navigation helps users understand that they’re using your service and lets them navigate around your service.
 *
 * Children are `ItemComposite`s.
 *
 * @see https://design-system.service.gov.uk/components/service-navigation/
 */
export function Composite({
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
}: CompositeProps) {
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
            <Wrapper aria-label={navigationLabel || menuButtonText || 'Menu'} open={open} onOpenChange={onOpenChange}>
              {collapse && <Toggle>{menuButtonText}</Toggle>}
              <List>{list}</List>
            </Wrapper>
          )}
        </Markup.Container>
      </Markup.WidthContainer>
    </Markup.Root>
  );
}

// As govuk-frontend-react decides whether there is a service name.
function hasContent(node: ReactNode): boolean {
  if (node === null || node === undefined || node === false || node === true || node === '') return false;
  if (Array.isArray(node)) return node.some(hasContent);
  return true;
}
