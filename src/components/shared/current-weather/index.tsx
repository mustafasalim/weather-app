const CurrentWeather = () => {
  return (
    <section className="w-[22.438rem] h-[20.5rem] bg-base-gray-800 rounded-xl flex items-center justify-center">
      <div className="flex flex-col items-center justify-between w-[20.938rem] h-[19rem] rounded-xl bg-[url('https://s3-alpha-sig.figma.com/img/d5e8/76e7/6241bbb49bca83a01a35a45f9e8d8ef9?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cs35jm0q63fzJsHFr3msgyqlwcxevWsTES5nYvL4Golmnibpsc~1zioIbFvo~N6pmcbWkh-zPIcDTLanEHLaMoI1jqFHhLluubGqKeMDere6AbpcBcgucUtHWDTbQz2AaAQLutasxDdVxYme1pJRpuCxjCS7ysdJckCK3NJt6~0UMiTRNN2XDI1Wdofm4BXUC0h9fTn3TMYZCLNKJ4XjuvUUI2zY6kU5unGNL721ZGKJ48Lcllzeaz-D3E3PfpcmC0xmkb~3MG0LR1zSpzxuUCCsmZ7GW5zJiDU8kDwm6Uf6N6Bbas33DjdJgXXhfUtcJPvDaGcj21AhwYXxd0EVxw__')] bg-cover">
        <div className="w-full flex flex-col p-6">
          <div className="text-heading-sm text-base-gray-100">Istanbul, TR</div>
          <div className="text-xs text-base-gray-100">Monday, May 15, 2023</div>
        </div>
        <div className="w-full flex items-center justify-between p-6 gap-x-10">
          <div className="flex flex-col gap-y-2">
            <div className="text-heading-xl text-base-white">28ºc</div>
            <div>
              <div className="text-heading-sm text-base-white">26ºc / 32ºc</div>
              <div className="text-sm text-base-white">Few clouds</div>
            </div>
          </div>
          <div>icon kısmı</div>
        </div>
      </div>
    </section>
  )
}

export default CurrentWeather
