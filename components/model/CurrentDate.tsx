import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const CurrentDate: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date().getDate());
  const getStringDay = (day: number) => {
    switch (day) {
      case 0:
        return 'SUNDAY';
      case 1:
        return 'MONDAY';
      case 2:
        return 'TUESDAY';
      case 3:
        return 'WEDNESDAY';
      case 4:
        return 'THURSDAY';
      case 5:
        return 'FRIDAY';
      case 6:
        return 'SATURDAY';
    }
  };
  const [day, setDay] = useState(getStringDay(time.getDay()));

  const getStringMonth = (month: number) => {
    switch (month) {
      case 0:
        return 'JAUNARY';
      case 1:
        return 'FEBRUARY';
      case 2:
        return 'MARCH';
      case 3:
        return 'APRIL';
      case 4:
        return 'MAY';
      case 5:
        return 'JUNE';
      case 6:
        return 'JULY';
      case 7:
        return 'AUGUST';
      case 8:
        return 'SEPTEMBER';
      case 9:
        return 'OCTOBER';
      case 10:
        return 'NOVEMBER';
      case 11:
        return 'DECEMBER';
    }
  };
  const [month, setMonth] = useState(getStringMonth(time.getMonth()));

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = new Date();
      setTime(newTime);
      setDay(getStringDay(newTime.getDay()));
      setMonth(getStringMonth(newTime.getMonth()));
      setDate(newTime.getDate());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View>
      <Text>{day}, {month} {date}</Text>
    </View>
  );
};
export default CurrentDate;