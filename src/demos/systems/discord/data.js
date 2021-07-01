const textChannels = [
  {id: 'tc1', name: 'Text Channel 1', type: 'text'},
  {id: 'tc2', name: 'Text Channel 2', type: 'text', hasNotification: true},
  {id: 'tc3', name: 'Text Channel 3', type: 'text'},
  {id: 'tc4', name: 'Text Channel 4', type: 'text', hasNotification: true},
  {id: 'tc5', name: 'Text Channel 5', type: 'text', hasNotification: true},
];

const voiceChannels = [
  {id: 'vc1', name: 'Voice Channel 1', type: 'voice'},
  {id: 'vc2', name: 'Voice Channel 2', type: 'voice'},
  {id: 'vc3', name: 'Voice Channel 2', type: 'voice'},
  {id: 'vc4', name: 'Voice Channel 2', type: 'voice'},
  {id: 'vc5', name: 'Voice Channel 2', type: 'voice'},
];

const filterByRole = (role) => (user) =>
  user.status !== 'offline' && user.role === role;

export const users = [
  {
    id: 'u1',
    name: 'Jesse Pinkman',
    role: 1,
    status: 'online',
    activity: 'Cooking',
  },
  {id: 'u2', name: 'Walter White', role: 1, status: 'inactive'},
  {id: 'u3', name: 'John Doe', role: 2, status: 'offline'},
  {id: 'u4', name: 'Jane Doe', role: 2, status: 'online'},
  {
    id: 'u5',
    name: 'Elliot Alderson',
    role: 3,
    status: 'online',
    activity: 'Playing Mr. Robot',
  },
  {id: 'u6', name: 'wh1ter0se', role: 3, status: 'offline'},
  {id: 'u7', name: 'Mr. Robot', role: 3, status: 'inactive', isBot: true},
];

export const servers = [
  {id: 's1', name: 'Home', type: 'home', icon: 'logo'},
  {id: 'd1', type: 'divider'},
  {id: 's2', name: 'Server A', type: 'server'},
  {
    id: 's3',
    name: 'Server B',
    type: 'server',
    hasAvatar: true,
    hasNotification: true,
  },
  {
    id: 's4',
    name: 'Server C',
    type: 'server',
    hasAvatar: true,
    isInactive: true,
  },
  {id: 's5', name: 'Server D', type: 'server', hasNotification: true},
  {id: 's6', name: 'Server E', type: 'server'},
  {id: 'd2', type: 'divider'},
  {
    id: 'a1',
    name: 'Add a Server',
    type: 'add',
    hasAction: true,
    icon: 'plus',
  },
  {
    id: 'a2',
    name: 'Explore Public Servers',
    type: 'explore',
    hasAction: true,
    icon: 'explore',
  },
  {id: 'd3', type: 'divider'},
  {
    id: 'a3',
    name: 'Download Apps',
    type: 'download',
    hasAction: true,
    icon: 'download',
  },
];

export const channelGroups = [
  {name: 'Text channels', channels: textChannels},
  {name: 'Group 1', channels: voiceChannels},
  {name: 'Group 2', channels: voiceChannels},
  {name: 'Group 3', channels: voiceChannels},
  {name: 'Group 4', channels: voiceChannels},
];

export const memberGroups = [
  {name: 'Breaking Bad', members: users.filter(filterByRole(1))},
  {name: 'Does', members: users.filter(filterByRole(2))},
  {name: 'Mr. Robot', members: users.filter(filterByRole(3))},
  {
    name: 'Offline',
    members: users.filter((user) => user.status === 'offline'),
  },
];

export const messages = Array.from({length: 100}).map((_, i) => ({
  id: `m${i}`,
  user: users[i % 5],
  text: 'The quick brown fox jumps over the lazy dog',
  at: new Date(Date.now() - i * 1_000_000).toLocaleTimeString(),
}));
