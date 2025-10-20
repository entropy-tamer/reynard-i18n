/**
 * @file UI message translation interface definitions
 */

export interface UiMessageTranslations {
  // Loading states
  loading: {
    default: string;
    pleaseWait: string;
    processing: string;
    saving: string;
    uploading: string;
    downloading: string;
    connecting: string;
    disconnecting: string;
    synchronizing: string;
    initializing: string;
  };

  // Error messages
  errors: {
    generic: string;
    networkError: string;
    serverError: string;
    validationError: string;
    permissionError: string;
    notFound: string;
    unauthorized: string;
    forbidden: string;
    timeout: string;
    unknown: string;
  };

  // Success messages
  success: {
    saved: string;
    updated: string;
    deleted: string;
    created: string;
    uploaded: string;
    downloaded: string;
    connected: string;
    disconnected: string;
    synchronized: string;
    initialized: string;
  };

  // Confirmation dialogs
  confirm: {
    delete: string;
    remove: string;
    cancel: string;
    reset: string;
    logout: string;
    close: string;
    save: string;
    discard: string;
  };
}
