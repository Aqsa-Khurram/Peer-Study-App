import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function StatBadge({ value, label }) {
  return (
    <View style={styles.badge}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.line,
    paddingVertical: 14,
    alignItems: 'center',
    marginRight: 8,
  },
  value: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.ink,
  },
  label: {
    fontSize: 11,
    color: colors.inkSoft,
    marginTop: 2,
    textAlign: 'center',
  },
});
