/**
 * YP (Your Protocol) French translations for Reynard framework
 */

export const ypTranslations = {
  // Navigation and Pages
  navigation: {
    rooms: "Salles",
    chat: "Chat",
    documents: "Documents",
    diagrams: "Diagrammes",
    kanban: "Kanban",
    settings: "Paramètres",
    profile: "Profil",
  },

  // Rooms
  rooms: {
    title: "Salles de Collaboration",
    createRoom: "Créer une Salle",
    joinRoom: "Rejoindre la Salle",
    leaveRoom: "Quitter la Salle",
    deleteRoom: "Supprimer la Salle",
    roomName: "Nom de la Salle",
    roomDescription: "Description de la Salle",
    roomType: "Type de Salle",
    visibility: "Visibilité",
    encryption: "Chiffrement",
    members: "Membres",
    searchRooms: "Rechercher des salles...",
    filterByType: "Filtrer par type",
    noRooms: "Aucune salle trouvée",
    createFirstRoom: "Créez votre première salle pour commencer",

    // Room Types
    types: {
      chat: "Chat",
      document: "Document",
      kanban: "Kanban",
      diagram: "Diagramme",
    },

    // Visibility
    visibility: {
      public: "Public",
      private: "Privé",
      inviteOnly: "Sur Invitation",
    },

    // Room Creation Modal
    createModal: {
      title: "Créer une Nouvelle Salle",
      namePlaceholder: "Entrez le nom de la salle...",
      descriptionPlaceholder: "Entrez la description de la salle...",
      selectType: "Sélectionnez le type de salle",
      selectVisibility: "Sélectionnez la visibilité",
      enableEncryption: "Activer le chiffrement de bout en bout",
      createButton: "Créer la Salle",
      cancelButton: "Annuler",
    },
  },

  // Chat
  chat: {
    title: "Chat",
    sendMessage: "Envoyer un Message",
    typeMessage: "Tapez un message...",
    messagePlaceholder: "Tapez votre message ici",
    messageSent: "Message envoyé",
    messageReceived: "Message reçu",
    messageFailed: "Échec de l'envoi du message",
    typing: "En train de taper...",
    online: "En ligne",
    offline: "Hors ligne",
    away: "Absent",
    lastSeen: "Dernière connexion",
    noMessages: "Aucun message pour le moment",
    startConversation: "Commencez la conversation",

    // Message Actions
    editMessage: "Modifier le Message",
    deleteMessage: "Supprimer le Message",
    replyToMessage: "Répondre au Message",
    reactToMessage: "Réagir au Message",
    copyMessage: "Copier le Message",

    // Threads
    threads: {
      title: "Fils de Discussion",
      createThread: "Créer un Fil",
      replyInThread: "Répondre dans le Fil",
      threadReplies: "réponses",
    },

    // Reactions
    reactions: {
      addReaction: "Ajouter une Réaction",
      removeReaction: "Supprimer la Réaction",
      common: ["👍", "❤️", "😂", "😮", "😢", "😡"],
    },
  },

  // Documents
  documents: {
    title: "Documents Collaboratifs",
    createDocument: "Créer un Document",
    documentTitle: "Titre du Document",
    documentContent: "Contenu du Document",
    autoSave: "Sauvegarde automatique",
    lastSaved: "Dernière sauvegarde",
    wordCount: "Mots",
    characterCount: "Caractères",
    collaborators: "Collaborateurs",
    version: "Version",
    versionHistory: "Historique des Versions",
    restoreVersion: "Restaurer la Version",
    exportDocument: "Exporter le Document",
    importDocument: "Importer le Document",

    // Document Types
    types: {
      note: "Note",
      document: "Document",
      report: "Rapport",
      meeting: "Notes de Réunion",
    },

    // Collaboration
    collaboration: {
      realTimeSync: "Synchronisation en temps réel",
      cursorPosition: "Position du curseur",
      userTyping: "est en train de taper...",
      conflictResolution: "Résolution de conflit",
      mergeChanges: "Fusionner les modifications",
    },
  },

  // Diagrams
  diagrams: {
    title: "Diagrammes Mermaid",
    createDiagram: "Créer un Diagramme",
    diagramCode: "Code du Diagramme",
    livePreview: "Aperçu en Direct",
    exportSVG: "Exporter en SVG",
    exportPNG: "Exporter en PNG",
    saveDiagram: "Sauvegarder le Diagramme",
    loadDiagram: "Charger le Diagramme",
    diagramTemplates: "Modèles",
    syntaxHelp: "Aide Syntaxe",

    // Templates
    templates: {
      flowchart: "Organigramme",
      sequence: "Diagramme de Séquence",
      class: "Diagramme de Classe",
      gantt: "Diagramme de Gantt",
      state: "Diagramme d'État",
      er: "Diagramme Entité-Relation",
    },

    // Syntax Help
    syntaxHelp: {
      title: "Aide Syntaxe Mermaid",
      diagramTypes: "Types de Diagrammes Courants",
      flowchartArrows: "Flèches d'Organigramme",
      examples: "Exemples",
    },

    // Error Handling
    renderError: "Erreur de Rendu",
    invalidSyntax: "Syntaxe invalide",
    checkSyntax: "Vérifiez votre syntaxe Mermaid",
  },

  // Kanban
  kanban: {
    title: "Tableaux Kanban",
    createBoard: "Créer un Tableau",
    boardName: "Nom du Tableau",
    boardDescription: "Description du Tableau",
    addColumn: "Ajouter une Colonne",
    addCard: "Ajouter une Carte",
    moveCard: "Déplacer la Carte",
    deleteCard: "Supprimer la Carte",
    editCard: "Modifier la Carte",
    cardTitle: "Titre de la Carte",
    cardDescription: "Description de la Carte",
    assignee: "Assigné à",
    dueDate: "Date d'Échéance",
    priority: "Priorité",
    labels: "Étiquettes",
    wipLimit: "Limite WIP",

    // Default Columns
    columns: {
      todo: "À Faire",
      inProgress: "En Cours",
      review: "En Révision",
      done: "Terminé",
    },

    // Priorities
    priorities: {
      low: "Faible",
      medium: "Moyenne",
      high: "Élevée",
      urgent: "Urgente",
      critical: "Critique",
    },

    // Card Actions
    cardActions: {
      edit: "Modifier la Carte",
      delete: "Supprimer la Carte",
      duplicate: "Dupliquer la Carte",
      move: "Déplacer la Carte",
      archive: "Archiver la Carte",
    },
  },

  // Permissions
  permissions: {
    title: "Permissions",
    managePermissions: "Gérer les Permissions",
    userPermissions: "Permissions Utilisateur",
    rolePermissions: "Permissions de Rôle",
    resourcePermissions: "Permissions de Ressource",
    grantPermission: "Accorder la Permission",
    revokePermission: "Révoquer la Permission",
    permissionLevel: "Niveau de Permission",

    // Permission Levels
    levels: {
      read: "Lecture",
      write: "Écriture",
      admin: "Administrateur",
      owner: "Propriétaire",
    },

    // Resources
    resources: {
      room: "Salle",
      document: "Document",
      diagram: "Diagramme",
      kanban: "Tableau Kanban",
      message: "Message",
    },
  },

  // Encryption
  encryption: {
    title: "Chiffrement",
    enabled: "Chiffrement Activé",
    disabled: "Chiffrement Désactivé",
    generateKeys: "Générer les Clés",
    shareKeys: "Partager les Clés",
    rotateKeys: "Rotation des Clés",
    keyManagement: "Gestion des Clés",
    endToEnd: "Chiffrement de Bout en Bout",
    secureCommunication: "Communication Sécurisée",

    // Key Status
    keyStatus: {
      generated: "Clés Générées",
      shared: "Clés Partagées",
      rotated: "Clés Rotées",
      expired: "Clés Expirées",
    },
  },

  // AI and Agents
  ai: {
    title: "Assistant IA",
    askAI: "Demander à l'IA",
    generateResponse: "Générer une Réponse",
    summarizeDocument: "Résumer le Document",
    generateDiagram: "Générer un Diagramme",
    codeReview: "Révision de Code",
    translateText: "Traduire le Texte",
    aiThinking: "L'IA réfléchit...",
    aiResponse: "Réponse IA",

    // Agent Integration
    agents: {
      title: "Agents IA",
      joinRoom: "Rejoindre la Salle",
      leaveRoom: "Quitter la Salle",
      agentTyping: "L'agent tape...",
      agentResponse: "Réponse de l'Agent",
      agentStatus: "Statut de l'Agent",
    },
  },

  // Settings
  settings: {
    title: "Paramètres",
    general: "Général",
    appearance: "Apparence",
    notifications: "Notifications",
    privacy: "Confidentialité",
    security: "Sécurité",
    language: "Langue",
    theme: "Thème",
    fontSize: "Taille de Police",
    autoSave: "Sauvegarde automatique",
    notificationsEnabled: "Notifications Activées",
    soundEnabled: "Son Activé",
    vibrationEnabled: "Vibration Activée",
  },

  // Profile
  profile: {
    title: "Profil",
    editProfile: "Modifier le Profil",
    displayName: "Nom d'Affichage",
    email: "Email",
    avatar: "Avatar",
    bio: "Biographie",
    preferences: "Préférences",
    accountSettings: "Paramètres du Compte",
    changePassword: "Changer le Mot de Passe",
    twoFactorAuth: "Authentification à Deux Facteurs",
    logout: "Déconnexion",
  },

  // Common Actions
  actions: {
    create: "Créer",
    edit: "Modifier",
    delete: "Supprimer",
    save: "Sauvegarder",
    cancel: "Annuler",
    confirm: "Confirmer",
    close: "Fermer",
    open: "Ouvrir",
    share: "Partager",
    copy: "Copier",
    download: "Télécharger",
    upload: "Téléverser",
    export: "Exporter",
    import: "Importer",
    refresh: "Actualiser",
    search: "Rechercher",
    filter: "Filtrer",
    sort: "Trier",
    clear: "Effacer",
    reset: "Réinitialiser",
    apply: "Appliquer",
    submit: "Soumettre",
    loading: "Chargement...",
    saving: "Sauvegarde...",
    error: "Erreur",
    success: "Succès",
    warning: "Avertissement",
    info: "Information",
  },

  // Status Messages
  status: {
    connected: "Connecté",
    disconnected: "Déconnecté",
    connecting: "Connexion...",
    reconnecting: "Reconnexion...",
    online: "En ligne",
    offline: "Hors ligne",
    away: "Absent",
    busy: "Occupé",
    available: "Disponible",
  },

  // Error Messages
  errors: {
    networkError: "Erreur réseau. Veuillez vérifier votre connexion.",
    serverError: "Erreur serveur. Veuillez réessayer plus tard.",
    unauthorized: "Non autorisé. Veuillez vous connecter.",
    forbidden: "Interdit. Vous n'avez pas la permission.",
    notFound: "Non trouvé.",
    validationError: "Erreur de validation. Veuillez vérifier votre saisie.",
    encryptionError: "Erreur de chiffrement. Veuillez réessayer.",
    collaborationError: "Erreur de collaboration. Veuillez actualiser.",
    saveError: "Échec de la sauvegarde. Veuillez réessayer.",
    loadError: "Échec du chargement. Veuillez actualiser.",
    deleteError: "Échec de la suppression. Veuillez réessayer.",
  },

  // Success Messages
  success: {
    saved: "Sauvegardé avec succès",
    created: "Créé avec succès",
    updated: "Mis à jour avec succès",
    deleted: "Supprimé avec succès",
    shared: "Partagé avec succès",
    copied: "Copié dans le presse-papiers",
    exported: "Exporté avec succès",
    imported: "Importé avec succès",
    keysGenerated: "Clés de chiffrement générées",
    keysShared: "Clés de chiffrement partagées",
    permissionGranted: "Permission accordée",
    permissionRevoked: "Permission révoquée",
  },
};
