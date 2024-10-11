import InfoTab from "@/components/info_tab";
import resume_content from "../../../public/content/resume.json";

export default function Page() {
  return (
    <>
      <InfoTab {...resume_content} />
      <div className="flex mt-8 justify-center text-lg hover:underline">
        <a href="/David McVicar - Resume 09_24.pdf">Resume as PDF</a>
      </div>
    </>
  );
}
