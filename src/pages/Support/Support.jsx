import DashboardLayout from '../../Components/DashboardLayout'
import ContactCard from "./components/Contactcard";
import SupportCard from './components/SupportCard'
import { IoMail } from "react-icons/io5";
import { BiSolidMessageRounded } from "react-icons/bi";
import InfoCard from '../Dashboard/Components/InfoCard';
import { Stack } from '@chakra-ui/react';


const Support = () => {
  return (
    <>
      <DashboardLayout>
        <Stack spacing="80px">
          <SupportCard icon={IoMail} leftComponent={<ContactCard />} title="Contact Us" text="Have a questioner just want to know more? Feel free to reach out to us." />
          <SupportCard
            icon={BiSolidMessageRounded}
            leftComponent={
              <InfoCard
                imgUrl="\Visual.png"
                text="Learn more about our real estate, mortgage, and  corporate account service"
                tagText="Contact"
                inverted={true} />
            }
            title="Live Chat"
            text="Don't have time to wait for the answer? chat with us now" />
        </Stack>

      </DashboardLayout>

    </>
  )
}

export default Support
