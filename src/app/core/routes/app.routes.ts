export enum AppRoute {
  APP = 'shell',
  LAYOUT = 'layout'
}

export const appRoutes = {
  APP: `/${AppRoute.APP}`,
  LAYOUT: `/${AppRoute.LAYOUT}`,
};

Object.freeze(appRoutes);
