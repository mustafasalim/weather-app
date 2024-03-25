interface DayProps {
  day: string
  icon: any
  degree: string
  detail: string
}

const Day = (props: DayProps) => {
  const { day, icon, detail, degree } = props
  return (
    <div className=" lg:w-full flex flex-col items-center justify-evenly gap-1 w-[4.188rem] h-full">
      <div className="lg:text-heading-md text-heading-xs text-base-gray-200">
        {day}
      </div>
      <div className="lg:text-heading-md text-heading-xs text-base-gray-200">
        <svg
          width="57"
          height="56"
          viewBox="0 0 57 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_i_314_1060)">
            <path
              d="M51.3286 18.2874C51.3781 18.0074 51.4039 17.7194 51.4039 17.4254C51.4039 14.6752 49.1457 12.4458 46.3601 12.4458C44.2892 12.4458 42.5099 13.6779 41.7331 15.4401C41.1038 14.9037 40.2872 14.5799 39.3949 14.5799C37.4052 14.5799 35.7922 16.19 35.7922 18.1763C35.7922 18.2869 35.7972 18.3963 35.807 18.5044C34.8499 18.9672 34.191 19.9382 34.191 21.0613C34.191 22.6328 35.4814 23.9068 37.0731 23.9068H50.6834C52.2751 23.9068 53.5655 22.6328 53.5655 21.0613C53.5655 19.7088 52.6097 18.5766 51.3286 18.2874Z"
              fill="url(#paint0_linear_314_1060)"
            />
          </g>
          <g filter="url(#filter1_i_314_1060)">
            <path
              d="M46.4706 27.3178C46.4706 35.3807 39.9954 41.9169 32.0079 41.9169C24.0204 41.9169 17.5452 35.3807 17.5452 27.3178C17.5452 19.2549 24.0204 12.7187 32.0079 12.7187C39.9954 12.7187 46.4706 19.2549 46.4706 27.3178Z"
              fill="url(#paint1_linear_314_1060)"
            />
          </g>
          <g filter="url(#filter2_i_314_1060)">
            <path
              d="M28.48 35.8628C28.5527 35.4524 28.5906 35.0302 28.5906 34.5993C28.5906 30.568 25.2727 27.3 21.1799 27.3C18.1372 27.3 15.5228 29.1061 14.3815 31.6893C13.4569 30.903 12.2571 30.4283 10.946 30.4283C8.02254 30.4283 5.65261 32.7885 5.65261 35.7C5.65261 35.8621 5.65996 36.0225 5.67435 36.1809C4.26822 36.8593 3.3 38.2828 3.3 39.929C3.3 42.2326 5.19594 44.1 7.53471 44.1H27.532C29.8707 44.1 31.7667 42.2326 31.7667 39.929C31.7667 37.9464 30.3623 36.2869 28.48 35.8628Z"
              fill="url(#paint2_linear_314_1060)"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_314_1060"
              x="34.191"
              y="12.4458"
              width="19.3745"
              height="21.461"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood
                flood-opacity="0"
                result="BackgroundImageFix"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="11" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_314_1060"
              />
            </filter>
            <filter
              id="filter1_i_314_1060"
              x="17.5452"
              y="12.7187"
              width="28.9254"
              height="34.1983"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood
                flood-opacity="0"
                result="BackgroundImageFix"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5" />
              <feGaussianBlur stdDeviation="9" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.81 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_314_1060"
              />
            </filter>
            <filter
              id="filter2_i_314_1060"
              x="3.3"
              y="27.3"
              width="28.4667"
              height="26.8"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood
                flood-opacity="0"
                result="BackgroundImageFix"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="11" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_314_1060"
              />
            </filter>
            <linearGradient
              id="paint0_linear_314_1060"
              x1="35.4233"
              y1="22.8835"
              x2="54.9195"
              y2="8.25248"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop
                offset="1"
                stop-color="white"
                stop-opacity="0.58"
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_314_1060"
              x1="29.811"
              y1="35.2642"
              x2="41.8802"
              y2="14.2946"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF9900" />
              <stop
                offset="1"
                stop-color="#FFEE94"
              />
            </linearGradient>
            <linearGradient
              id="paint2_linear_314_1060"
              x1="5.1106"
              y1="42.6"
              x2="33.7076"
              y2="21.0889"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E3E3E1" />
              <stop
                offset="1"
                stop-color="#FCFCFC"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div>
        <div className="lg:text-heading-md text-heading-xs text-base-gray-100">
          {degree}
        </div>
        <div className="lg:text-heading-md text-heading-xs text-base-gray-400">
          {detail}
        </div>
      </div>
    </div>
  )
}

export default Day
