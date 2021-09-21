import React, {useCallback, useState, useEffect} from 'react';
import {DatePicker} from '@shopify/polaris';

export default function DatePickerExample() {
  const [{month, year}, setDate] = useState({month: 1, year: 2018});
  const [selectedDates, setSelectedDates] = useState({
    start: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
    end: new Date('Mon Mar 12 2018 00:00:00 GMT-0500 (EST)'),
  });

  const handleMonthChange = useCallback(
    (month, year) => setDate({month, year}),
    [],
  );

  useEffect(()=>{
    window.localStorage.setItem("startDate",selectedDates["start"].toISOString().split('T')[0]);
    window.localStorage.setItem("endDate",selectedDates["end"].toISOString().split('T')[0]);
  },[selectedDates])

  return (
    <DatePicker
      month={month}
      year={year}
      onChange={setSelectedDates}
      onMonthChange={handleMonthChange}
      selected={selectedDates}
      multiMonth
      allowRange
    />
  );
}
