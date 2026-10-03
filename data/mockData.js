// All static/seed data lives here as plain arrays and objects, per the
// assignment requirement to drive the UI from data rather than hand-built
// duplicate UI elements.

export const COURSES = ['CS201', 'SMD301', 'DB210', 'OS220', 'AI301', 'MTH120'];

export const RESOURCE_TYPES = ['Notes', 'Past Paper', 'Summary', 'Slides', 'Cheat Sheet'];

export const SORT_OPTIONS = [
  { key: 'rating', label: 'Top rated' },
  { key: 'newest', label: 'Newest' },
  { key: 'title', label: 'Title A–Z' },
];

// Seed resources. CS201 and MTH120 are deliberately light/empty so the
// dashboard's "needs resources" recommendation and the browse screen's
// empty state both have something real to show.
export const initialResources = [
  {
    id: '1',
    course: 'SMD301',
    type: 'Past Paper',
    title: 'Midterm 2025 — solved with explanations',
    uploader: 'Ayesha K.',
    rating: 4.5,
    ratingCount: 18,
    dateAdded: '2026-09-10',
  },
  {
    id: '2',
    course: 'SMD301',
    type: 'Cheat Sheet',
    title: 'React Native core components — one pager',
    uploader: 'Bilal R.',
    rating: 4.8,
    ratingCount: 25,
    dateAdded: '2026-09-12',
  },
  {
    id: '3',
    course: 'DB210',
    type: 'Notes',
    title: 'Normalization forms — worked examples',
    uploader: 'Hina S.',
    rating: 4.2,
    ratingCount: 9,
    dateAdded: '2026-08-28',
  },
  {
    id: '4',
    course: 'DB210',
    type: 'Past Paper',
    title: 'Final 2024 with marking scheme',
    uploader: 'Omar F.',
    rating: 3.9,
    ratingCount: 6,
    dateAdded: '2026-08-30',
  },
  {
    id: '5',
    course: 'OS220',
    type: 'Summary',
    title: 'Scheduling algorithms — quick comparison',
    uploader: 'Zainab T.',
    rating: 4.6,
    ratingCount: 14,
    dateAdded: '2026-09-01',
  },
  {
    id: '6',
    course: 'OS220',
    type: 'Slides',
    title: 'Deadlock detection — lecture 9 slides',
    uploader: 'Hassan M.',
    rating: 3.7,
    ratingCount: 4,
    dateAdded: '2026-09-05',
  },
  {
    id: '7',
    course: 'AI301',
    type: 'Notes',
    title: 'Search algorithms — A* walkthrough',
    uploader: 'Sara N.',
    rating: 4.9,
    ratingCount: 21,
    dateAdded: '2026-09-13',
  },
  {
    id: '8',
    course: 'AI301',
    type: 'Cheat Sheet',
    title: 'Heuristics reference card',
    uploader: 'Ali H.',
    rating: 4.1,
    ratingCount: 8,
    dateAdded: '2026-09-08',
  },
  {
    id: '9',
    course: 'SMD301',
    type: 'Summary',
    title: 'State vs props — plain-language recap',
    uploader: 'Mehak I.',
    rating: 4.4,
    ratingCount: 11,
    dateAdded: '2026-09-14',
  },
];
