import AutoComplete from "../../../components/ui/auto-complete"

const Header = () => {
  return (
    <header className="w-full h-14 bg-base-gray-800 rounded-md flex items-center lg:justify-end md:justify-end justify-center py-8">
      <div className="w-[20rem]">
        <AutoComplete
          size="medium"
          options={["fawaf", "ffawf"]}
        />
      </div>
    </header>
  )
}

export default Header
