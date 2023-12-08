interface Props {
  color: string;
}

export function ViewSVG({ color }: Props) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="vuesax/linear/eye">
        <g id="eye">
          <path
            id="Vector"
            d="M12.3342 9.50006C12.3342 11.0676 11.0675 12.3342 9.5 12.3342C7.9325 12.3342 6.66583 11.0676 6.66583 9.50006C6.66583 7.93256 7.9325 6.66589 9.5 6.66589C11.0675 6.66589 12.3342 7.93256 12.3342 9.50006Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_2"
            d="M9.5 16.047C12.2946 16.047 14.8992 14.4004 16.7121 11.5504C17.4246 10.4341 17.4246 8.55786 16.7121 7.44161C14.8992 4.59161 12.2946 2.94495 9.5 2.94495C6.70541 2.94495 4.10083 4.59161 2.28791 7.44161C1.57542 8.55786 1.57542 10.4341 2.28791 11.5504C4.10083 14.4004 6.70541 16.047 9.5 16.047Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}
