export const downloadOptions = [
    {
      name: 'osu! (stable)',
      description: 'The classic osu! experience. Stable, refined, and complete.',
      icon: 'Download',
      downloadUrl: 'https://m1.ppy.sh/r/osu!install.exe',
      version: 'Latest Stable Build',
      size: '~7 MB',
      systemRequirements: [
        {
          name: 'OS',
          minimum: 'Windows 8.1 or later',
          recommended: 'Windows 10 or later'
        },
        {
          name: 'CPU',
          minimum: '1.5 GHz dual-core',
          recommended: '2.5 GHz quad-core'
        },
        {
          name: 'RAM',
          minimum: '2 GB',
          recommended: '4 GB'
        },
        {
          name: 'Storage',
          minimum: '4 GB',
          recommended: '10 GB SSD'
        },
        {
          name: 'Graphics',
          minimum: 'DirectX 9 compatible',
          recommended: 'DirectX 11 compatible'
        }
      ]
    },
    {
      name: 'osu!lazer',
      description: 'The future of osu! Open-source, community-driven, and fully featured.',
      icon: 'Laptop',
      downloadUrl: 'https://github.com/ppy/osu/releases/latest/download/install.exe',
      version: 'Latest Build',
      size: '~90 MB',
      systemRequirements: [
        {
          name: 'OS',
          minimum: 'Windows 10 or later / macOS 10.15+ / Linux',
          recommended: 'Windows 11 / macOS 12+ / Ubuntu 22.04+'
        },
        {
          name: 'CPU',
          minimum: '2.0 GHz quad-core',
          recommended: '3.0 GHz quad-core or better'
        },
        {
          name: 'RAM',
          minimum: '4 GB',
          recommended: '8 GB'
        },
        {
          name: 'Storage',
          minimum: '8 GB',
          recommended: '15 GB SSD'
        },
        {
          name: 'Graphics',
          minimum: 'OpenGL 3.3+',
          recommended: 'Dedicated GPU with OpenGL 4.1+'
        }
      ]
    }
  ];
  
  export const installationSteps = [
    {
        id: 1,
        title: 'Download the installer',
        description: 'Click the download button for your preferred version of osu!',
        image: './how.jpg'
      },
      {
        id: 2,
        title: 'Run the installer',
        description: 'Double-click the downloaded file and follow the on-screen instructions',
        image: './run.gif'
      },
      {
        id: 3,
        title: 'Create an account',
        description: 'Set up a new osu! account or log in with an existing one',
        image: './account.jpg'
      },
      {
        id: 4,
        title: 'Start playing!',
        description: 'Download beatmaps and start your rhythm journey',
        image: './play.webp'
      }
  ];
  