# Aurua Dock

**Unified launcher for the entire Aurua ecosystem**

Aurua Dock is the central hub for discovering, installing, and launching all Aurua applications across all organizations. Think Adobe Creative Cloud meets Apple's App Store launcher — one app to rule them all.

## Features

- **App Discovery**: Browse all available Aurua apps across all 16 organizations
- **One-Click Install**: Download and install any Aurua app with a single click
- **Auto-Updates**: Keep all your Aurua apps up to date automatically
- **Quick Launcher**: Launch any installed app from the dock
- **Universal Authentication**: Sign in once, access everything
- **App Management**: Uninstall, update, or configure apps from one place

## Architecture

```
aurua-dock/
├── electron/          # Electron main process
│   ├── main.js        # App lifecycle, window management
│   ├── updater.js     # Auto-update logic
│   └── ipc/           # IPC handlers for app management
├── src/               # React UI (rendered in Electron)
│   ├── app/           # Main application UI
│   ├── components/    # Shared components
│   └── lib/           # App catalog, download manager
└── public/            # Static assets
```

## Available Apps by Organization

### AuruaHQ (Platform & Infrastructure)
- Aurua Platform (Communication)
- Aurua Admin
- Aurua Workforce

### AuruaCloud (~100 services)
- Aurua Cloud Console

### AuruaCore (Code Hosting)
- Aurua Core Desktop

### AuruaStudio (IDE)
- Aurua Studio (VS Code alternative)

### AuruaGameEngine
- Aurua Engine Editor

### AuruaMedia (Streaming)
- Aurua Streaming Studio

### AuruaSuites (Office/Productivity)
- Aurua Office (Writer, Sheets, Slides)
- Aurua Workspace (Notion-like)
- Aurua Drive

### AuruaSocial
- Aurua Social

### AuruaGames
- Aurua Games Launcher

### AuruaBrowser
- Aurua Browser

### And more...

## Development

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
```

## Tech Stack

- **Electron** - Desktop app framework
- **React** - UI
- **Vite** - Build tool
- **TypeScript** - Type safety
