import React from "react";
import cn from "classnames";

export const TextInputLeftIcon = ({ isLabel, label }) => {
  return (
    <div className="flex items-center">
      <div className="w-3/12 mr-4">
        <label
          htmlFor="phone-number"
          className={cn(
            isLabel ? "mb-3 ml-1 font-light text-dark-grey text-xs" : "hidden"
          )}
        >
          {label}
        </label>
        <div
          className={cn(
            "relative rounded-md border border-grey-shd5 hover:border-grey-shd2 focus:outline-none  focus:ring-2 focus:ring-primary "
          )}
        >
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="w-4 h-auto fill-current focus:text-dark-grey"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.9998 8.66669H2.66647V10V13.3334C2.66647 14.0687 3.26447 14.6667 3.9998 14.6667H5.9998H9.9998H11.9998C12.7351 14.6667 13.3331 14.0687 13.3331 13.3334V10V8.66669H13.9998C14.2691 8.66669 14.5131 8.50402 14.6158 8.25536C14.7191 8.00602 14.6618 7.71936 14.4711 7.52869L8.47113 1.52869C8.21047 1.26802 7.78913 1.26802 7.52847 1.52869L1.52847 7.52869C1.3378 7.71936 1.28047 8.00602 1.3838 8.25536C1.48647 8.50402 1.73047 8.66669 1.9998 8.66669ZM6.66647 13.3334V10H9.33313V13.3334H6.66647ZM7.9998 2.94269L11.9998 6.94269V10L12.0005 13.3334H10.6665V10C10.6665 9.26469 10.0685 8.66669 9.33313 8.66669H6.66647C5.93113 8.66669 5.33313 9.26469 5.33313 10V13.3334H3.9998V10V8.00002V6.94269L7.9998 2.94269Z"
                className="fill-current text-grey-shd1 focus:text-dark-grey"
              />
            </svg>
          </div>
          <input
            type="text"
            name="phone-number"
            id="phone-number"
            className="text-dark-grey placeholder-grey-shd1 focus:ring-1 focus:ring-dark-grey focus:text-dark focus:outline-none block w-full py-3 px-10 sm:text-sm rounded-md"
            placeholder="Enter Text"
            autoComplete="off"
          />
          <div className={cn("absolute inset-y-0 right-4 flex items-center")}>
            <svg
              className="w-4 h-auto hidden"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99967 1.33337C4.32367 1.33337 1.33301 4.32404 1.33301 8.00004C1.33301 11.676 4.32367 14.6667 7.99967 14.6667C11.6757 14.6667 14.6663 11.676 14.6663 8.00004C14.6663 4.32404 11.6757 1.33337 7.99967 1.33337ZM10.8043 9.86204L9.86168 10.8047L7.99967 8.94271L6.13767 10.8047L5.19501 9.86204L7.05701 8.00004L5.19501 6.13804L6.13767 5.19537L7.99967 7.05737L9.86168 5.19537L10.8043 6.13804L8.94234 8.00004L10.8043 9.86204Z"
                fill="#8D9A9E"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-3/12 mr-4 opacity-50">
        <label
          htmlFor="phone-number"
          className="mb-3 ml-1 font-light text-dark-grey text-xs"
        >
          Label
        </label>
        <div className={cn("relative rounded-md border border-grey-shd5 ")}>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="w-4 h-auto fill-current focus:text-dark-grey"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.9998 8.66669H2.66647V10V13.3334C2.66647 14.0687 3.26447 14.6667 3.9998 14.6667H5.9998H9.9998H11.9998C12.7351 14.6667 13.3331 14.0687 13.3331 13.3334V10V8.66669H13.9998C14.2691 8.66669 14.5131 8.50402 14.6158 8.25536C14.7191 8.00602 14.6618 7.71936 14.4711 7.52869L8.47113 1.52869C8.21047 1.26802 7.78913 1.26802 7.52847 1.52869L1.52847 7.52869C1.3378 7.71936 1.28047 8.00602 1.3838 8.25536C1.48647 8.50402 1.73047 8.66669 1.9998 8.66669ZM6.66647 13.3334V10H9.33313V13.3334H6.66647ZM7.9998 2.94269L11.9998 6.94269V10L12.0005 13.3334H10.6665V10C10.6665 9.26469 10.0685 8.66669 9.33313 8.66669H6.66647C5.93113 8.66669 5.33313 9.26469 5.33313 10V13.3334H3.9998V10V8.00002V6.94269L7.9998 2.94269Z"
                className="fill-current text-grey-shd1 focus:text-dark-grey"
              />
            </svg>
          </div>
          <input
            type="text"
            name="phone-number"
            id="phone-number"
            className="text-dark-grey placeholder-grey-shd1 focus:ring-1 focus:ring-dark-grey focus:text-dark focus:outline-none block w-full py-3 px-10 sm:text-sm rounded-md"
            placeholder="Enter Text"
            autoComplete="off"
            disabled
          />
          <div className={cn("absolute inset-y-0 right-4 flex items-center")}>
            <svg
              className="w-4 h-auto hidden"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99967 1.33337C4.32367 1.33337 1.33301 4.32404 1.33301 8.00004C1.33301 11.676 4.32367 14.6667 7.99967 14.6667C11.6757 14.6667 14.6663 11.676 14.6663 8.00004C14.6663 4.32404 11.6757 1.33337 7.99967 1.33337ZM10.8043 9.86204L9.86168 10.8047L7.99967 8.94271L6.13767 10.8047L5.19501 9.86204L7.05701 8.00004L5.19501 6.13804L6.13767 5.19537L7.99967 7.05737L9.86168 5.19537L10.8043 6.13804L8.94234 8.00004L10.8043 9.86204Z"
                fill="#8D9A9E"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
