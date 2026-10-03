import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import Chip from '../components/Chip';
import PrimaryButton from '../components/PrimaryButton';
import { colors, typeColors } from '../theme/colors';
import { COURSES, RESOURCE_TYPES } from '../data/mockData';

const emptyForm = { title: '', uploader: '', course: '', type: '' };

export default function AddResourceScreen({ onAdd }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [confirmation, setConfirmation] = useState(false);

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setConfirmation(false);
  };

  const validate = () => {
    const nextErrors = {};
    if (form.title.trim().length < 4) {
      nextErrors.title = 'Title should be at least 4 characters.';
    }
    if (form.uploader.trim().length === 0) {
      nextErrors.uploader = 'Add your name so classmates know who to thank.';
    }
    if (!form.course) {
      nextErrors.course = 'Pick the course this belongs to.';
    }
    if (!form.type) {
      nextErrors.type = 'Pick a resource type.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) {
      setConfirmation(false);
      return;
    }
    onAdd({
      id: String(Date.now()),
      title: form.title.trim(),
      uploader: form.uploader.trim(),
      course: form.course,
      type: form.type,
      rating: 0,
      ratingCount: 0,
      dateAdded: new Date().toISOString().slice(0, 10),
    });
    setForm(emptyForm);
    setErrors({});
    setConfirmation(true);
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Share a resource</Text>
      <Text style={styles.subheading}>
        Notes, past papers, and summaries you upload here become searchable
        for everyone taking the same course.
      </Text>

      {confirmation && (
        <View style={styles.confirmation}>
          <Text style={styles.confirmationText}>
            Added — thanks for sharing. Check the Browse tab to see it.
          </Text>
        </View>
      )}

      <Text style={styles.fieldLabel}>Title</Text>
      <TextInput
        value={form.title}
        onChangeText={(v) => updateField('title', v)}
        placeholder="e.g. Midterm 2025 — solved with explanations"
        placeholderTextColor={colors.inkFaint}
        style={[styles.input, errors.title && styles.inputError]}
      />
      {errors.title ? <Text style={styles.errorText}>{errors.title}</Text> : null}

      <Text style={styles.fieldLabel}>Your name</Text>
      <TextInput
        value={form.uploader}
        onChangeText={(v) => updateField('uploader', v)}
        placeholder="e.g. Ayesha K."
        placeholderTextColor={colors.inkFaint}
        style={[styles.input, errors.uploader && styles.inputError]}
      />
      {errors.uploader ? <Text style={styles.errorText}>{errors.uploader}</Text> : null}

      <Text style={styles.fieldLabel}>Course</Text>
      <View style={styles.chipWrap}>
        {COURSES.map((c) => (
          <Chip key={c} label={c} selected={form.course === c} onPress={() => updateField('course', c)} />
        ))}
      </View>
      {errors.course ? <Text style={styles.errorText}>{errors.course}</Text> : null}

      <Text style={styles.fieldLabel}>Type</Text>
      <View style={styles.chipWrap}>
        {RESOURCE_TYPES.map((t) => (
          <Chip
            key={t}
            label={t}
            selected={form.type === t}
            onPress={() => updateField('type', t)}
            accentColor={typeColors[t]}
          />
        ))}
      </View>
      {errors.type ? <Text style={styles.errorText}>{errors.type}</Text> : null}

      <View style={styles.submitWrap}>
        <PrimaryButton label="Add resource" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.paper,
  },
  content: {
    padding: 20,
    paddingBottom: 60,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.ink,
    marginBottom: 6,
  },
  subheading: {
    fontSize: 13,
    color: colors.inkSoft,
    lineHeight: 19,
    marginBottom: 20,
  },
  confirmation: {
    backgroundColor: colors.sageSoft,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.sage,
    padding: 12,
    marginBottom: 18,
  },
  confirmationText: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: '600',
  },
  fieldLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.inkSoft,
    marginBottom: 6,
    marginTop: 14,
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 14,
    color: colors.ink,
  },
  inputError: {
    borderColor: colors.rust,
  },
  errorText: {
    fontSize: 12,
    color: colors.rust,
    marginTop: 5,
  },
  chipWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  submitWrap: {
    marginTop: 26,
  },
});
