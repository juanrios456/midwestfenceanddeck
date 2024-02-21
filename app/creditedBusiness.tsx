import { Image } from "@nextui-org/react";

export function CreditedBusiness(){
  return(
    <div className="py-10 px-3 shadow">
      <h2 className="text-center">Registered and Credited By:</h2>
      <div className="flex flex-row flex-wrap justify-center items-center gap-8">
        <Image
          src="/angies-list.jpg"
          alt="angies list logo"
          width={"auto"}
          height={"auto"}
          className="w-full max-w-[300px] h-auto max-h-80vh rounded-none"
        />
        <Image
          src="/bbb-logo.jpg"
          alt="better business bureau logo"
          width={"auto"}
          height={"auto"}
          className="w-full max-w-[300px] h-auto max-h-80vh rounded-none"
        />
      </div>
    </div>
  )
}