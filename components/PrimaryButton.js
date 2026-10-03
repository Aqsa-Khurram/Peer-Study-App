import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function PrimaryButton({ label, onPress, disabled, variant = 'solid' }) {
  const isGhost = variant === 'ghost';
  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      style={[
        styles.base,
        isGhost ? styles.ghost : styles.solid,
        disabled && styles.disabled,
      ]}
    >
      <Text style={[styles.text, isGhost ? styles.textGhost : styles.textSolid]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  solid: {
    backgroundColor: colors.ink,
  },
  ghost: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.line,
  },
  disabled: {
    backgroundColor: colors.inkFaint,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
  textSolid: {
    color: colors.white,
  },
  textGhost: {
    color: colors.ink,
  },
});
