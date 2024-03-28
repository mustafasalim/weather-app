import React, { useEffect, useState } from "react"
import classnames from "classnames"
import { SpinnerGap } from "@phosphor-icons/react"

interface Option {
  label: string
  value: any
}

interface AutoCompleteOptions {
  size?: string
  options?: Option[]
  onSelect?: (value: Option) => void
  onInputValueChange?: (value: string) => void
}

const AutoComplete: React.FC<AutoCompleteOptions> = (props) => {
  // props
  const { options = [], size, onSelect, onInputValueChange } = props

  //all states
  const [search, setSearch] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(
    options.slice()
  )

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearch(value)
    setFilteredOptions(
      options.filter((option) =>
        option.label.toLowerCase().includes(value.toLowerCase())
      )
    )
    onInputValueChange && onInputValueChange(value)
  }
  const handleOptionClick = (option: Option) => {
    // setSearch(option)
    setFilteredOptions([])
    setIsLoading(true)
    onSelect && onSelect(option)
    setTimeout(() => {
      setIsLoading(false)
      setSearch("")
    }, 450)
  }

  const spinner = (
    <span className="absolute top-3 right-2 animate-spin">
      <SpinnerGap
        className="text-product-blue-light"
        size={32}
      />
    </span>
  )

  useEffect(() => {
    setFilteredOptions(options)
  }, [onInputValueChange])

  return (
    <section className="relative">
      <div
        className={classnames("relative", {
          "opacity-45": isLoading,
        })}
      >
        <input
          value={search}
          onChange={handleInputChange}
          placeholder="Search location"
          className={classnames(
            "outline-none lg:w-full text-md rounded-lg p-4 w-full  placeholder:text-base-gray-400 text-base-gray-100 bg-base-gray-600",
            {
              "lg:w-full": size === "medium",
              "!w-[26.438rem] !h-[3.5rem]": size === "large",
            }
          )}
          type="text"
        />
        {isLoading && spinner}
      </div>

      {search.length > 0 && (
        <ul className="overflow-hidden absolute top-16 transition-all w-full bg-base-gray-500 rounded-lg text-base-gray-100">
          {options.length === 0 ? (
            <li className="p-4 border-b border-base-gray-600 opacity-45 cursor-pointer break-words">
              "{search}" no results found
            </li>
          ) : (
            <>
              {filteredOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="p-4 border-b border-base-gray-600 cursor-pointer hover:opacity-55 transition-all"
                >
                  {option.label}
                </li>
              ))}
            </>
          )}
        </ul>
      )}
    </section>
  )
}

export default AutoComplete
