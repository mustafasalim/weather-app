import { NavLink } from "react-router-dom"
import SuggestionAutocomplete from "../../../components/shared/suggestion-autocomplete"
import ErrorBoundary from "../../../error-boundry"
import { useState } from "react"
import Modal from "../../../components/ui/modal"
import { Heartbeat } from "@phosphor-icons/react"
import HealthAndActivitiesModal from "../../../modals/health-and-activities-modal"
import ButtonGroups from "../../../components/ui/button-groups"

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const openModal = () => setIsOpenModal(true)
  const closeModal = () => setIsOpenModal(false)

  return (
    <header className="w-full h-14 bg-base-gray-800 rounded-md flex items-center lg:justify-between md:justify-between justify-center py-8">
      <NavLink
        className="hidden lg:block md:block"
        to="/"
      >
        <img
          src="./images/logo/main-logo.svg"
          alt=""
        />
      </NavLink>

      <Modal
        title="Pollen Breakdown"
        onClose={closeModal}
        isOpen={isOpenModal}
      >
        <HealthAndActivitiesModal />
      </Modal>

      <div className="flex items-center justify-between lg:gap-x-4 md:gap-x-4">
        <ButtonGroups
          button={[
            {
              title: "Pollen Breakdown",
              attiributes: {
                variant: "primary",
                icon: <Heartbeat size={22} />,
                animate: true,
                onClick: openModal,
              },
            },
          ]}
        />
        <div className="lg:w-[20rem] w-full ">
          <ErrorBoundary>
            <SuggestionAutocomplete />
          </ErrorBoundary>
        </div>
      </div>
    </header>
  )
}

export default Header
