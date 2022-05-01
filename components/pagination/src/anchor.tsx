import type { StyledComponentProps } from 'styled-components';

import * as React from 'react';
import styled from 'styled-components';
import { BLUE, GREY_4, PURPLE, YELLOW, WHITE } from 'govuk-colours';
import { FONT_SIZE, LINE_HEIGHT, SPACING, MEDIA_QUERIES, NTA_LIGHT } from '@govuk-react/constants';

import { ArrowRight as NextPageIcon, ArrowLeft as PrevPageIcon } from '@govuk-react/icons';

const PaginationWrapper = styled('li')<{ previousPage?: boolean; nextPage?: boolean }>(
  {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    fontFamily: NTA_LIGHT,
    fontWeight: 400,
    textTransform: 'none',
    fontSize: FONT_SIZE.SIZE_20,
    lineHeight: LINE_HEIGHT.SIZE_16,
    width: '100%',
    [MEDIA_QUERIES.LARGESCREEN]: {
      fontSize: FONT_SIZE.SIZE_27,
      lineHeight: LINE_HEIGHT.SIZE_16,
    },
    '> a': {
      boxSizing: 'border-box',
      color: BLUE,
      fill: 'currentColor',
      padding: SPACING.SCALE_3,
      backgroundColor: WHITE,
      textDecoration: 'none',
      outlineColor: 'transparent',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      ':hover': {
        backgroundColor: GREY_4,
      },
      ':focus': {
        outline: `3px solid ${YELLOW}`,
      },
      ':visited': {
        color: PURPLE,
      },
    },
  },
  ({ previousPage }) => ({
    marginRight: previousPage ? '3px' : undefined,
    ' > a': {
      alignItems: previousPage ? 'flex-start' : undefined,
    },
    ' > a div': {
      justifyContent: previousPage ? 'flex-start' : undefined,
      ' > svg': {
        height: previousPage ? '13px' : undefined,
        width: previousPage ? '17px' : undefined,
        marginRight: previousPage ? '10px' : undefined,
      },
    },
  }),
  ({ nextPage }) => ({
    ' > a': {
      alignItems: nextPage ? 'flex-end' : undefined,
    },
    ' > a div': {
      justifyContent: nextPage ? 'flex-end' : undefined,
      ' > svg': {
        height: nextPage ? '13px' : undefined,
        width: nextPage ? '17px' : undefined,
        marginLeft: nextPage ? '10px' : undefined,
      },
    },
  })
);

const InnerWrap = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

const PageTitle = styled('span')({
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: LINE_HEIGHT.SIZE_14,
  textDecoration: 'underline',
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
  },
});

const Anchor = styled('a')({});

const PaginationAnchor: PaginationAnchorType = ({
  previousPage,
  nextPage,
  children,
  pageTitle,
  ...props
}: PaginationAnchorProps) => (
  <PaginationWrapper previousPage={previousPage} nextPage={nextPage}>
    <Anchor {...props}>
      <InnerWrap>
        {previousPage && <PrevPageIcon />}
        {children}
        {nextPage && <NextPageIcon />}
      </InnerWrap>
      {pageTitle && <PageTitle>{pageTitle}</PageTitle>}
    </Anchor>
  </PaginationWrapper>
);

interface PaginationAnchorType extends React.FC<PaginationAnchorProps> {
  (props: PaginationAnchorPropsWithoutAs): React.ReactElement<PaginationAnchorPropsWithoutAs>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <AsC extends string | React.ComponentType<any> = 'a', FAsC extends string | React.ComponentType<any> = AsC>(
    props: PaginationAnchorPropsWithAs<AsC, FAsC>
  ): React.ReactElement<PaginationAnchorPropsWithAs<AsC, FAsC>>;
}

type PaginationAnchorPropsWithoutAs = StyledComponentProps<'a', never, PaginationAnchorProps, never> & {
  as?: never | undefined;
  forwardedAs?: never | undefined;
};

type PaginationAnchorPropsWithAs<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  AsC extends string | React.ComponentType<any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  FAsC extends string | React.ComponentType<any> = AsC
> = StyledComponentProps<AsC, never, PaginationAnchorProps, never, FAsC> & {
  as?: AsC | undefined;
  forwardedAs?: FAsC | undefined;
};

interface PaginationAnchorProps {
  children: string | React.ReactElement;
  previousPage?: boolean;
  nextPage?: boolean;
  pageTitle?: string;
}

PaginationAnchor.defaultProps = {
  previousPage: undefined,
  nextPage: undefined,
  pageTitle: undefined,
};

export default PaginationAnchor;
