import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Header from './components/Header';
import DashboardScreen from './screens/DashboardScreen';
import BrowseScreen from './screens/BrowseScreen';
import AddResourceScreen from './screens/AddResourceScreen';
import { colors } from './theme/colors';
import { initialResources } from './data/mockData';

export default function App() {
  // View switching is plain useState + conditional rendering, per the
  // assignment's instruction to avoid navigation/side/bottom bar libraries.
  const [view, setView] = useState('dashboard');

  // Single source of truth for resources, lifted here and passed down as
  // props so Dashboard and Browse both reflect a newly added resource.
  const [resources, setResources] = useState(initialResources);

  const handleAdd = (resource) => {
    setResources((prev) => [resource, ...prev]);
  };

  return (
    <View style={styles.app}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.paper} />
      <Header current={view} onChange={setView} />

      {view === 'dashboard' && <DashboardScreen resources={resources} />}
      {view === 'browse' && <BrowseScreen resources={resources} />}
      {view === 'add' && <AddResourceScreen onAdd={handleAdd} />}
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.paper,
  },
});
