# Accessibility

The following is a set of resources and recommendations provided by the authors of govuk-react. It should not be relied on as a basis for any legal requirements regarding accessibility conformance, or any other requirements specific to govuk projects.


## Server side rendering

We would recommend using server side or universal rendering for a React application due to benefits of performance and robustness.

## Building a service

If you are building a govuk service, you must follow the Digital Service Standard:

> All public facing transactional services must meet the standard. It’s used by departments and the Government Digital Service to check whether a service is good enough for public use.
https://www.gov.uk/service-manual/service-standard

Of particular note is point 12:

>  Make sure users succeed first time
https://www.gov.uk/service-manual/service-standard/create-a-service-thats-simple

The robustness and performance benefits of server side or universal rendering will help meet this criteria.

Also of note is this page:

https://www.gov.uk/service-manual/technology/using-progressive-enhancement

## WCAG

We are not aware of any WCAG 2.0 or 2.1 guidelines that prevent client side rendering being deemed not accessibible, however using server side or universal rendering could help improve accessibility under the 'robustness' principle.

https://www.w3.org/TR/WCAG20/#robust
