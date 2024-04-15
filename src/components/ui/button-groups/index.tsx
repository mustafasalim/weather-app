import { DotsThreeVertical } from "@phosphor-icons/react"
import Button from "../button"
import Drawer from "../drawer"
import { useState } from "react"
import { useMedia } from "react-use"

interface ButtonGroupsProps {
  button: [] | any
}

const ButtonGroups = (props: ButtonGroupsProps) => {
  const { button } = props
  const isMobile = useMedia(`(max-width : 768px)`)
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false)
  const openDrawer = () => setIsOpenDrawer(true)
  const closeDrawer = () => setIsOpenDrawer(false)
  const prepareButtons = (
    <>
      {button.map((btn: any) => (
        <Button {...btn.attiributes}>{btn.title}</Button>
      ))}
    </>
  )

  if (isMobile) {
    return (
      <>
        <DotsThreeVertical
          onClick={openDrawer}
          className="text-base-gray-500 text-heading-xs"
          size={32}
        />

        <Drawer
          title="Menu"
          onClose={closeDrawer}
          isOpen={isOpenDrawer}
        >
          {prepareButtons}
        </Drawer>
      </>
    )
  }

  return <div className="flex gap-x-2">{prepareButtons}</div>
}

export default ButtonGroups
