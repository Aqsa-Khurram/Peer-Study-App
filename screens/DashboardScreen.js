import React, { useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';
import StatBadge from '../components/StatBadge';
import EmptyState from '../components/EmptyState';
import { colors, typeColors, chartConfig } from '../theme/colors';
import { COURSES, RESOURCE_TYPES } from '../data/mockData';

const screenWidth = Dimensions.get('window').width;

export default function DashboardScreen({ resources }) {
  // All derived purely from the resources array — nothing here is
  // hand-duplicated UI, it's computed with array methods each render.
  const stats = useMemo(() => {
    const total = resources.length;
    const avgRating = total
      ? resources.reduce((sum, r) => sum + r.rating, 0) / total
      : 0;
    const coursesCovered = new Set(resources.map((r) => r.course)).size;
    return { total, avgRating, coursesCovered };
  }, [resources]);

  const countsByCourse = useMemo(() => {
    return COURSES.map((course) => ({
      course,
      count: resources.filter((r) => r.course === course).length,
    }));
  }, [resources]);

  const emptyCourses = useMemo(
    () => countsByCourse.filter((c) => c.count === 0).map((c) => c.course),
    [countsByCourse]
  );

  const typeBreakdown = useMemo(() => {
    return RESOURCE_TYPES.map((type) => ({
      name: type,
      population: resources.filter((r) => r.type === type).length,
      color: typeColors[type],
      legendFontColor: colors.inkSoft,
      legendFontSize: 12,
    })).filter((slice) => slice.population > 0);
  }, [resources]);

  const barData = {
    labels: countsByCourse.map((c) => c.course),
    datasets: [{ data: countsByCourse.map((c) => c.count) }],
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.statsRow}>
        <StatBadge value={stats.total} label="Resources shared" />
        <StatBadge value={stats.coursesCovered} label="Courses covered" />
        <StatBadge value={stats.avgRating.toFixed(1)} label="Average rating" />
      </View>

      {emptyCourses.length > 0 && (
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Coverage gap</Text>
          <Text style={styles.bannerText}>
            No resources yet for {emptyCourses.join(', ')}. Be the first to share
            something for {emptyCourses.length === 1 ? 'it' : 'them'}.
          </Text>
        </View>
      )}

      <Text style={styles.sectionTitle}>Resources per course</Text>
      <View style={styles.chartCard}>
        <BarChart
          data={barData}
          width={screenWidth - 64}
          height={200}
          chartConfig={chartConfig}
          fromZero
          showValuesOnTopOfBars
          style={styles.chart}
        />
      </View>

      <Text style={styles.sectionTitle}>Resource types shared</Text>
      <View style={styles.chartCard}>
        {typeBreakdown.length > 0 ? (
          <PieChart
            data={typeBreakdown}
            width={screenWidth - 64}
            height={200}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="8"
          />
        ) : (
          <EmptyState
            icon="📊"
            title="No data yet"
            message="Add a resource to see the type breakdown."
          />
        )}
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
    paddingBottom: 40,
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  banner: {
    backgroundColor: colors.rustSoft,
    borderRadius: 10,
    padding: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.rust,
  },
  bannerTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.rust,
    marginBottom: 3,
  },
  bannerText: {
    fontSize: 13,
    color: colors.ink,
    lineHeight: 18,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.ink,
    marginBottom: 10,
  },
  chartCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.line,
    paddingVertical: 12,
    marginBottom: 22,
    alignItems: 'center',
  },
  chart: {
    borderRadius: 8,
  },
});
