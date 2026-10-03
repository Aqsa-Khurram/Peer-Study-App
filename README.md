# Peer Study Hub

A mobile-first React Native (Expo) app that lets students share and find
course-specific study resources — notes, past papers, summaries, slides,
and cheat sheets — instead of losing them in scattered WhatsApp chats.

## The problem

Students already trade notes and past papers with each other, but only
informally, over chat threads that are impossible to search and that
reset every semester. There's no easy way to see, per course, what's
already been shared, how good it is, or where the gaps are.

## The solution

Peer Study Hub is a lightweight, three-view app:

- **Dashboard** — a snapshot of the whole collection: total resources
  shared, courses covered, average rating, a bar chart of resources per
  course, a pie chart of resource types, and a dynamic banner flagging
  courses with no resources yet.
- **Browse** — search by title or student name, filter by course and by
  type, sort by rating/newest/title, and scroll a data-driven list of
  resource cards.
- **Share** — a validated form to add a new resource (title, your name,
  course, type), with inline error messages and a confirmation banner on
  success.

Views are switched with plain React state and conditional rendering (a
top tab row, not a navigation library, side drawer, or bottom bar), per
the assignment's constraints.

## Key React / JavaScript concepts demonstrated

- **State & props**: resource list is lifted to `App.js` and passed down;
  each screen manages its own local UI state (search text, filters, form
  fields).
- **Conditional rendering**: view switching, empty states, inline
  validation errors, the dashboard coverage-gap banner.
- **Data-driven UI**: `data/mockData.js` holds all seed data as arrays of
  objects; every screen renders from it via `.map()`, `.filter()`,
  `.sort()`, and `.reduce()` — no hand-duplicated UI elements.
- **Reusable components**: `Chip`, `ResourceCard`, `StarRating`,
  `PrimaryButton`, `StatBadge`, and `EmptyState` are each used in more
  than one place.
- **Forms & validation**: the Share screen validates title length, name,
  course, and type before allowing submission.
- **Application states**: empty course, empty search results, invalid
  form input, and a freshly-added resource are all handled distinctly.

## Dashboard charts (react-native-chart-kit)

- **Bar chart** — resource count per course.
- **Pie chart** — breakdown of resource types across the collection.

## Setup & running

```bash
npm install
npx expo start
```

Then scan the QR code with the Expo Go app (iOS/Android), or press `i` /
`a` in the terminal for a simulator/emulator.

## Project structure

```
App.js                    # root — view switching + shared resources state
components/                # reusable UI pieces
  Chip.js
  EmptyState.js
  Header.js
  PrimaryButton.js
  ResourceCard.js
  StarRating.js
  StatBadge.js
screens/
  DashboardScreen.js
  BrowseScreen.js
  AddResourceScreen.js
data/
  mockData.js              # courses, types, seed resources
theme/
  colors.js                # design tokens + chart config
```
