import tab_content from "../../public/content/tabs.json";
import contact_content from "../../public/content/contact.json";
import Tabs from "@/components/tabs";
import Contact from "@/components/contact";

export default function MainTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex size-full flex-col">
      <Tabs {...tab_content} />
      <div className="mx-4 mb-8 mt-4 flex grow flex-col justify-center">
        {children}
      </div>
      <Contact {...contact_content} />
    </div>
  );
}
