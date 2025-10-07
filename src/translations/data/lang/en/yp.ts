/**
 * YP (Your Protocol) English translations for Reynard framework
 */

export const ypTranslations = {
  // Navigation and Pages
  navigation: {
    rooms: "Rooms",
    chat: "Chat",
    documents: "Documents",
    diagrams: "Diagrams",
    kanban: "Kanban",
    settings: "Settings",
    profile: "Profile",
  },

  // Rooms
  rooms: {
    title: "Collaboration Rooms",
    createRoom: "Create Room",
    joinRoom: "Join Room",
    leaveRoom: "Leave Room",
    deleteRoom: "Delete Room",
    roomName: "Room Name",
    roomDescription: "Room Description",
    roomType: "Room Type",
    encryption: "Encryption",
    members: "Members",
    searchRooms: "Search rooms...",
    filterByType: "Filter by type",
    noRooms: "No rooms found",
    createFirstRoom: "Create your first room to get started",

    // Room Types
    types: {
      chat: "Chat",
      document: "Document",
      kanban: "Kanban",
      diagram: "Diagram",
    },

    // Visibility
    visibility: {
      public: "Public",
      private: "Private",
      inviteOnly: "Invite Only",
    },

    // Room Creation Modal
    createModal: {
      title: "Create New Room",
      namePlaceholder: "Enter room name...",
      descriptionPlaceholder: "Enter room description...",
      selectType: "Select room type",
      selectVisibility: "Select visibility",
      enableEncryption: "Enable end-to-end encryption",
      createButton: "Create Room",
      cancelButton: "Cancel",
    },
  },

  // Chat
  chat: {
    title: "Chat",
    sendMessage: "Send Message",
    typeMessage: "Type a message...",
    messagePlaceholder: "Type your message here",
    messageSent: "Message sent",
    messageReceived: "Message received",
    messageFailed: "Failed to send message",
    typing: "Typing...",
    online: "Online",
    offline: "Offline",
    away: "Away",
    lastSeen: "Last seen",
    noMessages: "No messages yet",
    startConversation: "Start the conversation",

    // Message Actions
    editMessage: "Edit Message",
    deleteMessage: "Delete Message",
    replyToMessage: "Reply to Message",
    reactToMessage: "React to Message",
    copyMessage: "Copy Message",

    // Threads
    threads: {
      title: "Threads",
      createThread: "Create Thread",
      replyInThread: "Reply in Thread",
      threadReplies: "replies",
    },

    // Reactions
    reactions: {
      addReaction: "Add Reaction",
      removeReaction: "Remove Reaction",
      common: ["👍", "❤️", "😂", "😮", "😢", "😡"],
    },
  },

  // Documents
  documents: {
    title: "Collaborative Documents",
    createDocument: "Create Document",
    documentTitle: "Document Title",
    documentContent: "Document Content",
    autoSave: "Auto-save",
    lastSaved: "Last saved",
    wordCount: "Words",
    characterCount: "Characters",
    collaborators: "Collaborators",
    version: "Version",
    versionHistory: "Version History",
    restoreVersion: "Restore Version",
    exportDocument: "Export Document",
    importDocument: "Import Document",

    // Document Types
    types: {
      note: "Note",
      document: "Document",
      report: "Report",
      meeting: "Meeting Notes",
    },

    // Collaboration
    collaboration: {
      realTimeSync: "Real-time sync",
      cursorPosition: "Cursor position",
      userTyping: "is typing...",
      conflictResolution: "Conflict resolution",
      mergeChanges: "Merge changes",
    },
  },

  // Diagrams
  diagrams: {
    title: "Mermaid Diagrams",
    createDiagram: "Create Diagram",
    diagramCode: "Diagram Code",
    livePreview: "Live Preview",
    exportSVG: "Export SVG",
    exportPNG: "Export PNG",
    saveDiagram: "Save Diagram",
    loadDiagram: "Load Diagram",
    diagramTemplates: "Templates",

    // Templates
    templates: {
      flowchart: "Flowchart",
      sequence: "Sequence Diagram",
      class: "Class Diagram",
      gantt: "Gantt Chart",
      state: "State Diagram",
      er: "Entity Relationship",
    },

    // Syntax Help
    syntaxHelp: {
      title: "Mermaid Syntax Help",
      diagramTypes: "Common Diagram Types",
      flowchartArrows: "Flowchart Arrows",
      examples: "Examples",
    },

    // Error Handling
    renderError: "Render Error",
    invalidSyntax: "Invalid syntax",
    checkSyntax: "Check your Mermaid syntax",
  },

  // Kanban
  kanban: {
    title: "Kanban Boards",
    createBoard: "Create Board",
    boardName: "Board Name",
    boardDescription: "Board Description",
    addColumn: "Add Column",
    addCard: "Add Card",
    moveCard: "Move Card",
    deleteCard: "Delete Card",
    editCard: "Edit Card",
    cardTitle: "Card Title",
    cardDescription: "Card Description",
    assignee: "Assignee",
    dueDate: "Due Date",
    priority: "Priority",
    labels: "Labels",
    wipLimit: "WIP Limit",

    // Default Columns
    columns: {
      todo: "To Do",
      inProgress: "In Progress",
      review: "Review",
      done: "Done",
    },

    // Priorities
    priorities: {
      low: "Low",
      medium: "Medium",
      high: "High",
      urgent: "Urgent",
      critical: "Critical",
    },

    // Card Actions
    cardActions: {
      edit: "Edit Card",
      delete: "Delete Card",
      duplicate: "Duplicate Card",
      move: "Move Card",
      archive: "Archive Card",
    },
  },

  // Permissions
  permissions: {
    title: "Permissions",
    managePermissions: "Manage Permissions",
    userPermissions: "User Permissions",
    rolePermissions: "Role Permissions",
    resourcePermissions: "Resource Permissions",
    grantPermission: "Grant Permission",
    revokePermission: "Revoke Permission",
    permissionLevel: "Permission Level",

    // Permission Levels
    levels: {
      read: "Read",
      write: "Write",
      admin: "Admin",
      owner: "Owner",
    },

    // Resources
    resources: {
      room: "Room",
      document: "Document",
      diagram: "Diagram",
      kanban: "Kanban Board",
      message: "Message",
    },
  },

  // Encryption
  encryption: {
    title: "Encryption",
    enabled: "Encryption Enabled",
    disabled: "Encryption Disabled",
    generateKeys: "Generate Keys",
    shareKeys: "Share Keys",
    rotateKeys: "Rotate Keys",
    keyManagement: "Key Management",
    endToEnd: "End-to-End Encryption",
    secureCommunication: "Secure Communication",

    // Key Status
    keyStatus: {
      generated: "Keys Generated",
      shared: "Keys Shared",
      rotated: "Keys Rotated",
      expired: "Keys Expired",
    },
  },

  // AI and Agents
  ai: {
    title: "AI Assistant",
    askAI: "Ask AI",
    generateResponse: "Generate Response",
    summarizeDocument: "Summarize Document",
    generateDiagram: "Generate Diagram",
    codeReview: "Code Review",
    translateText: "Translate Text",
    aiThinking: "AI is thinking...",
    aiResponse: "AI Response",

    // Agent Integration
    agents: {
      title: "AI Agents",
      joinRoom: "Join Room",
      leaveRoom: "Leave Room",
      agentTyping: "Agent is typing...",
      agentResponse: "Agent Response",
      agentStatus: "Agent Status",
    },
  },

  // Settings
  settings: {
    title: "Settings",
    general: "General",
    appearance: "Appearance",
    notifications: "Notifications",
    privacy: "Privacy",
    security: "Security",
    language: "Language",
    theme: "Theme",
    fontSize: "Font Size",
    autoSave: "Auto-save",
    notificationsEnabled: "Notifications Enabled",
    soundEnabled: "Sound Enabled",
    vibrationEnabled: "Vibration Enabled",
  },

  // Profile
  profile: {
    title: "Profile",
    editProfile: "Edit Profile",
    displayName: "Display Name",
    email: "Email",
    avatar: "Avatar",
    bio: "Bio",
    preferences: "Preferences",
    accountSettings: "Account Settings",
    changePassword: "Change Password",
    twoFactorAuth: "Two-Factor Authentication",
    logout: "Logout",
  },

  // Common Actions
  actions: {
    create: "Create",
    edit: "Edit",
    delete: "Delete",
    save: "Save",
    cancel: "Cancel",
    confirm: "Confirm",
    close: "Close",
    open: "Open",
    share: "Share",
    copy: "Copy",
    download: "Download",
    upload: "Upload",
    export: "Export",
    import: "Import",
    refresh: "Refresh",
    search: "Search",
    filter: "Filter",
    sort: "Sort",
    clear: "Clear",
    reset: "Reset",
    apply: "Apply",
    submit: "Submit",
    loading: "Loading...",
    saving: "Saving...",
    error: "Error",
    success: "Success",
    warning: "Warning",
    info: "Information",
  },

  // Status Messages
  status: {
    connected: "Connected",
    disconnected: "Disconnected",
    connecting: "Connecting...",
    reconnecting: "Reconnecting...",
    online: "Online",
    offline: "Offline",
    away: "Away",
    busy: "Busy",
    available: "Available",
  },

  // Error Messages
  errors: {
    networkError: "Network error. Please check your connection.",
    serverError: "Server error. Please try again later.",
    unauthorized: "Unauthorized. Please log in.",
    forbidden: "Forbidden. You don't have permission.",
    notFound: "Not found.",
    validationError: "Validation error. Please check your input.",
    encryptionError: "Encryption error. Please try again.",
    collaborationError: "Collaboration error. Please refresh.",
    saveError: "Failed to save. Please try again.",
    loadError: "Failed to load. Please refresh.",
    deleteError: "Failed to delete. Please try again.",
  },

  // Success Messages
  success: {
    saved: "Saved successfully",
    created: "Created successfully",
    updated: "Updated successfully",
    deleted: "Deleted successfully",
    shared: "Shared successfully",
    copied: "Copied to clipboard",
    exported: "Exported successfully",
    imported: "Imported successfully",
    keysGenerated: "Encryption keys generated",
    keysShared: "Encryption keys shared",
    permissionGranted: "Permission granted",
    permissionRevoked: "Permission revoked",
  },
};
