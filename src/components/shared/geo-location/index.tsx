import { MapPin } from "@phosphor-icons/react"
import { useEffect } from "react"
import toast from "react-hot-toast"

import { useNavigate } from "react-router-dom"

const GeoLocation = () => {
  const searchParams = new URLSearchParams()
  //routing process
  const navigate = useNavigate()
  useEffect(() => {
    if (navigator.permissions) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (permissionStatus.state === "prompt") {
          }
        })
    }
  }, [])

  const handlePermission = (permission: any) => {
    if (permission === "allow") {
      // Kullanıcı izin verirse
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Kullanıcının konumu:", position.coords)

          //updates search parameters
          searchParams.set("lat", position.coords.latitude.toString())
          searchParams.set("lon", position.coords.longitude.toString())
          navigate(
            {
              pathname: "/weather",
              search: searchParams.toString(),
            },
            { replace: true }
          )
        },

        () => {
          toast.error(
            "Location access blocked. You can enable it in your browser settings."
          )
        }
      )
    } else {
      // Kullanıcı izin vermezse veya reddederse
      toast.error(
        "Location access blocked. You can enable it in your browser settings."
      )
    }
  }

  return (
    <div>
      <>
        <li
          onClick={() => {
            handlePermission("allow")
          }}
          className="p-4 border-b flex items-center gap-x-2 text-product-blue-light text-heading-sm border-base-gray-600 cursor-pointer hover:opacity-55 transition-all"
        >
          <MapPin size={24} />
          <span>Current Location</span>
        </li>
      </>
    </div>
  )
}

export default GeoLocation
