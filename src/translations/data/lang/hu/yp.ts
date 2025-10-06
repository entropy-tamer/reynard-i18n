/**
 * YP (Your Protocol) Hungarian translations for Reynard framework
 */

export const ypTranslations = {
  // Navigation and Pages
  navigation: {
    rooms: "Szobák",
    chat: "Chat",
    documents: "Dokumentumok",
    diagrams: "Diagramok",
    kanban: "Kanban",
    settings: "Beállítások",
    profile: "Profil",
  },

  // Rooms
  rooms: {
    title: "Együttműködési Szobák",
    createRoom: "Szoba Létrehozása",
    joinRoom: "Szobához Csatlakozás",
    leaveRoom: "Szoba Elhagyása",
    deleteRoom: "Szoba Törlése",
    roomName: "Szoba Neve",
    roomDescription: "Szoba Leírása",
    roomType: "Szoba Típusa",
    visibility: "Láthatóság",
    encryption: "Titkosítás",
    members: "Tagok",
    searchRooms: "Szobák keresése...",
    filterByType: "Szűrés típus szerint",
    noRooms: "Nincsenek szobák",
    createFirstRoom: "Hozza létre az első szobáját a kezdéshez",

    // Room Types
    types: {
      chat: "Chat",
      document: "Dokumentum",
      kanban: "Kanban",
      diagram: "Diagram",
    },

    // Visibility
    visibility: {
      public: "Nyilvános",
      private: "Privát",
      inviteOnly: "Csak Meghívásra",
    },

    // Room Creation Modal
    createModal: {
      title: "Új Szoba Létrehozása",
      namePlaceholder: "Adja meg a szoba nevét...",
      descriptionPlaceholder: "Adja meg a szoba leírását...",
      selectType: "Válassza ki a szoba típusát",
      selectVisibility: "Válassza ki a láthatóságot",
      enableEncryption: "Végpontok közötti titkosítás engedélyezése",
      createButton: "Szoba Létrehozása",
      cancelButton: "Mégse",
    },
  },

  // Chat
  chat: {
    title: "Chat",
    sendMessage: "Üzenet Küldése",
    typeMessage: "Írjon üzenetet...",
    messagePlaceholder: "Írja ide az üzenetét",
    messageSent: "Üzenet elküldve",
    messageReceived: "Üzenet fogadva",
    messageFailed: "Az üzenet küldése sikertelen",
    typing: "Gépel...",
    online: "Online",
    offline: "Offline",
    away: "Távol",
    lastSeen: "Utoljára látva",
    noMessages: "Még nincsenek üzenetek",
    startConversation: "Kezdje el a beszélgetést",

    // Message Actions
    editMessage: "Üzenet Szerkesztése",
    deleteMessage: "Üzenet Törlése",
    replyToMessage: "Válasz az Üzenetre",
    reactToMessage: "Reakció az Üzenetre",
    copyMessage: "Üzenet Másolása",

    // Threads
    threads: {
      title: "Szálak",
      createThread: "Szál Létrehozása",
      replyInThread: "Válasz a Szálban",
      threadReplies: "válasz",
    },

    // Reactions
    reactions: {
      addReaction: "Reakció Hozzáadása",
      removeReaction: "Reakció Eltávolítása",
      common: ["👍", "❤️", "😂", "😮", "😢", "😡"],
    },
  },

  // Documents
  documents: {
    title: "Együttműködési Dokumentumok",
    createDocument: "Dokumentum Létrehozása",
    documentTitle: "Dokumentum Címe",
    documentContent: "Dokumentum Tartalma",
    autoSave: "Automatikus Mentés",
    lastSaved: "Utoljára mentve",
    wordCount: "Szavak",
    characterCount: "Karakterek",
    collaborators: "Együttműködők",
    version: "Verzió",
    versionHistory: "Verzió Történet",
    restoreVersion: "Verzió Visszaállítása",
    exportDocument: "Dokumentum Exportálása",
    importDocument: "Dokumentum Importálása",

    // Document Types
    types: {
      note: "Jegyzet",
      document: "Dokumentum",
      report: "Jelentés",
      meeting: "Megbeszélés Jegyzetei",
    },

    // Collaboration
    collaboration: {
      realTimeSync: "Valós idejű szinkronizálás",
      cursorPosition: "Kurzor pozíció",
      userTyping: "gépel...",
      conflictResolution: "Konfliktus feloldás",
      mergeChanges: "Változások egyesítése",
    },
  },

  // Diagrams
  diagrams: {
    title: "Mermaid Diagramok",
    createDiagram: "Diagram Létrehozása",
    diagramCode: "Diagram Kód",
    livePreview: "Élő Előnézet",
    exportSVG: "SVG Exportálás",
    exportPNG: "PNG Exportálás",
    saveDiagram: "Diagram Mentése",
    loadDiagram: "Diagram Betöltése",
    diagramTemplates: "Sablonok",
    syntaxHelp: "Szintaxis Segítség",

    // Templates
    templates: {
      flowchart: "Folyamatábra",
      sequence: "Szekvencia Diagram",
      class: "Osztály Diagram",
      gantt: "Gantt Diagram",
      state: "Állapot Diagram",
      er: "Entitás-Kapcsolat Diagram",
    },

    // Syntax Help
    syntaxHelp: {
      title: "Mermaid Szintaxis Segítség",
      diagramTypes: "Gyakori Diagram Típusok",
      flowchartArrows: "Folyamatábra Nyilak",
      examples: "Példák",
    },

    // Error Handling
    renderError: "Render Hiba",
    invalidSyntax: "Érvénytelen szintaxis",
    checkSyntax: "Ellenőrizze a Mermaid szintaxist",
  },

  // Kanban
  kanban: {
    title: "Kanban Táblák",
    createBoard: "Tábla Létrehozása",
    boardName: "Tábla Neve",
    boardDescription: "Tábla Leírása",
    addColumn: "Oszlop Hozzáadása",
    addCard: "Kártya Hozzáadása",
    moveCard: "Kártya Mozgatása",
    deleteCard: "Kártya Törlése",
    editCard: "Kártya Szerkesztése",
    cardTitle: "Kártya Címe",
    cardDescription: "Kártya Leírása",
    assignee: "Felelős",
    dueDate: "Határidő",
    priority: "Prioritás",
    labels: "Címkék",
    wipLimit: "WIP Limit",

    // Default Columns
    columns: {
      todo: "Tennivaló",
      inProgress: "Folyamatban",
      review: "Átnézés",
      done: "Kész",
    },

    // Priorities
    priorities: {
      low: "Alacsony",
      medium: "Közepes",
      high: "Magas",
      urgent: "Sürgős",
      critical: "Kritikus",
    },

    // Card Actions
    cardActions: {
      edit: "Kártya Szerkesztése",
      delete: "Kártya Törlése",
      duplicate: "Kártya Duplikálása",
      move: "Kártya Mozgatása",
      archive: "Kártya Archiválása",
    },
  },

  // Permissions
  permissions: {
    title: "Engedélyek",
    managePermissions: "Engedélyek Kezelése",
    userPermissions: "Felhasználói Engedélyek",
    rolePermissions: "Szerepkör Engedélyek",
    resourcePermissions: "Erőforrás Engedélyek",
    grantPermission: "Engedély Adása",
    revokePermission: "Engedély Visszavonása",
    permissionLevel: "Engedély Szint",

    // Permission Levels
    levels: {
      read: "Olvasás",
      write: "Írás",
      admin: "Adminisztrátor",
      owner: "Tulajdonos",
    },

    // Resources
    resources: {
      room: "Szoba",
      document: "Dokumentum",
      diagram: "Diagram",
      kanban: "Kanban Tábla",
      message: "Üzenet",
    },
  },

  // Encryption
  encryption: {
    title: "Titkosítás",
    enabled: "Titkosítás Engedélyezve",
    disabled: "Titkosítás Letiltva",
    generateKeys: "Kulcsok Generálása",
    shareKeys: "Kulcsok Megosztása",
    rotateKeys: "Kulcsok Rotálása",
    keyManagement: "Kulcs Kezelés",
    endToEnd: "Végpontok Közötti Titkosítás",
    secureCommunication: "Biztonságos Kommunikáció",

    // Key Status
    keyStatus: {
      generated: "Kulcsok Generálva",
      shared: "Kulcsok Megosztva",
      rotated: "Kulcsok Rotálva",
      expired: "Kulcsok Lejártak",
    },
  },

  // AI and Agents
  ai: {
    title: "AI Asszisztens",
    askAI: "AI Kérdezése",
    generateResponse: "Válasz Generálása",
    summarizeDocument: "Dokumentum Összefoglalása",
    generateDiagram: "Diagram Generálása",
    codeReview: "Kód Átnézése",
    translateText: "Szöveg Fordítása",
    aiThinking: "AI gondolkodik...",
    aiResponse: "AI Válasz",

    // Agent Integration
    agents: {
      title: "AI Agensek",
      joinRoom: "Szobához Csatlakozás",
      leaveRoom: "Szoba Elhagyása",
      agentTyping: "Agent gépel...",
      agentResponse: "Agent Válasz",
      agentStatus: "Agent Állapot",
    },
  },

  // Settings
  settings: {
    title: "Beállítások",
    general: "Általános",
    appearance: "Megjelenés",
    notifications: "Értesítések",
    privacy: "Adatvédelem",
    security: "Biztonság",
    language: "Nyelv",
    theme: "Téma",
    fontSize: "Betűméret",
    autoSave: "Automatikus mentés",
    notificationsEnabled: "Értesítések Engedélyezve",
    soundEnabled: "Hang Engedélyezve",
    vibrationEnabled: "Rezgés Engedélyezve",
  },

  // Profile
  profile: {
    title: "Profil",
    editProfile: "Profil Szerkesztése",
    displayName: "Megjelenített Név",
    email: "Email",
    avatar: "Avatar",
    bio: "Biográfia",
    preferences: "Beállítások",
    accountSettings: "Fiók Beállítások",
    changePassword: "Jelszó Módosítása",
    twoFactorAuth: "Kétfaktoros Hitelesítés",
    logout: "Kijelentkezés",
  },

  // Common Actions
  actions: {
    create: "Létrehozás",
    edit: "Szerkesztés",
    delete: "Törlés",
    save: "Mentés",
    cancel: "Mégse",
    confirm: "Megerősítés",
    close: "Bezárás",
    open: "Megnyitás",
    share: "Megosztás",
    copy: "Másolás",
    download: "Letöltés",
    upload: "Feltöltés",
    export: "Exportálás",
    import: "Importálás",
    refresh: "Frissítés",
    search: "Keresés",
    filter: "Szűrés",
    sort: "Rendezés",
    clear: "Törlés",
    reset: "Visszaállítás",
    apply: "Alkalmazás",
    submit: "Küldés",
    loading: "Betöltés...",
    saving: "Mentés...",
    error: "Hiba",
    success: "Siker",
    warning: "Figyelmeztetés",
    info: "Információ",
  },

  // Status Messages
  status: {
    connected: "Kapcsolódva",
    disconnected: "Kapcsolat megszakítva",
    connecting: "Kapcsolódás...",
    reconnecting: "Újrakapcsolódás...",
    online: "Online",
    offline: "Offline",
    away: "Távol",
    busy: "Elfoglalt",
    available: "Elérhető",
  },

  // Error Messages
  errors: {
    networkError: "Hálózati hiba. Kérjük, ellenőrizze a kapcsolatot.",
    serverError: "Szerver hiba. Kérjük, próbálja újra később.",
    unauthorized: "Nem engedélyezett. Kérjük, jelentkezzen be.",
    forbidden: "Tiltott. Nincs engedélye.",
    notFound: "Nem található.",
    validationError: "Validációs hiba. Kérjük, ellenőrizze a bemenetet.",
    encryptionError: "Titkosítási hiba. Kérjük, próbálja újra.",
    collaborationError: "Együttműködési hiba. Kérjük, frissítse az oldalt.",
    saveError: "Mentés sikertelen. Kérjük, próbálja újra.",
    loadError: "Betöltés sikertelen. Kérjük, frissítse az oldalt.",
    deleteError: "Törlés sikertelen. Kérjük, próbálja újra.",
  },

  // Success Messages
  success: {
    saved: "Sikeresen mentve",
    created: "Sikeresen létrehozva",
    updated: "Sikeresen frissítve",
    deleted: "Sikeresen törölve",
    shared: "Sikeresen megosztva",
    copied: "Vágólapra másolva",
    exported: "Sikeresen exportálva",
    imported: "Sikeresen importálva",
    keysGenerated: "Titkosítási kulcsok generálva",
    keysShared: "Titkosítási kulcsok megosztva",
    permissionGranted: "Engedély megadva",
    permissionRevoked: "Engedély visszavonva",
  },
};
