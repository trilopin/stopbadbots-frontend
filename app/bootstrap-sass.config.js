module.exports = {
  verbose: false,
  // Use preBootstrapCustomizations to change $brand-primary. Ensure this
  // preBootstrapCustomizations does not depend on other bootstrap variables.
  //preBootstrapCustomizations: './_pre-bootstrap-customizations.scss',

  // Use bootstrapCustomizations to utilize other sass variables defined in
  // preBootstrapCustomizations or the _variables.scss file. This is useful to set one
  // customization value based on another value.
  bootstrapCustomizations: "./app/bootstrap-customizations.scss",

  //mainSass: './_main.scss',

  styleLoader: 'style-loader!css-loader!sass-loader',

  scripts: {
    'transition': false,
    'alert': false,
    'button': false,
    'carousel': false,
    'collapse': false,
    'dropdown': false,
    'modal': false,
    'tooltip': false,
    'popover': false,
    'scrollspy': false,
    'tab': false,
    'affix': false
  },
  styles: {
    'mixins': true,

    'normalize': true,
    'print': true,
    'glyphicons': true,

    'scaffolding': true,
    'type': true,
    'code': true,
    'grid': true,
    'tables': true,
    'forms': true,
    'buttons': true,

    'component-animations': true,
    'dropdowns': true,
    'button-groups': true,
    'input-groups': true,
    'navs': true,
    'navbar': true,
    'breadcrumbs': true,
    'pagination': true,
    'pager': true,
    'labels': true,
    'badges': true,
    'jumbotron': true,
    'thumbnails': true,
    'alerts': true,
    'progress-bars': true,
    'media': true,
    'list-group': true,
    'panels': true,
    'wells': true,
    'responsive-embed': true,
    'close': true,

    'modals': true,
    'tooltip': true,
    'popovers': true,
    'carousel': true,

    'utilities': true,
    'responsive-utilities': true
  }
};
