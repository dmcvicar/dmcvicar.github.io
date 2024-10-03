import InfoTab from '@/components/info_tab'
import experience_content from '../../../public/content/experience.json'


export default function Page() {
  return (
    <InfoTab {...experience_content}/>
  )
}