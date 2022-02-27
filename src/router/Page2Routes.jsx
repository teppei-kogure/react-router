import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParamaeter";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
