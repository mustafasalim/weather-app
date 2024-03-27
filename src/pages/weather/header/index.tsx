import SuggestionAutocomplete from "../../../components/shared/suggestion-autocomplete"
import Logo from "../../../components/ui/logo"

const Header = () => {
  return (
    <header className="w-full h-14 bg-base-gray-800 rounded-md flex items-center lg:justify-between md:justify-between justify-center py-8">
      <div className="hidden lg:block md:block">
        <Logo />
      </div>
      <div className="w-[20rem]">
        <SuggestionAutocomplete />
      </div>
    </header>
  )
}

export default Header
