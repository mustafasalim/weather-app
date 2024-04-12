import { NavLink } from "react-router-dom"
import SuggestionAutocomplete from "../../../components/shared/suggestion-autocomplete"
import ErrorBoundary from "../../../error-boundry"
import { useState } from "react"
import Modal from "../../../components/ui/modal"
import { Heartbeat } from "@phosphor-icons/react"
import Button from "../../../components/ui/button"
import HealthAndActivitiesModal from "../../../modals/health-and-activities-modal"

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
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
        isOpen={isOpen}
      >
        <HealthAndActivitiesModal />
      </Modal>
      <div className="flex items-center justify-center gap-x-4">
        <Button
          animation={true}
          onClick={openModal}
          variant="primary"
        >
          <Heartbeat size={22} />
        </Button>

        <div className="lg:w-[20rem] w-auto">
          <ErrorBoundary>
            <SuggestionAutocomplete />
          </ErrorBoundary>
        </div>
      </div>
    </header>
  )
}

export default Header
