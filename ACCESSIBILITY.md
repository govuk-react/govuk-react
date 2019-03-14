# Accessibility

The following is a set of resources and recommendations provided by the authors of govuk-react. It should not be relied on as a basis for any legal requirements regarding accessibility conformance, or any other requirements specific to govuk projects.


## Server side rendering

We would recommend using server side or universal rendering for a React application due to benefits of performance and robustness.

Our understanding is that if you need to meet the [UK Government Service Standard](https://www.gov.uk/service-manual/service-standard) then you must use server side rendering, as the [progressive enhancement](https://www.gov.uk/service-manual/technology/using-progressive-enhancement) guidance is assessed under [points 12](https://www.gov.uk/service-manual/service-standard/create-a-service-thats-simple) and [13](https://www.gov.uk/service-manual/service-standard/make-the-user-experience-consistent-with-govuk). 

## Building a service

If you are building a govuk service, you must follow the Digital Service Standard:

> All public facing transactional services must meet the standard. It’s used by departments and the Government Digital Service to check whether a service is good enough for public use.
https://www.gov.uk/service-manual/service-standard

Of particular note is point 12:

>  Make sure users succeed first time
https://www.gov.uk/service-manual/service-standard/create-a-service-thats-simple

The robustness and performance benefits of server side or universal rendering will help meet this criteria.

Also of note:

- https://www.gov.uk/service-manual/technology/using-progressive-enhancement
- https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps

## WCAG

We are not aware of any WCAG 2.0 or 2.1 guidelines that prevent client side-only rendering being deemed accessible, however using server side or universal rendering could help improve accessibility under the 'robustness' principle.

https://www.w3.org/TR/WCAG20/#robust

Also of note:

- https://reactjs.org/docs/accessibility.html

## Markup in govuk-react

We aim to mirror the markup used by govuk-frontend, but are not there yet. There may be minor issues with current markup such as missing ARIA tags but are always open to PRs to address these.

## Client side routing

GDS have raised real-world accessibility issues with specific devices when using client side routing, that they claim are unsolvable and therefore client side routing should be avoided. However, as far as we are aware such issues could be resolved via a software update to the devices in question and don't relate to any WCAG specific guidelines.

We are waiting GDS to provide more concrete details on what these specific devices and issues are, but in the mean time would point anyone concerned to the following resources:

- https://reach.tech/router
- https://almerosteyn.com/2017/03/accessible-react-navigation
- https://simplyaccessible.com/article/react-a11y/
- https://github.com/ReactTraining/react-router/issues/5210
- https://github.com/gatsbyjs/gatsby/issues/5581

## Form submission in universal rendered applications

A common failure of universally rendered applications is that they require JavaScript to be enabled to interact with a page or submit forms. A fallback should be considered if implementing universal rendering if you want to ensure robustness (e.g. JavaScript fails to load due to network connectivity issues).

## Next.js

If you are getting started with Universal React for the first time, we would recommend Next.js - https://nextjs.org (keeping in mind the point about form submissions above).
