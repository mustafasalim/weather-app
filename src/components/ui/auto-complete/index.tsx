import { useState } from "react"
import classnames from "classnames"
import { SpinnerGap } from "@phosphor-icons/react"

interface AutoCompleteOptions {
  data: any
}

const AutoComplete = (props: AutoCompleteOptions) => {
  const { data } = props
  const [inputValue, setInputValue] = useState("")
  const [filteredData, setfilteredData] = useState([])
  const [showOptions, setShowOptions] = useState(false)
  const [getRequest, setGetRequest] = useState(false)

  const handleChange = (e: any) => {
    const inputValue = e.target.value
    setInputValue(inputValue)
    const filteredData = data?.filter((option: any) =>
      option?.toLowerCase()?.includes(inputValue?.toLowerCase())
    )

    setShowOptions(!!inputValue)
    if (inputValue === "") {
      setfilteredData([])
    } else {
      setfilteredData(filteredData)
    }
    setGetRequest(false)
  }
  console.log(filteredData)

  const handleSelect = (value: string) => {
    setInputValue(value)
    setGetRequest(true)
    setTimeout(() => {
      setGetRequest(false)
    }, 2000)
    setShowOptions(false)
  }

  const handleBlur = () => {
    setTimeout(() => setShowOptions(false), 100)
  }
  console.log(inputValue)

  return (
    <>
      <div
        className={classnames("relative", {
          "opacity-45": getRequest === true,
        })}
      >
        <input
          value={inputValue}
          onChange={handleChange}
          onFocus={() => setShowOptions(true)}
          onBlur={handleBlur}
          placeholder="Search location"
          className="outline-none w-[311px] h-[56px] text-md rounded-lg p-4 placeholder:text-base-gray-400 text-base-gray-100 bg-base-gray-600"
          type="text"
        />
        {getRequest && (
          <span className="absolute top-3 right-2 animate-spin">
            <SpinnerGap
              className="text-product-blue-light"
              size={32}
            />
          </span>
        )}
      </div>
      {showOptions && (
        <ul className="overflow-hidden fixed mt-2 transition-all w-[311px] bg-base-gray-500 rounded-lg text-base-gray-100">
          {filteredData.length === 0 ? (
            <>
              <li className="p-4 border-b border-base-gray-600 opacity-45 cursor-pointer break-words">
                "{inputValue}" no results found
              </li>
            </>
          ) : (
            <>
              {filteredData.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(option)}
                  className="p-4 border-b border-base-gray-600 cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </>
          )}
        </ul>
      )}
    </>
  )
}

export default AutoComplete
