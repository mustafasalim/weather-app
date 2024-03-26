import { useEffect, useMemo, useState } from "react"
import AutoComplete from "../../ui/auto-complete"
import { useQuery } from "react-query"
import { useDebounce } from "react-use"
import { getGeo } from "../../../services/weather-services"
import { createSearchParams, useNavigate } from "react-router-dom"

interface SuggestionAutocompleteProps {
  size?: string
}

const SuggestionAutocomplete = (props: SuggestionAutocompleteProps) => {
  const { size } = props
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState<string>("")
  const { data: geoData, refetch: geoRefetch } = useQuery(
    "direct-geocoding",
    () => getGeo(searchValue),
    {
      enabled: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  )

  const [, cancel] = useDebounce(
    () => {
      if (searchValue !== "") {
        geoRefetch()
      }
    },
    250,
    [searchValue]
  )

  const options = useMemo(
    () =>
      geoData &&
      geoData.map((v: any) => {
        return {
          label: v.name + " - " + v.country,
          value: v,
        }
      }),

    [geoData]
  )

  useEffect(() => {
    cancel()
  }, [])

  return (
    <>
      <AutoComplete
        size={size}
        options={options}
        onInputValueChange={(value) => {
          setSearchValue(value)
        }}
        onSelect={(v) => {
          navigate(
            {
              pathname: "/weather",
              search: createSearchParams({
                lat: v.value.lat,
                lon: v.value.lon,
              }).toString(),
            },
            { replace: false }
          )
          //   setlocation(v.value)
        }}
      />
    </>
  )
}

export default SuggestionAutocomplete
