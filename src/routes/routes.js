import { PAGE_INDEX, PAGE_SEARCH, PAGE_VIEW } from "../constants/Config";
import Index from "../pages/Index";
import Search from "../pages/Search";
import View from "../pages/View";

const routes = [
  {
    path: PAGE_INDEX,
    exact: true,
    main: () => <Index />,
    once: false,
    breadcrumb: "Trang chủ",
  },
  {
    path: `${PAGE_VIEW}/:slug`,
    exact: true,
    main: (match) => <View match={match} />,
    once: false,
    breadcrumb: "",
  },
  {
    path: PAGE_SEARCH,
    exact: true,
    main: () => <Search />,
    once: false,
    breadcrumb: "",
  },
];
export default routes;
