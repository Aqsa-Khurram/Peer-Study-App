import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

// A single selectable pill. Reused for course filters, type filters, sort
// options, and the pickers inside the Add Resource form — one component,
// many call sites, driven entirely by props.
export default function Chip({ label, selected, onPress, accentColor }) {
  const activeColor = accentColor || colors.accent;
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.chip,
        selected && { backgroundColor: activeColor, borderColor: activeColor },
      ]}
    >
      <Text style={[styles.label, selected && styles.labelSelected]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.white,
    marginRight: 8,
  },
  label: {
    fontSize: 13,
    color: colors.inkSoft,
    fontWeight: '500',
  },
  labelSelected: {
    color: colors.white,
    fontWeight: '600',
  },
});
