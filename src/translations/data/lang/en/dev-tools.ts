/**
 * Dev Tools English translations for Reynard framework
 * Configuration generator and development tool translations
 */

export const devToolsTranslations = {
  // CLI Messages
  cli: {
    initializing: {
      generator: "Initializing generator...",
    },
    generating: {
      configurations: "Generating configurations...",
    },
    generation: {
      completed: "Configuration generation completed successfully!",
      failed: "Configuration generation failed",
    },
    validation: {
      starting: "Validating configurations...",
      completed: "All configurations are valid!",
      failed: "Validation failed",
    },
    interactive: {
      notImplemented: "Interactive mode is not yet implemented",
      useCommands: "Please use specific commands like 'generate' or 'validate'",
    },
    info: {
      nameRequired: "Name argument is required for info command",
    },
    unknown: {
      command: "Unknown command: {command}",
    },
  },

  // Error Messages
  errors: {
    unknown: "Unknown error",
    validation: {
      notImplemented: "Validation not yet implemented",
      underDevelopment: "Validation functionality is under development",
    },
    autoFix: {
      notAvailable: "Auto-fix functionality will be available once validation is implemented",
    },
  },

  // Success Messages
  success: {
    generated: {
      files: "Generated {count} configuration files",
    },
    presets: {
      available: "Available presets:",
    },
    plugins: {
      available: "Available plugins:",
    },
    types: {
      available: "Available configuration types:",
    },
  },

  // Preset Descriptions
  presets: {
    package: {
      description: "Standard package testing configuration for npm packages and libraries",
    },
    example: {
      description: "Example application configuration for demonstration and learning",
    },
    e2e: {
      description: "End-to-end testing configuration for comprehensive application testing",
    },
    backend: {
      description: "Python/Node.js backend configuration for API and service development",
    },
    template: {
      description: "Project template configuration for comprehensive template-based development",
    },
  },

  // Category Descriptions
  categories: {
    development: {
      description: "Development and testing configurations",
    },
    production: {
      description: "Production and deployment configurations",
    },
    testing: {
      description: "Testing and quality assurance configurations",
    },
    templates: {
      description: "Project templates and boilerplates",
    },
  },

  // Plugin Descriptions
  plugins: {
    vitest: {
      description: "Vitest test configuration generator",
    },
    typescript: {
      description: "TypeScript configuration generator",
    },
    devServer: {
      description: "Development server configuration generator",
    },
  },

  // Info Messages
  info: {
    preset: {
      notFound: "Preset '{name}' not found",
    },
    plugin: {
      notFound: "Plugin '{name}' not found",
    },
    type: {
      notFound: "Configuration type '{name}' not found",
    },
    noDescription: "No description",
  },
} as const;
