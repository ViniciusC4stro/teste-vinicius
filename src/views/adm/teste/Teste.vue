<template>
  <Page>
    <ActionBar title="Calendário"> </ActionBar>
    <RadCalendar
      class="calendar-style"
      cellBackgroundColor="#00FF00"
      ref="calendar"
      locale="pt-br"
      :events="events"
      :minDate="minDate"
      :maxDate="maxDate"
      :viewMode="viewMode"
      @dateSelected="dateSelected"
      @viewModeChanged="viewModeChanged"
    />
  </Page>
</template>

<script>
import RadCalendar from "nativescript-ui-calendar";

export default {
  data() {
    return {
      events: [
        { title: "Event 1", startDate: new Date(2022, 0, 1) },
        { title: "Event 2", startDate: new Date(2022, 0, 15) },
      ],
      minDate: new Date(2022, 0, 1),
      maxDate: new Date(2023, 11, 31),
      viewMode: "Month",
    };
  },
  methods: {
    dateSelected(args) {
      console.log("Selected date: ", args.date);
    },
    viewModeChanged(args) {
      console.log("New view mode: ", args.newValue);
    },
  },
};
</script>

<style scoped>
.calendar-style {
  margin-top: 10;
}
</style>
