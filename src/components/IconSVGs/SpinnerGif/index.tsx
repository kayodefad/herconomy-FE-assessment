/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
const SpinnerGif = ({
  width = '100px',
  height = '100px',
  fill = '#00B2A9',
}: {
  width?: string;
  height?: string;
  fill?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: 'auto',
        background: 'none',
        display: 'block',
        shapeRendering: 'auto',
      }}
      width={width}
      height={height}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="rotate(0 50 50)">
        <rect x="47.5" y="22.5" rx="2.5" ry="2.5500000000000003" width="5" height="15" fill={fill}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.9166666666666666s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(30 50 50)">
        <rect x="47.5" y="22.5" rx="2.5" ry="2.5500000000000003" width="5" height="15" fill={fill}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.8333333333333334s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(60 50 50)">
        <rect x="47.5" y="22.5" rx="2.5" ry="2.5500000000000003" width="5" height="15" fill={fill}>
          <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
        </rect>
      </g>
      <g transform="rotate(90 50 50)">
        <rect x="47.5" y="22.5" rx="2.5" ry="2.5500000000000003" width="5" height="15" fill={fill}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.6666666666666666s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(120 50 50)">
        <rect x="47.5" y="22.5" rx="2.5" ry="2.5500000000000003" width="5" height="15" fill={fill}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5833333333333334s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(150 50 50)">
        <rect x="47.5" y="22.5" rx="2.5" ry="2.5500000000000003" width="5" height="15" fill={fill}>
          <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
        </rect>
      </g>
      <g transform="rotate(180 50 50)">
        <rect x="47.5" y="22.5" rx="2.5" ry="2.5500000000000003" width="5" height="15" fill={fill}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.4166666666666667s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(210 50 50)">
        <rect x="47.5" y="22.5" rx="2.5" ry="2.5500000000000003" width="5" height="15" fill={fill}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.3333333333333333s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(240 50 50)">
        <rect x="47.5" y="22.5" rx="2.5" ry="2.5500000000000003" width="5" height="15" fill={fill}>
          <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
        </rect>
      </g>
      <g transform="rotate(270 50 50)">
        <rect x="47.5" y="22.5" rx="2.5" ry="2.5500000000000003" width="5" height="15" fill={fill}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.16666666666666666s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(300 50 50)">
        <rect x="47.5" y="22.5" rx="2.5" ry="2.5500000000000003" width="5" height="15" fill={fill}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.08333333333333333s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(330 50 50)">
        <rect x="47.5" y="22.5" rx="2.5" ry="2.5500000000000003" width="5" height="15" fill={fill}>
          <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
        </rect>
      </g>
    </svg>
  );
};

export default SpinnerGif;
