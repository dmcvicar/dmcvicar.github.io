import InfoTab from "@/components/info_tab";
import resume_content from "../../../public/content/resume.json";

export default function Page() {
  return <InfoTab {...resume_content} />;
}
