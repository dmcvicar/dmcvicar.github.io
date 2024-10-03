import InfoTab from "@/components/info_tab";
import projects_content from "../../../public/content/projects.json";

export default function Page() {
  return <InfoTab {...projects_content} />;
}
