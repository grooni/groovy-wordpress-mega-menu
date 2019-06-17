import {
  isMobile
} from '../shared/helpers';

export function overlapMenu (options) {
  let toolbar = document.querySelector('.gm-toolbar');
  let toolbarHeight = toolbar === null ? 0 : toolbar.offsetHeight;
  const headerHeight = parseInt(options.headerHeight, 10);
  const mobileHeaderHeight = parseInt(options.mobileHeaderHeight, 10);
  let navbarHeightDesktop = headerHeight + toolbarHeight;
  const padding = document.querySelector('.gm-padding');
  let headerToolbar = options.header.toolbar;
  let navbarHeightMobile = mobileHeaderHeight + toolbarHeight;

  if (typeof headerToolbar === 'string') {
    headerToolbar = (headerToolbar === 'true');
  }

  if (isMobile(options.mobileWidth) && options.header && options.hideToolbarOnMobile) {
    navbarHeightMobile = mobileHeaderHeight;
  }

  if (!options.overlap && headerToolbar) {
    let paddingTopVal = isMobile(options.mobileWidth) ? navbarHeightMobile : navbarHeightDesktop;

    padding.style.paddingTop = `${paddingTopVal}px`;
  }
}
