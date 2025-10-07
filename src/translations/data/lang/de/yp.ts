/**
 * YP (Your Protocol) German translations for Reynard framework
 */

export const ypTranslations = {
  // Navigation and Pages
  navigation: {
    rooms: "Räume",
    chat: "Chat",
    documents: "Dokumente",
    diagrams: "Diagramme",
    kanban: "Kanban",
    settings: "Einstellungen",
    profile: "Profil",
  },

  // Rooms
  rooms: {
    title: "Kollaborationsräume",
    createRoom: "Raum erstellen",
    joinRoom: "Raum beitreten",
    leaveRoom: "Raum verlassen",
    deleteRoom: "Raum löschen",
    roomName: "Raumname",
    roomDescription: "Raumbeschreibung",
    roomType: "Raumtyp",
    encryption: "Verschlüsselung",
    members: "Mitglieder",
    searchRooms: "Räume suchen...",
    filterByType: "Nach Typ filtern",
    noRooms: "Keine Räume gefunden",
    createFirstRoom: "Erstellen Sie Ihren ersten Raum, um zu beginnen",

    // Room Types
    types: {
      chat: "Chat",
      document: "Dokument",
      kanban: "Kanban",
      diagram: "Diagramm",
    },

    // Visibility
    visibility: {
      public: "Öffentlich",
      private: "Privat",
      inviteOnly: "Nur auf Einladung",
    },

    // Room Creation Modal
    createModal: {
      title: "Neuen Raum erstellen",
      namePlaceholder: "Raumname eingeben...",
      descriptionPlaceholder: "Raumbeschreibung eingeben...",
      selectType: "Raumtyp auswählen",
      selectVisibility: "Sichtbarkeit auswählen",
      enableEncryption: "Ende-zu-Ende-Verschlüsselung aktivieren",
      createButton: "Raum erstellen",
      cancelButton: "Abbrechen",
    },
  },

  // Chat
  chat: {
    title: "Chat",
    sendMessage: "Nachricht senden",
    typeMessage: "Nachricht eingeben...",
    messagePlaceholder: "Geben Sie Ihre Nachricht hier ein",
    messageSent: "Nachricht gesendet",
    messageReceived: "Nachricht empfangen",
    messageFailed: "Nachricht konnte nicht gesendet werden",
    typing: "Tippt...",
    online: "Online",
    offline: "Offline",
    away: "Abwesend",
    lastSeen: "Zuletzt gesehen",
    noMessages: "Noch keine Nachrichten",
    startConversation: "Beginnen Sie die Unterhaltung",

    // Message Actions
    editMessage: "Nachricht bearbeiten",
    deleteMessage: "Nachricht löschen",
    replyToMessage: "Auf Nachricht antworten",
    reactToMessage: "Auf Nachricht reagieren",
    copyMessage: "Nachricht kopieren",

    // Threads
    threads: {
      title: "Threads",
      createThread: "Thread erstellen",
      replyInThread: "Im Thread antworten",
      threadReplies: "Antworten",
    },

    // Reactions
    reactions: {
      addReaction: "Reaktion hinzufügen",
      removeReaction: "Reaktion entfernen",
      common: ["👍", "❤️", "😂", "😮", "😢", "😡"],
    },
  },

  // Documents
  documents: {
    title: "Kollaborative Dokumente",
    createDocument: "Dokument erstellen",
    documentTitle: "Dokumenttitel",
    documentContent: "Dokumentinhalt",
    autoSave: "Automatisches Speichern",
    lastSaved: "Zuletzt gespeichert",
    wordCount: "Wörter",
    characterCount: "Zeichen",
    collaborators: "Mitarbeiter",
    version: "Version",
    versionHistory: "Versionsverlauf",
    restoreVersion: "Version wiederherstellen",
    exportDocument: "Dokument exportieren",
    importDocument: "Dokument importieren",

    // Document Types
    types: {
      note: "Notiz",
      document: "Dokument",
      report: "Bericht",
      meeting: "Besprechungsnotizen",
    },

    // Collaboration
    collaboration: {
      realTimeSync: "Echtzeit-Synchronisation",
      cursorPosition: "Cursor-Position",
      userTyping: "tippt...",
      conflictResolution: "Konfliktlösung",
      mergeChanges: "Änderungen zusammenführen",
    },
  },

  // Diagrams
  diagrams: {
    title: "Mermaid-Diagramme",
    createDiagram: "Diagramm erstellen",
    diagramCode: "Diagrammcode",
    livePreview: "Live-Vorschau",
    exportSVG: "Als SVG exportieren",
    exportPNG: "Als PNG exportieren",
    saveDiagram: "Diagramm speichern",
    loadDiagram: "Diagramm laden",
    diagramTemplates: "Vorlagen",

    // Templates
    templates: {
      flowchart: "Flussdiagramm",
      sequence: "Sequenzdiagramm",
      class: "Klassendiagramm",
      gantt: "Gantt-Diagramm",
      state: "Zustandsdiagramm",
      er: "Entity-Relationship-Diagramm",
    },

    // Syntax Help
    syntaxHelp: {
      title: "Mermaid-Syntax-Hilfe",
      diagramTypes: "Häufige Diagrammtypen",
      flowchartArrows: "Flussdiagramm-Pfeile",
      examples: "Beispiele",
    },

    // Error Handling
    renderError: "Render-Fehler",
    invalidSyntax: "Ungültige Syntax",
    checkSyntax: "Überprüfen Sie Ihre Mermaid-Syntax",
  },

  // Kanban
  kanban: {
    title: "Kanban-Boards",
    createBoard: "Board erstellen",
    boardName: "Board-Name",
    boardDescription: "Board-Beschreibung",
    addColumn: "Spalte hinzufügen",
    addCard: "Karte hinzufügen",
    moveCard: "Karte verschieben",
    deleteCard: "Karte löschen",
    editCard: "Karte bearbeiten",
    cardTitle: "Kartentitel",
    cardDescription: "Kartenbeschreibung",
    assignee: "Zugewiesen an",
    dueDate: "Fälligkeitsdatum",
    priority: "Priorität",
    labels: "Labels",
    wipLimit: "WIP-Limit",

    // Default Columns
    columns: {
      todo: "Zu erledigen",
      inProgress: "In Bearbeitung",
      review: "In Prüfung",
      done: "Erledigt",
    },

    // Priorities
    priorities: {
      low: "Niedrig",
      medium: "Mittel",
      high: "Hoch",
      urgent: "Dringend",
      critical: "Kritisch",
    },

    // Card Actions
    cardActions: {
      edit: "Karte bearbeiten",
      delete: "Karte löschen",
      duplicate: "Karte duplizieren",
      move: "Karte verschieben",
      archive: "Karte archivieren",
    },
  },

  // Permissions
  permissions: {
    title: "Berechtigungen",
    managePermissions: "Berechtigungen verwalten",
    userPermissions: "Benutzerberechtigungen",
    rolePermissions: "Rollenberechtigungen",
    resourcePermissions: "Ressourcenberechtigungen",
    grantPermission: "Berechtigung gewähren",
    revokePermission: "Berechtigung widerrufen",
    permissionLevel: "Berechtigungsstufe",

    // Permission Levels
    levels: {
      read: "Lesen",
      write: "Schreiben",
      admin: "Administrator",
      owner: "Besitzer",
    },

    // Resources
    resources: {
      room: "Raum",
      document: "Dokument",
      diagram: "Diagramm",
      kanban: "Kanban-Board",
      message: "Nachricht",
    },
  },

  // Encryption
  encryption: {
    title: "Verschlüsselung",
    enabled: "Verschlüsselung aktiviert",
    disabled: "Verschlüsselung deaktiviert",
    generateKeys: "Schlüssel generieren",
    shareKeys: "Schlüssel teilen",
    rotateKeys: "Schlüssel rotieren",
    keyManagement: "Schlüsselverwaltung",
    endToEnd: "Ende-zu-Ende-Verschlüsselung",
    secureCommunication: "Sichere Kommunikation",

    // Key Status
    keyStatus: {
      generated: "Schlüssel generiert",
      shared: "Schlüssel geteilt",
      rotated: "Schlüssel rotiert",
      expired: "Schlüssel abgelaufen",
    },
  },

  // AI and Agents
  ai: {
    title: "KI-Assistent",
    askAI: "KI fragen",
    generateResponse: "Antwort generieren",
    summarizeDocument: "Dokument zusammenfassen",
    generateDiagram: "Diagramm generieren",
    codeReview: "Code-Review",
    translateText: "Text übersetzen",
    aiThinking: "KI denkt nach...",
    aiResponse: "KI-Antwort",

    // Agent Integration
    agents: {
      title: "KI-Agenten",
      joinRoom: "Raum beitreten",
      leaveRoom: "Raum verlassen",
      agentTyping: "Agent tippt...",
      agentResponse: "Agent-Antwort",
      agentStatus: "Agent-Status",
    },
  },

  // Settings
  settings: {
    title: "Einstellungen",
    general: "Allgemein",
    appearance: "Erscheinungsbild",
    notifications: "Benachrichtigungen",
    privacy: "Datenschutz",
    security: "Sicherheit",
    language: "Sprache",
    theme: "Design",
    fontSize: "Schriftgröße",
    autoSave: "Automatisches Speichern",
    notificationsEnabled: "Benachrichtigungen aktiviert",
    soundEnabled: "Ton aktiviert",
    vibrationEnabled: "Vibration aktiviert",
  },

  // Profile
  profile: {
    title: "Profil",
    editProfile: "Profil bearbeiten",
    displayName: "Anzeigename",
    email: "E-Mail",
    avatar: "Avatar",
    bio: "Biografie",
    preferences: "Einstellungen",
    accountSettings: "Kontoeinstellungen",
    changePassword: "Passwort ändern",
    twoFactorAuth: "Zwei-Faktor-Authentifizierung",
    logout: "Abmelden",
  },

  // Common Actions
  actions: {
    create: "Erstellen",
    edit: "Bearbeiten",
    delete: "Löschen",
    save: "Speichern",
    cancel: "Abbrechen",
    confirm: "Bestätigen",
    close: "Schließen",
    open: "Öffnen",
    share: "Teilen",
    copy: "Kopieren",
    download: "Herunterladen",
    upload: "Hochladen",
    export: "Exportieren",
    import: "Importieren",
    refresh: "Aktualisieren",
    search: "Suchen",
    filter: "Filtern",
    sort: "Sortieren",
    clear: "Löschen",
    reset: "Zurücksetzen",
    apply: "Anwenden",
    submit: "Absenden",
    loading: "Lädt...",
    saving: "Speichert...",
    error: "Fehler",
    success: "Erfolg",
    warning: "Warnung",
    info: "Information",
  },

  // Status Messages
  status: {
    connected: "Verbunden",
    disconnected: "Getrennt",
    connecting: "Verbinde...",
    reconnecting: "Verbinde neu...",
    online: "Online",
    offline: "Offline",
    away: "Abwesend",
    busy: "Beschäftigt",
    available: "Verfügbar",
  },

  // Error Messages
  errors: {
    networkError: "Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung.",
    serverError: "Serverfehler. Bitte versuchen Sie es später erneut.",
    unauthorized: "Nicht autorisiert. Bitte melden Sie sich an.",
    forbidden: "Verboten. Sie haben keine Berechtigung.",
    notFound: "Nicht gefunden.",
    validationError: "Validierungsfehler. Bitte überprüfen Sie Ihre Eingabe.",
    encryptionError: "Verschlüsselungsfehler. Bitte versuchen Sie es erneut.",
    collaborationError: "Kollaborationsfehler. Bitte aktualisieren Sie die Seite.",
    saveError: "Speichern fehlgeschlagen. Bitte versuchen Sie es erneut.",
    loadError: "Laden fehlgeschlagen. Bitte aktualisieren Sie die Seite.",
    deleteError: "Löschen fehlgeschlagen. Bitte versuchen Sie es erneut.",
  },

  // Success Messages
  success: {
    saved: "Erfolgreich gespeichert",
    created: "Erfolgreich erstellt",
    updated: "Erfolgreich aktualisiert",
    deleted: "Erfolgreich gelöscht",
    shared: "Erfolgreich geteilt",
    copied: "In die Zwischenablage kopiert",
    exported: "Erfolgreich exportiert",
    imported: "Erfolgreich importiert",
    keysGenerated: "Verschlüsselungsschlüssel generiert",
    keysShared: "Verschlüsselungsschlüssel geteilt",
    permissionGranted: "Berechtigung gewährt",
    permissionRevoked: "Berechtigung widerrufen",
  },
};
