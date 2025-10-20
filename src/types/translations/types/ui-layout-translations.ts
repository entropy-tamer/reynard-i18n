/**
 * @file UI layout translation interface definitions
 */

export interface UiLayoutTranslations {
  // Layout components
  layout: {
    header: {
      title: string;
      content: string;
    };
    sidebar: {
      title: string;
      content: string;
    };
    main: {
      title: string;
      content: string;
    };
    footer: {
      title: string;
      content: string;
    };
  };

  // Drawer component
  drawer: {
    title: string;
    content: string;
    footer: string;
    closeButton: string;
    openButton: string;
    toggleButton: string;
  };

  // Data table components
  dataTable: {
    loading: string;
    noData: string;
    error: string;
    emptyState: string;
    rowsPerPage: string;
    page: string;
    of: string;
    previous: string;
    next: string;
    first: string;
    last: string;
    selectAll: string;
    clearSelection: string;
    selectedRows: string;
    totalRows: string;
    search: string;
    filter: string;
    sort: string;
    export: string;
    refresh: string;
  };
}
