// Dummy data for SOS alerts and participants
export interface SOSAlert {
  id: string;
  type: 'Medical' | 'Fire' | 'Theft' | 'Lost' | 'Abusive';
  participantName: string;
  participantId: string;
  timestamp: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  status: 'Active' | 'Resolved' | 'In Progress';
}

export interface Participant {
  id: string;
  name: string;
  registrationNumber: string;
  email: string;
  phone: string;
  status: 'Active' | 'Inactive';
  registeredDate: string;
  lastActive: string;
}

export const sosAlerts: SOSAlert[] = [
  {
    id: 'SOS-001',
    type: 'Medical',
    participantName: 'Sarah Johnson',
    participantId: 'P-2024-001',
    timestamp: '2024-01-15T14:30:22Z',
    location: {
      latitude: 40.7128,
      longitude: -74.0060,
      address: '123 Emergency Ave, New York, NY 10001'
    },
    status: 'Active'
  },
  {
    id: 'SOS-002',
    type: 'Fire',
    participantName: 'Michael Chen',
    participantId: 'P-2024-002',
    timestamp: '2024-01-15T13:45:10Z',
    location: {
      latitude: 40.7614,
      longitude: -73.9776,
      address: '456 Fire Lane, New York, NY 10019'
    },
    status: 'In Progress'
  },
  {
    id: 'SOS-003',
    type: 'Theft',
    participantName: 'Emily Rodriguez',
    participantId: 'P-2024-003',
    timestamp: '2024-01-15T12:15:33Z',
    location: {
      latitude: 40.7505,
      longitude: -73.9934,
      address: '789 Security St, New York, NY 10018'
    },
    status: 'Resolved'
  },
  {
    id: 'SOS-004',
    type: 'Lost',
    participantName: 'David Wilson',
    participantId: 'P-2024-004',
    timestamp: '2024-01-15T11:20:15Z',
    location: {
      latitude: 40.7282,
      longitude: -74.0776,
      address: '321 Lost Way, Jersey City, NJ 07302'
    },
    status: 'In Progress'
  },
  {
    id: 'SOS-005',
    type: 'Abusive',
    participantName: 'Lisa Brown',
    participantId: 'P-2024-005',
    timestamp: '2024-01-15T10:55:44Z',
    location: {
      latitude: 40.7589,
      longitude: -73.9851,
      address: '654 Safety Blvd, New York, NY 10036'
    },
    status: 'Active'
  },
  {
    id: 'SOS-006',
    type: 'Medical',
    participantName: 'James Davis',
    participantId: 'P-2024-006',
    timestamp: '2024-01-14T16:30:22Z',
    location: {
      latitude: 40.7311,
      longitude: -73.9969,
      address: '987 Health St, Brooklyn, NY 11201'
    },
    status: 'Resolved'
  },
  {
    id: 'SOS-007',
    type: 'Fire',
    participantName: 'Maria Garcia',
    participantId: 'P-2024-007',
    timestamp: '2024-01-14T15:45:10Z',
    location: {
      latitude: 40.7831,
      longitude: -73.9712,
      address: '147 Flame Ave, New York, NY 10075'
    },
    status: 'Resolved'
  },
  {
    id: 'SOS-008',
    type: 'Theft',
    participantName: 'Robert Martinez',
    participantId: 'P-2024-008',
    timestamp: '2024-01-14T14:15:33Z',
    location: {
      latitude: 40.6892,
      longitude: -74.0445,
      address: '258 Secure Rd, New York, NY 10004'
    },
    status: 'Resolved'
  }
];

export const participants: Participant[] = [
  {
    id: 'P-2024-001',
    name: 'Sarah Johnson',
    registrationNumber: 'REG-001-2024',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    status: 'Active',
    registeredDate: '2024-01-01T10:00:00Z',
    lastActive: '2024-01-15T14:30:22Z'
  },
  {
    id: 'P-2024-002',
    name: 'Michael Chen',
    registrationNumber: 'REG-002-2024',
    email: 'michael.chen@email.com',
    phone: '+1 (555) 234-5678',
    status: 'Active',
    registeredDate: '2024-01-02T11:15:00Z',
    lastActive: '2024-01-15T13:45:10Z'
  },
  {
    id: 'P-2024-003',
    name: 'Emily Rodriguez',
    registrationNumber: 'REG-003-2024',
    email: 'emily.rodriguez@email.com',
    phone: '+1 (555) 345-6789',
    status: 'Active',
    registeredDate: '2024-01-03T09:30:00Z',
    lastActive: '2024-01-15T12:15:33Z'
  },
  {
    id: 'P-2024-004',
    name: 'David Wilson',
    registrationNumber: 'REG-004-2024',
    email: 'david.wilson@email.com',
    phone: '+1 (555) 456-7890',
    status: 'Inactive',
    registeredDate: '2024-01-04T14:45:00Z',
    lastActive: '2024-01-15T11:20:15Z'
  },
  {
    id: 'P-2024-005',
    name: 'Lisa Brown',
    registrationNumber: 'REG-005-2024',
    email: 'lisa.brown@email.com',
    phone: '+1 (555) 567-8901',
    status: 'Active',
    registeredDate: '2024-01-05T16:20:00Z',
    lastActive: '2024-01-15T10:55:44Z'
  },
  {
    id: 'P-2024-006',
    name: 'James Davis',
    registrationNumber: 'REG-006-2024',
    email: 'james.davis@email.com',
    phone: '+1 (555) 678-9012',
    status: 'Active',
    registeredDate: '2024-01-06T12:00:00Z',
    lastActive: '2024-01-14T16:30:22Z'
  },
  {
    id: 'P-2024-007',
    name: 'Maria Garcia',
    registrationNumber: 'REG-007-2024',
    email: 'maria.garcia@email.com',
    phone: '+1 (555) 789-0123',
    status: 'Active',
    registeredDate: '2024-01-07T13:30:00Z',
    lastActive: '2024-01-14T15:45:10Z'
  },
  {
    id: 'P-2024-008',
    name: 'Robert Martinez',
    registrationNumber: 'REG-008-2024',
    email: 'robert.martinez@email.com',
    phone: '+1 (555) 890-1234',
    status: 'Inactive',
    registeredDate: '2024-01-08T15:45:00Z',
    lastActive: '2024-01-14T14:15:33Z'
  },
  {
    id: 'P-2024-009',
    name: 'Jennifer Lee',
    registrationNumber: 'REG-009-2024',
    email: 'jennifer.lee@email.com',
    phone: '+1 (555) 901-2345',
    status: 'Active',
    registeredDate: '2024-01-09T10:15:00Z',
    lastActive: '2024-01-13T09:20:15Z'
  },
  {
    id: 'P-2024-010',
    name: 'Thomas Anderson',
    registrationNumber: 'REG-010-2024',
    email: 'thomas.anderson@email.com',
    phone: '+1 (555) 012-3456',
    status: 'Active',
    registeredDate: '2024-01-10T11:45:00Z',
    lastActive: '2024-01-12T14:30:22Z'
  }
];