import { Link } from "@phosphor-icons/react"
import Allergy from "../../components/shared/allergy"
import { useWeatherStore } from "../../store/current-weather-store"

const HealthAndActivitiesModal = () => {
  const weather = useWeatherStore((state: any) => state.currentWeather)
  const treePollenLevel = weather?.main.temp > 25 ? "Yüksek" : "Düşük"
  const grassPollenLevel = weather?.main.temp > 20 ? "Yüksek" : "Düşük"
  const ragweedPollenLevel = weather?.main.temp > 22 ? "Yüksek" : "Düşük"
  const allegryData = [
    {
      title: "Tree Pollen",
      level: treePollenLevel,
      img: "/images/allergy-images/tree-pollen.png",
    },
    {
      title: "Grass Pollen",
      level: grassPollenLevel,
      img: "/images/allergy-images/ragweed-pollen.png",
    },
    {
      title: "Ragweed Pollen",
      level: ragweedPollenLevel,
      img: "/images/allergy-images/grass-pollen.png",
    },
  ]
  return (
    <>
      <main className="lg:flex items-center gap-x-16">
        {allegryData.map((item: any) => (
          <>
            <Allergy
              img={item.img}
              level={item.level}
              title={item.title}
            />
          </>
        ))}
      </main>
      <div className="mt-10">
        <a
          href="https://www.mayoclinic.org/diseases-conditions/allergies/symptoms-causes/syc-20351497"
          className=" text-product-blue-light underline flex items-center gap-x-1"
        >
          <Link size={20} />
          Detailed information about allergies
        </a>
      </div>
    </>
  )
}

export default HealthAndActivitiesModal
