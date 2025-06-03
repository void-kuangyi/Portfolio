/** @jsx jsx */
import { jsx } from "theme-ui";
import { Badge } from "styled-badge-component";

type ProjectCardProps = {
  link: string;
  title: string;
  status: string;
  collab?: string;
  individual: boolean;
  children: React.ReactNode;
  bg: string;
  keywords: string[];
  textColor?: string;
  className?: string;
};

const PlaygroundCard = ({
  link,
  title,
  status,
  collab,
  className,
  children,
  bg,
  keywords,
  textColor,
}: ProjectCardProps) => {
  const modifiedTitle = title.replace(/ /g, "\n");
  console.log(modifiedTitle);
  return (
    <a
      href={link}
      rel="noreferrer noopener"
      className={className}
      sx={{
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `space-between`,
        width: `100%`,
        boxShadow: `lg`,
        position: `relative`,
        textDecoration: `none`,
        borderRadius: `lg`,
        px: 4,
        py: [4, 3],
        color: textColor || `white`,
        background: bg || `none`,
        backgroundSize: `cover`,
        transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
        "&:hover": {
          color: textColor || `white !important`,
          transform: `translateY(-5px)`,
          boxShadow: `xl`,
        },
      }}
    >
      <div
        sx={{
          display: `flex`,
          flexDirection: `column`,
          flexWrap: `wrap`,
          gap: `10px`,
          alignItems: `flex-start`,
        }}
      >
        {status === "In Progress" ? (
          <Badge pill warning>
            {status}
          </Badge>
        ) : (
          <Badge pill light>
            {status}
          </Badge>
        )}
        {collab && (
          <Badge pill light>
            {collab}
          </Badge>
        )}
      </div>
      <div>
        <div
          sx={{
            letterSpacing: `wide`,
            pt: 4,
            fontSize: [4, 5],
            fontWeight: `medium`,
            lineHeight: 1,
            fontFamily: "scandia-line-web-stencil, sans-serif",
            fontStyle: "normal",
            marginTop: "200px",
            marginBottom: "20px",
          }}
        >
          {modifiedTitle}
        </div>
        {children != undefined && (
          <div
            sx={{
              textShadow: textColor != "black" && `1px 2px 7px rgba(0, 0, 0)`,
              fontWeight: 600,
              fontSize: 1,
              marginBottom: "20px",
            }}
          >
            {children}
          </div>
        )}
      </div>
    </a>
  );
};

export default PlaygroundCard;
