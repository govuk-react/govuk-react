Use of images is dependent on the build system of the parent project and are not exported/included by default.

They are used for development purposes when running Storybook and can be utilised by a parent project as follows:

```
import iconPointer from '@govuk-react/images/icon-pointer.png'

...

<Button iconUrl={iconPointer} start>Start now</Button>

```
