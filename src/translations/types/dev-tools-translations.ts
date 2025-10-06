/**
 * Dev Tools translation type definitions
 */

export interface DevToolsTranslations {
  cli: {
    initializing: {
      generator: string;
    };
    generating: {
      configurations: string;
    };
    generation: {
      completed: string;
      failed: string;
    };
    validation: {
      starting: string;
      completed: string;
      failed: string;
    };
    interactive: {
      notImplemented: string;
      useCommands: string;
    };
    info: {
      nameRequired: string;
    };
    unknown: {
      command: string;
    };
  };
  errors: {
    unknown: string;
    validation: {
      notImplemented: string;
      underDevelopment: string;
    };
    autoFix: {
      notAvailable: string;
    };
  };
  success: {
    generated: {
      files: string;
    };
    presets: {
      available: string;
    };
    plugins: {
      available: string;
    };
    types: {
      available: string;
    };
  };
  presets: {
    package: {
      description: string;
    };
    example: {
      description: string;
    };
    e2e: {
      description: string;
    };
    backend: {
      description: string;
    };
    template: {
      description: string;
    };
  };
  categories: {
    development: {
      description: string;
    };
    production: {
      description: string;
    };
    testing: {
      description: string;
    };
    templates: {
      description: string;
    };
  };
  plugins: {
    vitest: {
      description: string;
    };
    typescript: {
      description: string;
    };
    devServer: {
      description: string;
    };
  };
  info: {
    preset: {
      notFound: string;
    };
    plugin: {
      notFound: string;
    };
    type: {
      notFound: string;
    };
    noDescription: string;
  };
}
