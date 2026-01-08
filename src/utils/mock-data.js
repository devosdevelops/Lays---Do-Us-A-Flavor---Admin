// Mock data for UI development and testing
// TODO: Replace with real API calls

export const mockSubmissions = [
  {
    _id: '1',
    userId: '101',
    flavorName: 'BBQ Blast',
    bagColor: '#FF5733',
    fontChoice: 'Modern Bold',
    keyFlavors: ['Smoky', 'Tangy'],
    voteCount: 342,
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-20T14:22:00Z',
    thumbnailUrl: 'https://via.placeholder.com/300x300?text=BBQ+Blast'
  },
  {
    _id: '2',
    userId: '102',
    flavorName: 'Spicy Lime',
    bagColor: '#00FF00',
    fontChoice: 'Vibrant',
    keyFlavors: ['Spicy', 'Citrus'],
    voteCount: 289,
    createdAt: '2024-01-14T09:15:00Z',
    updatedAt: '2024-01-19T11:45:00Z',
    thumbnailUrl: 'https://via.placeholder.com/300x300?text=Spicy+Lime'
  },
  {
    _id: '3',
    userId: '103',
    flavorName: 'Truffle Whisper',
    bagColor: '#8B7355',
    fontChoice: 'Elegant',
    keyFlavors: ['Earthy', 'Umami'],
    voteCount: 156,
    createdAt: '2024-01-13T16:45:00Z',
    updatedAt: '2024-01-18T13:20:00Z',
    thumbnailUrl: 'https://via.placeholder.com/300x300?text=Truffle+Whisper'
  },
  {
    _id: '4',
    userId: '104',
    flavorName: 'Honey Sriracha',
    bagColor: '#FFB347',
    fontChoice: 'Fun & Playful',
    keyFlavors: ['Sweet', 'Spicy', 'Asian'],
    voteCount: 421,
    createdAt: '2024-01-12T11:20:00Z',
    updatedAt: '2024-01-17T10:00:00Z',
    thumbnailUrl: 'https://via.placeholder.com/300x300?text=Honey+Sriracha'
  },
  {
    _id: '5',
    userId: '105',
    flavorName: 'Mediterranean Dream',
    bagColor: '#4169E1',
    fontChoice: 'Classic',
    keyFlavors: ['Herbs', 'Garlic', 'Mediterranean'],
    voteCount: 267,
    createdAt: '2024-01-11T14:50:00Z',
    updatedAt: '2024-01-16T09:30:00Z',
    thumbnailUrl: 'https://via.placeholder.com/300x300?text=Mediterranean'
  },
  {
    _id: '6',
    userId: '106',
    flavorName: 'Korean Fire',
    bagColor: '#DC143C',
    fontChoice: 'Bold Geometric',
    keyFlavors: ['Spicy', 'Savory', 'Garlic'],
    voteCount: 513,
    createdAt: '2024-01-10T08:15:00Z',
    updatedAt: '2024-01-15T15:45:00Z',
    thumbnailUrl: 'https://via.placeholder.com/300x300?text=Korean+Fire'
  }
];

export const mockUsers = [
  {
    _id: '101',
    username: 'johndoe',
    email: 'john@example.com',
    createdAt: '2024-01-01T10:00:00Z',
    isBanned: false,
    isAdmin: false
  },
  {
    _id: '102',
    username: 'janesmith',
    email: 'jane@example.com',
    createdAt: '2024-01-02T11:30:00Z',
    isBanned: false,
    isAdmin: false
  },
  {
    _id: '103',
    username: 'bobwilson',
    email: 'bob@example.com',
    createdAt: '2024-01-03T09:45:00Z',
    isBanned: false,
    isAdmin: false
  },
  {
    _id: '104',
    username: 'alicejones',
    email: 'alice@example.com',
    createdAt: '2024-01-04T14:20:00Z',
    isBanned: true,
    isAdmin: false
  },
  {
    _id: '105',
    username: 'charliebrown',
    email: 'charlie@example.com',
    createdAt: '2024-01-05T12:00:00Z',
    isBanned: false,
    isAdmin: false
  },
  {
    _id: '106',
    username: 'admin_user',
    email: 'admin@example.com',
    createdAt: '2023-12-01T08:00:00Z',
    isBanned: false,
    isAdmin: true
  }
];
