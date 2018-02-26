import React from "react";
import { storiesOf } from "@storybook/react";
// import { BrowserRouter, Link } from "react-router-dom";

import Pagination from ".";
// import PaginationItem from "../PaginationItem";
import asPaginationItem from "../../hoc/asPaginationItem/index";

const PaginationTag = asPaginationItem("a");
// const PaginationLink = asPaginationItem(Link);

storiesOf("Pagination", module).add("Pagination default", () => (
  <Pagination>
    <PaginationTag href="#prev" previousPage>
      Previous page
    </PaginationTag>
    <PaginationTag href="#next" nextPage>
      Next page
    </PaginationTag>
  </Pagination>
));

storiesOf("Pagination", module).add("Pagination with numbers", () => (
  <Pagination>
    <PaginationTag href="#prev" previousPage pageTitle="1 of 3">
      Previous page
    </PaginationTag>
    <PaginationTag href="#next" nextPage pageTitle="3 of 3">
      Next page
    </PaginationTag>
  </Pagination>
));

// storiesOf("Pagination", module).add(
//   "Pagination using React Router Link",
//   () => (
//     <Pagination>
//       <PreviousPage>
//         <BrowserRouter>
//           <PaginationLink href="#prev" previousPage>
//             Previous page
//           </PaginationLink>
//         </BrowserRouter>
//       </PreviousPage>
//       <NextPage>
//         <BrowserRouter>
//           <PaginationLink href="#prev" nextPage>
//             Next page
//           </PaginationLink>
//         </BrowserRouter>
//       </NextPage>
//     </Pagination>
//   )
// );
