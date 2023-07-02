/** @jsx jsx */
import { jsx } from "theme-ui";
import { Badge } from "styled-badge-component";

type ProjectCardProps = {
  link: string;
  title: string;
  status: string;
  individual: boolean;
  children: React.ReactNode;
  bg: string;
  keywords: string[];
  textColor?: string;
  className?: string;
};

const ProjectCard = ({
  link,
  title,
  status,
  individual,
  className,
  children,
  bg,
  keywords,
  textColor,
}: ProjectCardProps) => (
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
      py: [4, 5],
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
    <div sx={{ margin: `-20px 0px 30px 0px` }}>
      {status === "Coming soon" ? (
        <Badge pill warning>
          {status}
        </Badge>
      ) : (
        <Badge pill secondary>
          {status}
        </Badge>
      )}
    </div>
    <div>
      <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>
        {children}
      </div>
      <div
        sx={{
          letterSpacing: `wide`,
          pt: 4,
          fontSize: [4, 5],
          fontWeight: `medium`,
          lineHeight: 1,
          fontFamily: "scandia-line-web-stencil, sans-serif",
          fontStyle: "normal",
        }}
      >
        {title}
      </div>
    </div>
    <div
      sx={{
        display: `flex`,
        alignItems: `flex-end`,
      }}
    >
      <div
        sx={{
          marginTop: `30px`,
          marginBottom: `-20px`,
          display: `flex`,
          flexWrap: `wrap`,
          gap: `10px`,
        }}
      >
        {keywords.map((keyword, index) => (
          <Badge pill light key={index}>
            {keyword}
          </Badge>
        ))}
      </div>
    </div>
  </a>
);

export default ProjectCard;
