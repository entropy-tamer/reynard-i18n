/**
 * @file UI form translation interface definitions
 */

export interface UiFormTranslations {
  // Form components
  form: {
    submit: string;
    cancel: string;
    reset: string;
    save: string;
    edit: string;
    delete: string;
    add: string;
    remove: string;
    required: string;
    optional: string;
    invalid: string;
    valid: string;
    loading: string;
    success: string;
    error: string;
    warning: string;
    info: string;
  };

  // Button variants
  button: {
    primary: string;
    secondary: string;
    tertiary: string;
    danger: string;
    success: string;
    warning: string;
    info: string;
    ghost: string;
    outline: string;
    link: string;
  };

  // Status indicators
  status: {
    online: string;
    offline: string;
    pending: string;
    processing: string;
    completed: string;
    failed: string;
    cancelled: string;
    active: string;
    inactive: string;
    enabled: string;
    disabled: string;
  };

  // Common UI elements
  elements: {
    close: string;
    open: string;
    expand: string;
    collapse: string;
    show: string;
    hide: string;
    toggle: string;
    select: string;
    deselect: string;
    check: string;
    uncheck: string;
    enable: string;
    disable: string;
    activate: string;
    deactivate: string;
  };
}
