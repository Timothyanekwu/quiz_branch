import localFont from "next/font/local";

const myCustomFont = localFont({
  src: [
    {
      path: '.public/fonts/GT-Haptik-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--my-custom-font',
});

export default myCustomFont;
