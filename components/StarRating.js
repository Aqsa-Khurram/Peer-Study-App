import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

// Renders a compact "★★★★☆ 4.5 (18)" style readout from a numeric rating.
// Pure display component driven entirely by props — no internal state.
export default function StarRating({ rating, count, size = 13 }) {
  const full = Math.round(rating);
  const stars = Array.from({ length: 5 }, (_, i) => (i < full ? '★' : '☆'));

  return (
    <View style={styles.row}>
      <Text style={[styles.stars, { fontSize: size }]}>{stars.join('')}</Text>
      <Text style={[styles.value, { fontSize: size - 1 }]}>
        {rating.toFixed(1)}{count != null ? ` (${count})` : ''}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stars: {
    color: colors.accent,
    marginRight: 6,
    letterSpacing: 1,
  },
  value: {
    color: colors.inkSoft,
  },
});
