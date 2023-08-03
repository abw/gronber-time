type TimeComponentProps = {
  value: number;
  units: string;
  width?: number;
}

function TimeComponent({ value, units, width=2 }  : TimeComponentProps) {
  return (
    <div className="number">
      {String(value).padStart(width, '0')}
      <div className="caption">{units}</div>
    </div>
  )
}

export default TimeComponent
