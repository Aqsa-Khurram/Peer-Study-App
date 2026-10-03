import React, { useMemo, useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, ScrollView } from 'react-native';
import Chip from '../components/Chip';
import ResourceCard from '../components/ResourceCard';
import EmptyState from '../components/EmptyState';
import { colors, typeColors } from '../theme/colors';
import { COURSES, RESOURCE_TYPES, SORT_OPTIONS } from '../data/mockData';

export default function BrowseScreen({ resources }) {
  const [query, setQuery] = useState('');
  const [courseFilter, setCourseFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [sortKey, setSortKey] = useState('rating');

  // Filtering and sorting are recomputed from the source array on every
  // change — the list itself holds no independent state.
  const visibleResources = useMemo(() => {
    let list = resources.filter((r) => {
      const matchesQuery =
        query.trim().length === 0 ||
        r.title.toLowerCase().includes(query.trim().toLowerCase()) ||
        r.uploader.toLowerCase().includes(query.trim().toLowerCase());
      const matchesCourse = courseFilter === 'All' || r.course === courseFilter;
      const matchesType = typeFilter === 'All' || r.type === typeFilter;
      return matchesQuery && matchesCourse && matchesType;
    });

    if (sortKey === 'rating') {
      list = [...list].sort((a, b) => b.rating - a.rating);
    } else if (sortKey === 'newest') {
      list = [...list].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    } else if (sortKey === 'title') {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    }
    return list;
  }, [resources, query, courseFilter, typeFilter, sortKey]);

  const isFiltering = query.trim().length > 0 || courseFilter !== 'All' || typeFilter !== 'All';

  return (
    <View style={styles.screen}>
      <View style={styles.searchWrap}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search by title or student name"
          placeholderTextColor={colors.inkFaint}
          style={styles.searchInput}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chipRow}
        contentContainerStyle={styles.chipRowContent}
      >
        <Chip label="All courses" selected={courseFilter === 'All'} onPress={() => setCourseFilter('All')} />
        {COURSES.map((c) => (
          <Chip key={c} label={c} selected={courseFilter === c} onPress={() => setCourseFilter(c)} />
        ))}
      </ScrollView>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chipRow}
        contentContainerStyle={styles.chipRowContent}
      >
        <Chip label="All types" selected={typeFilter === 'All'} onPress={() => setTypeFilter('All')} />
        {RESOURCE_TYPES.map((t) => (
          <Chip
            key={t}
            label={t}
            selected={typeFilter === t}
            onPress={() => setTypeFilter(t)}
            accentColor={typeColors[t]}
          />
        ))}
      </ScrollView>

      <View style={styles.sortRow}>
        <Text style={styles.sortLabel}>Sort</Text>
        {SORT_OPTIONS.map((opt) => (
          <Chip
            key={opt.key}
            label={opt.label}
            selected={sortKey === opt.key}
            onPress={() => setSortKey(opt.key)}
          />
        ))}
      </View>

      <FlatList
        data={visibleResources}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ResourceCard resource={item} />}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          isFiltering ? (
            <EmptyState
              icon="🔍"
              title="No matches"
              message="Try a different search term or clear a filter."
            />
          ) : (
            <EmptyState
              icon="📭"
              title="Nothing shared yet"
              message="Be the first to add a resource from the Share tab."
            />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.paper,
  },
  searchWrap: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  searchInput: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 14,
    color: colors.ink,
  },
  chipRow: {
    marginTop: 12,
  },
  chipRowContent: {
    paddingHorizontal: 20,
  },
  sortRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 14,
    marginBottom: 4,
    flexWrap: 'wrap',
  },
  sortLabel: {
    fontSize: 12,
    color: colors.inkFaint,
    marginRight: 10,
    fontWeight: '600',
  },
  list: {
    padding: 20,
    paddingTop: 12,
    flexGrow: 1,
  },
});
