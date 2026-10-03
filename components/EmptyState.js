import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

// Reused for "no search results", "no resources for this course yet", and
// any other empty condition — title/message are passed in as props so the
// wording can always speak to the specific situation, per design guidance
// that empty states should direct the user toward an action.
export default function EmptyState({ icon = '📭', title, message }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  icon: {
    fontSize: 32,
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.ink,
    marginBottom: 4,
    textAlign: 'center',
  },
  message: {
    fontSize: 13,
    color: colors.inkSoft,
    textAlign: 'center',
    lineHeight: 19,
  },
});
