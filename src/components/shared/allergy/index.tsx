import classNames from "classnames"

interface AllergyProps {
  title: string
  level: string
  img: string
}

const Allergy = (props: AllergyProps) => {
  const { title, level, img } = props
  return (
    <article className={classNames("w-56 flex flex-col py-4  rounded-lg  ")}>
      <div className="flex items-center w-full justify-between">
        <div className="w-20 h-20 overflow-hidden flex ">
          <img
            className="object-cover"
            src={img}
            alt=""
          />
        </div>
        <span className="text-base-white text-heading-sm whitespace-nowrap">
          {title}
        </span>
      </div>
      <div className="flex flex-col w-full items-end">
        <div className="flex flex-col items-end">
          <span
            className={classNames("text-heading-xs ", {
              "text-red-500": level === "Yüksek",
              "text-yellow-500": level === "Düşük",
            })}
          >
            {level}
          </span>
          <div
            className={classNames("w-20 h-1  rounded-lg", {
              "bg-red-500": level === "Yüksek",
              "bg-yellow-500": level === "Düşük",
            })}
          ></div>
        </div>
      </div>
    </article>
  )
}

export default Allergy
