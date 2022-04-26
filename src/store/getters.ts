type state = {
  user: {
    userInfo: {
      name: string;
      token: string;
      avatar: string;
      roles: string
    }
  }
}

export default {
  userInfo: (state: state) => state.user.userInfo,
  // routes: (state: state) => state.permission.routes,
  // permissionRoutes: (state: state) => state.permission.permissionRoutes,
  // cachedViews: (state: state) => state.tagsView.cachedViews,
  // visitedViews: (state: state) => state.tagsView.visitedViews,
};
