export default function Ring({ item,w,h,className,first }) {
    return (
      <div className={className} style={{ width:w, height:h }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 27">
          <path
            d="M17.642 25.093c5.146-2.564 4.9-3.205 7.053-7.856 1.211-2.615 1.546-6.02.433-8.918-.082-.215-1.476-3.846-5.057-5.439C16.169 1.145 12.63-.783 8.34.863c-3.65 1.402-5.675 3.589-6.923 6.989C.375 10.695-.315 14.59.855 17.637c.957 2.493 2.217 4.814 4.25 6.243 3.423 2.407 8.506 3.221 12.537 1.213z"
            fill={first === 1 ? item.fontColor: item.color}
            fillRule="evenodd"
          />
        </svg>
      </div>
    );
  }
  