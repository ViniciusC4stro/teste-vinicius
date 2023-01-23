<template>
    <page>
        <StackLayout>
            <RadCalendar>
                :monthViewStyle='monthViewStyle'
                :weekViewStyle='weekViewStyle'
                :monthNamesViewStyle='monthNamesViewStyle'
                :yearViewStyle='yearViewStyle'
                :dayViewStyle='dayViewStyle'
            </RadCalendar>
        </StackLayout>
    </page>
</template>

<script>
import { Frame } from "tns-core-modules/ui/frame";
// >> calendar-cellstyling-vue
import { Color } from "tns-core-modules/color";
import {
  AllDayEventsViewStyle,
  CalendarMonthViewStyle,
  CalendarWeekViewStyle,
  CalendarYearViewStyle,
  CalendarMonthNamesViewStyle,
  CalendarSelectionShape,
  CalendarCellAlignment,
  CalendarDayViewStyle,
  CellStyle,
  DayCellStyle,
  DayEventsViewStyle,
  MonthCellStyle,
  CalendarFontStyle,
  RadCalendar,
} from "nativescript-ui-calendar";

export default {
    name: 'testCalendar',
    data() {
        return {

        }
    }
}

</script>

<style scoped>

</style>