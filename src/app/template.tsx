import tab_content from "../../public/content/tabs.json";
import contact_content from "../../public/content/contact.json"
import Tabs from "@/components/tabs";
import Contact from "@/components/contact";


export default function MainTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col size-full">
            <Tabs {...tab_content}/>
            <div className="flex flex-col grow justify-center mt-4 mb-8">
                {children}
            </div>
            <Contact {...contact_content} />
        </div>
    )
}