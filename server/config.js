FlowRouter.setDeferScriptLoading(true);

// We cache SSR pages for 10 minutes.
const TEN_MINUTES = 1000 * 60 * 10;
FlowRouter.setPageCacheTimeout(TEN_MINUTES);
