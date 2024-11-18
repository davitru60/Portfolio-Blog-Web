import { Project } from "../interfaces/project";
import { contenfulClient } from "./contenfulClient";

class ProjectService {
  static getProjects = async () => {
    const client = contenfulClient;
    const entries = await client.getEntries({ content_type: "project" });
    const projects = entries.items as unknown as Project[];
    return {
      props: {
        projects: projects
      },
    };
  };
}

export { ProjectService };
