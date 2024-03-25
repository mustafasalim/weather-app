import React, { useState } from "react"
import classnames from "classnames"
import { SpinnerGap } from "@phosphor-icons/react"

interface AutoCompleteOptions {
  options: string[]
  size?: string
}

const AutoComplete: React.FC<AutoCompleteOptions> = (props) => {
  const { options, size } = props
  const [isFetching, setIsFetching] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [filteredOptions, setFilteredOptions] = useState<string[]>([])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputValue(value)
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      )
    )
  }
  const handleOptionClick = (option: string) => {
    setInputValue(option)
    setFilteredOptions([])
    setIsFetching(true)
    setTimeout(() => {
      setIsFetching(false)
    }, 2000)
  }

  const spinner = (
    <span className="absolute top-3 right-2 animate-spin">
      <SpinnerGap
        className="text-product-blue-light"
        size={32}
      />
    </span>
  )

  return (
    <section className="relative">
      <div
        className={classnames("relative", {
          "opacity-45": isFetching,
        })}
      >
        <input
          value={inputValue}
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
        {isFetching && spinner}
      </div>

      {inputValue.length > 0 && (
        <ul className="overflow-hidden absolute top-16 transition-all w-full bg-base-gray-500 rounded-lg text-base-gray-100">
          {filteredOptions.length === 0 ? (
            <li className="p-4 border-b border-base-gray-600 opacity-45 cursor-pointer break-words">
              "{inputValue}" no results found
            </li>
          ) : (
            <>
              {filteredOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="p-4 border-b border-base-gray-600 cursor-pointer"
                >
                  {option}
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
