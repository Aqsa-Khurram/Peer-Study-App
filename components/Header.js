import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

const TABS = [
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'browse', label: 'Browse' },
  { key: 'add', label: 'Share' },
];

// A simple in-flow view switcher living at the top of the screen — plain
// state + conditional rendering in App.js, not a navigation library, and
// not a bottom or side bar.
export default function Header({ current, onChange }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.brand}>Peer Study Hub</Text>
      <View style={styles.tabs}>
        {TABS.map((tab) => {
          const active = tab.key === current;
          return (
            <Pressable key={tab.key} onPress={() => onChange(tab.key)} style={styles.tabItem}>
              <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>
                {tab.label}
              </Text>
              {active ? <View style={styles.underline} /> : null}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 54,
    paddingHorizontal: 20,
    paddingBottom: 4,
    backgroundColor: colors.paper,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  brand: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.ink,
    marginBottom: 14,
  },
  tabs: {
    flexDirection: 'row',
  },
  tabItem: {
    marginRight: 22,
    paddingBottom: 10,
  },
  tabLabel: {
    fontSize: 14,
    color: colors.inkFaint,
    fontWeight: '600',
  },
  tabLabelActive: {
    color: colors.ink,
  },
  underline: {
    height: 2,
    backgroundColor: colors.accent,
    marginTop: 6,
    borderRadius: 1,
  },
});
