import dayjs from 'dayjs';
import { BoardData } from '@/app/write/types';

const parseData = (data: BoardData) => {
  if (!data) return {} as BoardData;

  const date = dayjs(data.meetingDate).format('YYYY-MM-DD');

  if (data.timezone === '오후' && !data.meetingTime.startsWith('12')) {
    const [hours, minutes] = data.meetingTime.split(':');
    data.meetingTime = `${String(parseInt(hours) + 12)}:${minutes}` as string;
  }

  data = {
    ...data,
    meetingDate: date,
    meetingTime: data.meetingTime,
  };

  return data;
};

export default parseData;
