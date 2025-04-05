const Stripe = ({data,index}) => {
    let altText = data.url.split("_")
    altText = altText[altText.length-1].split(".")[0]
    altText = decodeURIComponent(altText)

  return (
    <div data-scroll className={`flex justify-between items-center px-8 py-5 border-t-[1.5px] border-b-[1.5px] border-[var(--grey-600)] ${index !== 0 && 'border-l-[1.5px]'}`}>
        <figure data-scroll>
            <img src={data.url} alt={altText}/>
        </figure>
        <span data-scroll className="text-lg font-semibold">{data.number}</span>
    </div>
  )
}

export default Stripe