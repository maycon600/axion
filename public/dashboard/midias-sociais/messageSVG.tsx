interface Props {
  color: string;
}

export function MessageSVG({ color }: Props) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="vuesax/linear/message-notif">
        <g id="message-notif">
          <path
            id="Vector"
            d="M17.4166 7.91671V10.2917C17.4166 13.4584 15.8333 15.0417 12.6666 15.0417H12.2708C12.0254 15.0417 11.7879 15.1605 11.6375 15.3584L10.45 16.9417C9.92748 17.6384 9.07248 17.6384 8.54998 16.9417L7.36248 15.3584C7.23581 15.1842 6.9429 15.0417 6.72915 15.0417H6.33331C3.16665 15.0417 1.58331 14.25 1.58331 10.2917V6.33337C1.58331 3.16671 3.16665 1.58337 6.33331 1.58337H11.0833"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_2"
            d="M15.4375 5.54171C16.5305 5.54171 17.4166 4.6556 17.4166 3.56254C17.4166 2.46948 16.5305 1.58337 15.4375 1.58337C14.3444 1.58337 13.4583 2.46948 13.4583 3.56254C13.4583 4.6556 14.3444 5.54171 15.4375 5.54171Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_3"
            d="M12.6639 8.70833H12.671"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_4"
            d="M9.4964 8.70833H9.50352"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_5"
            d="M6.32898 8.70833H6.3361"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}
