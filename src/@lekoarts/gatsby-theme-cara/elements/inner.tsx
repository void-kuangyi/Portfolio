/** @jsx jsx */
import { jsx } from "theme-ui";

type InnerProps = {
  className?: string;
  children: React.ReactNode;
};

const Inner = ({ className = ``, children }: InnerProps) => (
  <div
    sx={{
      width: [`full`, `full`, `full`, `full`, `full`, `4/5`],
      textAlign: `left`,
      position: `relative`,
      marginBottom: `150px`,
      paddingTop: `140px`,
      paddingLeft: `10px`,
      paddingRight: `10px`,
      "@media only screen and (min-width: 640px)": {
        paddingLeft: `100px`,
        paddingRight: `100px`,
        paddingTop: `100px`,
      },
    }}
    className={className}
  >
    {children}
  </div>
);

export default Inner;
