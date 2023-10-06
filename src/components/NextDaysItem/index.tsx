
import './styles.css';

export type NextDaysItemProps = {
  day: string;
  min: number;
  max: number;
  weather: string;
  icon: string;
}

type Props = {
  data: NextDaysItemProps;
}


export function NextDaysItem({ data }: Props) {
  return (
    <div className='next-day-item'>
      <h2>{data.day}</h2>

      <img src={data.icon} alt={data.weather} />

      <h3>{data.weather}</h3>

      <p>
        {data.min}ºc <span>{data.max}ºc</span>
      </p>
    </div>
  )
}