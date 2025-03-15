export interface ActiveHouse {
  brotherName: string;
  className: string;
}

export const activeHouse: ActiveHouse[] = [
  { brotherName: 'German Ardon Elias', className: 'AB' },
  { brotherName: 'Jordan Cadelina', className: 'Χ' },
  { brotherName: 'Jeremy Co', className: 'Φ' },
  { brotherName: 'Dylan Dang', className: 'Φ' },
  { brotherName: 'Cole Gilliam', className: 'Χ' },
  { brotherName: 'Tri Huynh', className: 'AB' },
  { brotherName: 'Gavin Ide', className: 'Φ' },
  { brotherName: 'Alven Lin', className: 'AB' },
  { brotherName: 'Andre Oen', className: 'Ψ' },
  { brotherName: 'Jan Carlo Reniva', className: 'AA' },
  { brotherName: 'Adam Santos', className: 'Ψ' },
  { brotherName: 'Mateo Sciscento', className: 'Χ' },
];

export interface ExecutiveBoard {
  brotherName: string;
  role: string;
}

export const eboard: ExecutiveBoard[] = [
  { brotherName: 'Gavin Ide', role: 'President' },
  {
    brotherName: 'Dylan Dang',
    role: 'Vice President',
  },
  {
    brotherName: 'Mateo Sciscento',
    role: 'Vice President of Membership',
  },
  {
    brotherName: 'Jordan Cadelina',
    role: 'Vice President of Development',
  },
  {
    brotherName: 'Jeremy Co',
    role: 'Vice President of Marketing',
  },
  {
    brotherName: 'Andre Oen',
    role: 'Vice President of Finance',
  },
];
