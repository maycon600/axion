import {
  Bar,
  CurrentValueBar,
  Indicator,
  Marker,
  PreviousValueBar,
} from "./styles";

interface Props {
  previousValue: number;
  currentValue: number;
}

export function KeyIndicator({ previousValue, currentValue }: Props) {
  const total = previousValue + currentValue;
  const currentValuePercentage = (currentValue * 100) / total;
  const previousValuePercentage = (previousValue * 100) / total;

  function formatNumber(number: number) {
    if(number > 1000) {
      return `${(number / 1000).toFixed(1)}K`
    } else {
      return number
    }
  }

  return (
    <Indicator>
      <span>{formatNumber(previousValue)}</span>
      <Bar>
        <PreviousValueBar width={`${previousValuePercentage}%`}>
          <Marker />
        </PreviousValueBar>
        <CurrentValueBar width={`${currentValuePercentage}%`} />
      </Bar>
      <span>{formatNumber(currentValue)}</span>
    </Indicator>
  );
}
