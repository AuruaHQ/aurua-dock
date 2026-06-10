export interface App {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  org: string;
}

export const APP_CATALOG: Record<string, App[]> = {
  'Developer Tools': [
    {
      id: 'aurua-cloud-console',
      name: 'Aurua Cloud Console',
      description: 'Manage your cloud infrastructure',
      icon: '☁️',
      color: 'linear-gradient(135deg, #4285f4 0%, #34a853 100%)',
      org: 'AuruaCloud'
    },
    {
      id: 'aurua-core',
      name: 'Aurua Core',
      description: 'Git hosting, CI/CD, and code collaboration',
      icon: '⚙️',
      color: 'linear-gradient(135deg, #24292e 0%, #1b1f23 100%)',
      org: 'AuruaCore'
    },
    {
      id: 'aurua-studio',
      name: 'Aurua Studio',
      description: 'AI-native code editor and IDE',
      icon: '💻',
      color: 'linear-gradient(135deg, #007acc 0%, #005a9e 100%)',
      org: 'AuruaStudio'
    }
  ],
  'Productivity': [
    {
      id: 'aurua-office',
      name: 'Aurua Office',
      description: 'Writer, Sheets, and Slides productivity suite',
      icon: '📄',
      color: 'linear-gradient(135deg, #ff6d00 0%, #f57c00 100%)',
      org: 'AuruaSuites'
    },
    {
      id: 'aurua-workspace',
      name: 'Aurua Workspace',
      description: 'Notion-style collaborative workspace',
      icon: '🗂️',
      color: 'linear-gradient(135deg, #000000 0%, #383838 100%)',
      org: 'AuruaSuites'
    },
    {
      id: 'aurua-drive',
      name: 'Aurua Drive',
      description: 'File and folder management with cloud sync',
      icon: '💾',
      color: 'linear-gradient(135deg, #0f9d58 0%, #0b8043 100%)',
      org: 'AuruaSuites'
    }
  ],
  'Gaming': [
    {
      id: 'aurua-engine',
      name: 'Aurua Engine Editor',
      description: 'Game engine with Vulkan rendering',
      icon: '🎮',
      color: 'linear-gradient(135deg, #e91e63 0%, #c2185b 100%)',
      org: 'AuruaGameEngine'
    },
    {
      id: 'aurua-games-launcher',
      name: 'Aurua Games',
      description: 'Game store and launcher with cloud saves',
      icon: '🎯',
      color: 'linear-gradient(135deg, #171a21 0%, #1b2838 100%)',
      org: 'AuruaGames'
    }
  ],
  'Media & Creative': [
    {
      id: 'aurua-streaming',
      name: 'Aurua Streaming Studio',
      description: 'Live streaming and broadcasting tools',
      icon: '📹',
      color: 'linear-gradient(135deg, #9146ff 0%, #772ce8 100%)',
      org: 'AuruaMedia'
    }
  ],
  'Internet': [
    {
      id: 'aurua-social',
      name: 'Aurua Social',
      description: 'Social networking and community platform',
      icon: '🌐',
      color: 'linear-gradient(135deg, #1DA1F2 0%, #1a8cd8 100%)',
      org: 'AuruaSocial'
    },
    {
      id: 'aurua-browser',
      name: 'Aurua Browser',
      description: 'Fast, secure web browser',
      icon: '🌍',
      color: 'linear-gradient(135deg, #fb8c00 0%, #f57c00 100%)',
      org: 'AuruaBrowser'
    }
  ]
};
