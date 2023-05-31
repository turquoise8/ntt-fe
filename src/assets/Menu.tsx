import { SVGProps } from "react";

const MenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_47_767"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_47_767)">
        <path
          d="M3 17V15.1667H21V17H3ZM3 12.4167V10.5833H21V12.4167H3ZM3 7.83333V6H21V7.83333H3Z"
          fill="#1C1B1F"
        />
      </g>
    </svg>
  );
};

export default MenuIcon;
