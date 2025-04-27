/** @jsx jsx */
import { jsx } from "theme-ui";
// @ts-ignore
import ProjectsMDX from "../sections/projects";

const Projects = () => (
  <div
    sx={{
      display: `flex`,
      flexDirection: `column`,
      gap: `10px`,
      "@media only screen and (min-width: 640px)": {
        display: `grid`,
        gridGap: `50px`,
        gridTemplateColumns: `repeat(4, 1fr)`,
        h2: { gridColumn: `-1/1` },
        gridAutoRows: `minmax(300px, auto)`,
      },
    }}
  >
    <ProjectsMDX />
  </div>
);

export default Projects;
