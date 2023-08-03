type TimeComponentProps = {
  value: number;
  units: string;
}

function TimeComponent({ value, units}  : TimeComponentProps) {
  return (
    <div>
      {String(value).padStart(2, '0')}
      <div className="caption">{units}</div>
    </div>
  )
}

export default TimeComponent
