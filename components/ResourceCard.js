import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StarRating from './StarRating';
import { colors, typeColors } from '../theme/colors';

// The core data-driven UI element: one card per resource object, with a
// left-edge stripe whose color encodes the resource type (a structural
// device, not decoration). Rendered in a list via .map() in BrowseScreen.
export default function ResourceCard({ resource }) {
  const stripeColor = typeColors[resource.type] || colors.accent;

  return (
    <View style={[styles.card, { borderLeftColor: stripeColor }]}>
      <View style={styles.headerRow}>
        <Text style={styles.course}>{resource.course}</Text>
        <Text style={[styles.type, { color: stripeColor }]}>{resource.type}</Text>
      </View>
      <Text style={styles.title}>{resource.title}</Text>
      <View style={styles.footerRow}>
        <Text style={styles.uploader}>by {resource.uploader}</Text>
        <StarRating rating={resource.rating} count={resource.ratingCount} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 8,
    borderLeftWidth: 4,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.line,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  course: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.inkSoft,
    letterSpacing: 0.3,
  },
  type: {
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.ink,
    marginBottom: 8,
    lineHeight: 20,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  uploader: {
    fontSize: 12,
    color: colors.inkFaint,
  },
});
